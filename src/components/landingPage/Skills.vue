<template>
    <div class="skills-container">
        <div class="row">
            <div class="col col-md-2"></div>
            <div class="col col-md-8 text-center">
                <div class="row">
                    <div class="col col-md-12 text-center title-blog">
                        <p class="title">Skills</p>
                    </div>
                </div>
                <div class="row skill-blog">
                    <div
                        v-for="(skillItem, index) in skillsList"
                        :key="`skillsList-${index}`"
                        class="col col-md-1 skill">
                        <q-avatar color="dark" size="70px">
                            <q-img :src="skillItem.image" width="100%" height="100%" />
                        </q-avatar>
                        <p class="text">{{ skillItem.label }}</p>
                    </div>
                </div>
            </div>
            <div class="col col-md-2"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

interface SkillsListI {
    id: number,
    label: string,
    image: string,
    width: string,
    height: string
}

export default defineComponent({
	name: 'Skills',
	setup () {
		const skillsList = ref<SkillsListI[]>([
			{ id: 1, label: 'HTML', image: require('@/assets/skills/html.gif'), width: '100%', height: '100%' },
			{ id: 2, label: 'CSS', image: require('@/assets/skills/css.gif'), width: '35px', height: '35px' },
			{ id: 3, label: 'Vue.js', image: require('@/assets/skills/vue.gif'), width: '35px', height: '35px' },
			{ id: 4, label: 'Nuxt.js', image: require('@/assets/skills/nuxt.gif'), width: '35px', height: '35px' },
			{ id: 5, label: 'Javascript', image: require('@/assets/skills/js.gif'), width: '35px', height: '35px' },
			{ id: 6, label: 'Typescript', image: require('@/assets/skills/ts.gif'), width: '35px', height: '35px' },
			{ id: 7, label: 'Jest', image: require('@/assets/skills/jest.gif'), width: '35px', height: '35px' },
			{ id: 8, label: 'Git', image: require('@/assets/skills/git.gif'), width: '35px', height: '35px' },
			{ id: 9, label: 'Firebase', image: require('@/assets/skills/firebase.gif'), width: '35px', height: '35px' },
		])
        
		return {
			skillsList
		}
	}
})
</script>

<style lang="scss" scoped>
.skills-container {
    margin-top: 10%;
    .title-blog {
        .title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 35px;
        }
    }
    .skill-blog {
        justify-content: center;
        .skill {
            margin: 0px 10px;
            .text {
                margin-top: 5px;
                font-weight: 700;
            }
        }
    }
}
</style>