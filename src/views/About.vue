<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default Vue.extend({
  name: 'about',
  components: {
    HelloWorld
  }
})
</script>