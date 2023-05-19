<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const mcn_weapons = weapons.filter((w) => w.job.includes("機工士"))
</script>
<template>
  <div class="mcn">
    <h1>機工士</h1>
    <ul>
      <li v-for="weapon in mcn_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
