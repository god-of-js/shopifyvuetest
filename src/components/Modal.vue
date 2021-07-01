<template>
  <div class="modal">
    <div class="card-container">
      <component :is="modalComponent" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Modal",
  data: () => {
    return {
      componentId: "Cart",
    };
  },
  computed: {
    ...mapState(["modalComponent"]),
  },
  components: {
    Cart: () => import("./Cart.vue"),
    ResponsiveNavigation: () => import("./ResponsiveNavigation.vue"),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";
@import "../assets/styles/sizes.scss";
.modal {
  background: $modal-bg;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  display: flex;
  justify-content: flex-end;
}
.card-container {
  height: 100vh;
  background-color: $white;
}
@media screen and (min-width: $tablet) {
  .card-container {
    width: 30%;
  }
}
</style>
