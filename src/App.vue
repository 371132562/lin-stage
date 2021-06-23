<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <Button type="dashed">Primary</Button>
        <HomeOutlined style="font-size: 30px"></HomeOutlined>
    </div>
    <router-view />
</template>

<script>
import { Button } from 'ant-design-vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import request from '$services'
export default {
    components: {
        Button,
        HomeOutlined
    },
    setup() {
        request.test.putTest()
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#app {
    padding: 30px;
}
</style>
