<template>
    <section class="w-[100%] min-h-[6vh] m-auto flex justify-center items-center">
        <div class="wrapper">
            <div class="navigation">
                <span class="title">Каталог</span>
                <ul>
                    <li>New</li>
                    <li>Bestsellers</li>
                    <li>Верхняя одежда</li>
                    <li>Шубы</li>
                    <li>Тренчи</li>
                    <li>Пальто</li>
                    <li>Пуховики и жилеты</li>
                    <li>Костюмы</li>
                    <li>Жакеты</li>
                    <li>Платья</li>
                    <li>Рубашки и блузы</li>
                    <li>Юбки</li>
                    <li>Футболки и топы</li>
                    <li>Аксессуары</li>
                    <li>Sale</li>
                    <li>Summer</li>
                    <li>Посмотреть всё</li>
                </ul>
            </div>
            <div class="products">
                <div class="mobile-navigation">
                    <MobileNavigation />
                </div>
                <div class="block w-[100%] h-[30px] flex justify-start items-center gap-[10px]">
                    <div class="filters flex justify-start items-center gap-[10px]">
                        <DropdownButton><span class="text-dropwdown">Размер</span></DropdownButton>
                        <DropdownButton><span class="text-dropwdown">Цвет</span></DropdownButton>
                        <DropdownButton><span class="text-dropwdown">Цена</span></DropdownButton>
                        <DropdownButton><span class="text-dropwdown">Сортировать по</span></DropdownButton>
                    </div>
                    <MobileFilters />
                </div>
                <div class="block w-[100%] h-[15px] bg-[white]"></div>
                <div  v-for="item of this.imagesFrom" :key="item.id" class="product">
                    <div @click="goToProduct(item)" class="image">
                        <img :src="item.img" alt="image">
                    </div>
                    <div class="informations">
                        <h2 class="title-product">{{ item.title }} <span v-if="item.new == true"
                                class="text-[#E0BEA2] text-[16px] font-[Raleway] font-[300]">new</span> </h2>
                        <b class="price-product">{{ item.price }}</b>
                        <span class="sizes-product">{{ item.sizes.join(" ").toString() }}</span>
                        <div class="colors">
                            <svg width="52" height="14" viewBox="0 0 52 14" fill="none">
                                <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3" />
                                <circle cx="26" cy="7" r="7" fill="#6F83A4" />
                                <circle cx="45" cy="7" r="7" fill="#F1DDAA" />
                            </svg>
                        </div>
                    </div>
                    <div @click="selectedProduct(item)" class="selected">
                        <img v-if="isSelectedProduct(item)" class="product-selected w-[15px] h-[15px]" src="../assets/images/Frame (9).png" alt="image">
                        <img v-else class="product-selected w-[15px] h-[15px]" src="../assets/images/Frame (8).png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </section>  

    <div :class="{'notice-active': this.notice}" class="notification-wrp">
        <div :class="{'message-notice': this.notice}" class="notification">
            <h2 class="title text-center">Товар добавлен в <br> избранное! </h2>
            <button @click="this.notice = false" class="btn-ok">Закрыть</button>
            <div @click="this.notice = false" class="close">
                <span class="block w-[50px] h-[50px] text-[20px] rounded-[100%] flex justify-center items-center">
                    <CloseButton class="w-[20px]" />
                </span>
            </div>
        </div>
    </div>
    <div :class="{'notice-active': this.notselect}" class="notification-wrp">
        <div :class="{'message-notice': this.notselect}" class="notification">
            <h2 class="title text-center">Товар удален из <br> избранного</h2>
            <button @click="this.notselect = false" class="btn-ok">Закрыть</button>
            <div @click="this.notselect = false" class="close">
                <span class="block w-[50px] h-[50px] text-[20px] rounded-[100%] flex justify-center items-center">
                    <CloseButton class="w-[20px]" />
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store';
import DropdownButton from '@/components/DropdownButton.vue';
import CollapseButton from '@/components/CollapseButton.vue';
import MobileNavigation from '@/components/MobileNavigation.vue';
import MobileFilters from '@/components/MobileFilters.vue';
import CloseButton from '@/components/CloseButton.vue';
export default {
    components: { DropdownButton, CollapseButton, MobileNavigation, MobileFilters, CloseButton },
    data() {
        return {
            products: store.getters.clothes,
            selectedProducts: [],
            notice: false,
            notselect: false,
            imagesFrom: []
        }
    },
    mounted() {
        let storedSelectedProducts = localStorage.getItem('selectedProducts');
        if (storedSelectedProducts) {
            this.selectedProducts = JSON.parse(storedSelectedProducts);
        }
        this.imagesFrom = this.products
    },
    methods: {
        goToProduct(item) {
            this.$router.push(`product/${item.id}`);
        },

        selectedProduct(item) {
            let index = this.selectedProducts.findIndex((product) => product.id === item.id);

            let updatedSelectedProducts = [...this.selectedProducts];


            if (index === -1) {
                updatedSelectedProducts.push(item);
                this.notice = true
            } else {
                updatedSelectedProducts.splice(index, 1);
                this.notselect = true
            }

            localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts));

            this.selectedProducts = updatedSelectedProducts;

        },
        isSelectedProduct(item) {
        return this.selectedProducts.some(product => product.id === item.id);
    },
    },
}
</script>

<style scoped>
.message-notice{
    transform: scale(1) !important;
}
.notice-active{
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 10000 !important;
}
.close {
    width: 50px;
    height: 50px;
    border: none;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    font-size: 20px;
    cursor: pointer;
}

.btn-ok {
    width: 90%;
    height: 45px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #E0BEA2;
    color: #FFF;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    cursor: pointer;
    transition-duration: .3s;
}

.btn-ok:hover{
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.notification {
    width: 350px;
    height: 200px;
    background: white;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition-duration: .3s;
}

.notification-wrp {
    width: 100%;
    height: 100vh;
    background: rgba(99, 95, 95, 0.655);
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: .3s;
    z-index: -1000;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
}

@media screen and (max-width: 1277px) {
    .product {
        width: 260px !important;
        height: 400px !important;
    }
}

@media screen and (max-width: 930px) {
    .filters {
        display: none !important;
    }

    .mobile-filters {
        display: flex !important;
    }

    .navigation {
        display: none !important;
    }

    .mobile-navigation {
        display: flex !important;
    }

    .product {
        width: 150px !important;
        height: 290px !important;
    }

    .selected {
        width: 35px !important;
        height: 35px !important;
    }

    .selected>img {
        width: 13.125px;
        height: 13.125px;
    }
}

.mobile-navigation {
    width: 100%;
    min-height: 60px;
    display: none;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    z-index: 11;
}



.text-dropwdown {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.sizes-product {
    color: rgba(37, 37, 37, 0.50);
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.price-product {
    color: #252525;
    text-align: center;
    /* font-family: Raleway; */
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.title-product {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.informations {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    background: white;
}

.product {
    width: 310px;
    height: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;
    transition-duration: .2s;
    cursor: pointer;
    margin-top: 10px;
}

.product:hover {
    transform: scale(1.01);
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.selected {
    width: 40px;
    height: 40px;
    border-radius: 0px 0px 0px 20px;
    background: #E0BEA2;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.products {
    flex: 1;
    min-height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.title {
    color: #252525;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.navigation ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
}

.navigation ul li {
    display: inline-block;
    padding: 20px 0px;
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
    transition-duration: .2s;
}

.navigation ul li:hover {
    color: #E0BEA2;
}

.navigation {
    width: 200px;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
}

.wrapper {
    width: 90%;
    min-height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}</style>