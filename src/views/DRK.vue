<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const drk_weapons = weapons.filter((w) => w.job.includes("暗黒騎士"))
</script>
<template>
  <div class="drk">
    <h1>暗黒騎士</h1>
    <ul>
      <li v-for="weapon in drk_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
