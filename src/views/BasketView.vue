<template>
    <section class="w-[100%] min-h-[10vh] m-auto flex justify-center items-center flex-col">
        <div class="block-title w-[90%] h-[85px] flex justify-start items-center">
            <h2 class="title">Ваш заказ</h2>
        </div>
        <div v-if="cart.length > 0" class="wrapper">
            <div v-for="item of this.cart" :key="item.id" class="basketProducts">
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
                <div
                    class="size w-[98px] h-[50px] border-[1px] border-solid border-[#252525] flex justify-center items-center">
                    <button
                        class="btn bg-transparent border-transparent p-[0] w-[90%] h-[100%] flex-justify-between items-center">
                        <span class="size-text">{{ item.size }}</span>
                        <span>
                            <ChevronDown class="text-[#E0BEA2]" />
                        </span>
                    </button>
                </div>
                <div
                    class="product-counter w-[98px] h-[50px] border-[1px] border-solid border-[#252525] flex justify-center items-center">
                    <button class="w-[90%] h-[100%] flex justify-between items-center">
                        <MinusIcon @click="this.count--" class="w-[18px] h-[18px] text-[#E0BEA2]" />
                        <span class="count-text">{{ this.count }}</span>
                        <PlusIcon @click="this.count++" class="w-[18px] h-[18px] text-[#E0BEA2]" />
                    </button>
                </div>
                <div class="product-price w-[150px] h-[50px] flex justify-between items-center">
                    <span class="price-text">{{ item.price }}</span>
                    <div class="delete-product w-[58px] h-[50px] flex justify-center items-center">
                        <button @click="removeFromCart(item)" class="btn bg-transparent border-transparent">
                            <DeleteButton />
                        </button>
                    </div>
                </div>
            </div>
            <div v-for="item of this.cart" :key="item.id" class="mobile-basketProducts">
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
                                class="btn bg-transparent border-transparent p-[0] w-[100%] h-[100%] flex justify-between items-center">
                                <span class="size-text">{{ item.size }}</span>
                                <span class="block">
                                    <ChevronDown class="text-[#E0BEA2] w-[14px] h-[14px]" />
                                </span>
                            </button>
                        </div>
                        <div
                            class="mobile-counter w-[max-content] p-[1px] h-[40px] border-solid border-[1px] border-[#252525] flex justify-center items-center">
                            <button class="w-[90%] h-[100%] flex justify-between items-center">
                                <MinusIcon @click="this.count--" class="w-[18px] h-[18px] text-[#E0BEA2]" />
                                <span class="count-text">{{ this.count }}</span>
                                <PlusIcon @click="this.count++" class="w-[18px] h-[18px] text-[#E0BEA2]" />
                            </button>
                        </div>
                        <div class="delete-product w-[58px] h-[50px] flex justify-center items-center">
                            <button @click="removeFromCart(item)" class="btn bg-transparent border-transparent">
                                <DeleteButton />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block-1 w-[100%] h-[70px] flex justify-end items-center p-[10px]">
                <span class="payment">К оплате: <span class="payment-price"> {{ totalPrice }} грн</span></span>
            </div>
        </div>
        <div v-else class="wrp w-[90%] h-[200px] flex justify-center items-center">
            <h2 class="empty">Пустой</h2>
        </div>
        <PlacingAnOrderForm v-if="cart.length > 0" :totalPrice="totalPrice" />
    </section>
</template>

<script>
import ChevronDown from '@/components/ChevronDown.vue';
import DeleteButton from '@/components/DeleteButton.vue';
import MinusIcon from '@/components/MinusIcon.vue';
import PlusIcon from '@/components/PlusIcon.vue';
import PlacingAnOrderForm from '@/components/PlacingAnOrderForm.vue';
export default {
    data() {
        return {
            cart: JSON.parse(localStorage.getItem("cart")) || [],
            count: 1
        };
    },
    mounted() {
        this.cart = this.cart.map(item => ({ ...item, price: parseFloat(item.price) + " грн" }));
        console.log(this.cart);
    },
    computed: {
        totalPrice() {
            return this.cart.reduce((total, item) => total + parseFloat(item.price), 0);
        }
    },
    methods: {
        removeFromCart(product) {
            this.cart = this.cart.filter((item) => item.id !== product.id);
            localStorage.setItem("cart", JSON.stringify(this.cart));
        },
    },
    components: { ChevronDown, MinusIcon, PlusIcon, DeleteButton, PlacingAnOrderForm }
};
</script>
<style scoped>
@media screen and (max-width: 685px) {
    .basketProducts {
        display: none !important;
    }

    .mobile-basketProducts {
        display: flex !important;
    }
}

.mobile-basketProducts {
    width: 100%;
    height: 120px;
    display: none;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #252525;
}

.empty {
    color: rgba(37, 37, 37, 0.50);
    text-align: center;
    font-family: Raleway;
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.payment-price {
    color: #252525;
    text-align: center;
    font-family: Raleway-bold;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.payment {
    color: #252525;
    text-align: center;
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
    border-bottom: 1px solid #252525;
}

.title {
    color: #252525;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.wrapper {
    width: 90%;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
</style>
