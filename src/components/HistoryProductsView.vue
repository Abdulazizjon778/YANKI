<template>
    <div v-if="this.cart.length > 0" class="wrp-products">
        <div v-for="item of this.cart" :key="item.id" class="history-products">
            <div
                class="collapse collapse-arrow w-[100%] min-h-[78px] border-transparent border-[1px] border-solid border-b-[#252525] rounded-none">
                <input type="checkbox" />
                <div class="collapse-title  flex justify-between items-center">
                    <div class="data-info  flex justify-between items-center">
                        <div class="id">
                            <span class="data-text">№ {{ item.id }} от </span>
                        </div>
                        <div class="data">
                            <span class="data-text">{{ new Date().getDate() }}.</span>
                            <span class="data-text">{{ new Date().getMonth() + 1 }}.</span>
                            <span class="data-text">{{ new Date().getFullYear() }}</span>
                        </div>
                    </div>
                    <div class="status flex justify-between items-start flex-col">
                        <span class="data-text">Статус :</span>
                        <b class="info-text">Выполнен</b>
                    </div>
                    <div class="price-product  flex justify-between items-start flex-col">
                        <span class="data-text">Сумма заказа:</span>
                        <b class="info-text">{{ item.price }}</b>
                    </div>
                </div>
                <div class="collapse-content">
                    <div class="basketProducts">
                        <div class="image-title w-[210px] h-[110px] flex justify-between items-center">
                            <div class="image w-[95px] h-[110px] bg-[red]">
                                <img class="w-[100%] h-[100%] object-cover" :src="item.img" alt="img">
                            </div>
                            <div class="product-title">
                                <h2 class="title-text">{{ item.title }}</h2>
                            </div>
                        </div>
                        <div class="color">
                            <input v-model="item.color" type="radio" name="radio-1" :value="item.color" :class="{
                                'radio bg-[white] checked:bg-[white] checked:border-[1px] checked:border-solid checked:border-[black]': item.color === 'white',
                                'radio bg-[#6F83A4] checked:bg-[#6F83A4] checked:border-[1px] checked:border-solid checked:border-[black]': item.color === 'blue',
                                'radio bg-[#F1DDAA] checked:bg-[#F1DDAA] checked:border-[1px] checked:border-solid checked:border-[black]': item.color === 'pink',
                            }" :checked="item.color == 'pink' || item.color == 'blue' || item.color == 'white'" />
                        </div>
                        <div class="size w-[98px] h-[50px] border-transparent flex justify-center items-center">
                            <button
                                class="btn bg-transparent border-transparent p-[0] w-[90%] h-[100%] flex-justify-between items-center">
                                <span class="size-text">Размер: {{ item.size }}</span>
                            </button>
                        </div>
                        <div class="product-counter w-[98px] h-[50px] border-transparent flex justify-center items-center">
                            <button class="w-[90%] h-[100%] flex justify-between items-center">
                                Количество:<span> 1</span>
                            </button>
                        </div>
                        <div class="product-price w-[150px] h-[50px] flex justify-between items-center">
                            <span class="price-text">{{ item.price }}</span>
                            <div class="delete-product w-[58px] h-[50px] flex justify-center items-center">
                                <button
                                    class="btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent shadow-none">
                                    <DeleteButton />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-basketProducts">
                        <div class="mobile-image w-[95px] h-[110px]">
                            <img class="w-[100%] h-[100%] object-cover" :src="item.img" alt="image">
                        </div>
                        <div class="all-info w-[90%] h-[100px] flex justify-between items-center flex-col">
                            <div class="title-price w-[95%] h-[20px] flex justify-between items-center">
                                <span class="title-text">{{ item.title }}</span>
                                <b class="price-text">{{ item.price }}</b>
                            </div>
                            <div class="color-other w-[95%] h-[80px] flex justify-between items-center">
                                <input v-model="item.color" type="radio" name="radio-1" :value="item.color" :class="{
                                    'radio bg-[white] checked:bg-[white] checked:border-[1px] checked:border-solid checked:border-[black]': item.color === 'white',
                                    'radio bg-[#6F83A4] checked:bg-[#6F83A4] checked:border-[1px] checked:border-solid checked:border-[black]': item.color === 'blue',
                                    'radio bg-[#F1DDAA] checked:bg-[#F1DDAA] checked:border-[1px] checked:border-solid checked:border-[black]': item.color === 'pink',
                                }" :checked="item.color == 'pink' || item.color == 'blue' || item.color == 'white'" />
                                <div
                                    class="mobile-size w-[max-content] p-[5px] h-[40px] border-solid border-[1px] border-[#252525] flex justify-center items-center">
                                    <button
                                        class="btn bg-transparent border-transparent p-[0] w-[100%] h-[100%] flex justify-center items-center">
                                        <span class="size-text">{{ item.size }}</span>
                                    </button>
                                </div>
                                <div
                                    class="mobile-counter w-[40px] p-[1px] h-[40px] border-solid border-[1px] border-[#252525] flex justify-center items-center">
                                    <button class="w-[90%] h-[100%] flex justify-center items-center">
                                        1
                                    </button>
                                </div>
                                <div class="delete-product w-[58px] h-[50px] flex justify-center items-center">
                                    <button
                                        class="btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent shadow-none">
                                        <DeleteButton />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="wrp w-[100%] h-[200px] flex justify-center items-center">
        <h2 class="empty">Пустой</h2>
    </div>
</template>

<script>
import ChevronDown from "@/components/ChevronDown.vue";
import DeleteButton from "@/components/DeleteButton.vue";
export default {
    data() {
        return {
            cart: JSON.parse(localStorage.getItem("cart")) || [],
        }
    },
    components: {
        ChevronDown, DeleteButton
    }
}   
</script>

<style scoped>
.empty {
    color: rgba(37, 37, 37, 0.50);
    text-align: center;
    font-family: Raleway;
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

@media screen and (max-width: 458px) {
    .collapse-title {
        display: flex !important;
        justify-content: space-between !important;
        align-items: flex-start !important;
        flex-wrap: wrap !important;
    }
}

div.collapse-title::after {
    color: #E0BEA2;
    width: 14px;
    height: 14px;
}

.mobile-basketProducts {
    width: 100%;
    height: 120px;
    display: none;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 1px solid #252525; */
}



.title-text {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.price-text {
    color: #252525;
    text-align: center;
    font-family: Raleway-bold;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.count-text {
    color: #252525;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.size-text {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.basketProducts {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 1px solid #252525; */
}



.info-text {
    color: #252525;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Raleway-bold;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

@media screen and (max-width: 685px) {
    .basketProducts {
        display: none !important;
    }

    .mobile-basketProducts {
        display: flex !important;
    }
}


.data-text {
    color: #252525;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}


.title-text {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.price-text {
    color: #252525;
    text-align: center;
    font-family: Raleway-bold;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}



.size-text {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}


.history-products {
    width: 100%;
    min-height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #252525;
}

.wrp-products {
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

.second-btn {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.third-btn {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.first-btn {
    color: #FFF;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 100%;
    height: 100%;
}

.first-tab {
    width: 228px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E0BEA2;
}

.second-tab {
    width: 228px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.third-tab {
    width: 228px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.buttons-tabs {
    width: max-content;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navigation-header {
    width: 100%;
    height: 50px;
    border-top: 1px solid #252525;
    border-bottom: 1px solid #252525;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>