<template>
    <div class="footer-container">
        <div class="row">
            <div class="col col-md-2"></div>
            <div class="col col-md-8">
                <div class="row">
                    <div class="col col-md-2 text-center image-profile">
                        <div class="image-layout">
                            <q-img
                                :src="require('@/assets/profile/profile2.jpeg')"
                                class="image"
                                />
                        </div>
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
                                            :class="`icon ${sItem.name}`"
                                            />
                                    </div>
                                    <div :class="`col col-md-10 label ${sItem.name}`">{{ sItem.label }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-3 address">
                        <div class="row">
                            <div class="col col-md-2 text-center">
                                <q-icon name="place" class="place-icon" />
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
                    <div class="col col-md-3 copy-right">
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
    name: string,
    icon: string,
    label: string
}

export default defineComponent({
	name: 'Footer',
	setup () {
		const socialContact = ref<SocialContactI[]>([
			{ id: 1, name: 'github', icon: require('@/assets/footer/github.jpg'), label: 'github.com/wuttichais'},
			{ id: 2, name: 'facebook', icon: require('@/assets/footer/facebook.jpg'), label: 'facebook.com/theboyzlp'},
			{ id: 3, name: 'line', icon: require('@/assets/footer/line.jpg'), label: 'theboyzlp'},
			{ id: 4, name: 'gmail', icon: require('@/assets/footer/gmail.jpg'), label: 'bs.wuttichai@gmail.com'},
			{ id: 5, name: 'tel', icon: require('@/assets/footer/tel.jpg'), label: '090 673 4094'},
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
        display: flex;
        justify-content: center;
        .image-layout {
            width: 70px;
            height: 70px;
            border: 1px solid #2c2b2b;
            border-radius: 5px;
            padding: 5px;
            .image {
                height: 100%;
                border-radius: 5px;
            }
        }
    }
    .social-contact {
        margin-top: 5px;
        .social-col:nth-child(1) {
            margin-top: unset;
        }
        .social-col {
            margin-top: 5px;
        }
        .icon-layout {
            width: 20px;
            height: 20px;
            border-radius: 3px;
            background: #ffffff;
            margin-right: 15px;
            .icon {
                border-radius: 3px;
                width: 20px;
                height: 20px;
                margin-bottom: 5px;
            }
        }
        .label {
            font-size: 14px;
            font-weight: 500;
            &.tel {
                margin-top: 2px;
                font-size: 12px;
            }
        }
    }
    .address {
        margin-top: 5px;
        .place-icon {
            font-size: 18px;
        }
        .detail {
            font-size: 14px;
            font-weight: 500;
        }
    }
    .copy-right {
        span {
            margin-left: 20px;
            font-size: 12px;
            font-weight: 500;
        }
    }
}
</style>