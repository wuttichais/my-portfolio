<template>
    <div class="my-works-container">
        <div class="row">
            <div class="col col-md-2"></div>
            <div class="col col-md-8">
                <div class="row">
                    <div class="col col-md-12 text-center title-blog">
                        <p class="title">Work Experience</p>
                    </div>
                </div>
                <div class="row">
                    <div
                        v-for="(wItem, wIndex) in worksList"
                        :key="`wItem-${wIndex}`"
                        class="col col-md-4 work-blog">
                        <div class="row">
                            <div class="col col-md-12 slide-layout">
                                <div class="slide">
                                    <q-carousel
                                        v-model="wItem.model"
                                        class="carousel"
                                        :autoplay="wItem.autoplay"
                                        animated
                                        infinite
                                        arrows
                                        transition-prev="slide-right"
                                        transition-next="slide-left"
                                        @mouseenter="wItem.autoplay = false"
                                        @mouseleave="wItem.autoplay = true">
                                            <q-carousel-slide
                                                v-for="(imgItem, imgIndex) in wItem.image"
                                                :key="`imgItem-${imgIndex}`"
                                                :name="imgItem.name"
                                                :img-src="imgItem.url" />
                                    </q-carousel>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-12 project-name-layout">
                                <span class="project-name">{{ wItem.projectName }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-12 project-detail-layout">
                                <span class="project-detail">{{ wItem.projectDetail }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-2"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

interface ImageI {
    name: number,
    url: string
}

interface WorksListI {
    id: number,
    model: number,
    autoplay: boolean,
    image: Array<ImageI>,
    projectName: string,
    projectDetail: string
}

export default defineComponent({
	name: 'AboutMes',
	setup() {
		const slide = ref<number>(1)
		const autoplay = ref<boolean>(true)
		const worksList = ref<WorksListI[]>([
			{ 
				id: 1,
				model: 1,
				autoplay: true,
				image: [
					{ name: 1, url: require('@/assets/animal/dog1.jpeg') },
					{ name: 2, url: require('@/assets/animal/dog2.jpeg') },
					{ name: 3, url: require('@/assets/animal/dog3.jpeg') }
				],
				projectName: 'Dog Project',
				projectDetail: 'Project for Improve Myself'
			},
			{ 
				id: 2,
				model: 1,
				autoplay: true,
				image: [
					{ name: 1, url: require('@/assets/animal/cat1.jpeg') },
					{ name: 2, url: require('@/assets/animal/cat2.jpeg') },
					{ name: 3, url: require('@/assets/animal/cat3.jpeg') },
					{ name: 4, url: require('@/assets/animal/cat4.jpeg') }
				],
				projectName: 'Cat Project',
				projectDetail: 'Project for Improve Myself'
			},
			{ 
				id: 3,
				model: 1,
				autoplay: true,
				image: [
					{ name: 1, url: require('@/assets/animal/bear1.jpeg') },
					{ name: 2, url: require('@/assets/animal/bear2.jpeg') },
					{ name: 3, url: require('@/assets/animal/bear3.jpeg') },
					{ name: 4, url: require('@/assets/animal/bear4.jpeg') },
					{ name: 5, url: require('@/assets/animal/bear5.jpeg') }
				],
				projectName: 'Bear Project',
				projectDetail: 'Project for Improve Myself'
			}
		])
		return {
			slide,
			autoplay,
			worksList
		}
	}
})
</script>

<style lang="scss" scoped>
.my-works-container {
    margin-top: 10%;
    .title-blog {
        .title {
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 35px;
        }
    }
    .work-blog {
        .slide-layout {
            display: flex;
            justify-content: center;
            .slide {
                width: 250px;
                height: 200px;
                border: 1px solid #000000;
                border-radius: 5px;
                padding: 10px;
                .carousel {
                    height: 100%;
                    border-radius: 5px;
                }
            }
        }
        .project-name-layout {
            display: flex;
            justify-content: center;
            .project-name {
                margin-top: 10px;
                font-size: 16px;
                font-weight: 700;
            }
        }
        .project-detail-layout {
            display: flex;
            justify-content: center;
            .project-detail {
                font-weight: 700;
            }
        }
    }
}
</style>