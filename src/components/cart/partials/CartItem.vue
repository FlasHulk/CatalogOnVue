<template>
  <div class="cart-item">
    <div class="cart-item__img cart-row">
      <img :src="require(`@/assets/images/${itemData.image}`)" :alt="itemData.name">
    </div>
    
    <div class="cart-item__info cart-row">
      <p class="title">
        {{itemData.name}}
      </p>
      <p class="description">
        {{itemData.description}}
      </p>
    </div>

    <div class="cart-item__unit-price cart-row">
      $ {{itemData.price}}
    </div>

    <div class="cart-item__quantity cart-row">
      <div class="quantity-wrap">
        <div
            class="cart-item__quantity--plus"
            @click="$emit('incrementQuantity')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
            <path d="M0 5.42857L5.7037 0L11 5.42857H0Z" fill="#6E7C7D"/>
          </svg>
        </div>

        <input
            type="number"
            :value="itemData.quantity"
            disabled
        >

        <div
            class="cart-item__quantity--minus"
            @click="$emit('decrementQuantity')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
            <path d="M0 5.42857L5.7037 0L11 5.42857H0Z" fill="#6E7C7D"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="cart-item__total-price cart-row">
      $ {{itemData.price * itemData.quantity}}
    </div>

    <div
        class="cart-item__delete cart-row"
        @click="$emit('deleteItem')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M7.20625 6.49925L12.8523 0.85325C13.0472 0.65825 13.0472 0.34125 12.8523 0.14625C12.6573 -0.04875 12.3402 -0.04875 12.1452 0.14625L6.49925 5.79225L0.85325 0.14625C0.65825 -0.04875 0.34125 -0.04875 0.14625 0.14625C-0.04875 0.34125 -0.04875 0.65825 0.14625 0.85325L5.79225 6.49925L0.14625 12.1453C-0.04875 12.3403 -0.04875 12.6573 0.14625 12.8523C0.24425 12.9503 0.37225 12.9983 0.50025 12.9983C0.62825 12.9983 0.75625 12.9493 0.85425 12.8523L6.50025 7.20625L12.1462 12.8523C12.2442 12.9503 12.3722 12.9983 12.5002 12.9983C12.6282 12.9983 12.7562 12.9493 12.8542 12.8523C13.0492 12.6573 13.0492 12.3403 12.8542 12.1453L7.20825 6.49925H7.20625Z" fill="#E44747"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 13px;
  padding: 13px;
  background: $white;
  border: 1px solid #B0BEC5;
  border-top: none;

  .cart-row {
    align-self: center;
  }

  .cart-item__img {
    width: 135px;
    height: 135px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .cart-item__info {
    .title {
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      color: $black;
    }

    .description {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $black;
    }
  }

  .cart-item__unit-price {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #444546;
  }

  .cart-item__quantity {
    .quantity-wrap {
      position: relative;
      width: 100%;
      max-width: 80px;

      .cart-item__quantity--plus,
      .cart-item__quantity--minus {
        position: absolute;
        right: 10px;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5px;
        cursor: pointer;

        svg {
          path {
            fill: #C4C4C4;
          }
        }

        &:hover {
          svg {
            path {
              fill: #6E7C7D;
            }
          }
        }
      }

      .cart-item__quantity--plus {
        top: 10px;
      }

      .cart-item__quantity--minus {
        bottom: 10px;

        svg {
          transform: rotate(180deg);
        }
      }

      input {
        position: relative;
        width: 100%;
        max-width: 80px;
        padding: 10px 25px 10px 10px;
        border: 1px solid #C4C4C4;
        appearance: auto;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        text-transform: capitalize;
        color: $black;
      }
    }
  }

  .cart-item__total-price {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: $black;
  }

  .cart-item__delete {
    width: 13px;
    height: 13px;

  }
}
</style>