<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const drg_weapons = weapons.filter((w) => w.job.includes("竜騎士"))
</script>
<template>
  <div class="drg">
    <h1>竜騎士</h1>
    <ul>
      <li v-for="weapon in drg_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
