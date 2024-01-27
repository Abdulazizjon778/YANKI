import { createStore } from "vuex";
import firstImage from "@/assets/images/Rectangle 11 (1).png";
import secondImage from "@/assets/images/Rectangle 10 (2).png";
import thirdImage from "@/assets/images/Rectangle 7 (1).png";
import fourthImage from "@/assets/images/Rectangle 9 (1).png";
export default createStore({
  state: {
    products: [
      {
        id: "1",
        // img: firstImage,
        img: "/assets/images/Rectangle 11 (1).png",
        title: "Белая куртка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "SML"],
      },
      {
        id: "2",
        img: secondImage,
        title: "Синее пальто",
        price: "3150 грн",
        new: false,
        sizes: ["XS", "M", "L"],
      },
      {
        id: "3",
        img: thirdImage,
        title: "Бежевая шуба",
        price: "4200 грн",
        new: false,
        sizes: ["XS", "S", "L"],
      },
      {
        id: "4",
        img: fourthImage,
        title: "Синяя парка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "S", "M", "L"],
      },
      {
        id: "5",
        img: firstImage,
        title: "Белая куртка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "SML"],
      },
      {
        id: "6",
        img: secondImage,
        title: "Синее пальто",
        price: "3150 грн",
        new: false,
        sizes: ["XS", "M", "L"],
      },
      {
        id: "7",
        img: firstImage,
        title: "Белая куртка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "SML"],
      },
      {
        id: "8",
        img: secondImage,
        title: "Синее пальто",
        price: "3150 грн",
        new: false,
        sizes: ["XS", "M", "L"],
      },
      {
        id: "9",
        img: thirdImage,
        title: "Бежевая шуба",
        price: "4200 грн",
        new: false,
        sizes: ["XS", "S", "L"],
      },
      {
        id: "10",
        img: fourthImage,
        title: "Синяя парка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "S", "M", "L"],
      },
      {
        id: "11",
        img: firstImage,
        title: "Белая куртка",
        price: "2900 грн",
        new: true,
        sizes: ["XXS", "XS", "SML"],
      },
      {
        id: "12",
        img: secondImage,
        title: "Синее пальто",
        price: "3150 грн",
        new: false,
        sizes: ["XS", "M", "L"],
      },
    ],
  },
  getters: {
    clothes: (state) => state.products,
  },
  mutations: {},
  actions: {},
  modules: {},
});
