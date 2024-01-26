<template>
  <svg :class="{ 'white-text': this.$route.path == '/', 'simple-text': this.$route.path !== '/' }" width="28" height="27"
    viewBox="0 0 28 27">
    <rect x="3" width="34" height="4" transform="rotate(45 3 0)" />
    <rect y="24.0416" width="34" height="4" transform="rotate(-45 0 24.0416)" />
  </svg>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.simple-text {
  fill: #E0BEA2 !important;
}


.white-text {
  fill: white !important;
}
</style>