<template>
  <section class="all-wrp w-[100%] min-h-[50vh] m-auto flex justify-center items-center flex-col">
    <div class="placing-title w-[90%] h-[120px] flex justify-start items-center">
      <h2 class="placing-text">Оформление заказа</h2>
    </div>
    <div class="wrapper">
      <div class="left-section">
        <div class="personal-info">
          <div class="info-title">
            <h2 class="personal-text">Персональные данные:</h2>
          </div>
          <form class="mt-[10px] w-[100%] min-h-[200px] flex justify-between items-center flex-wrap" action="#">
            <input class="inputs" placeholder="Ваше имя*" type="text">
            <input class="inputs" placeholder="Ваша фамилия*" type="text">
            <input class="inputs" placeholder="Ваш e-mail*" type="email">
            <input class="inputs" placeholder="Ваш телефон*" type="number">
          </form>
        </div>
        <div class="delivery-service w-[100%] min-h-[100%] flex justify-between items-start flex-col">
          <div class="delivery-title">
            <h2 class="personal-text">Способ доставки:</h2>
          </div>
          <div class="services w-[100%] min-h-[200px] flex justify-between items-center flex-wrap">
            <div class="left-services-content max-w-[400px] min-h-[150px] flex justify-between items-start flex-col">
              <div class="left-title">
                <h2 class="personal-text">По Украине:</h2>
              </div>
              <div class="variants w-[100%] min-h-[100px] flex justify-between items-start flex-col">
                <div class="variant">
                  <input type="radio" name="radio-1" class="radio mr-[10px] checked:bg-[#E0BEA2]" checked />
                  <span class="variants-text">Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)</span>
                </div>
                <div class="variant">
                  <input type="radio" name="radio-1" class="radio mr-[10px] checked:bg-[#E0BEA2]" />
                  <span class="variants-text">Новая Почта</span>
                </div>
              </div>
            </div>
            <div class="right-services-content flex-1 h-[150px] flex justify-between items-start flex-col">
              <div class="right-title">
                <h2 class="personal-text">Международная доставка:</h2>
              </div>
              <div class="variants w-[100%] min-h-[100px] flex justify-between items-start flex-col">
                <div class="variant">
                  <input type="radio" name="radio-1" class="radio mr-[10px] checked:bg-[#E0BEA2]" />
                  <span class="variants-text">Украпочта / 1-3 недели / 30$</span>
                </div>
                <div class="variant">
                  <input type="radio" name="radio-1" class="radio mr-[10px] checked:bg-[#E0BEA2]" />
                  <span class="variants-text">DHL / 3-7 дней / 60$</span>
                </div>
              </div>
            </div>
          </div>
          <div class="adress w-[100%] min-h-[300px] flex justify-between items-start flex-col">
            <div class="adress-title">
              <h2 class="personal-text">Адрес доставки:</h2>
            </div>
            <form class="w-[100%] min-h-[100px] flex justify-between items-center flex-wrap" action="#">
              <input class="inputs" placeholder="Город*" type="text">
              <input class="inputs" placeholder="Отделение почты*" type="email">
            </form>
            <div class="payment-with w-[100%] min-h-[200px] flex justify-between items-start flex-col">
              <div class="payment-title">
                <h2 class="personal-text desktop-personal-text">Вы можете оплатить покупку одним из ниже перечисленных
                  способов:</h2>
                <h2 class="personal-text mobile-personal-text">Способ оплаты:</h2>
              </div>
              <div class="left-variants w-[100%] min-h-[150px] flex justify-between items-start flex-wrap">
                <div class="variant">
                  <input type="radio" name="radio-2" class="radio mr-[10px] checked:bg-[#E0BEA2]" />
                  <span class="variants-text flex justify-between items-center">Полная предоплата через Приват 24
                    <OnlyIcon class="ml-[5px]" />
                  </span>
                </div>
                <div class="variant">
                  <input type="radio" name="radio-2" class="radio mr-[10px] checked:bg-[#E0BEA2]" />
                  <span class="variants-text flex justify-between items-center">Денежным переводом Visa/MasterCard <img
                      class="ml-[5px]" src="../assets/images/Visa_Inc._logo 1.png" alt="Visa"> <img class="ml-[5px]"
                      src="../assets/images/2560px-Mastercard_2019_logo 1.png" alt="Mastercard"> </span>
                </div>
                <div class="variant">
                  <input type="radio" name="radio-2" class="radio mr-[10px] checked:bg-[#E0BEA2]" checked />
                  <span class="variants-text">Наложенным платежом в отделении Новой Почты</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bonus w-[100%] h-[110px] flex justify-between items-start flex-col">
          <div class="bonus-title">
            <h2 class="personal-text">Использование бонусного счёта:</h2>
          </div>
          <input class="big-inp" placeholder="Сумма списания бонусов*" type="text">
        </div>
      </div>
      <div class="right-section">
        <div class="links w-[100%] h-[130px] flex justify-between items-start flex-col">
          <span class="link-1">Войти в личный кабинет</span>
          <span class="link-2">УСЛОВИЯ ДОСТАВКИ</span>
          <span class="link-2">УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</span>
          <span class="link-2">ИНФОРМАЦИЯ ОБ ОПЛАТЕ</span>
        </div>
        <div class="registration w-[100%] h-[100px] mt-[30px]">
          <div class="delivery w-[100%] h-[35px] flex justify-between items-center">
            <span class="reg-text">ДОСТАВКА:</span>
            <b class="right-texts">По тарифам перевозчика</b>
          </div>
          <div class="bonuses w-[100%] h-[35px] flex justify-between items-center">
            <span class="reg-text">БОНУСЫ:</span>
            <b class="right-texts">-69 грн</b>
          </div>
          <div class="total w-[100%] h-[35px] flex justify-between items-center">
            <span class="reg-text">ИТОГО:</span>
            <b class="right-texts">{{ totalPrice }} грн</b>
          </div>
        </div>
        <div class="delivery-button mt-[10px] w-[100%] h-[max-content]">
          <button class="button">ОФОРМИТЬ ЗАКАЗ</button>
        </div>
        <div class="description mt-[10px]">
          <p class="description-text">Нажимая на кнопку «оплатить заказ», я принимаю условия <span
              class="underline">публичной оферты</span> и
            политики конфиденциальности</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OnlyIcon from './OnlyIcon.vue';

