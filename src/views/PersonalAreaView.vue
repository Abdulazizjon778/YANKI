<template>
    <section class="w-[100%] min-h-[10vh] m-auto flex justify-center items-center">
        <div class="wrapper w-[90%] min-h-[10vh] ">
            <div class="navigation-header">
                <div class="buttons-tabs">
                    <div class="first-tab">
                        <button @click="this.active = false" :class="{ 'notactive-tab': this.active == true }"
                            class="first-btn">История
                            заказов</button>
                    </div>
                    <div class="second-tab">
                        <button @click="this.active = true" :class="{ 'active-tab': this.active == true }"
                            class="second-btn">Личные
                            данные</button>
                    </div>
                    <div class="third-tab">
                        <button @click="infoNotification()" v-if="this.auth == true" class="third-btn">Выйти</button>
                        <button v-else @click="popup()" class="third-btn">Войти</button>
                    </div>
                </div>
            </div>
            <HistoryProductsView v-if="this.active == false" />
            <PersonalDataView v-if="this.active" />
        </div>
    </section>

    <div v-if="this.popupActive == true"
        class="wrp-popup w-[100%] h-[100vh] bg-[red] fixed top-[0] z-[1000] flex justify-center items-center">
        <div class="popup">
            <div class="popup-title">
                <h2 class="popup-text">Авторизация</h2>
            </div>
            <div class="wrp-form w-[80%] h-[max-content] flex justify-between items-center flex-col">
                <form @submit.prevent="login" class="w-[100%] h-[240px] flex justify-between items-center flex-col"
                    action="#">
                    <input v-model="email" placeholder="Ваш e-mail*" class="popup-input" required type="email">
                    <input v-model="password" placeholder="Ваш пароль*" class="popup-input" required type="password">

                    <div class="offers w-[100%] h-[50px] flex justify-between items-center">
                        <div class="password">
                            <span class="links">Забыли пароль?</span>
                        </div>
                        <div class="account">
                            <span @click="this.popupActive = false, this.regPopup = true" class="links">Нет аккаунта?</span>
                        </div>
                    </div>
                    <div class="button w-[100%] h-[50px] flex justify-center items-center">
                        <button class="btn-submit" type="submit">Войти</button>
                    </div>
                </form>
            </div>
            <div class="close w-[30px] h-[30px] flex justify-center items-center absolute right-[10px] top-[10px]">
                <button @click="this.popupActive = false" class="close-btn">
                    <CloseButton />
                </button>
            </div>
        </div>
    </div>
    <div v-if="this.regPopup == true"
        class="reg-popup w-[100%] h-[100vh] fixed top-[0] z-[1000] flex justify-center items-center">
        <div class="popup">
            <div class="popup-title">
                <span class="popup-text">Регистрация</span>
            </div>
            <div class="wrp-form w-[80%] min-h-[215px] flex justify-between items-center flex-col">
                <form @submit.prevent="submitForm" class="w-[100%] h-[200px] flex justify-between items-center flex-col"
                    action="#">
                    <input placeholder="Ваш e-mail*" class="email popup-input" required type="email">
                    <input placeholder="Ваш пароль*" class="password popup-input" required type="password">
                    <div class="button w-[100%] h-[50px] flex justify-center items-center">
                        <button class="btn-submit" type="submit">Продолжить</button>
                    </div>
                </form>
            </div>
            <div class="close w-[30px] h-[30px] flex justify-center items-center absolute right-[10px] top-[10px]">
                <button @click="this.regPopup = false" class="close-btn">
                    <CloseButton />
                </button>
            </div>
        </div>
    </div>
    <div v-if="this.info == true"
        class="info-wrp w-[100%] h-[100vh] fixed top-[0] z-[1000] flex justify-center items-center">
        <div class="info-notification">
            <div class="message w-[100%] min-h-[140px] text-center flex justify-between items-center">
                <h4 class="popup-text">Вы хотите выйти из учетной записи <span class="font-[700]">{{ this.account }}</span>
                    ?</h4>
            </div>
            <div class="btns w-[90%] min-h-[65px] flex justify-between items-center flex-wrap">
                <button @click="logOut()" class="goOut">Выйти</button>
                <button @click="this.info = false" class="cancel">Отмена</button>
            </div>
            <div class="close w-[30px] h-[30px] flex justify-center items-center absolute right-[10px] top-[10px]">
                <button @click="this.info = false" class="close-btn">
                    <CloseButton />
                </button>
            </div>
        </div>
    </div>

    <div v-if="this.errorPopup == true"
        class="error-wrp w-[100%] h-[100vh] fixed top-[0] z-[1000] flex justify-center items-center">
        <div class="error-info">
            <div class="message w-[100%] h-[120px] flex justify-center items-center text-center">
                <h4 class="popup-text">Неверный пароль или имя пользователя, попробуйте еще раз</h4>
            </div>
            <div class="btn-close w-[100%] h-[60px] flex justify-center items-center">
                <button @click="this.errorPopup = false" class="goOut">Ок</button>
            </div>
            <div class="close w-[30px] h-[30px] flex justify-center items-center absolute right-[10px] top-[10px]">
                <button @click="this.errorPopup = false" class="close-btn">
                    <CloseButton />
                </button>
            </div>
        </div>
    </div>

    <div v-if="this.successful == true"
        class="successful-wrp w-[100%] h-[100vh] fixed top-[0] z-[1000] flex justify-center items-center">
        <div class="successful">
            <div class="message w-[100%] h-[70px] flex justify-center items-center">
                <h4 class="popup-text">Регистрация - успешно!</h4>
            </div>
            <div class="message-info w-[100%] h-[100px] flex justify-center items-center">
                <p class="message-text">Вы успешно зарегестрировались! Приятных покупок!</p>
            </div>
            <div class="close w-[30px] h-[30px] flex justify-center items-center absolute right-[10px] top-[10px]">
                <button @click="successfulClose()" class="close-btn">
                    <CloseButton />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ChevronDown from "@/components/ChevronDown.vue";
