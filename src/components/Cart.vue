<template>
  <div class="cart">
    <header>
      <span>Cart(8 items)</span>
      <custom-button @click.native="closeModal">
        <img src="../assets/images/close.svg" alt="close" width="15"
      /></custom-button>
    </header>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ea dolorum.
    Atque, ad corrupti, exercitationem libero illo tenetur facilis sed numquam
    dolor iure et enim repellat rem voluptatum quibusdam? Expedita.
    <pre>{{ products }}</pre>
    <div class="body">
      <product v-for="(product, index) in 4" :key="index" />
    </div>
    <footer>
      <div>
        <span>Subtotal</span>
        <span>&#36;144.95</span>
      </div>
      <div>
        <custom-button classList="black-border">View Cart</custom-button>
        <custom-button classList="redCustom">Proceed to Checkout</custom-button>
      </div>
    </footer>
  </div>
</template>

<script>
import { ALL_PRODUCTS } from "@/constants/graphql";
import CustomButton from "./CustomButton.vue";
export default {
  name: "Cart",
  apollo: {
    products: { query: ALL_PRODUCTS },
  },
  components: {
    Product: () => import("./Product"),
    CustomButton,
  },
  mounted() {
    this.getCart();
  },
  methods: {
    closeModal() {
      this.$store.commit("setModal", {});
    },
    getCart() {},
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
header {
  display: flex;
  justify-content: space-between;
  background: $ash;
  padding: 15px 10px;
}
.cart {
  background: $white;
  height: 100%;
}
.body {
  background: $white;
  padding: 10px;
  overflow-y: auto;
  height: 70vh;
}
footer {
  padding: 0px 20px;
  height: 20vh;
  background: $ash;
  div {
    display: flex;
  }
  div:first-child {
    justify-content: space-between;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    padding: 15px 0px;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }
}
</style>
