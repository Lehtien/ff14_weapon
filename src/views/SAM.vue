<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const sam_weapons = weapons.filter((w) => w.job.includes("侍"))
</script>
<template>
  <div class="sam">
    <h1>侍</h1>
    <ul>
      <li v-for="weapon in sam_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
