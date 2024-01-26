<template>
    <div class="wrapper">
        <!-- <div class="personal-data-title">
      <h2 class="title-text">Персональные данные:</h2>
    </div> -->
        <div class="form-section w-[100%] min-h-[100px] flex justify-between items-start flex-col">
            <div class="form-title w-[100%] min-h-[60px] flex justify-start items-center">
                <h2 class="title-text">Персональные данные:</h2>
            </div>
            <form class="form-1 w-[100%] min-h-[60px] flex justify-between items-center flex-wrap" action="#">
                <input class="inputs" placeholder="Елизаветта" type="text">
                <input class="inputs" placeholder="Станиславчук" type="text">
                <input class="inputs" placeholder="ella.s97@gmail.com" type="email">
                <input class="inputs" placeholder="+38(067)470 20 66" type="number">
            </form>
        </div>
        <div class="second-form w-[100%] min-h-[100px] flex justify-between items-start flex-col">
            <div class="second-title w-[100%] min-h-[50px] flex justify-start items-center">
                <h2 class="title-text">Адрес доставки:</h2>
            </div>
            <form class="w-[100%] min-h-[70px] flex justify-between items-center gap-[5px] flex-wrap" action="#">
                <input class="big-inputs" placeholder="Черновцы" type="text">
                <input class="big-inputs" placeholder="№4" type="text">
            </form>
        </div>
        <div class="button w-[100%] min-h-[80px] flex justify-center items-center">
            <button @click="refresh()" class="button-refresh">ОБНОВИТЬ ИНФОРМАЦИЮ</button>
        </div>
    </div>
</template>

<script>
export default {
    
    methods: {
        refresh() {
            window.location.reload()
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 604px) {
    .inputs {
        width: 100% !important;
    }
}

.button-refresh {
    width: 100%;
    height: 50px;
    background: #E0BEA2;
    color: #FFF;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
}

.big-inputs {
    width: 560px;
    height: 50px;
    border: 1px solid #252525;
    padding: 10px;
    outline: none;
    margin-top: 10px;
}

.big-inputs::placeholder {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}

.inputs::placeholder {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}

.inputs {
    width: 270px;
    height: 50px;
    border: 1px solid #252525;
    padding: 10px;
    outline: none;
    margin-top: 10px;
}

.title-text {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.personal-data-title {
    width: 100%;
    height: 70px;
    border: 2px solid red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.wrapper {
    width: 100%;
    min-height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
</style>