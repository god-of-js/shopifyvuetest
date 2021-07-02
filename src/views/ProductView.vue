<template>
  <div class="product">
    <div class="container">
      <img-viewer />
    </div>
    <div class="content-container container">
      <h2>
        <b>
          Handmade Stainless Steel Kings Chain Viking Geri And Freki Mjolnir
          Necklace</b
        >
      </h2>
      <div class="content-body">
        <div>
          <b>Choose your length</b>
        </div>
        <select name="" id="">
          <option value="60 CM (24 INCHES)">60 CM (24 INCHES)</option>
        </select>
        <div class="prices">
          <span>&#36;19.95</span> <span>Tax included</span>
        </div>
        <div class="d-flex">
          <increaser />
          <custom-button :classList="'redCustom '" class="ml">
            Add to card</custom-button
          >
        </div>
        <h3 class="text-heading">
          <b>
            Handmade Stainless Steel Kings Chain Viking Geri And Freki Mjolnir
            Necklace</b
          >
        </h3>
        <p>
          The Kings chain was worn by Viking kings as a status symbol as the
          name applies. This is a 100% handmade Stainless Steel Chain. The
          crafting is a very time consuming process to put together the chain
          link by link. The hand made chain connects together with a lobster
          clamp.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
import ImgViewer from "../components/ImgViewer.vue";
import Increaser from "../components/Increaser.vue";
export default {
  components: { ImgViewer, Increaser, CustomButton },
  name: "ProductView",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/sizes.scss";
@import "../assets/styles/colors.scss";
.product {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: left;
  .container {
    width: 100%;
  }
  .d-flex {
    display: flex;
    align-items: center;
  }
  h2 {
    font-family: Goudy Bookletter 1911;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
  }
}
select {
  width: 100%;
  background: #ffffff;
  border: 1px solid $lighter-ash;
  box-sizing: border-box;
  box-shadow: inset 0px -2px 2px $box-shadow;
  border-radius: 4px;
  outline: none;
  padding: 16px 12px;
  margin: 7px 0px;
}
.prices {
  margin: 5px 0px 20px 0px;
  display: flex;
  align-items: flex-start;
  span {
    font-weight: bold;
    font-family: "Mulish", sans-serif;
    margin: 0px 10px;
    &:first-child {
      color: $red;
      font-size: 1.4em;
    }
    &:nth-child(2) {
      font-size: 0.8em;
    }
  }
}
.content-body {
  background: rgba(32, 32, 32, 0.05);
  padding: 10px;
  text-align: left;
  h3 {
    font-family: "Mulish", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-size: 0.9em;
  }
  .text-heading {
    font-size: 1em;
    font-weight: bolder;
  }
}
.ml {
  margin-left: 15px;
}
@media screen and (min-width: $tablet) {
  .product {
    flex-direction: row;
    padding: 0px 7%;
  }

  .content-container {
    padding-left: 20px;
  }
  select {
    width: 40%;
  }
  .content-body {
    background: $white;
  }
  .container {
    width: 50%;
  }
}
</style>
