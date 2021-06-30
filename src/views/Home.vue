<template>
  <div class="home">
    <img src="../assets/images/home_bg.svg" alt="viking" />
    <div class="content">
      <h2>Fenrir The Monster Wolf of Norse Mythology Necklace</h2>
      <div class="prices"><span>&#36;19.95</span> <span>&#36;29.95</span></div>
      <custom-button classList="redCustom">Start Shopping</custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
export default {
  components: { CustomButton },
  name: "Home",
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/sizes.scss";
@import "../assets/styles/colors.scss";
.home {
  height: 87.3vh;
  background: #131824;
}
img {
  width: 100%;
}
.content {
  position: fixed;
  top: 15%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  h2 {
    color: $white;
    font-family: "Goudy Bookletter 1911", serif;
    text-align: center;
    width: 30%;
    margin-bottom: 30px;
  }
  span {
    font-weight: bold;
    font-family: "Mulish", sans-serif;
    margin: 0px 10px;
    &:first-child {
      color: $white;
    }
    &:nth-child(2) {
      text-decoration: line-through;
    }
  }
  .prices {
    margin-bottom: 30px;
  }
}
@media screen and (min-width: $tablet) {
  img {
    width: 700px;
  }
}
</style>
