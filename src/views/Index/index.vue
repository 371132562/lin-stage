<template>
    <div class="index-wrap">
        <img :src="require('@/assets/images/screenshot-20210928-143111.png')" alt="" />
        <template v-for="i of 21" :key="i">
            <CoverCard>{{ i }}</CoverCard>
        </template>
    </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue'

export default {
    name: 'Index',
    components: {
        CoverCard: defineAsyncComponent(() => import('@/components/CoverCard'))
    },
    setup() {
        const testRef = ref(0)
        return { testRef }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.index-wrap {
    .index-card {
        margin-bottom: 24px;
        width: 300px;
    }
}
</style>
