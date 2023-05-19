<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const blu_weapons = weapons.filter((w) => w.job.includes("青魔道士"))
</script>
<template>
  <div class="blu">
    <h1>青魔道士</h1>
    <ul>
      <li v-for="weapon in blu_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
