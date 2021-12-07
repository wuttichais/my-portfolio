<template>
    <div class="work-experience-container">
        <div class="row">
            <div class="col col-md-2"></div>
            <div class="col col-md-8">
                <div class="row">
                    <div class="col col-md-12 text-center title-blog">
                        <p class="title">Work Experience</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-6 experience-blog">
                        <div class="detail">
                            <span class="company">Fillgoods Technology Co., Ltd.</span> <br/>
                            <span class="job">Front-End Developer</span> <br/>
                            <span class="date">NOV 2019 - NOV 2021</span> <br/>
                            <ul>
                                <li>Work according to the requirement nad UX/UI</li>
                                <li>Designed and developed front-end for a web application using Javascript and Typescript</li>
                                <li>Analyze plan and design the system together with the team</li>
                                <li>Performed front-end unit test</li>
                                <li>Maintained the web application</li>
                                <li>Fixed issue or requirments</li>
                                <li>Learn new technologies with the team</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-md-1"></div>
                    <div class="col col-md-5 experience-blog">
                        <div class="detail">
                            <span class="company">Maneejun Co., Ltd.</span> <br/>
                            <span class="job">Developer</span> <br/>
                            <span class="date">AUG 2019 - NOV 2019</span> <br/>
                            <ul>
                                <li>Designed and developed system for turning on and off the lights</li>
                                <li>Install hardware for scanning QR Codes</li>
                                <li>Maintained the application for turning on and off the lights</li>
                                <li>Learn IOT technologies with the team</li>
                            </ul>
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
.work-experience-container {
    margin-top: 10%;
    .title-blog {
        .title {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 35px;
        }
    }
    .experience-blog {
        .detail {
            font-weight: 700;
            .company {
                font-size: 20px;
            }
            .job {
                font-size: 20px;
            }
            .date {
                font-size: 14px;
                font-weight: 400;
            }
            li {
                font-size: 16px;
            }
        }
    }
}
</style>