<template>
  <section class="max-w-[100%] h-[44vh] m-auto flex justify-center items-center">
    <div class="wrapper-1 w-[90%] h-[30vh] flex justify-center items-center">
      <form class="max-w-[700px] h-[300px] flex justify-between items-center flex-col" action="#">
        <h2 class="title-form">Узнайте первым о новинках</h2>
        <input class="input" placeholder="Ваш e-mail*" type="email">
        <button class="button-follow">ПОДПИСАТЬСЯ</button>
        <p class="notice">Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и
          ознакомлен(а) с условиями
          конфиденциальности.</p>
      </form>
    </div>
  </section>
</template>

<script>
export default {

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
</style>