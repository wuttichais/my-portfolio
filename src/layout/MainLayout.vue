<template>
    <div class="layout-container">
        <q-layout
            view="hHh Lpr lff"
            container
            style="height: 1000px">
            <q-header elevated class="header">
                <q-toolbar class="toolbar">
                    <q-btn
                        flat
                        @click="onClickNavDrawer"
                        round
                        dense
                        icon="menu" />
                    <q-space />
                    
                    <q-btn-toggle
                        v-model="headMenu"
                        flat
                        stretch
                        toggle-color="black"
                        :options="headMenuList"
                        class="toggle-menu"
                        @click="$emit('btnClick', headMenu)"
                    />
                </q-toolbar>
            </q-header>

            <q-drawer
                v-model="navDrawer"
                :width="250"
                :breakpoint="500"
                class="bg-grey-3">
                <q-scroll-area class="fit">
                    <q-list>
                        <template v-for="(navItem, index) in navMenuList" :key="`navItem-${index}`">
                            <q-item clickable :active="navItem.label === 'Outbox'" v-ripple>
                                <q-item-section avatar>
                                    <q-icon :name="navItem.icon" />
                                </q-item-section>
                                <q-item-section>
                                    {{ navItem.label }}
                                </q-item-section>
                            </q-item>
                            <q-separator :key="'sep' + index"  v-if="navItem.separator" />
                        </template>
                    </q-list>
                </q-scroll-area>
            </q-drawer>

            <q-page-container>
                <q-page padding>
                    <slot name="pageContainer" />
                </q-page>
            </q-page-container>
        </q-layout>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface NavMenuListI {
    icon: string,
    iconColor: string,
    label: string,
    separator: boolean
}

interface HeadMenuListI {
    id: number,
    label: string,
    value: string,
}

export default defineComponent({
	name: 'MainLayout',
    
	setup() {
		const navDrawer = ref<boolean>(false)
		const navMenuList = ref<NavMenuListI[]>([
			{ icon: 'inbox', iconColor: 'primary', label: 'Inbox', separator: true},
			{ icon: 'send', iconColor: 'primary', label: 'Outbox', separator: false},
			{ icon: 'delete', iconColor: 'primary', label: 'Trash', separator: false},
			{ icon: 'error', iconColor: 'primary', label: 'Spam', separator: true},
			{ icon: 'settings', iconColor: 'primary', label: 'Settings', separator: false},
			{ icon: 'feedback', iconColor: 'primary', label: 'Send Feedback', separator: false},
			{ icon: 'help', iconColor: 'primary', label: 'Help', separator: false}
		])

		const headMenu = ref<string>('aboutMe')
		const headMenuList = ref<HeadMenuListI[]>([
			{ id: 1, label: 'About Me', value: 'aboutMe' },
			{ id: 1, label: 'Personal Profile', value: 'personalProfile' },
			{ id: 1, label: 'Education', value: 'education' },
			{ id: 1, label: 'Skills', value: 'skills' },
			{ id: 1, label: 'Work Experience', value: 'workExperience' },
			{ id: 1, label: 'My Works', value: 'myWorks' },
			{ id: 1, label: 'Contact', value: 'contact' },
		])

		const onClickNavDrawer = () => {
			navDrawer.value = !navDrawer.value
		}
        
		return {
			// data
			navDrawer,
			navMenuList,
			headMenu,
			headMenuList,

			// function
			onClickNavDrawer
		}
	}
})
</script>

<style lang="scss" scoped>
.layout-container {
    // background-image: ;
    main.q-page.q-layout-padding {
        padding: unset !important;
    }
    .header {
        height: 70px;
        .toolbar {
            height: 100%;
            display: flex;
            :deep(.toggle-menu) {
                span {
                    font-weight: 900;
                }
            }
        }
    }
}
</style>