<template>
  <div>
    <ul>
      <li v-for="coffee in list" :key="coffee.name">
        <h4>
          {{ coffee.name }}
          <br>
          <small>{{ coffee.price | currency }}</small>
        </h4>
        <div class="cup" @click="addToCart(coffee.name)">
          <AppCup :item="coffee"/>
        </div>
      </li>
    </ul>
    <AppPay/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AppCup from "../parts/Cup.vue";
import AppPay from "../parts/Pay.vue";

export default {
  name: "AppListPage",
  components: { AppCup, AppPay },
  computed: mapState({
    list: state => state.coffees.list
  }),
  created() {
    this.$store.dispatch('coffees/getCoffeeList');
  },
  methods: {
    ...mapActions('cart', ['addToCart'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: grid;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 100px;
}

div {
  margin-top: 10px;
}

button {
  border: 4px solid black;
  background: antiquewhite;
  margin: 0 6px;
}

button:hover {
  border-color: goldenrod;
  color: goldenrod;
}

.pay {
  display: none;
}

@media (min-width: 500px) {
  ul {
    grid-template-columns: repeat(2, auto);
  }

  .pay {
    display: block;
    position: fixed;
    right: 10px;
    bottom: 10px;
  }
}

@media (min-width: 800px) {
  ul {
    grid-template-columns: repeat(3, auto);
  }
}

li {
  padding: 10px 20px;
}

li:hover h4 {
  color: goldenrod;
}

li h4 {
  /* text-align: center; */
  margin: 10px 0;
}
</style>