import CloseButton from "@/components/CloseButton.vue";
import DeleteButton from "@/components/DeleteButton.vue";
import HistoryProductsView from '@/components/HistoryProductsView.vue';
import PersonalDataView from '@/components/PersonalDataView.vue';
export default {
    data() {
        return {
            cart: JSON.parse(localStorage.getItem("cart")) || [],
            active: false,
            popupActive: false,
            regPopup: false,
            api: import.meta.env.VITE_API,
            email: "",
            password: "",
            showLogin: true,
            user: {},
            auth: false,
            info: false,
            account: localStorage.getItem("email"),
            errorPopup: false,
            successful: false,
        }
    },

    created() {
        console.log(localStorage.getItem('VITE_LOGIN'));
        if (localStorage.getItem('VITE_LOGIN') === 'true') {
            this.auth = true;
        }
    },

    components: {
        ChevronDown,
        DeleteButton,
        HistoryProductsView,
        PersonalDataView,
        CloseButton
    },
    methods: {
        popup() {
            this.popupActive = true
        },
        infoNotification() {
            this.info = true
        },
        logOut() {
            localStorage.clear()
            this.$router.push("/")
            setTimeout(() => {
                window.location.reload()
            }, 100);
        },
        async login() {
            let response = await axios.get(this.api);
            let users = response.data;
            let isLoggedIn = false;
            console.log(users);
            for (let user of users) {
                if (this.email === user.email && this.password === user.password) {
                    isLoggedIn = true;
                    localStorage.setItem("email", this.email);
                    localStorage.setItem("password", this.password);
                    localStorage.setItem('VITE_LOGIN', 'true');
                    break;
                }
            }

            if (isLoggedIn) {
                this.successful = true

            } else {
                this.errorPopup = true
            }
        },
        successfulClose() {
            this.successful = false
            this.$router.push("/")
            setTimeout(() => {
                window.location.reload()
            }, 100);
        },
        async submitForm() {
            let email = document.querySelector(".email").value;
            let password = document.querySelector(".password").value;


            let obj = {
                email: email,
                password: password,
            };

            await axios.post(this.api, obj);

            this.popupActive = true
            this.regPopup = false
        },
    },
}   
</script>

<style scoped>
.message-text {
    color: #252525;
    text-align: center;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.successful {
    width: 600px;
    height: 191px;
    background: white;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 20px;
}

.error-info {
    width: 400px;
    height: 200px;
    background: white;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
}

.goOut {
    padding: 7px;
    width: 140px;
    height: 50px;
    background: #E0BEA2;
    border-radius: 17px;
    font-family: Raleway;
    color: white;
    font-size: 17px;
    border: none;
    cursor: pointer;
    font-weight: 600;
}

.cancel {
    padding: 7px;
    width: 140px;
    height: 50px;
    background: white;
    border-radius: 17px;
    border: 1px solid black;
    font-family: Raleway;
    color: black;
    font-size: 17px;
    cursor: pointer;
    font-weight: 600;
}

.info-notification {
    width: 370px;
    min-height: 220px;
    background: white;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;
}

.wrp-popup {
    background: rgba(99, 95, 95, 0.655);
}

.reg-popup {
    background: rgba(99, 95, 95, 0.655);
}

.info-wrp {
    background: rgba(99, 95, 95, 0.655);
}

.error-wrp {
    background: rgba(99, 95, 95, 0.655);
}

.successful-wrp {
    background: rgba(99, 95, 95, 0.655);
}

.close-btn {
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.btn-submit {
    width: 100%;
    height: 100%;
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
}

.links {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-decoration-line: underline;
    cursor: pointer;
}

.popup-input {
    width: 100%;
    height: 50px;
    border: 1px solid #252525;
    padding: 20px;
    outline: none;
}

.popup-text {
    color: #252525;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.popup-title {
    width: 100%;
    height: 70px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup {
    width: 600px;
    height: 382px;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding: 20px;
}

.notactive-tab {
    background: white;
    color: #252525 !important;
}

.active-tab {
    background: #E0BEA2;
    color: #FFF !important;
}

@media screen and (max-width: 759px) {
    .navigation-header {
        min-height: 40px !important;
    }

    .buttons-tabs {
        min-height: 40px !important;
    }

    .first-tab {
        width: 152px !important;
        height: 40px !important;
    }

    .first-btn {
        font-size: 14px !important;
    }

    .second-tab {
        width: 152px !important;
        height: 40px !important;
    }

    .second-btn {
        font-size: 14px !important;
    }

    .third-tab {
        width: 152px !important;
        height: 40px !important;
    }

    .third-btn {
        font-size: 14px !important;
    }
}

.second-btn {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 100%;
    height: 100%;
    transition-duration: .3s;

}

.third-btn {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 100%;
    height: 100%;
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
    transition-duration: .3s;
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
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.navigation-header {
    width: 100%;
    min-height: 50px;
    border-top: 1px solid #252525;
    border-bottom: 1px solid #252525;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>