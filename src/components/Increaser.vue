<template>
  <div class="increaser">
    <custom-button classList="grey-border font-bg" @click="subtract">
      -</custom-button
    >
    <input type="number" v-model="number" />
    <custom-button classList="grey-border font-bg" @click="add"
      >+</custom-button
    >
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  name: "Increaser",
  data: () => {
    return {
      number: 1,
    };
  },
  methods: {
    subtract() {
      if (this.number > 1) {
        this.number = -1;
        this.$emit("subtract", this.number);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
.increaser {
  display: flex;
  margin-top: 15px;
}
input {
  border: 2px solid $ash;
  width: 70px;
  border-radius: 4px;
  outline: none;
}
</style>
