<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'HelloWorld',
	props: {
		msg: String,
	},
})
</script>

<style lang="scss" scoped>
</style>
