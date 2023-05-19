<script setup>
import weapons from "@/assets/ff14_weapons.json"
import card from "@/components/CardImage.vue"

const rpr_weapons = weapons.filter((w) => w.job.includes("リーパー"))
</script>
<template>
  <div class="rpr">
    <h1>リーパー</h1>
    <ul>
      <li v-for="weapon in rpr_weapons" :key="weapon['image']">
        <card :imageId="weapon['image']" :name="weapon['weapon']"></card>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
