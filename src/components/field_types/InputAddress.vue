<template>
    <div>
      <label>{{ field.name }}</label>
        <vuetify-google-autocomplete
            ref="address"
            id="map"
            classname="form-control"
            placeholder="Please type your address"
            append-icon="location_on"
            v-on:placechanged="getAddressData"
            :name="field.field_name"
            v-model="object[field.field_name]"
            country="de">
        </vuetify-google-autocomplete>

    </div>
</template>
<script>
    export default {
      name: 'InputAddress',
      props: ['field','object'],
        data: function () {
            return {
              address: this.object.address,
              placeholderText: this.object.address,
            }
        },
        mounted() {
            // To demonstrate functionality of exposed component functions
            // Here we make focus on the user input
            this.$refs.address = this.object.address;
        },
        methods: {
            /**
            * When the location found
            * @param {Object} addressData Data of the found location
            * @param {Object} placeResultData PlaceResult object
            * @param {String} id Input container ID
            */
            getAddressData: function (addressData, placeResultData, id) {
                this.address = addressData;
                this.object.address = addressData;
            }
        }
    }
</script>
