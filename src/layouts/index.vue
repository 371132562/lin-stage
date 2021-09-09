<template>
    <a-layout>
        <a-layout-header class="header"></a-layout-header>
        <a-layout-content class="content">
            <router-view></router-view>
        </a-layout-content>
    </a-layout>
</template>

<script>
export default {
    name: 'LayoutIndex',
    data() {}
}
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 60px;
}
.content {
    box-sizing: border-box;
    width: calc(100vw - 60px);
    //height: calc(100vh - 60px - 60px);
    padding: 24px 60px;
    margin: 30px;
    background-color: #fff;
}
</style>