export default {
  components: { OnlyIcon },
  props: {
    totalPrice: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1388px) {
  .wrapper {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column !important;
  }

  .left-section {
    max-width: 100% !important;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media screen and (max-width: 911px) {
  .button {
    width: 100% !important;
  }

  .right-section {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .bonus {
    width: 100%;
    height: 85px;
  }

  .bonus-title {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .big-inp {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;
  }

  .big-inp::placeholder {
    text-align: center !important;
  }

  .desktop-personal-text {
    display: none !important;
  }

  .mobile-personal-text {
    display: block !important;
  }

  .payment-title {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .adress-title {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .left-title {
    margin-top: 5px;
  }

  .delivery-title {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .placing-title {
    height: 70px !important;
    margin-top: 10px !important;
  }

  .left-section {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    flex-direction: column !important;
  }

  .delivery-service {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }

  .services {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }

  .left-services-content {
    width: 100% !important;
    min-height: 105px !important;
  }

  .right-services-content {
    width: 100% !important;
    min-height: 105px !important;
    margin-top: 20px;
  }

  .variants {
    min-height: 70px !important;
    margin-top: 10px;
  }

  .inputs {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;
    margin-top: 15px;
  }

  .inputs::placeholder {
    text-align: center !important;
  }
}

.mobile-personal-text {
  display: none;
}

.description-text {
  color: #252525;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.right-texts {
  color: #252525;
  text-align: right;
  font-family: Raleway-bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.reg-text {
  color: #252525;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.link-2 {
  color: #252525;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration-line: underline;
}

.link-1 {
  color: #E0BEA2;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration-line: underline;
}

.button {
  width: 300px;
  height: auto 50px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  text-align: center;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
  background: #E0BEA2;
}

.right-section {
  width: 300px;
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
}

.variants-text {
  color: #252525;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.personal-text {
  color: #252525;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.big-inp::placeholder {
  color: rgba(37, 37, 37, 0.50);
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
}

.big-inp {
  width: 100%;
  height: 50px;
  border: 1px solid #252525;
  outline: none;
  padding: 10px;
}

.inputs::placeholder {
  color: rgba(37, 37, 37, 0.50);
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
}

.inputs {
  width: 400px;
  height: 50px;
  border: 1px solid #252525;
  outline: none;
  padding: 10px;
  margin-right: 5px;
}

.left-section {
  max-width: 820px;
  min-height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
}

.variant {
  max-width: max-content;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.placing-text {
  color: #252525;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.wrapper {
  width: 90%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>