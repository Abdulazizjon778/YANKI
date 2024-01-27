<template>
    <swiper :navigation="true" :slidesPerView="4" :spaceBetween="30" :modules="modules" class="mySwiper">
        <swiper-slide v-for="item of this.categories" :key="item.id" class="slider">
            <img class="w-[100%] h-[100%] object-cover" :src="item.img" alt="pic">
            <div class="title-block">
                <span class="title">{{ item.title }}</span>
            </div>
        </swiper-slide>
    </swiper>
    <swiper :navigation="true" :slidesPerView="2" :spaceBetween="30" :modules="modules" class="mySwiper-2">
        <swiper-slide v-for="item of this.categories" :key="item.id" class="slider">
            <img class="w-[100%] h-[100%] object-cover" :src="item.img" alt="pic">
            <div class="title-block">
                <span class="title">{{ item.title }}</span>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Pagination } from "swiper/modules";
import firstImage from "@/assets/images/Rectangle 11.jpg"
import secondImage from "@/assets/images/Rectangle 10.jpg"
import thirdImage from "@/assets/images/Rectangle 7.jpg"
import fourthImage from "@/assets/images/Rectangle 9.jpg"
export default {
    data() {
        return {
            categories: [
                {
                    img: firstImage,
                    title: "Куртки"
                },
                {
                    img: secondImage,
                    title: "Пальто"
                },
                {
                    img: thirdImage,
                    title: "Шубы"
                },
                {
                    img: fourthImage,
                    title: "Парки"
                },
                {
                    img: firstImage,
                    title: "Куртки"
                },
                {
                    img: secondImage,
                    title: "Пальто"
                },
                {
                    img: thirdImage,
                    title: "Шубы"
                },
                {
                    img: fourthImage,
                    title: "Парки"
                },
            ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<style scoped>
@media screen and (max-width: 850px) {
    .mySwiper {
        display: none;
    }

    .mySwiper-2 {
        display: block !important;
    }
}

.title-block {
    width: 100%;
    height: 40px;
    background: rgba(224, 190, 162, 0.75);
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
}

.title {
    color: #FFF;
    text-align: center;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.mySwiper:deep(.swiper-button-disabled) {
    display: none;
}

.mySwiper-2:deep(.swiper-button-disabled) {
    display: none;
}

.mySwiper-3:deep(.swiper-button-disabled) {
    display: none;
}

.mySwiper {
    width: 100%;
    height: 500px;
    user-select: none;
}

.mySwiper:deep(.swiper-button-next) {
    background: #E0BEA2;
    width: 40px;
    height: 40px;
}

.mySwiper-2:deep(.swiper-button-next) {
    background: #E0BEA2;
    width: 40px;
    height: 40px;
}

.mySwiper-3:deep(.swiper-button-next) {
    background: #E0BEA2;
    width: 40px;
    height: 40px;
}

.mySwiper:deep(.swiper-button-next) {
    background: #E0BEA2;
    width: 40px;
    height: 40px;
}

.mySwiper-2:deep(.swiper-button-next) {
    background: #E0BEA2;
    width: 40px;
    height: 40px;
}

.mySwiper-3:deep(.swiper-button-next) {
    background: #E0BEA2;
    width: 40px;
    height: 40px;
}

.mySwiper:deep(.swiper-button-next::after) {
    color: white;
    font-size: 15px;
    font-weight: 800;
}

.mySwiper-2:deep(.swiper-button-next::after) {
    color: white;
    font-size: 15px;
    font-weight: 800;
}

.mySwiper-3:deep(.swiper-button-next::after) {
    color: white;
    font-size: 15px;
    font-weight: 800;
}

.mySwiper:deep(.swiper-button-prev) {
    background: #E0BEA2;
    width: 40px;
    height: 40px;
}

.mySwiper-2:deep(.swiper-button-prev) {
    background: #E0BEA2;
    width: 40px;
    height: 40px;
}

.mySwiper-3:deep(.swiper-button-prev) {
    background: #E0BEA2;
    width: 40px;
    height: 40px;
}

.mySwiper:deep(.swiper-button-prev::after) {
    color: white;
    font-size: 15px;
    font-weight: 800;
}

.mySwiper-2:deep(.swiper-button-prev::after) {
    color: white;
    font-size: 15px;
    font-weight: 800;
}

.mySwiper-3:deep(.swiper-button-prev::after) {
    color: white;
    font-size: 15px;
    font-weight: 800;
}

.mySwiper:deep(.swiper-button-prev::after) {
    color: white;
    font-size: 15px;
    font-weight: 800;
}

.mySwiper-2:deep(.swiper-button-prev::after) {
    color: white;
    font-size: 15px;
    font-weight: 800;
}

.mySwiper-3:deep(.swiper-button-prev::after) {
    color: white;
    font-size: 15px;
    font-weight: 800;
}

.mySwiper-2 {
    width: 100%;
    height: 500px;
    user-select: none;
    display: none;
}

.mySwiper-3 {
    width: 100%;
    height: 500px;
    user-select: none;
    display: none;
}

.slider {
    width: 273px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
</style>