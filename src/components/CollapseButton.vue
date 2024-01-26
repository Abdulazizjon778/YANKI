<template>
  <div class="collapse collapse-arrow">
  <input type="checkbox" /> 
  <div class="collapse-title">
    <slot></slot>
  </div>
  <div class="collapse-content flex justify-between items-start flex-col gap-[5px]"> 
    <p>Пустой</p>
    <p>Пустой</p>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
div.collapse-title::after {
  color: #E0BEA2;
  width: 14px;
  height: 14px;
}
</style>