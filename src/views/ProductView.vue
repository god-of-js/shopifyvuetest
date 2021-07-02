<template>
  <div class="product">
    <div class="container">
      <img-viewer />
    </div>
    <div class="content-container container">
      <h2>
        Handmade Stainless Steel Kings Chain Viking Geri And Freki Mjolnir
        Necklace
      </h2>
      <div class="content-body">
        <h3>Choose your length</h3>
        <select name="" id="">
          <option value="60 CM (24 INCHES)">60 CM (24 INCHES)</option>
        </select>
        <increaser />
        <h3>
          Handmade Stainless Steel Kings Chain Viking Geri And Freki Mjolnir
          Necklace
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
import ImgViewer from "../components/ImgViewer.vue";
import Increaser from "../components/Increaser.vue";
export default {
  components: { ImgViewer, Increaser },
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
  .container {
    width: 100%;
  }
  h2 {
    font-family: Goudy Bookletter 1911;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
  }
}
.content-body {
  background: rgba(32, 32, 32, 0.05);
  padding: 10px;
  h3 {
    font-family: "Mulish", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
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
}
@media screen and (min-width: $tablet) {
  .product {
    flex-direction: row;
    padding: 0px 7%;
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
