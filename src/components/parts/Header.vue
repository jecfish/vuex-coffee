<template>
  <ul>
    <li>
      <router-link to="/menu">menu</router-link>
      <!-- <a routerLink="/menu" routerLinkActive="active">menu</a> -->
    </li>
    <li>
      <router-link to="/cart">cart ({{ cartCount }})</router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: {
    // Option 2
    ...mapGetters({
      cartCount: "cart/cartCount"
    })
    // Option 1
    // ...mapState({
    //   cartCount: state =>
    //     state.cart.list
    //       .map(item => item.quantity)
    //       .reduce((acc, curr) => acc + curr, 0)
    // })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  display: flex;
  justify-content: center;
  border-bottom: 4px solid black;
  padding: 0;
}

li {
  list-style: none;
  padding: 10px 10px;
}

a {
  color: black;
  font-weight: bold;
}

a:hover {
  color: grey;
  text-decoration: none;
  border-bottom: 1px dotted grey;
}

a.router-link-active {
  color: goldenrod;
  border-bottom: 1px dotted goldenrod;
}

@media (min-width: 500px) {
  li {
    padding: 10px 20px;
  }

  a {
    font-size: 1.2rem;
  }
}
</style>
