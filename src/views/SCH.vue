<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const sch_weapons = weapons.filter((w) => w.job.includes("学者"))
</script>
<template>
  <div class="sch">
    <h1>学者</h1>
    <ul>
      <li v-for="weapon in sch_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
