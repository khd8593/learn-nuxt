<template>
  <div>
    <h1>This is index Page</h1>
    <div v-for="n in 10" :key="n" class="article">
      <h3>タイトル {{n}} </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis repudiandae eveniet at totam?
        Animi sapiente, ipsam sed laudantium hic saepe modi adipisci odio commodi deserunt nihil expedita amet aperiam.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const a = defineProps({
})
</script>

<style scoped lang="scss">
.article {
  margin: 8px;
}
</style>