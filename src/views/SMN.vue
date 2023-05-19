<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const smn_weapons = weapons.filter((w) => w.job.includes("召喚士"))
</script>
<template>
  <div class="smn">
    <h1>召喚士</h1>
    <ul>
      <li v-for="weapon in smn_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
