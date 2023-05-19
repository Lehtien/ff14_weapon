<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const war_weapons = weapons.filter((w) => w.job.includes("戦士"))
</script>
<template>
  <div class="war">
    <h1>戦士</h1>
    <ul>
      <li v-for="weapon in war_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
