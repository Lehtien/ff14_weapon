<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const whm_weapons = weapons.filter((w) => w.job.includes("白魔道士"))
</script>
<template>
  <div class="whm">
    <h1>白魔道士</h1>
    <ul>
      <li v-for="weapon in whm_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
