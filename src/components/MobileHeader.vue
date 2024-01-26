<template>
    <header class="mobile">
        <div class="wrapper-mobile">
            <div class="burger-switcher w-[40%] h-[70px] flex justify-between items-center">
                <div @click="this.openMenu = true" class="burger-menu">
                    <img v-if="this.$route.path == '/'" class="w-[34px] h-[24px]" src="../assets/images/Group 1 (1).png"
                        alt="burger-menu">
                    <img v-else class="w-[34px] h-[24px]" src="../assets/images/BurgerMenu.png" alt="burger-menu">
                </div>
                <LanguageSwitcher />
            </div>
            <div @click="this.$router.push('/')" class="logo w-[40%] h-[70px] flex justify-start items-center">
                <img v-if="this.$route.path == '/'" class="w-[79px] h-[20px]" src="../assets/images/YANKI (1).png"
                    alt="logo">
                <img v-else class="w-[79px] h-[20px]" src="../assets/images/YANKI.png" alt="logo">
            </div>
            <div class="buttons max-w-[30%] h-[70px] flex justify-between items-center gap-[40px]">
                <HeartIconView @click="this.$router.push('/selected')" class="w-[20px] h-[20px]" />
                <BasketIconView @click="this.$router.push('/basket')" class="w-[20px] h-[20px]" />
            </div>
        </div>
    </header>

    <div :class="{ 'active-menu': this.openMenu }" class="wrp-links">
        <div class="menu-mobile">
            <header :class="{ 'bg-[#7C7C7C]': this.$route.path == '/', 'other': this.$route.path !== '/' }" class="mobile">
                <div class="wrapper-mobile">
                    <div class="burger-switcher w-[40%] h-[70px] flex justify-between items-center">
                        <div @click="this.openMenu = false" class="burger-menu">
                            <CloseButton
                                :class="{ 'white-text': this.$route.path == '/', 'simple-text': this.$route.path !== '/' }" />
                        </div>
                        <LanguageSwitcher />
                    </div>
                    <div class="logo w-[40%] h-[70px] flex justify-start items-center">
                        <img v-if="this.$route.path == '/'" class="w-[79px] h-[20px]" src="../assets/images/YANKI (1).png"
                            alt="logo">
                        <img v-else class="w-[79px] h-[20px]" src="../assets/images/YANKI.png" alt="logo">
                    </div>
                    <div class="buttons max-w-[30%] h-[70px] flex justify-between items-center gap-[40px]">
                        <HeartIconView @click="this.$router.push('/selected'), this.openMenu = false"
                            class="w-[20px] h-[20px]" />
                        <BasketIconView @click="this.$router.push('/basket'), this.openMenu = false"
                            class="w-[20px] h-[20px]" />
                    </div>
                </div>
            </header>
        </div>
        <div class="links w-[100%] max-h-[70vh] flex justify-between items-center flex-col relative">
            <div class="head-section w-[90%] h-[90px] bg-[white] flex justify-between items-center">
                <div class="search">
                    <input class="outline-none" placeholder="Введите ваш запрос" type="text">
                    <SearchView />
                </div>
                <div class="switcher w-[100px] text-[black] flex justify-center items-center">
                    <div class="dropdown dropdown-bottom dropdown-end">
                        <div tabindex="0" role="button"
                            class="btn bg-transparent p-[0] border-transparent shadow-transparent hover:bg-transparent hover:border-transparent uah">
                            <span class="title-currency">UAH</span>
                            <span>
                                <ChevronDown class="w-[14px]" />
                            </span>
                        </div>
                        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>USD</a></li>
                            <li><a>EUR</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="inline-block w-[90%] max-h-[70vh] flex justify-between items-center flex-col">
                <li class="inline-block p-[10px] title-pages"> <span>
                        <UserIconView class="fill-[#E0BEA2] p-[1px]" />
                    </span>
                    <RouterLink :class="{ 'mobile-active': this.$route.path == '/personal' }" @click="this.openMenu = false"
                        to="/personal">ЛИЧНЫЙ КАБИНЕТ</RouterLink>
                </li>
                <li class="inline-block p-[10px] title-pages">NEW</li>
                <li class="inline-block p-[10px] title-pages">
                    <RouterLink :class="{ 'mobile-active': this.$route.path == '/directory' }"
                        @click="this.openMenu = false" to="/directory">КАТАЛОГ</RouterLink>
                </li>
                <li class="inline-block p-[10px] title-pages">О НАС</li>
                <li class="inline-block p-[10px] title-pages">
                    <RouterLink :class="{ 'mobile-active': this.$route.path == '/exchange' }" @click="this.openMenu = false"
                        to="/exchange">УСЛОВИЯ ВОЗВРАТА</RouterLink>
                </li>
                <li class="inline-block p-[10px] title-pages">
                    <RouterLink :class="{ 'mobile-active': this.$route.path == '/payment' }" @click="this.openMenu = false"
                        to="/payment">ОПЛАТА И ДОСТАВКА</RouterLink>
                </li>
                <li class="inline-block p-[10px] title-pages">
                    <RouterLink :class="{ 'mobile-active': this.$route.path == '/contacts' }" @click="this.openMenu = false"
                        to="/contacts">КОНТАКТЫ</RouterLink>
                </li>
                <div class="contacts w-[100%] h-[100px] flex justify-between items-center flex-col">
                    <div class="socials w-[50px] h-[50px] flex justify-between items-center">
                        <InstagramIcon />
                        <TelegramIcon />
                    </div>
                    <div class="numbers w-[100%] h-[40px] flex justify-between items-center flex-col">
                        <span class="contact-text">+38(073) 096 36 44</span>
                        <span class="contact-text">info@yanki.com</span>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import ChevronDown from './ChevronDown.vue'
import BasketIconView from './BasketIconView.vue'
import CloseButton from './CloseButton.vue'
import CurrencyView from './CurrencyView.vue'
import HeartIconView from './HeartIconView.vue'
import UserIconView from './UserIconView.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import SearchView from './SearchView.vue'
import InstagramIcon from './InstagramIcon.vue'
import TelegramIcon from './TelegramIcon.vue'
import { RouterLink } from 'vue-router'
export default {
    components: { LanguageSwitcher, HeartIconView, BasketIconView, CloseButton, UserIconView, CurrencyView, SearchView, ChevronDown, InstagramIcon, TelegramIcon, RouterLink },
    data() {
        return {
            openMenu: false,
        }
    }
}
</script>

<style scoped>
.mobile-active {
    color: #E0BEA2;
}

.title-currency {
    color: #252525;
    text-align: right;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.contact-text {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 14px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}

.head-section {
    border-bottom: 1px solid #252525;
}

.search {
    width: 261px;
    height: 40px;
    border-radius: 20px;
    border: 0.3px solid #252525;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #FFFFFF;
}

.title-pages {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #252525;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.other {
    background: white;
    border-bottom: 2px solid #E0BEA2;
}

.active-menu {
    position: absolute;
    top: 0vh !important;
}

.wrp-links {
    width: 100%;
    height: 100vh;
    background: white;
    position: absolute;
    top: -150vh;
    z-index: 1000;
    transition-duration: .5s;
}

.wrapper-mobile {
    width: 92%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 1070px) {
    .mobile {
        width: 100% !important;
        height: 70px !important;
        margin: auto !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
    }
}

.mobile {
    width: 100%;
    height: 70px;
    margin: auto;
    display: none;
    justify-content: center;
    align-items: center;
}
</style>