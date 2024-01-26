<template>
    <div class="wrapper">
        <footer class="footer p-10 text-base-content w-[90%] bg-[#FFFFFF]">
            <nav>
                <header class="footer-title">КОМПАНИЯ</header>
                <a class="links">О нас</a>
                <a class="links">Контакты</a>
            </nav>
            <nav>
                <header class="footer-title">ПОЛЕЗНОЕ</header>
                <a class="links">Оплата и доставка</a>
                <a class="links">Условия возврата</a>
                <a class="links">Бонусная система</a>
            </nav>
            <nav>
                <header class="footer-title">ПОКУПАТЕЛЮ</header>
                <a class="links">Избранное</a>
                <a class="links">Публичная оферта</a>
                <a class="links">Политика конфиденциальности</a>
            </nav>
            <nav>
                <header class="footer-title">КОНТАКТЫ</header>
                <div class="grid grid-flow-col gap-4">
                    <a><svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <g clip-path="url(#clip0_422_46)">
                                <path
                                    d="M9.49992 7.12504C8.87003 7.12504 8.26594 7.37526 7.82054 7.82066C7.37514 8.26606 7.12492 8.87015 7.12492 9.50004C7.12492 10.1299 7.37514 10.734 7.82054 11.1794C8.26594 11.6248 8.87003 11.875 9.49992 11.875C10.1298 11.875 10.7339 11.6248 11.1793 11.1794C11.6247 10.734 11.8749 10.1299 11.8749 9.50004C11.8749 8.87015 11.6247 8.26606 11.1793 7.82066C10.7339 7.37526 10.1298 7.12504 9.49992 7.12504ZM9.49992 5.54171C10.5497 5.54171 11.5566 5.95875 12.2989 6.70108C13.0412 7.44341 13.4583 8.45023 13.4583 9.50004C13.4583 10.5499 13.0412 11.5567 12.2989 12.299C11.5566 13.0413 10.5497 13.4584 9.49992 13.4584C8.4501 13.4584 7.44329 13.0413 6.70095 12.299C5.95862 11.5567 5.54159 10.5499 5.54159 9.50004C5.54159 8.45023 5.95862 7.44341 6.70095 6.70108C7.44329 5.95875 8.4501 5.54171 9.49992 5.54171ZM14.6458 5.34379C14.6458 5.60625 14.5415 5.85795 14.3559 6.04353C14.1703 6.22912 13.9186 6.33337 13.6562 6.33337C13.3937 6.33337 13.142 6.22912 12.9564 6.04353C12.7708 5.85795 12.6666 5.60625 12.6666 5.34379C12.6666 5.08134 12.7708 4.82963 12.9564 4.64405C13.142 4.45847 13.3937 4.35421 13.6562 4.35421C13.9186 4.35421 14.1703 4.45847 14.3559 4.64405C14.5415 4.82963 14.6458 5.08134 14.6458 5.34379ZM9.49992 3.16671C7.54134 3.16671 7.2215 3.17225 6.31029 3.21262C5.68963 3.24192 5.27321 3.32504 4.88688 3.47546C4.54329 3.60846 4.2955 3.76758 4.03188 4.032C3.78409 4.2714 3.59357 4.56367 3.47454 4.887C3.32413 5.27492 3.241 5.69054 3.2125 6.31042C3.17134 7.18442 3.16659 7.49 3.16659 9.50004C3.16659 11.4586 3.17213 11.7785 3.2125 12.6897C3.24179 13.3095 3.32492 13.7268 3.47454 14.1123C3.60913 14.4567 3.76746 14.7045 4.03029 14.9673C4.29709 15.2333 4.54488 15.3924 4.88529 15.5238C5.27638 15.675 5.69279 15.759 6.31029 15.7875C7.18429 15.8286 7.48988 15.8334 9.49992 15.8334C11.4585 15.8334 11.7783 15.8278 12.6895 15.7875C13.3086 15.7582 13.7258 15.675 14.1122 15.5254C14.455 15.3916 14.7043 15.2325 14.9672 14.9697C15.234 14.7029 15.3931 14.4551 15.5245 14.1147C15.6749 13.7244 15.7588 13.3072 15.7873 12.6897C15.8285 11.8157 15.8333 11.5101 15.8333 9.50004C15.8333 7.54146 15.8277 7.22162 15.7873 6.31042C15.758 5.69133 15.6749 5.27333 15.5245 4.887C15.4052 4.564 15.215 4.27184 14.968 4.032C14.7287 3.78409 14.4364 3.59355 14.113 3.47467C13.725 3.32425 13.3086 3.24112 12.6895 3.21262C11.8155 3.17146 11.51 3.16671 9.49992 3.16671ZM9.49992 1.58337C11.6509 1.58337 11.9193 1.59129 12.7632 1.63087C13.6063 1.67046 14.1803 1.80267 14.6853 1.999C15.2078 2.20008 15.648 2.47242 16.0882 2.91179C16.4907 3.30754 16.8022 3.78626 17.001 4.31462C17.1965 4.81892 17.3295 5.39367 17.3691 6.23679C17.4063 7.08071 17.4166 7.34908 17.4166 9.50004C17.4166 11.651 17.4087 11.9194 17.3691 12.7633C17.3295 13.6064 17.1965 14.1804 17.001 14.6855C16.8028 15.2141 16.4912 15.6929 16.0882 16.0883C15.6923 16.4907 15.2136 16.8022 14.6853 17.0011C14.181 17.1966 13.6063 17.3296 12.7632 17.3692C11.9193 17.4064 11.6509 17.4167 9.49992 17.4167C7.34896 17.4167 7.08059 17.4088 6.23667 17.3692C5.39354 17.3296 4.81959 17.1966 4.3145 17.0011C3.78593 16.8028 3.30713 16.4912 2.91167 16.0883C2.50903 15.6926 2.19753 15.2139 1.99888 14.6855C1.80254 14.1812 1.67034 13.6064 1.63075 12.7633C1.59354 11.9194 1.58325 11.651 1.58325 9.50004C1.58325 7.34908 1.59117 7.08071 1.63075 6.23679C1.67034 5.39287 1.80254 4.81971 1.99888 4.31462C2.19698 3.78593 2.50855 3.30709 2.91167 2.91179C3.30724 2.50902 3.78601 2.19749 4.3145 1.999C4.81959 1.80267 5.39275 1.67046 6.23667 1.63087C7.08059 1.59367 7.34896 1.58337 9.49992 1.58337Z"
                                    fill="#E0BEA2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_422_46">
                                    <rect width="19" height="19" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a><svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <g clip-path="url(#clip0_422_49)">
                                <path
                                    d="M9.49992 15.8334C11.1796 15.8334 12.7905 15.1661 13.9783 13.9784C15.166 12.7907 15.8333 11.1797 15.8333 9.50004C15.8333 7.82034 15.166 6.20943 13.9783 5.0217C12.7905 3.83397 11.1796 3.16671 9.49992 3.16671C7.82021 3.16671 6.20931 3.83397 5.02158 5.0217C3.83385 6.20943 3.16659 7.82034 3.16659 9.50004C3.16659 11.1797 3.83385 12.7907 5.02158 13.9784C6.20931 15.1661 7.82021 15.8334 9.49992 15.8334ZM9.49992 17.4167C5.12754 17.4167 1.58325 13.8724 1.58325 9.50004C1.58325 5.12767 5.12754 1.58337 9.49992 1.58337C13.8723 1.58337 17.4166 5.12767 17.4166 9.50004C17.4166 13.8724 13.8723 17.4167 9.49992 17.4167ZM7.03784 10.4263L5.06025 9.80958C4.63275 9.67896 4.63038 9.38446 5.15604 9.17308L12.8613 6.19642C13.3086 6.01433 13.562 6.24471 13.4171 6.82183L12.1053 13.0127C12.0135 13.4536 11.7483 13.5589 11.3801 13.3555L9.36059 11.8608L8.41929 12.7696C8.32271 12.863 8.24434 12.943 8.0955 12.9628C7.94746 12.9834 7.82554 12.939 7.73609 12.6936L7.04734 10.4207L7.03784 10.4263Z"
                                    fill="#E0BEA2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_422_49">
                                    <rect width="19" height="19" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div class="flex  flex-col gap-4">
                    <a class="links">+38(073) 096 36 44</a>
                    <a class="links">info@yanki.com</a>
                </div>
            </nav>
        </footer>
    </div>

    <div class="mobile-wrapper">
        <div class="mobile-footer w-[90%] min-h-[300px] flex justify-between items-center flex-col gap-[10px]">
            <div
                class="collapse collapse-arrow bg-[white] text-center border-transparent border-[1px] border-solid border-b-[#252525] rounded-none">
                <input type="checkbox" />
                <div class="collapse-title">
                    <span class="title-text">КОМПАНИЯ</span>
                </div>
                <div class="collapse-content">
                    <ul>
                        <li class="links">О нас</li>
                        <li class="links">Контакты</li>
                    </ul>
                </div>
            </div>
            <div
                class="collapse collapse-arrow bg-[white] text-center border-transparent border-[1px] border-solid border-b-[#252525] rounded-none">
                <input type="checkbox" />
                <div class="collapse-title">
                    <span class="title-text">ПОЛЕЗНОЕ</span>
                </div>
                <div class="collapse-content">
                    <ul>
                        <li class="links">Оплата и доставка</li>
                        <li class="links">Условия возврата</li>
                        <li class="links">Бонусная система</li>
                    </ul>
                </div>
            </div>
            <div
                class="collapse collapse-arrow bg-[white] text-center border-transparent border-[1px] border-solid border-b-[#252525] rounded-none">
                <input type="checkbox" />
                <div class="collapse-title">
                    <span class="title-text">ПОКУПАТЕЛЮ</span>
                </div>
                <div class="collapse-content">
                    <ul>
                        <li class="links">Избранное</li>
                        <li class="links">Публичная оферта</li>
                        <li class="links">Политика конфиденциальности</li>
                    </ul>
                </div>
            </div>
            <div tabindex="0"
                class="collapse collapse-open bg-[white] p-[10px] border-transparent text-center rounded-none flex justify-between items-center flex-col">
                <span class="title-text">КОНТАКТЫ</span>
                <div class="collapse-content flex justify-between items-center flex-col">
                    <div class="icons w-[50px] h-[50px] flex justify-between items-center">
                        <InstagramIcon />
                        <TelegramIcon />
                    </div>
                    <div class="info">
                        <li class="links">+38(073) 096 36 44</li>
                        <li class="links">info@yanki.com</li>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="block w-[100%] h-[35px] bg-[white] flex justify-center items-center">
        <span class="bottom-title">©️ 2021 Yanki. All rights reserved</span>
    </div>
</template>

<script>
import InstagramIcon from './InstagramIcon.vue';
import TelegramIcon from './TelegramIcon.vue';

export default {
    data() {
        return {};
    },
    components: { InstagramIcon, TelegramIcon }
};
</script>

<style scoped>
@media screen and (max-width: 860px) {
    .wrapper {
        display: none !important;
    }

    .mobile-wrapper {
        display: flex !important;
    }

    .bottom-title {
        font-size: 10px !important;
    }
}

.bottom-title {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.collapse-content ul li {
    display: block;
    padding: 10px;
    user-select: none;
}

div.collapse-title::after {
    color: #E0BEA2;
    width: 14px;
    height: 14px;
}

.title-text {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.mobile-wrapper {
    width: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    padding: 10px;
}

.links {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    cursor: pointer;
}

.links:hover {
    text-decoration: underline;
}

.footer-title {
    color: #252525;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.wrapper {
    width: 100%;
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
}
</style>