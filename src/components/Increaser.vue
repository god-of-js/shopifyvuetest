<template>
  <div class="increaser">
    <custom-button classList="grey-border font-bg" @click.native="subtract">
      -</custom-button
    >
    <input type="number" v-model="number" @input="$emit('getInput', number)" />
    <custom-button classList="grey-border font-bg" @click.native="add"
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
      if (this.number !== 0) {
        this.number -= 1;
        this.$emit("getInput", this.number);
      }
    },
    add() {
      this.number += 1;
      this.$emit("getInput", this.number);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
.increaser {
  display: flex;
}
button {
  width: 30px;
}
input {
  width: 70px;
  height: 40px;
  outline: none;
  background: $white;
  border: 1px solid $lighter-ash;
  box-sizing: border-box;
  box-shadow: inset 0px 2px 2px $box-shadow;
}
</style>
