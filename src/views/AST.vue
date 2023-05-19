<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const ast_weapons = weapons.filter((w) => w.job.includes("占星術師"))
</script>
<template>
  <div class="ast">
    <h1>占星術師</h1>
    <ul>
      <li v-for="weapon in ast_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
