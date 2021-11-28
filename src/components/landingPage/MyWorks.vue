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
                    <div class="col col-md-4 work-blog">
                        <div class="slide">
                            <q-carousel
                                v-model="slide"
                                class="carousel"
                                :autoplay="autoplay"
                                animated
                                infinite
                                arrows
                                transition-prev="slide-right"
                                transition-next="slide-left"
                                @mouseenter="autoplay = false"
                                @mouseleave="autoplay = true">
                                    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                                    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                                    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                                    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                            </q-carousel>
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

export default defineComponent({
	name: 'AboutMes',
	setup() {
		const slide = ref<number>(1)
		const autoplay = ref<boolean>(true)

		return {
			slide,
			autoplay
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
}
</style>