<template>
  <div>
    <div class="img-container container">
      <img
        src="../assets/images/chain.png"
        alt="chain"
        width=""
        class="base-image"
      />
      <div class="img-selector">
        <custom-button>&#60;</custom-button>
        <div class="img-collection">
          <img
            src="../assets/images/chain.png"
            alt="chain"
            width="50"
            v-for="(img, index) in 4"
            :key="index"
          />
        </div>
        <custom-button> &#62;</custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
export default {
  name: "ImgViewer",
  components: { CustomButton },
};
</script>

<style lang="scss" scoped>
.img-container {
  .base-image {
    width: 100%;
    height: 60vh;
  }
}
.img-selector {
  display: flex;
  justify-content: space-around;
  img {
    margin: 0px 4px;
  }
}
button {
  font-size: 1em;
}
</style>
