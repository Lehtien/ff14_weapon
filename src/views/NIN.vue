<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const nin_weapons = weapons.filter((w) => w.job.includes("忍者"))
</script>
<template>
  <div class="nin">
    <h1>忍者</h1>
    <ul>
      <li v-for="weapon in nin_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
