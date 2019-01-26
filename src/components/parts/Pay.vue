<template>
  <button class="pay" type="button" @click="pay()">Total: {{ total | currency }}</button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppPay",
  computed: {
    // option 2
    ...mapGetters({
      total: 'cart/cartTotal'
    }),
    // option 1
    // ...mapState({
    //   total: state =>
    //     state.cart.list
    //       .map(
    //         c =>
    //           state.coffees.list.find(x => x.name === c.name).price * c.quantity
    //       )
    //       .reduce((acc, curr) => acc + curr, 0)
    // })
  },
  methods: {
    pay() {
      alert("Yay, order placed. Start a new order!");
      this.$store.dispatch("cart/emptyCart");
      this.$router.push("/menu");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button.pay {
  border: 4px solid black;
  background: antiquewhite;
  margin: 0 6px;
  font-size: xx-large;
}

button.pay:hover {
  border-color: goldenrod;
  color: goldenrod;
}
</style>
