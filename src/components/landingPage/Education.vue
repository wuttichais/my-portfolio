<template>
    <div class="education-container">
        <div class="row">
            <div class="col col-md-2"></div>
            <div class="col col-md-8">
                <div class="row">
                    <div class="col col-md-12 text-center title-blog">
                        <p class="title">Education</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-6 education-blog">
                        <div class="detail">
                            <span>Lampang college of commerce and technology</span> <br/>
                            <span>Hight Vocational Certificate</span> <br/>
                            <span>Information Technology</span> <br/>
                            <span class="date">MAY 2014 - MAR 2016</span>
                        </div>
                    </div>
                    <div class="col col-md-6 education-blog">
                        <div class="detail">
                            <span>Lampang Rajabhat University</span> <br/>
                            <span>Bechelor's  Degree</span> <br/>
                            <span>Faculty of Science - Information Technology</span> <br/>
                            <span class="date">AUG 2016 - DEC 2018</span>
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
	name: 'Education',
	setup () {
        
		return {
		}
	}
})
</script>

<style lang="scss" scoped>
.education-container {
    margin-top: 10%;
    .title-blog {
        .title {
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 35px;
        }
    }
    .education-blog {
        .detail {
            .date {
                font-size: 14px;
            }
            span {
                font-size: 18px;
                font-weight: 700;
                margin-left: 50px;
            }
        }
    }
}
</style>