<template>
  <div id="calendarapp" >
    <div style="width: 60%; float: left;">
      <v-date-picker
        ref="picker"
        v-model="date"
        :picker-date.sync="pickerDate"
        :events="arrayEvents"
        event-color="green lighten-1"
        full-width
        reactive="true"
        :locale="this.localication"
      ></v-date-picker>
    </div>
    <div style="width: 40%; float: left; height: 100%;">
      <div class="title">Month news ({{ pickerDate || 'change month...' }})</div>
      <div class="subheading">Change month to see other news</div>
      <ul class="ma-3" style="list-style: none;">
        <li v-for="note in notes" :key="note">{{ note }}</li>
      </ul>
    </div>
<span style="color: blue;" @click="CreateNewAppintmentFunction()">Create new Appointment</span>
  </div>
</template>
<script>
  export default {
    data: () => ({
      date: null,
      pickerDate: null,
      notes: [],
      arrayEvents: null,
      localication: "de-de",
      allNotes: [
        'President met with prime minister',
        'New power plant opened',
        'Rocket launch announced',
        'Global warming discussion cancelled',
        'Company changed its location'
      ]
    }),
    watch: {
      pickerDate (val) {
        this.notes = [
          this.allNotes[Math.floor(Math.random() * 5)],
          this.allNotes[Math.floor(Math.random() * 5)],
          this.allNotes[Math.floor(Math.random() * 5)]
        ].filter((value, index, self) => self.indexOf(value) === index)
      }
    },
    mounted () {
      this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      })
    },

    methods: {
      CreateNewAppintmentFunction(){
        this.$router.push("appointment/quickedit");
      },
      functionEvents (date) {
        const [,, day] = date.split('-')
        return parseInt(day, 10) % 3 === 0
      }
    }
  }
</script>
