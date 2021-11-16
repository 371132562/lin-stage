<template>
    <Layout></Layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Service from '@/services'
export default {
    components: {
        Layout: defineAsyncComponent(() => import('@/layouts'))
    },
    setup() {
        Service.test.putTest()
    },

    data() {
        return {}
    },
    methods: {}
}
</script>

<style>
@import './assets/styles/reset.css';
@import './assets/styles/global.scss';
</style>
