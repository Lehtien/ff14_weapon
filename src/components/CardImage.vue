
<script setup>
const props = defineProps({
  imageId: String,
  name: String
})

const url  = `../assets/weapon_image/${props.imageId}`
console.log(url)
const src = new URL(url, import.meta.url).href

</script>
<template>
  <div class="card">
    <img :src=src />
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
