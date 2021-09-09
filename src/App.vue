<template>
    <Layout></Layout>
</template>

<script>
import Layout from '@/layouts'
import request from '@/services'
export default {
    components: {
        Layout
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
