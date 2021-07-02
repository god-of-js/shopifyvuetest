<template>
  <div class="responsive-navigation">
    <header>
      <custom-button @click.native="closeModal"
        ><img src="../assets/images/close-white.svg" alt=""
      /></custom-button>
    </header>
    <div class="input-container">
      <input type="text" placeholder="Type your search" />
      <img src="../assets/images/search.svg" alt="" />
    </div>
    <nav>
      <ul>
        <li v-for="(route, index) in routeList" :key="index">
          {{ route.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  name: "ResponsiveNavigation",
  data: () => {
    return {
      routeList: [
        {
          name: "Vikings",
        },
        {
          name: "Ancient Egypt",
        },
        {
          name: "Celtics",
        },
        {
          name: "SALE",
        },
      ],
    };
  },
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
.input-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $border-ash;
  justify-content: center;
  margin: 20px;
  input {
    border: transparent;
    outline: none;
    width: 90%;
    background: transparent;
    color: $white;
  }
}
ul {
  padding: 20px;
  margin: 0px;
  list-style-type: none;
}
li {
  color: $white;
  text-align: left;
  border-bottom: 1px solid $border-ash;
  padding: 10px;
  font-weight: bold;
  font-family: "Mulish", sans-serif;
  font-size: 1.2em;
  &:last-child {
    color: $red;
  }
}
</style>
