<template>
    <Layout></Layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import request from '@/services'
export default {
    components: {
        Layout: defineAsyncComponent(() => import('@/layouts'))
    },
    setup() {
        request.test.putTest()
    },

    data() {
        return {}
    },
    methods: {}
}
</script>

<style>
@import '@/assets/styles/reset.css';
@import '@/assets/styles/global.scss';
</style>
