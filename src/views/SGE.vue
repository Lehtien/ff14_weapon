<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const sge_weapons = weapons.filter((w) => w.job.includes("賢者"))
</script>
<template>
  <div class="sge">
    <h1>賢者</h1>
    <ul>
      <li v-for="weapon in sge_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
