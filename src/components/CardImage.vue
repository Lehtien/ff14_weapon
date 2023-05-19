
<script setup>
defineProps({
  imageId: String,
  name: String
})

const getUrl = (imageId) => {
  const url  = `.././assets/weapon_image/${imageId}`
  return new URL(url, import.meta.url).href
}


</script>
<template>
  <div class="card">
    <img :src=getUrl(imageId) />
    <p>{{ name }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 1em;

  border: 4px double white;
}
.card img {
  width: 100%;
  max-width: 420px;
  max-height: 420px;
}
</style>
