<template>
  <div class="dropdown dropdown-bottom dropdown-end switch-1">
    <div tabindex="0" role="button"
      class="btn bg-transparent border-transparent shadow-transparent hover:bg-transparent hover:border-transparent ru">
      <span :class="{ 'white-text': this.$route.path == '/' }">RU</span>
      <span :class="{ 'white-text': this.$route.path == '/' }">
        <ChevronDown />
      </span>
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>UA</a></li>
      <li><a>EN</a></li>
    </ul>
  </div>
  <div class="dropdown dropdown-bottom  switch-2">
    <div tabindex="0" role="button"
      class="btn bg-transparent border-transparent shadow-transparent hover:bg-transparent hover:border-transparent ru">
      <span :class="{ 'white-text': this.$route.path == '/', 'simple-text': this.$route.path !== '/' }">RU</span>
      <span :class="{ 'white-text': this.$route.path == '/', 'simple-text': this.$route.path !== '/' }">
        <ChevronDown />
      </span>
    </div>
    <ul tabindex="0" class="dropdown-content !z-[100] menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>UA</a></li>
      <li><a>EN</a></li>
    </ul>
  </div>
</template>

<script>
import ChevronDown from './ChevronDown.vue'
export default {
  components: {
    ChevronDown,
  }
}
</script>

<style scoped>
@media screen and (max-width: 1050px) {
  .switch-1 {
    display: none;
  }

  .switch-2 {
    display: flex !important;
  }

  .ru {
    color: #FFF !important;
    font-family: Raleway !important;
    font-size: 16px !important;
    font-style: normal !important;
    font-weight: 300 !important;
    line-height: normal !important;
  }
}

.simple-text {
  color: #252525;
}

.switch-2 {
  display: none;
}

.white-text {
  color: white !important;
}

.ru {
  color: #252525;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}</style>