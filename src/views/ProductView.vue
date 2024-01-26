<template>
    <section class="w-[100%] min-h-[100vh] flex justify-center items-center m-auto">
        <div class="wrapper">
            <div class="images-section">
                <div class="images w-[100px] h-[100px] flex justify-center items-center flex-col gap-[10px]">
                    <img v-for="item of 5" :key="item.id" class="mini-images w-[100px] h-[100px]"
                        :src="this.selectedProduct.img" alt="images">
                </div>
                <div class="main-image">
                    <img class="w-[100%] h-[100%] object-cover" :src="this.selectedProduct.img" alt="image" />
                </div>
            </div>
            <div class="informations-section">
                <!-- <div class="title-block"> -->
                <div class="title-block w-[530px] h-[110px] flex justify-between items-start flex-col">
                    <h2 class="selectedProduct-title">{{ this.selectedProduct.title }}</h2>
                    <b class="selectedProduct-price">{{ this.selectedProduct.price }}</b>
                    <div class="colors w-[90px] h-[50px] flex justify-between items-center">
                        <input v-model="selectedColor" value="white" type="radio" name="radio-1"
                            class="radio bg-[white] checked:bg-[white] checked:border-[1px] checked:border-solid checked:border-[black]"
                            checked />
                        <input v-model="selectedColor" value="blue" type="radio" name="radio-1"
                            class="radio bg-[#6F83A4] checked:bg-[#6F83A4] checked:border-[1px] checked:border-solid checked:border-[black]" />
                        <input v-model="selectedColor" value="pink" type="radio" name="radio-1"
                            class="radio bg-[#F1DDAA] checked:bg-[#F1DDAA] checked:border-[1px] checked:border-solid checked:border-[black]"
                            checked />
                    </div>
                </div>
                <div class="sizes">

                    <select v-model="selectedSize"
                        class="w-[530px] h-[55px] bg-[#FFFFFF] flex justify-between items-center  border-[1px] border-solid border-[#252525] outline-none p-[10px]">
                        <option value="" disabled> <span class="sizes-text">Выберите размер</span></option>
                        <option v-for="item of this.selectedProduct.sizes" :key="item.id">{{ item }}</option>
                    </select>
                </div>
                <div class="buttons w-[530px] h-[100px] flex justify-between items-center">
                    <button @click="addToCart()" class="btn-1">В КОРЗИНУ</button>
                    <button @click="goToSelectedProducts(selectedProduct)" class="btn-2"> <span>
                            <HeartIconView class="w-[17px] h-[17px]" />
                        </span> В ИЗБРАННОЕ</button>
                </div>
                <div class="full-informations w-[530px] min-h-[250px] flex justify-between items-start flex-col">
                    <div class="full-info w-[530px]">
                        <span class="full-title">Подробности</span>
                    </div>
                    <div class="all-info">
                        <CollapseButton
                            class="description bg-[white] w-[530px] rounded-none border-solid border-[#252525] border-b-[1px]">
                            <span class="btn-text">Обмеры и
                                описание</span></CollapseButton>
                        <div
                            class="collapse collapse-arrow collapse-open w-[530px] min-h-[50px] bg-[white] rounded-none composition">
                            <input type="checkbox" />
                            <div class="collapse-title h-[50px] flex justify-start items-center">
                                <span class="collapse-text">Состав и уход</span>
                            </div>
                            <div class="collapse-content">
                                <p>Состав: 50% Шерсть, 50% Полиэстер <br>
                                    Подкладка: 100% Полиэстер <br>
                                    Утеплитель: 90% Пух, 10% Перо <br><br>

                                    - Не стирать <br>
                                    - Гладить при температуре утюга до 110°C <br>
                                    - Не отбеливать <br>
                                    - Сухая чистка (химчистка) <br>
                                    - Барабанная сушка запрещена</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
            </div>
        </div>
    </section>

    <div :class="{ 'notice-active': this.notice }" class="notification-wrp">
        <div :class="{ 'message-notice': this.notice }" class="notification">
            <h2 class="title text-center">Товар добавлен в <br> избранное! </h2>
            <button @click="this.notice = false" class="btn-ok">Закрыть</button>
            <div @click="this.notice = false" class="close">
                <span class="block w-[50px] h-[50px] text-[20px] rounded-[100%] flex justify-center items-center">
                    <CloseButton class="w-[20px]" />
                </span>
            </div>
        </div>
    </div>
    <div :class="{ 'notice-active': this.notselect }" class="notification-wrp">
        <div :class="{ 'message-notice': this.notselect }" class="notification">
            <h2 class="title text-center">Товар удален из <br> избранного</h2>
            <button @click="this.notselect = false" class="btn-ok">Закрыть</button>
            <div @click="this.notselect = false" class="close">
                <span class="block w-[50px] h-[50px] text-[20px] rounded-[100%] flex justify-center items-center">
                    <CloseButton class="w-[20px]" />
                </span>
            </div>
        </div>
    </div>

    <div :class="{ 'notice-active': this.toBasket }" class="notification-wrp">
        <div :class="{ 'message-notice': this.toBasket }" class="notification">
            <h2 class="title text-center">Продукт был добавлен в <br> корзину </h2>
            <button @click="this.toBasket = false" class="btn-ok">Закрыть</button>
            <div @click="this.toBasket = false" class="close">
                <span class="block w-[50px] h-[50px] text-[20px] rounded-[100%] flex justify-center items-center">
                    <CloseButton class="w-[20px]" />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import HeartIconView from "@/components/HeartIconView.vue";
