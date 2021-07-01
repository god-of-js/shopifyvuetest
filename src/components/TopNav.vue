<template>
  <div class="TopNav">
    <custom-button
      class="menu"
      @click.native="openModal('ResponsiveNavigation')"
    >
      <img src="../assets/images/menu.svg" alt="menu" width="20" />
    </custom-button>
    <img src="../assets/images/logo.svg" alt="ancient treasures" width="170" />
    <nav>
      <ul>
        <li v-for="(route, index) in routeList" :key="index">
          {{ route.name }}
        </li>
      </ul>
      <custom-button class="search">
        <img src="../assets/images/search.svg" alt="cart" width="20" />
      </custom-button>
      <custom-button class="cart" @click.native="openModal('Cart')">
        <img src="../assets/images/cart.svg" alt="cart" width="20" />
      </custom-button>
    </nav>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  name: "TopNav",
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
    openModal(comp) {
      this.$store.commit("setModal", {
        modalState: true,
        modalComponent: comp,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/sizes.scss";
@import "../assets/styles/colors.scss";
.TopNav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;
}
nav {
  display: flex;
  align-items: center;
}
ul {
  display: none;
  list-style: none;
  margin-right: 30px;
  li {
    margin: 0px 10px;
    font-family: "Mulish", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    &:last-child {
      color: $red;
    }
  }
}
.search {
  display: none;
}

@media screen and (min-width: $tablet) {
  .menu {
    display: none;
  }
  ul {
    display: flex;
  }
  .search {
    display: block;
  }
}
</style>
