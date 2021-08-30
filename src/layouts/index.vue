<template>
    <a-layout>
        <a-layout-header class="header"></a-layout-header>
        <a-layout-content class="content"></a-layout-content>
    </a-layout>
</template>

<script>
export default {
    name: 'LayoutIndex',
    data() {
        return {
            value: 1
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 60px;
}
.content {
    width: 100%;
    height: calc(100vh - 60px);
}
</style>
