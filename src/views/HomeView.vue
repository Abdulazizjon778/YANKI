<template>
    <section class="w-[100%] min-h-[100vh] bg-transparent m-auto flex justify-center items-center">
        <div class="image-block">
            <div class="block-text">
                <h2 class="title">Новая коллекция</h2>
                <div class="line"></div>
                <p class="info">Смотреть Новинки</p>
            </div>
        </div>
    </section>

    <section class="w-[100%] min-h-[700px] m-auto flex justify-center items-center mt-[50px]">
        <div class="wrapper">
            <div class="title-block w-[100%] h-[70px] flex justify-start items-center">
                <h2 class="title-text">Категории</h2>
            </div>
            <div class="slider-block w-[100%] min-h-[100px] flex justify-center items-center flex-col">
                <SwiperView />
            </div>
        </div>
    </section>

    <FollowForm />
</template>


<script>
import FollowForm from '@/components/FollowForm.vue';
import SwiperView from '@/components/SwiperView.vue'
export default {
    components: { SwiperView, FollowForm },

}
</script>

<style scoped>
@media screen and (max-width: 550px) {
    .title-form {
        font-size: 24px !important;
    }

    .input {
        height: 40px !important;
    }

    .button-follow {
        display: flex;
        width: 335px;
        padding: 12px 81px 11px 81px !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
}

.notice {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    max-width: 600px;
}

.button-follow {
    display: flex;
    width: 90%;
    padding: 16px 81px 17px 81px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #E0BEA2;
    color: white;
}

.input::placeholder {
    color: rgba(37, 37, 37, 0.50);
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}

.input {
    width: 90%;
    height: 50px;
    border: 1px solid #252525;
    border-radius: 0px;
    outline: none;
}

.title-form {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

@media screen and (max-width: 550px) {
    .title-text {
        color: #252525 !important;
        font-family: Raleway !important;
        font-size: 24px !important;
        font-style: normal !important;
        font-weight: 300 !important;
        line-height: normal !important;
    }
}

.title-text {
    color: #252525;
    font-family: Raleway;
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.wrapper {
    width: 90%;
    min-height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

.block-text {
    max-width: 500px;
    min-height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

.info {
    color: #FFF;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 10px;
}

.line {
    width: 120px;
    height: 1px;
    background: #FFF;
}

.title {
    color: #FFF;
    text-align: center;
    font-family: Raleway;
    font-size: 46px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.image-block {
    width: 100%;
    min-height: 120vh;
    background-image: url("../assets/images/Фон.png");
    background-repeat: no-repeat;
    object-fit: cover;
    background-position: left 100%;
    background-size: cover;
    position: absolute;
    top: 0;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>