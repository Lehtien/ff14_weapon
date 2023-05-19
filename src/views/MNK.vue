<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const mnk_weapons = weapons.filter((w) => w.job.includes("モンク"))
</script>
<template>
  <div class="mnk">
    <h1>モンク</h1>
    <ul>
      <li v-for="weapon in mnk_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
