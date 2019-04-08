<template>
  <div id="uploadapp">
    <vue-dropzone id="upload" :options="config" v-on:vdropzone-sending="sendingEvent" @vdropzone-removed-file="removeThisFile">
    </vue-dropzone>
  </div>
</template>

<script>
import vueDropzone from "vue2-dropzone";

export default {
  data: () => ({
    config: {
      url: "http://127.0.0.1:3001/upload/fileupload",
      maxFilesize: 16, // MB
      maxFiles: 15,
      addRemoveLinks: true,
      //path: "this.$route.path",
    }
  }),
  components: {
    vueDropzone
  },methods: {
    sendingEvent (file, xhr, formData) {
        formData.append('path', this.$route.path);
      },
      removeThisFile (file) {
        let FileId = file.xhr.response;
        let FileName = file.upload.filename;
        let self = this;
        axios.post('http://127.0.0.1:3001/upload/filedelete', {
          id: FileId
        }).then(function (response) {
        })
        .catch(function (error) {
          console.log(error);
        });

      },
    afterComplete(file) {
    }
  }
};
</script>
