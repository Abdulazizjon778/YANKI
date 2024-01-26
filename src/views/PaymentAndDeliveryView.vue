<template>
    <section class="w-[100%] min-h-[70vh] m-auto flex justify-center items-center">
        <div class="wrapper w-[90%] min-h-[60vh] ">
            <div class="page-title">
                <h2 class="title-text">Оплата и доставка</h2>
            </div>
            <div class="wrapper-texts w-[100%] min-h-[150px] flex justify-between items-center flex-wrap">
                <div class="left-content w-[600px] min-h-[110px] flex justify-between items-start flex-col">
                    <span class="info mt-[10px]"> Вы можете оплатить покупку одним из ниже перечисленных способов:</span>
                    <ul class="info-text mt-[10px] mb-[10px]">
                        <li class="info-text">• наложенным платежом в отделении Новой Почты</li>
                        <li class="info-text">• денежным переводом Visa/MasterCard </li>
                        <li class="info-text">• полная предоплата через Приват 24</li>
                    </ul>
                </div>
                <div class="right-content w-[600px] min-h-[130px] flex justify-between items-start flex-col">
                    <span class="info">Мы готовы предложить несколько вариантов доставки: </span>
                    <ul class="info-text mt-[10px]">
                        <li class="info-text">• отправка по всей Украине в отделение Новой Почты(1-2 дня)</li>
                        <li class="info-text">• международные сервисы доставки для жителей зарубежья: <br> Укрпочта( 1-3
                            недели ,DHL(3-7 дней)
                        </li>
                        <li class="info-text">• Срок доставки: 1–2 дня с момента заказа</li>
                    </ul>
                </div>
            </div>
            <div class="steps-wrapper w-[100%] min-h-[150px] flex justify-between items-sart flex-col">
                <div class="steps-title w-[100%] min-h-[55px] flex justify-start items-center">
                    <h2 class="info">Процесс оформления заказа с помощью LIQPAY:</h2>
                </div>
                <div class="all-steps w-[100%] min-h-[120px] flex justify-between items-center flex-wrap">
                    <div class="first w-[260px] min-h-[100px] flex justify-between items-center">
                        <div class="icon">
                            <FirstStepIcon />
                        </div>
                        <div class="text w-[200px]">
                            <p class="info">Выбрать в корзине способ оплаты "LIQPAY";</p>
                        </div>
                    </div>
                    <div class="second w-[200px] min-h-[100px] flex justify-between items-center">
                        <div class="icon">
                            <SecondStepIcon />
                        </div>
                        <div class="text">
                            <p class="info">Подтвердить заказ;</p>
                        </div>
                    </div>
                    <div class="third w-[530px] min-h-[100px] flex justify-between items-center">
                        <div class="icon">
                            <StepThreeIcon />
                        </div>
                        <div class="text w-[470px]">
                            <p class="info">После этого Вас перенаправит на сайт LIQPAY, где вы выбираете удобный для вас
                                способ оплаты:
                                через Приват24, или с помощью карты Mastercard/VISA со всего мира. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FirstStepIcon from '@/components/FirstStepIcon.vue';
import SecondStepIcon from '@/components/SecondStepIcon.vue';
import StepThreeIcon from '@/components/StepThreeIcon.vue';

export default {
    components: { FirstStepIcon, SecondStepIcon, StepThreeIcon }
}
</script>

<style scoped>
@media screen and (max-width: 550px) {
    .all-steps {
        display: flex !important;
        justify-content: space-between !important;
        align-items: flex-start !important;
        flex-direction: column !important;
    }

    .third {
        width: 100%;
    }

    .third .icon {
        margin-right: 10px;
    }
}

.info-text {
    color: #252525;
    font-family: Raleway;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
}

.info {
    color: #252525;
    font-family: Raleway;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
}

.title-text {
    color: #252525;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
</style>