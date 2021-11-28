<template>
    <MainLayout>
        <template #pageContainer>
            <AboutMes />
            <PerosonalProfile />
            <Education />
            <Skills />
            <WorkExperience />
            <MyWorks />
        </template>
    </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '@/layout/MainLayout.vue'
import AboutMes from '@/components/landingPage/AboutMes.vue'
import PerosonalProfile from '@/components/landingPage/PersonalProfile.vue'
import Education from '@/components/landingPage/Education.vue'
import Skills from '@/components/landingPage/Skills.vue'
import WorkExperience from '@/components/landingPage/WorkExperience.vue'
import MyWorks from '@/components/landingPage/MyWorks.vue'

export default defineComponent({
	name: 'LandingPage',
	components: {
		MainLayout,
		AboutMes,
		PerosonalProfile,
		Education,
		Skills,
		WorkExperience,
		MyWorks
	},
})
</script>
