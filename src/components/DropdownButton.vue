<template>
  <div class="dropdown dropdown-bottom  bg-transparent min-w-[120px] h-[30px] flex justify-between items-center">
    <div tabindex="0" role="button"
      class="btn bg-transparent shadow-none border-transparent hover:bg-transparent hover:border-transparent flex justify-between items-center">
      <slot></slot>
      <ChevronDown class="text-[#E0BEA2]" />
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] mt-[10px] menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Пустой</a></li>
      <li><a>Пустой</a></li>
    </ul>
  </div>
</template>

<script>
import ChevronDown from './ChevronDown.vue'
export default {
  components: { ChevronDown },

}
</script>

<style scoped></style>