<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const rdm_weapons = weapons.filter((w) => w.job.includes("赤魔道士"))
</script>
<template>
  <div class="rdm">
    <h1>赤魔道士</h1>
    <ul>
      <li v-for="weapon in rdm_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
