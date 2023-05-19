<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const pld_weapons = weapons.filter((w) => w.job.includes("ナイト"))
</script>
<template>
  <div class="pld">
    <h1>ナイト</h1>
    <ul>
      <li v-for="weapon in pld_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