import store from "../store";
import CollapseButton from '@/components/CollapseButton.vue';
import ChevronDown from "@/components/ChevronDown.vue";
import CloseButton from "@/components/CloseButton.vue";
export default {
    created() {
        let find_product = store.getters.clothes.filter((item) => item.id == this.$route.fullPath.split("/")[2]);
        this.selectedProduct = find_product[0];
        localStorage.setItem("currentProductId", this.selectedProduct.id);


        // if (!this.selectedSize && this.selectedProduct.sizes && this.selectedProduct.sizes.length > 0) {
        //   this.selectedSize = this.selectedProduct.sizes[0];
        // }
    },
    beforeUnmount() {
        localStorage.removeItem("currentProductId", this.selectedProduct.id);
    },
    data() {
        return {
            selectedProduct: {},
            selectedProducts: JSON.parse(localStorage.getItem("selectedProducts")) || [],
            selectedColor: "pink",
            activeSize: false,
            count: 0,
            cart: JSON.parse(localStorage.getItem("cart")) || [],
            selectedSize: "",
            notice: false,
            notselect: false,
            toBasket: false,
        };
    },
    methods: {
        addToCart() {
            this.toBasket = true
            if (!this.selectedSize && this.selectedProduct.sizes && this.selectedProduct.sizes.length > 0) {
                this.selectedSize = this.selectedProduct.sizes[0];
            }
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            let isInCart = cart.some(product => product.id === this.selectedProduct.id);

            if (!isInCart) {
                cart.push({
                    id: this.selectedProduct.id,
                    title: this.selectedProduct.title,
                    price: this.selectedProduct.price,
                    color: this.selectedColor,
                    img: this.selectedProduct.img,
                    size: this.selectedSize
                });

                localStorage.setItem("cart", JSON.stringify(cart));

                // this.$router.push("/basket");

            }
        },
        goToSelectedProducts(item) {
            let index = this.selectedProducts.findIndex((product) => product.id === item.id);

            let updatedSelectedProducts = [...this.selectedProducts];

            if (index === -1) {
                updatedSelectedProducts.push(item);
                this.notice = true;
            } else {
                updatedSelectedProducts.splice(index, 1);
                this.notselect = true;
            }

            localStorage.setItem('selectedProducts', JSON.stringify(updatedSelectedProducts));
            this.selectedProducts = updatedSelectedProducts;
        },

    },
    components: { HeartIconView, CollapseButton, ChevronDown, CloseButton }
};
</script>

<style scoped>
.sizes-text {
    color: #252525;
    font-family: Raleway;
    font-size: 14px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}

.title {
    color: #252525;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.message-notice {
    transform: scale(1) !important;
}

.notice-active {
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

.btn-ok:hover {
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

select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

@media screen and (max-width: 1337px) {
    .wrapper {
        width: 100% !important;
    }

    .full-informations {
        max-width: 335px;
    }

    .full-info {
        width: 335px;
    }

    .title-block {
        width: 335px !important;
    }

    .wrapper {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        flex-direction: column !important;
    }

    .images-section {
        width: 335px !important;
        height: 400px !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column-reverse;
    }

    .images {
        width: 100%;
        height: 100px;

        display: flex !important;
        justify-content: space-between !important;
        align-items: center;
        z-index: 10;
        flex-direction: row;
    }

    .mini-images {
        width: 63px;
        height: 63px;
    }

    .main-image {
        width: 335px !important;
        height: 335px !important;
    }

    .selectedProduct-title {
        font-size: 18px !important;
    }

    .selectedProduct-price {
        font-size: 14px !important;
    }

    .btn-1 {
        width: 160px !important;
        height: 40px !important;
        font-size: 14px !important;
    }

    .btn-2 {
        width: 160px !important;
        height: 40px !important;
        font-size: 14px !important;
        padding: 10px !important;
    }

    .sizes>select {
        width: 335px !important;
        min-height: 40px !important;
    }

    .informations-section {
        width: 350px !important;
        padding: 5px !important;
    }

    .buttons {
        width: 100%;
        height: 100px;
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
    }

    .description {
        width: 335px;
    }

    .composition {
        width: 335px;
    }
}

.main-image {
    width: 450px;
    height: 540px;
}

.selectedProduct-price {
    color: #252525;
    text-align: center;
    /* font-family: Raleway; */
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.selectedProduct-title {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.collapse-text {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.btn-text {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.collapse-title::after {
    color: #E0BEA2;
    width: 14px;
    height: 14px;
}

.full-title {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.btn-2:hover {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.btn-1:hover {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.btn-2 {
    width: 255px;
    height: 50px;
    border: 0.5px solid #252525;
    /* padding: 16px 81px 17px 81px; */
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    background: white;
    transition-duration: .3s;
}

.btn-1 {
    display: flex;
    width: 255px;
    /* padding: 16px 81px 17px 81px; */
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #E0BEA2;
    color: #FFF;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    transition-duration: .3s;
}

.informations-section {
    width: 600px;
    min-height: 90%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;

}

.images-section {
    width: 600px;
    height: 570px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.wrapper {
    width: 90%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}

div.collapse-title::after {
    color: #e0bea2;
    width: 18px;
    height: 18px;
}

.collapse-title {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}
</style>