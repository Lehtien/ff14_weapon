<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const gnb_weapons = weapons.filter((w) => w.job.includes("ガンブレイカー"))
</script>
<template>
  <div class="gnb">
    <h1>ガンブレイカー</h1>
    <ul>
      <li v-for="weapon in gnb_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
