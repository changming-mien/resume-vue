<template>
  <div class="loading">
      <img src="../assets/loading.gif" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loading{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
img{
    position: absolute;
    width: 100px;
    height: 100px;
    top: calc(50% - 200px);
    left: calc(50% - 50px);
}
</style>