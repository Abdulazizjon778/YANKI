<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
import "./style.css"
</script>

<template>
    <HeaderView />
    <RouterView />
    <FooterView />
</template>

<style scoped></style>