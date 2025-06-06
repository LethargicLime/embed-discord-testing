<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ref as storageRef, getDownloadURL, listAll } from "firebase/storage"
import { storage } from "./firebase"

const url = ref( "" );

const loadVideo = async () => {
  const vFolderRef = storageRef(storage, "");
  const result = await listAll(vFolderRef);

  if (result.items.length > 0) {
    const t = await getDownloadURL(result.items[0]);

    url.value = t;
  }
}

onMounted(() => {
  loadVideo();
})
</script>

<template>
  <div class="absolute">
    <div v-if="!url">No video present</div>
    <video v-else :src="url" controls class="w-screen h-screen" />
  </div>
</template>

<style scoped>

</style>
