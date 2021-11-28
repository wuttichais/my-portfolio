<template>
    <div class="personal-profile-container">
        <div class="row">
            <div class="col col-md-2"></div>
            <div class="col col-md-8">
                <div class="row">
                    <div class="col col-md-6 detail-blog">
                        <div class="row">
                            <div class="col col-md-12">
                                <p class="title">Personal Profile</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-12 text">
                                <p class="paragraph-one">
                                    Want to use the knowledgegained from learning and studying from
                                    working to develop the organization to to be as efficient as possible for
                                    the organization.
                                </p>
                                <p class="paragraph-two">I am always ready and flexible to learn new things and improve myself.</p>
                                <p class="paragraph-three">I can work as a team very well.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-6 text-center image-blog">
                        <q-img
							src="https://placeimg.com/500/300/nature"
							class="image"
							/>
                    </div>
                </div>
            </div>
            <div class="col col-md-2"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
	name: 'PersonalProfile',
	setup () {
        
		return {
		}
	}
})
</script>

<style lang="scss" scoped>
.personal-profile-container {
    margin-top: 10%;
    .detail-blog {
        .title {
            font-size: 26px;
            font-weight: 700;
        }
        .text {
            font-size: 18px;
            font-weight: 500;
        }
    }
    .image-blog {
        .image {
			width: 300px;
			height: 350px;
			border-radius: 5px;
		}
    }
}
</style>