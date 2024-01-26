<template>
    <section class="w-[100%] min-h-[10vh] m-auto flex justify-center items-center flex-col">
        <div class="select-text w-[90%] h-[100px] flex justifiy-start items-center">
            <h2 class="selected-text">Избранное</h2>
        </div>
        <div v-if="selectedProducts.length > 0" class="wrapper">
            <div v-for="item of selectedProducts" :key="item.id" class="product">
                <div @click="goToProduct(item)" class="image">
                    <img class="w-[370px]" :src="item.img" alt="image">
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
                <div @click="removeProduct(item)" class="selected">
                    <!-- <img class="product-selected w-[15px] h-[15px]" src="../assets/images/Frame (8).png" alt="image"> -->
                    <img class="product-selected w-[15px] h-[15px]" src="../assets/images/Frame (9).png" alt="image">
                </div>
            </div>
        </div>
        <div v-else class="wrp w-[90%] h-[200px] flex justify-center items-center">
            <h2 class="empty">Пустой</h2>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            selectedProducts: [],
        };
    },
    mounted() {
        let storedSelectedProducts = localStorage.getItem("selectedProducts");
        if (storedSelectedProducts) {
            this.selectedProducts = JSON.parse(storedSelectedProducts);
        }
    },
    methods: {
        removeProduct(selectedItem) {
            let index = this.selectedProducts.findIndex(
                (item) => item.id === selectedItem.id
            );
            this.selectedProducts.splice(index, 1);
            localStorage.setItem(
                "selectedProducts",
                JSON.stringify(this.selectedProducts)
            );
        },
        goToProduct(item) {
            this.$router.push(`product/${item.id}`);
        },
    },
};
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

@media screen and (max-width: 1277px) {
    .product {
        width: 270px !important;
        min-height: 400px !important;
    }
}

@media screen and (max-width: 930px) {

    .product {
        width: 160px !important;
        min-height: 280px !important;
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
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    background: white;
}

.product {
    width: 370px;
    min-height: 450px;
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


.selected-text {
    color: #252525;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.wrapper {
    width: 90%;
    min-height: 50vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}
</style>