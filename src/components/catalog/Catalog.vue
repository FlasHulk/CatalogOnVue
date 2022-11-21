<template>
  <div class="catalog container">
    <div class="catalog-title">
      Clothing
    </div>

    <div class="catalog-head-wrap">
      <CatalogHead
          :attribute-data="filterAttributes"
          @delAttribute="delAttribute"
          @clearAllAttributes="clearAllAttributes"
      />
    </div>

    <div class="catalog-wrap">
      <div class="filters-wrap">
        <FilterItem
            @filterAttributes="setAttribute"
            @filterPrices="setPrice"
        />
      </div>

      <div class="catalog-list">
        <div class="catalog__products">
          <ProductPreview
              v-for="(product) in filteringCatalog"
              :key="product.id"
              :item-data="product"
              @addToCart="addToCart"
              @addToFavorites="addToFavorites"
          />
        </div>
      </div>
    </div>

    <PopUp
        v-if="popUpActive"
        @closePopUp="closePopUp"
    >
      <template #content >
        <div class="pop-up__product-action">
          <p v-if="popUpAddFavorites">Product added to Wish List</p>
          <p v-if="popUpDeletedFavorites">Product delete from Wish List</p>
          <p v-if="popUpAddCart">Product added to Cart</p>
        </div>
      </template>
    </PopUp>
  </div>
</template>

<script>
import ProductPreview from "@/components/catalog/products/ProductPreview"
import FilterItem from "@/components/catalog/filter/FilterItem";
import CatalogHead from "@/components/catalog/partials/CatalogHead";
import PopUp from "@/components/pop-up/PopUp";
import {mapActions, mapGetters} from "vuex"

export default {
  name: "v-catalog",
  components: {
    PopUp,
    FilterItem,
    ProductPreview,
    CatalogHead
  },
  data() {
    return {
      filterAttributes: [],
      filterPrice: [],
      delAttr: {},
      popUpActive: false,
      popUpAddFavorites: false,
      popUpDeletedFavorites: false,
      popUpAddCart: false,
    }
  },
  computed: {
    ...mapGetters('products', [
      'PRODUCT', 'PRICEVALUE'
    ]),
    ...mapGetters('cart', [
      'CART'
    ]),
    ...mapGetters('favorites', [
      'FAVORITES'
    ]),
    filteringCatalog() {
      return this.PRODUCT.filter((product) => {
        if (!this.filterPrice.length) {
          this.filterPrice = this.PRICEVALUE
        }

        return this.filterPrice[0] <= product.price && product.price <= this.filterPrice[1];
      }).filter((product) => {
        if (!this.filterAttributes.length) {
          return this.PRODUCT;
        }
        return this.filterAttributes.every(attribute => product.attributes.includes(attribute.id))
      });
    },
  },
  methods: {
    ...mapActions('products', [
      "get_product"
    ]),
    ...mapActions('cart', [
      "add_to_cart"
    ]),
    ...mapActions('favorites', [
      "add_to_favorites"
    ]),
    addToCart(data) {
      this.add_to_cart(data);
      this.popUpActive = true;
      this.popUpAddCart = true;

    },
    addToFavorites(data) {
      this.add_to_favorites(data);
      this.popUpActive = true;

      if (data.isFavorite) {
        data.isFavorite = false;
        this.popUpDeletedFavorites = true;
      } else {
        data.isFavorite = true;
        this.popUpAddFavorites = true;
      }
    },
    setAttribute(data) {
      this.filterAttributes = data;
    },
    setPrice(data) {
      this.filterPrice = data;
    },
    delAttribute(data) {
      this.delAttr = data;
      this.filterAttributes.splice(this.filterAttributes.findIndex((item) => item.id === data.id), 1);
    },
    clearAllAttributes() {
      this.filterAttributes.length = 0;
    },
    closePopUp() {
      this.popUpActive = false;
      this.popUpAddFavorites = false;
      this.popUpDeletedFavorites = false;
      this.popUpAddCart = false;
    }
  },
  mounted() {
    this.get_product();
  }
}
</script>

<style lang="scss" scoped>
.catalog-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 33px;

  color: $black;
}

.catalog-head-wrap {
  margin-top: 15px;
}

.catalog-wrap {
  display: flex;
  gap: 44px;
}

.filters-wrap {
  flex: 1 0 250px;
  min-width: 0;
}

.catalog-list {
  width: 100%;
  max-width: 840px;
  flex: 1 1 auto;

  .catalog__products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 44px;
    padding: 22px 0 62px;
  }
}

.pop-up__product-action {
  p {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>