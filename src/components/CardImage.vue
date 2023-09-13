
<script setup>
defineProps({
  imageId: String,
  name: String
})

const getUrl = (imageId) => {
  const url  = `/weapon_image/${imageId}`
  return new URL(url, import.meta.url).href
}


</script>
<template>
  <a :href=getUrl(imageId) target="_blank" class="card">
    <img :src=getUrl(imageId) />
    <p>{{ name }}</p>
  </a>
</template>

<style lang="scss" scoped>
.card {
  display: block;
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
