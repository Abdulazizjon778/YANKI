<template>
    <section class="w-[100%] min-h-[80vh] m-auto flex justify-center items-start">
        <div class="wrapper">
            <div class="head-section">
                <div class="title">
                    <h2 class="title-text">Обмен и возврат</h2>
                </div>
                <div class="mini-info">
                    <p class="info-text">Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат
                    </p><br>
                    <p class="info-text">Обмен и возврат возможен в случае:</p>
                </div>
            </div>
            <div class="wrapper-1">
                <div class="blocks">
                    <span>
                        <LabelIcon />
                    </span>
                    <p>если заказ не был использован и сохранил товарный вид(в том числе не нарушены бирки, ярлыки,
                        упаковочные материалы)</p>
                </div>
                <div class="blocks">
                    <span>
                        <ClockIcon />
                    </span>
                    <p>возврат и обмен осуществляется в течение двух дней с момента получения заказа</p>
                </div>
                <div class="blocks">
                    <span>
                        <ScooterIcon />
                    </span>
                    <p>возврат и обмен товара возможен только при отправке по Украине</p>
                </div>
                <div class="blocks">
                    <span>
                        <BookIcon />
                    </span>
                    <p>бланк возврата присутствует в каждой посылке </p>
                </div>
                <div class="blocks">
                    <span>
                        <DollarIcon />
                    </span>
                    <p>все расходы по обмену и возврату товара несет покупатель</p>
                </div>
                <div class="blocks">
                    <span>
                        <PlasticCardIcon />
                    </span>
                    <p>после получения возврата мы делаем перевод денежных средств на карту клиента</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import LabelIcon from "@/components/LabelIcon.vue";
import ClockIcon from "@/components/ClockIcon.vue";
import ScooterIcon from "@/components/ScooterIcon.vue";
import BookIcon from "@/components/BookIcon.vue";
import DollarIcon from "@/components/DollarIcon.vue";
import PlasticCardIcon from "@/components/PlasticCardIcon.vue";
export default {
    components: {
        LabelIcon,
        ClockIcon,
        ScooterIcon,
        BookIcon,
        DollarIcon,
        PlasticCardIcon,
    }
}
</script>

<style scoped>
@media screen and (max-width: 1055px) {
    .wrapper-1 {
        display: flex !important;
        justify-content: center !important;
        align-items: flex-start !important;
        flex-wrap: wrap !important;
        gap: 20px !important;
    }
}

.wrapper-1 {
    width: 100%;
    min-height: 250px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 10px;
    margin-top: 20px;
}

.blocks {
    width: 155px;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
}

.info-text {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
}

.mini-info {
    width: 100%;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
}

.title-text {
    color: #252525;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.title {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.head-section {
    width: 100%;
    min-height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

.wrapper {
    width: 90%;
    min-height: 70vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}</style>