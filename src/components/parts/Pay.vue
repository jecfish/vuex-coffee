<template>
  <!-- TODO: Show total -->
  <button class="pay" type="button" @click="pay()">Total: {{ 0 | currency }}</button>
</template>

<script>
export default {
  name: "AppPay",
  computed: {
    // TODO: Calculate Total
  },
  methods: {
    pay() {
      alert("Yay, order placed. Start a new order!");
      // TODO: empty cart & redirect to menu page
      
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
