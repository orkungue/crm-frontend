<template>
<div id="editorapp" style="min-height: 480px;">
<quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                style="height: 400px;">
  </quill-editor>
</div>
</template>
