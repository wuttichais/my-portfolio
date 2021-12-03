<template>
    <div class="footer-container">
        <div class="row">
            <div class="col col-md-2"></div>
            <div class="col col-md-8">
                <div class="row">
                    <div class="col col-md-2 text-center image-profile">
                        <q-img
                            src="https://placeimg.com/500/300/nature"
                            class="image"
                            />
                    </div>
                    <div class="col col-md-7 social-contact">
                        <div class="row">
                            <div
                                v-for="(sItem, sIndex) in socialContact"
                                :key="`sItem-${sIndex}`"
                                class="col col-md-12 social-col">
                                <div class="row">
                                    <div class="col col-md-2 icon-layout">
                                        <q-img
                                            :src="sItem.icon"
                                            class="icon"
                                            />
                                    </div>
                                    <div class="col col-md-10 label">{{ sItem.label }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-3 address">
                        <div class="row">
                            <div class="col col-md-2">
                                <q-img
                                    :src="require('@/assets/logo.png')"
                                    class="icon"
                                    />
                            </div>
                            <div class="col col-md-10 detail">
                                <span>217 Moo 4 Takam Rd.</span> <br/>
                                <span>Mae Hia, Mueang</span> <br/>
                                <span>Chiang mai 50100</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-9"></div>
                    <div class="col col-md-3 text-center copy-right">
                        <span>Copyright © 2021 Wuttichai S.</span>
                    </div>
                </div>
            </div>
            <div class="col col-md-2"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

interface SocialContactI {
    id: number,
    icon: string,
    label: string
}

export default defineComponent({
	name: 'Footer',
	setup () {
		const socialContact = ref<SocialContactI[]>([
			{ id: 1, icon: require('@/assets/logo.png'), label: 'github.com/wuttichais'},
			{ id: 2, icon: require('@/assets/logo.png'), label: 'facebook.com/theboyzlp'},
			{ id: 3, icon: require('@/assets/logo.png'), label: 'theboyzlp'},
			{ id: 4, icon: require('@/assets/logo.png'), label: 'bs.wuttichai@gmail.com'},
			{ id: 5, icon: require('@/assets/logo.png'), label: '090 673 4094'},
		])
        
		return {
			socialContact
		}
	}
})
</script>

<style lang="scss" scoped>
.footer-container {
    margin-top: 10%;
    padding-top: 20px;
    height: 200px;
    background: #1876D1;
    color: #ffffff;
    .image-profile {
        .image {
            width: 80px;
            height: 80px;
            border-radius: 5px;
        }
    }
    .social-contact {
        .social-col:nth-child(1) {
            margin-top: unset;
        }
        .social-col {
            margin-top: 7px;
        }
        .icon-layout {
            width: 25px;
            height: 25px;
            border-radius: 3px;
            background: #ffffff;
            margin-right: 15px;
        }
        .label {
            font-size: 16px;
            font-weight: 700;
        }
    }
    .address {
        .icon {
            width: 25px;
            height: 25px;
            border-radius: 3px;
            background: #ffffff;
        }
        .detail {
            font-size: 16px;
            font-weight: 700;
        }
    }
    .copy-right {
        font-size: 12px;
        font-weight: 700;
    }
}
</style>