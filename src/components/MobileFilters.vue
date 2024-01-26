<template>
    <div class="mobile-filters">
        <div
            class="collapse collapse-arrow w-[100%] bg-white absolute z-[10]  top-[0] border-[1px] border-transparent border-solid border-b-[#252525] rounded-none">
            <input type="checkbox" />
            <div class="collapse-title">
                <span class="h-[30px] flex justify-start items-center gap-[10px]"><span class="filters-title">Фильтры</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <g clip-path="url(#clip0_372_321)">
                            <path
                                d="M8.75 8.75V12.5L6.25 13.75V8.75L2.5 3.125V1.875H12.5V3.125L8.75 8.75ZM4.0025 3.125L7.5 8.37125L10.9975 3.125H4.0025Z"
                                fill="#E0BEA2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_372_321">
                                <rect width="15" height="15" fill="white" />
                            </clipPath>
                        </defs>
                    </svg></span>
            </div>
            <div class="collapse-content">
                <collapse-button><span class="text-dropwdown">Размер</span></collapse-button>
                <collapse-button><span class="text-dropwdown">Цвет</span></collapse-button>
                <collapse-button><span class="text-dropwdown">Цена</span></collapse-button>
                <collapse-button><span class="text-dropwdown">Сортировать по</span></collapse-button>
            </div>
        </div>
    </div>
</template>

<script>
import DropdownButton from './DropdownButton.vue';
import CollapseButton from './CollapseButton.vue';
export default {
    components: { CollapseButton, DropdownButton }
}
</script>

<style scoped>
.text-dropwdown {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
.filters-title {
    color: #252525;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

div.collapse-title::after {
    color: #E0BEA2;
}

.mobile-filters {
    width: 100%;
    min-height: 65px;
    /* border: 2px solid red; */
    display: none;
    justify-content: center;
    align-items: center;
    position: relative;
}
</style>