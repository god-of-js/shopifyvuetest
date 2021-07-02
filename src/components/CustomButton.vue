<template>
  <button :class="classList"><slot /></button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    classList: {
      type: String,
      default: "transparent",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
button {
  outline: none;
  cursor: pointer;
}
.transparent {
  background: transparent;
  border: transparent;
}
.redCustom {
  background: $red;
  border: 1px solid $border-red;
  box-sizing: border-box;
  box-shadow: inset 0px -2px 2px rgba(32, 32, 32, 0.33);
  border-radius: 4px;
  color: $white;
  padding: 13px 40px;
}
.grey-border {
  background: $white;
  border: 1px solid $lighter-ash;
  box-sizing: border-box;
  box-shadow: inset 0px -2px 2px $box-shadow;
}
.black-border {
  background: $white;
  border: 1px solid $black;
  padding: 10px 30px;
  border-radius: 4px;
  font-weight: bold;
  color: $black;
}
.font-bg {
  font-size: 1.2em;
}
</style>
