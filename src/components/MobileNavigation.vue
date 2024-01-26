<template>
    <div class="collapse collapse-arrow bg-[#E0BEA2] text-center absolute border-transparent text-[white] rounded-none">
        <input type="checkbox" />
        <div class="collapse-title">
            <span class="title">Каталог</span>
        </div>
        <div class="collapse-content">
            <ul>
                <li>New</li>
                <li>Bestsellers</li>
                <li>Верхняя одежда</li>
                <li>Шубы</li>
                <li>Тренчи</li>
                <li>Пальто</li>
                <li>Пуховики и жилеты</li>
                <li>Костюмы</li>
                <li>Жакеты</li>
                <li>Платья</li>
                <li>Рубашки и блузы</li>
                <li>Юбки</li>
                <li>Футболки и топы</li>
                <li>Аксессуары</li>
                <li>Sale</li>
                <li>Summer</li>
                <li>Посмотреть всё</li>
            </ul>
        </div>
    </div>
</template>

<script>
import ChevronDown from './ChevronDown.vue'
export default {
    components: { ChevronDown },

}
</script>

<style scoped>
.title {
    color: #FFF;
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.collapse-content ul li {
    display: block;
    padding: 10px;
    user-select: none;
}
</style>