<template>
    <MainLayout>
        <template #pageContainer>
            <div class="">
                Hello LandingPage
            </div>
        </template>
    </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '@/layout/MainLayout.vue'

export default defineComponent({
	name: 'LandingPage',
	components: {
		MainLayout,
	},
})
</script>
