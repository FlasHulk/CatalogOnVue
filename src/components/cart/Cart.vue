<template>
  <div class="cart container">
    <div class="cart-title">
      Cart
    </div>

    <div
        v-if="CART.length"
        class="cart__list"
    >
      <div
          class="cart__list--clear-all"
          @click="clearCart"
      >
        Clear cart

        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M7.20625 6.49925L12.8523 0.85325C13.0472 0.65825 13.0472 0.34125 12.8523 0.14625C12.6573 -0.04875 12.3402 -0.04875 12.1452 0.14625L6.49925 5.79225L0.85325 0.14625C0.65825 -0.04875 0.34125 -0.04875 0.14625 0.14625C-0.04875 0.34125 -0.04875 0.65825 0.14625 0.85325L5.79225 6.49925L0.14625 12.1453C-0.04875 12.3403 -0.04875 12.6573 0.14625 12.8523C0.24425 12.9503 0.37225 12.9983 0.50025 12.9983C0.62825 12.9983 0.75625 12.9493 0.85425 12.8523L6.50025 7.20625L12.1462 12.8523C12.2442 12.9503 12.3722 12.9983 12.5002 12.9983C12.6282 12.9983 12.7562 12.9493 12.8542 12.8523C13.0492 12.6573 13.0492 12.3403 12.8542 12.1453L7.20825 6.49925H7.20625Z" fill="#E44747"/>
        </svg>
      </div>

      <div class="cart__list--head">
        <p>Product Image</p>
        <p>Product names</p>
        <p>Unit price</p>
        <p>Quantity</p>
        <p>Total price</p>
        <p></p>
      </div>

      <CartItem
          v-for="(item, key) in CART"
          :key="key"
          :item-data="item"
          @deleteItem="deleteItem(key)"
          @incrementQuantity="incrementQuantity(key)"
          @decrementQuantity="decrementQuantity(key)"
      />
      
      <div class="cart__list--footer">
        <router-link to="/">CONTINUE SHOPPING </router-link>
        <a href="#">proceed to checkout</a>
      </div>
    </div>
    <div
        v-else
        class="cart__empty"
    >
      Cart Empty
    </div>
    <div v-if="CART.length" class="cart__checkout">
      <div class="cart__checkout--steps"></div>

      <div class="cart__checkout--total">
        <p>GRAND TOTAL:$ {{get_total_price}}</p>

        <div class="btn">PROSCED TO CHECK OUT</div>

        <span>Checkout with multiples address.</span>
      </div>
    </div>
  </div>
</template>

<script>
//@TODO нужно начинать переходить на composition api

import CartItem from "@/components/cart/partials/CartItem";
import {mapActions, mapGetters} from "vuex"

export default {
  name: "v-cart",
  components: {
    CartItem
  },
  data() {
    return {}
  },

  computed: {
    ...mapGetters('cart', [
      'CART', 'get_total_price'
    ])
  },
  methods: {
      //@TODO взаимодействия с изменением количества товара можно вынести в сам компонент товара
    ...mapActions('cart', [
      "remove_from_cart", "decrement_quantity", "increment_quantity", "clear_cart"
    ]),
    deleteItem(key) {
      this.remove_from_cart(key);
    },
    incrementQuantity(key) {
      this.increment_quantity(key);
    },
    decrementQuantity(key) {
      this.decrement_quantity(key);
    },
    clearCart() {
      this.clear_cart();
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.cart {
  min-height: calc(100vh - 510px);
  margin: 20px auto 100px;
}

.cart-title {
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  color: $black;
}

.cart__list {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  .cart__list--clear-all {
    margin-left: auto;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: $black;
  }

  .cart__list--head {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 13px;
    margin-top: 25px;
    padding: 9px 13px;
    background: $white;
    border: 1px solid #B0BEC5;

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #444546;
    }
  }

  .cart__list--footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 24px 16px;
    background: #FFFFFF;
    border: 1px solid #B0BEC5;
    border-top: 0;
    border-radius: 0px 0px 4px 4px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 210px;
      padding: 10px;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      text-transform: uppercase;
      color: #828C90;
      background: $white;
      border: 1px solid #BFCACF;
      border-radius: 4px;
    }
  }
}

.cart__empty {
  font-weight: 500;
  font-size: 20px;
  line-height: 17px;
  color: $black;
}

.cart__checkout {
  display: flex;
  margin-top: 40px;
  background: $white;
  border: 1px solid #B0BEC5;
  border-radius: 4px;

  .cart__checkout--steps {
    width: 100%;
    max-width: 875px;
    flex: 1 1 auto;
    padding: 16px 24px 23xp 17px;
  }

  .cart__checkout--total {
    flex: 1 0 250px;
    min-width: 0;
    padding: 22px 22px 22px 29px;
    border-left: 1px solid #B0BEC5;

    p {
      margin-bottom: 13px;
      font-weight: 500;
      font-size: 20px;
      line-height: 37px;
      text-transform: capitalize;
      color: #2B2B2B;
    }

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 12px;
      margin-bottom: 6px;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      text-transform: capitalize;
      color: $white;
      background: #1C85C1;
      border-radius: 4px;
    }

    span {
      display: block;
      text-align: center;
      font-weight: 300;
      font-size: 10px;
      line-height: 18px;
      /* identical to box height */

      text-transform: capitalize;

      color: $black;
    }
  }
}

</style>