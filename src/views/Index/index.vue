<template>
    <div class="index-wrap">
        <template v-for="i of 5" :key="i">
            <IndexCard></IndexCard>
        </template>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'Index',
    components: {
        IndexCard: defineAsyncComponent(() => import('@/components/IndexCard'))
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.index-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .index-card {
        margin-bottom: 24px;
        width: 300px;
    }
}
</style>
