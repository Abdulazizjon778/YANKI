<template>
    <section class="w-[100%] min-h-[100vh] m-auto flex justify-center items-center flex-col">
        <div class="contacts w-[90%] h-[100px] flex justify-start items-center">
            <h2 class="contacts-text">Связаться с нами</h2>
        </div>
        <div class="wrapper">
            <div class="all-info">
                <div class="socials w-[150px] h-[50px] flex justify-between items-start flex-col">
                    <span class="title">В социальных сетях</span>
                    <div class="links flex justify-between items-center w-[50px]">
                        <InstagramIcon />
                        <TelegramIcon />
                    </div>
                </div>
                <div class="phone-numbers w-[200px] h-[90px] flex justify-between items-start flex-col">
                    <span class="title">По телефону</span>
                    <div class="phone">
                        <ul class="w-[100%] h-[55px] flex justify-between items-center flex-col">
                            <li class="basic inline-block">+38(067) 158 82 66</li>
                            <li class="basic inline-block">+38(073) 226 39 81</li>
                        </ul>
                    </div>
                </div>
                <div class="e-mail w-[200px] h-[60px] flex justify-between items-start flex-col">
                    <span class="title">По почте</span>
                    <div class="gmail">
                        <span class="basic">example@gmail.com</span>
                    </div>
                </div>
                <div class="location w-[210px] h-[75px] flex justify-between items-start flex-col">
                    <span class="title">Наш офис</span>
                    <div class="address">
                        <span class="basic">г. Киев, улица Батумская, 18</span>
                    </div>
                </div>
            </div>
            <FollowForm />
        </div>
    </section>
</template>

<script>
import FollowForm from '@/components/FollowForm.vue';
import InstagramIcon from '@/components/InstagramIcon.vue';
import TelegramIcon from '@/components/TelegramIcon.vue';

export default {
    components: { InstagramIcon, TelegramIcon, FollowForm }
}
</script>

<style scoped>
.basic {
    color: #252525;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}

.title {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.all-info {
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
}

.contacts-text {
    color: #252525;
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.wrapper {
    width: 90%;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
</style>