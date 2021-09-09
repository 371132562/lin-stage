<template>
    <div class="card-wrap">
        <div class="card-img"></div>
        <div class="card-text">默认文字</div>
    </div>
</template>

<script>
export default {
    name: 'IndexCard'
}
</script>

<style scoped lang="scss">
.card-wrap {
    display: inline-block;
    box-sizing: border-box;
    width: 23%;
    margin: 16px 1%;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    background-color: #fff;
    transition: box-shadow 0.3s;
    overflow: hidden;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);

    &:hover {
        box-shadow: 3px 3px 14px 0 rgba(0, 0, 0, 0.2);
    }

    .card-img {
        width: 100%;
        height: 200px;
    }
    .card-text {
        height: 70px;
        color: #fff;
        //background-color: #242424;
    }
}
</style>
