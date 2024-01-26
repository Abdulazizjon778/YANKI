import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: "1",
        img: "./assets/images/IMAGEWHITE.png",
        title: "Белая куртка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "SML"],
      },
      {
        id: "2",
        img: "../src/assets/images/Rectangle 10 (2).png",
        title: "Синее пальто",
        price: "3150 грн",
        new: false,
        sizes: ["XS", "M", "L"],
      },
      {
        id: "3",
        img: "../src/assets/images/Rectangle 7 (1).png",
        title: "Бежевая шуба",
        price: "4200 грн",
        new: false,
        sizes: ["XS", "S", "L"]
      },
      {
        id: "4",
        img: "../src/assets/images/Rectangle 9 (1).png",
        title: "Синяя парка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "S", "M", "L"]
      },
      {
        id: "5",
        img: "../src/assets/images/Rectangle 11 (1).png",
        title: "Белая куртка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "SML"],
      },
      {
        id: "6",
        img: "../src/assets/images/Rectangle 10 (2).png",
        title: "Синее пальто",
        price: "3150 грн",
        new: false,
        sizes: ["XS", "M", "L"]
      },
      {
        id: "7",
        img: "../src/assets/images/Rectangle 11 (1).png",
        title: "Белая куртка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "SML"],
      },
      {
        id: "8",
        img: "../src/assets/images/Rectangle 10 (2).png",
        title: "Синее пальто",
        price: "3150 грн",
        new: false,
        sizes: ["XS", "M", "L"]
      },
      {
        id: "9",
        img: "../src/assets/images/Rectangle 7 (1).png",
        title: "Бежевая шуба",
        price: "4200 грн",
        new: false,
        sizes: ["XS", "S", "L"]
      },
      {
        id: "10",
        img: "../src/assets/images/Rectangle 9 (1).png",
        title: "Синяя парка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "S", "M", "L"]
      },
      {
        id: "11",
        img: "../src/assets/images/Rectangle 11 (1).png",
        title: "Белая куртка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "SML"],
      },
      {
        id: "12",
        img: "../src/assets/images/Rectangle 10 (2).png",
        title: "Синее пальто",
        price: "3150 грн",
        new: false,
        sizes: ["XS", "M", "L"]
      },
    ]
  },
  getters: {
    clothes: (state) => state.products
  },
  mutations: {},
  actions: {},
  modules: {},
});
