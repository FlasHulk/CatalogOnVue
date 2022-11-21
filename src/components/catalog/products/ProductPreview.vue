<template>
  <div class="product-prev">
    <p v-if="itemData.sale" class="product-prev__sale">SALE</p>
    <div
        class="product-prev__add-favorite"
        :class="(itemData.isFavorite) ? 'active' : '' "
        @click="addToFavorites"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
        <path d="M8.23202 2.49588L8.65797 3.1889L9.08395 2.4959C9.82021 1.29815 11.1356 0.5 12.6399 0.5C14.9463 0.5 16.8161 2.36968 16.8161 4.67611C16.8161 5.93079 16.2608 7.05363 15.3822 7.81997L15.3694 7.83117L15.3574 7.84322L8.73116 14.4697C8.73115 14.4697 8.73115 14.4697 8.73115 14.4697C8.71176 14.4891 8.68547 14.5 8.65799 14.5C8.63051 14.5 8.60422 14.4891 8.58484 14.4697C8.58483 14.4697 8.58483 14.4697 8.58483 14.4697L1.95862 7.84322L1.94658 7.83118L1.93374 7.81998C1.05527 7.05365 0.5 5.93081 0.5 4.67611C0.5 2.3696 2.36924 0.5 4.67562 0.5C6.17994 0.5 7.49591 1.29822 8.23202 2.49588Z" stroke="#A3A3A3"/>
      </svg>
    </div>
    <div class="product-prev__img">
      <img :src="require(`@/assets/images/${itemData.image}`)" alt="itemData.name">
    </div>
    <div class="product-prev__info">
      <p class="product-prev__info--name">
        {{ itemData.name }}
      </p>
      <p class="product-prev__info--description">
        {{ itemData.description }}
      </p>
      <p class="product-prev__info--price">
        $ {{ itemData.price }}
      </p>
    </div>
    <div
        class="product-prev__add-to-cart"
        @click="addToCart"
    >
      Add to cart
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    itemData: {
      type: Object,
        // @TODO тут в обьекте можно перечислить поля, что б работал автокомплит в template
      default: () => ({}),
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart",this.itemData)
    },
    addToFavorites() {
      this.$emit("addToFavorites",this.itemData)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-prev {
  position: relative;
  background: $white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  .product-prev__sale {
    position: absolute;
    top: 0;
    left: 10px;
    padding: 2px 4px;
    background: #FFCA28;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #424140;
    transform: rotate(-90deg);
    z-index: 5;
  }

  .product-prev__add-favorite {
    position: absolute;
    top: 13px;
    right: 16px;
    z-index: 5;
    cursor: pointer;

    &:hover, &.active {
      svg path {
        fill: red;
        stroke: red;
      }
    }
  }

  .product-prev__img {
    height: 250px;
  }

  .product-prev__info {
    padding: 8px 12px;

    .product-prev__info--name {
      padding-bottom: 4px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      color: $black;
    }

    .product-prev__info--description {
      padding-bottom: 8px;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: $black;
    }

    .product-prev__info--price {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: $black;
    }
  }

  .product-prev__add-to-cart {
    padding: 5px 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: $black;
  }


}
</style>