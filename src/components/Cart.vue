<template>
  <div class="cart">
    <header>
      <span>Cart(8 items)</span>
      <img src="../assets/images/close.svg" alt="close" width="15" />
    </header>
    <div class="body">
      <product />
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {
    Product: () => import("./Product"),
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
}
</style>
