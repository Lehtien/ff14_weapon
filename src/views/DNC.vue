<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const dnc_weapons = weapons.filter((w) => w.job.includes("踊り子"))
</script>
<template>
  <div class="dnc">
    <h1>踊り子</h1>
    <ul>
      <li v-for="weapon in dnc_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
