<template>
    <header>
        <div class="wrapper">
            <div class="burger-menu">
                <img class="cursor-pointer" @click="this.activeBurger = true" v-if="this.$route.path == '/'"
                    draggable="false" src="../assets/images/Group 1 (1).png" alt="pic">
                <img class="cursor-pointer" @click="this.activeBurger = true" v-else draggable="false"
                    src="../assets/images/BurgerMenu.png" alt="BurgerMenu" />
            </div>
            <div class="block-1">
                <ul>
                    <li :class="{ 'white-text': this.$route.path == '/' }">NEW</li>
                    <li :class="{ 'white-text': this.$route.path == '/' }">
                        <RouterLink to="/directory" :class="{ 'active-router': this.$route.path == '/directory' }">КАТАЛОГ
                        </RouterLink>
                    </li>
                    <li :class="{ 'white-text': this.$route.path == '/' }">О НАС</li>
                </ul>
            </div>
            <div @click="this.$router.push('/')" class="logo">
                <img v-if="this.$route.path == '/'" draggable="false" src="../assets/images/YANKI (1).png" alt="Logo">
                <img v-else draggable="false" src="../assets/images/YANKI.png" alt="Logo" />
            </div>
            <div class="dropdowns">
                <LanguageSwitcher />
                <CurrencyView />
            </div>
            <div class="buttons">
                <button :class="{ 'white-text': this.$route.path == '/' }">
                    <SearchView />
                </button>
                <button @click="this.$router.push('/personal')" :class="{ 'white-text': this.$route.path == '/', 'simple-text': this.$route.path !== '/' }">
                    <UserIconView />
                </button>
                <button @click="this.$router.push('/selected')" :class="{ 'white-text': this.$route.path == '/' }">
                    <HeartIconView />
                </button>
                <button @click="this.$router.push('/basket')" :class="{ 'white-text': this.$route.path == '/' }">
                    <BasketIconView />
                </button>
            </div>
        </div>
    </header>
    <div :class="{ 'active-burger': this.activeBurger }" class="burger-wrapper">
        <div class="drop-menu">
            <div @click="this.activeBurger = false" class="close-button">
                <svg class="fill-[#CCA88A]" width="28" height="27" viewBox="0 0 28 27">
                    <rect x="3" width="34" height="4" transform="rotate(45 3 0)" />
                    <rect y="24.0416" width="34" height="4" transform="rotate(-45 0 24.0416)" />
                </svg>
            </div>
            <div class="links">
                <ul>
                    <li>
                        <RouterLink :class="{ 'active-router': this.$route.path == '/payment' }"
                            @click="this.activeBurger = false" to="/payment">ОПЛАТА И ДОСТАВКА</RouterLink>
                    </li>
                    <li>
                        <RouterLink :class="{ 'active-router': this.$route.path == '/exchange' }"
                            @click="this.activeBurger = false" to="/exchange">УСЛОВИЯ ВОЗВРАТА</RouterLink>
                    </li>
                    <li>
                        <RouterLink :class="{ 'active-router': this.$route.path == '/contacts' }"
                            @click="this.activeBurger = false" to="/contacts">КОНТАКТЫ</RouterLink>
                    </li>
                    <li>
                        <RouterLink :class="{ 'active-router': this.$route.path == '/personal' }"
                            @click="this.activeBurger = false" to="/personal">ЛИЧНЫЙ КАБИНЕТ</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <MobileHeader />
</template>

<script>
import BasketIconView from "./BasketIconView.vue";
import ChevronDown from "./ChevronDown.vue";
import CloseButton from "./CloseButton.vue";
import CurrencyView from "./CurrencyView.vue";
import HeartIconView from "./HeartIconView.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";
import MobileHeader from './MobileHeader.vue';
import SearchView from "./SearchView.vue";
import UserIconView from "./UserIconView.vue";
export default {
    components: {
        SearchView,
        UserIconView,
        HeartIconView,
        BasketIconView,
        ChevronDown,
        LanguageSwitcher,
        CurrencyView,
        MobileHeader,
        CloseButton
    },
    data() {
        return {
            activeBurger: false
        }
    }
};
</script>

<style scoped>
.simple-text {
    fill: #E0BEA2 !important;
}

.active-burger {
    width: 100%;
    height: 80px !important;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1 !important;
    visibility: visible !important;
    transform: translateY(0%) !important;
    opacity: 1 !important;
}

.links ul li {
    display: inline-block;
    padding: 30px;
}

.links {
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.close-button {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.burger-wrapper {
    width: 100%;
    height: 0px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -10;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
    transition-duration: .3s;
}

.drop-menu {
    width: 91%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFF;
    box-shadow: 0px 10px 15px 0px rgba(37, 37, 37, 0.07);
}

@media screen and (max-width: 1070px) {
    header {
        display: none !important;
    }

    .mobile {
        width: 100% !important;
        height: 70px !important;
        margin: auto !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
    }
}

.active-router {
    color: #E0BEA2;
}

.white-text {
    color: white !important;
    fill: white !important;
}

.mobile {
    width: 100%;
    height: 70px;
    margin: auto;
    display: none;
    justify-content: center;
    align-items: center;
}

.dropdowns {
    width: 190px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.buttons {
    width: 200px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.block-1 ul li:hover {
    color: #e0bea2 !important;
}

.block-1 ul li {
    display: inline-block;
    padding: 20px;
    color: #252525;
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
    transition-duration: 0.3s;
}

.block-1 {
    max-width: 400px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.burger-menu {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
}

header {
    width: 100%;
    height: 80px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
}

.wrapper {
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>