
<script setup>
defineProps({
  imageId: String,
  name: String
})
</script>
<template>
  <div class="card">
    <img :src="`src/assets/weapon_image/${imageId}`" />
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
