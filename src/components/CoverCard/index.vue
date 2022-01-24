<template>
  <a class="card-wrap">
    <div class="card-img"></div>
    <div class="card-text">
      <slot>默认文字默认文字默认文字默认文字默认文字默认文字默认文字默认文字默认文字默认文字默认文字</slot>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CoverCard',
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.card-wrap {
  display: inline-block;
  box-sizing: border-box;
  width: calc(25% - 16px);
  margin: 8px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  background-color: #fff;
  transition: box-shadow 0.3s;
  overflow: hidden;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 3px 3px 14px 0 rgba(0, 0, 0, 0.3);
  }

  .card-img {
    width: 100%;
    height: 150px;
    //background-image: url('~@/assets/images/placeholder.svg');
    background-repeat: no-repeat;
    background-position: center center;
  }
  .card-text {
    box-sizing: border-box;
    height: 40px;
    padding: 8px;
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
    border-top: 1px solid #e8e8e8;
    overflow: hidden;
  }
}
</style>
