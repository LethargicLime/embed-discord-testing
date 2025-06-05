<script setup lang="ts">
import { ref } from "vue";

const url = ref( null );

function handleFileUpload(e) {
  const f = e.target.files[0];

  if (f && f.type.startsWith("video/")) {
    url.value = URL.createObjectURL(f);
  } else {
    alert("video nimwit");
  }
}
</script>

<template>
  <div class="absolute">
    <input type="file" accept="video/*" @change="handleFileUpload" class="mt-2 ml-2 border-1 w-48 rounded border-solid"/>

    <video v-if="url" controls :src="url" class="w-screen h-screen">
      
    </video>
  </div>
</template>

<style scoped>

</style>
