<template>
    <div class="about-me-container q-mt-xl">
        <div class="row">
			<div class="col col-md-2"></div>
			<div class="col col-md-8">
				<div class="row">
					<div class="col col-md-6 text-center image-blog">
						<q-img
							src="https://placeimg.com/500/300/nature"
							class="image-profile"
							/>
					</div>
					<div class="col col-md-6 detail-blog">
						<div class="row">
							<div class="col col-md-12">
								<span class="name">WUTTICHAI SANGTIAN</span>
							</div>
							<div class="col col-md-12">
								<span class="job">Front-End Developer</span>
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
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
	name: 'AboutMes',
	setup() {

		return {}
	}
})
</script>

<style lang="scss" scoped>
.about-me-container {
	.image-blog {
		.image-profile {
			width: 300px;
			height: 350px;
			border-radius: 5px;
		}
	}
	.detail-blog {
		display: flex;
		align-items: center;
		.name {
			font-size: 36px;
			font-weight: 700;
		}
		.job {
			font-size: 18px;
			font-weight: 700;
			margin-left: 5px;
		}
	}
}
	
</style>