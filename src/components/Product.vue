<template>
  <div class="product">
    <img src="../assets/images/chain.png" alt="product image" class="avatar" />
    <div class="content">
      <h4>
        Handmade Stainless Steel Massive Wolf Chain with Odin’s Protection Charm
        - 50cm / 20in $19.95 $29.95
      </h4>
      <div class="prices"><span>&#36;19.95</span> <span>&#36;29.95</span></div>
      <increaser />
    </div>
  </div>
</template>

<script>
import Increaser from "./Increaser.vue";
export default {
  components: { Increaser },
  name: "Product",
  props: {
    avatar: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
.product {
  display: flex;
  padding: 15px 5px;
  background: $white;
  text-align: left;
  border-bottom: 1px solid $ash;
}
h4 {
  color: $black;
  font-weight: bold;
  margin: 0px;
  padding-bottom: 15px;
}
img {
  height: 70px;
  width: 70px;
}
span {
  font-weight: bold;
  font-family: "Mulish", sans-serif;
  font-size: 0.8em;
  &:first-child {
    color: $red;
    margin-right: 20px;
  }
  &:nth-child(2) {
    text-decoration: line-through;
    color: $ash;
  }
}
.content {
  padding-left: 20px;
}
</style>
