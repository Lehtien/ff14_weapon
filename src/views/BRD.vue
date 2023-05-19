<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const brd_weapons = weapons.filter((w) => w.job.includes("吟遊詩人"))
</script>
<template>
  <div class="brd">
    <h1>吟遊詩人</h1>
    <ul>
      <li v-for="weapon in brd_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
