<template>
  <div class="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" role="button"
            class="btn bg-transparent border-transparent shadow-transparent hover:bg-transparent hover:border-transparent uah">
            <span :class="{'white-text': this.$route.path == '/'}">UAH</span>
            <span :class="{'white-text': this.$route.path == '/'}">
              <ChevronDown />
            </span>
          </div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>USD</a></li>
            <li><a>EUR</a></li>
          </ul>
        </div>
</template>

<script>
import ChevronDown from './ChevronDown.vue';
export default {
    components: {
        ChevronDown
    }
}
</script>

<style scoped>
.white-text{
  color: white !important;
}
.uah {
  color: #252525;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
</style>