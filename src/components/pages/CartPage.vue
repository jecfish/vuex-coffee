<template>
  <div class="list" v-if="cartList">
    <p v-if="!cartList.length">No coffee, go add some.</p>
    <div v-if="cartList.length">
      <AppPay/>
      <ul>
        <li class="list-header">
          <div>Item</div>
          <div>Unit</div>
          <div>Total</div>
          <div></div>
        </li>
        <li v-for="item in cartList" :key="item.name">
          <div>{{ item.name }}</div>
          <div>
            <span class="unit-desc">{{ item.unitPrice | currency }} x {{ item.quantity }}</span>
            <div class="unit-controller">
              <button type="button" @click="addOneCartItem(item.name)">+</button>
              <button type="button" @click="removeOneCartItem(item.name)">-</button>
            </div>
          </div>
          <div>{{ item.price | currency }}</div>
          <div>
            <button class="delete" type="button" @click="removeCartItem(item.name)">x</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import AppPay from "../parts/Pay.vue";

export default {
  name: "AppCartPage",
  components: { AppPay },
  computed: {
    // Option 2
    ...mapGetters({
      cartList: "cart/cartList"
    }),
    // Option 1
    // ...mapState({
    //   cartList: state =>
    //     state.cart.list
    //       .map(item => {
    //         // get coffee object by name
    //         const { price, ...props } = state.coffees.list.find(
    //           c => c.name === item.name
    //         );

    //         return {
    //           quantity: item.quantity,
    //           unitPrice: price,
    //           price: item.quantity * price, // sum quantity
    //           ...props
    //         };
    //       })
    //       .sort((a, b) => (a.name < b.name ? -1 : 1))
    // })
  },
  methods: {
    ...mapActions("cart", []),
    ...mapMutations("cart", ["addOneCartItem", "removeOneCartItem", "removeCartItem"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: center;
  font-size: xx-large;
}

.list {
  margin: 0 auto;
  max-width: 680px;
  padding: 0 10px;
}

ul {
  padding: 0;
}

li {
  padding: 10px;
  font-weight: 300;
  font-size: x-large;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-areas: "a a d" "b b c";
}

li {
  border-bottom: 4px dashed lightgray;
}

/* title */
li div:first-child {
  grid-area: a;
}

/* unit price */
li div:nth-child(2) {
  grid-area: b;
  display: flex;
}

/* total */
li div:nth-child(3) {
  grid-area: c;
  justify-self: end;
}

/* delete button */
li div:last-child {
  grid-area: d;
  justify-self: right;
  display: flex;
  align-items: center;
}

.list-header {
  display: none;
}

@media (min-width: 500px) {
  li {
    grid-template-columns: repeat(3, auto);
    /* autoprefixer: off */
    grid-template-areas: "a a d" "b b c";
  }
}

@media (min-width: 800px) {
  li {
    grid-template-columns: 260px 200px 140px 50px;
    /* autoprefixer: off */
    grid-template-areas: "a b c d";
  }

  .list-header {
    display: grid;
    font-weight: bold;
    font-size: initial;
  }
}

/* delete button */

.delete {
  height: 24px;
  width: 24px;
  font-size: 10px;
  border-radius: 50%;
  font-weight: bold;
  background: rgba(10, 10, 10, 0.15);
  color: white;
  font-weight: bold;
  border: none;
}

.delete:hover {
  color: red;
  background: lightpink;
}

/* unit controller */

.unit-controller {
  margin-left: 10px;
}

.unit-controller button {
  min-height: 20px;
  font-size: 10px;
  border: 2px solid;
  padding: 0 6px;
  margin: 2px -1px;
  background: antiquewhite;
}

.unit-desc {
  min-width: 120px;
}
</style>
