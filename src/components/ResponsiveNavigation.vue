<template>
  <div class="responsive-navigation">
    <header>
      <custom-button @click.native="closeModal"
        ><img src="../assets/images/close-white.svg" alt=""
      /></custom-button>
    </header>
    <div class="input-container">
      <input type="text" />
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  name: "ResponsiveNavigation",
  methods: {
    closeModal() {
      this.$store.commit("setModal", {});
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
.responsive-navigation {
  background: $black;
  width: 100vw;
  height: 100vh;
}
header {
  display: flex;
  padding: 20px;
}
</style>
