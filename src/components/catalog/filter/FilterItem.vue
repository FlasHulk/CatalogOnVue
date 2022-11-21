<template>
  <div class="filters">
    <FilterItemPrice
        @setPrice="getPrice"
    />
    <div
        v-for="(category, key) in filters"
        class="filters__param"
        :data-attribute="category.attr"
        :key="key"
    >
      <p>{{ category.name }}</p>
      <div class="filters__param--list">
        <label
            v-for="attribute in category.attributes"
            :key="attribute.id"
            class="checkbox-wrap"
        >
          <input
              type="checkbox"
              :value="attribute"
              v-model="filter.attributes"
          >
          <span class="checkbox"></span>
<!--            @TODO тут не разрешен тег <p>-->
          <p>{{ attribute.title }}</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import FilterItemPrice from "@/components/catalog/filter/partials/FilterItemPrice"

export default {
  name: "FilterItem",
  components: {
    FilterItemPrice
  },
  data() {
    return {
      filters: [
        {
          name: "Gender",
          attributes: [
            {id: 1, title: 'Man'},
            {id: 2, title: 'Women'}
          ],
          attr: "gender"
        },
        {
          name: "Product Category",
          attributes: [
            {id: 3, title: "Hoodies"},
            {id: 4, title: "Sweatshirt"},
            {id: 5, title: "Crop Tops"},
            {id: 6, title: "Full Zip"},
            {id: 7, title: "T-shorts"},
            {id: 8, title: "Dress"}
          ],
          attr: "product-category"
        },
        {
          name: "Size",
          attributes: [
            {id: 9, title: "2XS"},
            {id: 10, title: "XS"},
            {id: 11, title: "S"},
            {id: 12, title: "M"},
            {id: 13, title: "L"},
            {id: 14, title: "XL"}
          ],
          attr: "size"
        }
      ],
    }
  },
}
</script>

<script setup>
import {watch, reactive} from 'vue'
// eslint-disable-next-line
const emit = defineEmits(['filterAttributes', 'filterPrices'])

const filter = reactive({
  attributes: [],
  filterPrice: []
})

const getPrice = (price) => {
  filter.filterPrice = price;
}

watch(filter, (newFilterAttributes) => {
  emit("filterAttributes", newFilterAttributes.attributes);
});

watch(filter, (newFilterPrice) => {
  emit("filterPrices", newFilterPrice.filterPrice);
});

</script>

<style lang="scss" scoped>
.filters {
  .filters__param {
    & + .filters__param {
      margin-top: 37px;
    }

    & > p {
      margin-bottom: 15px;
      font-weight: 500;
      font-size: 16px;
      line-height: 29px;
      color: $black;
    }

    .filters__param--list {
      display: grid;
      gap: 15px;
    }

    &[data-attribute=size] {
      .filters__param--list {
        grid-template-columns: repeat(2, 1fr);
        gap: 13px 66px;
      }
    }
  }
}

.checkbox-wrap {
  display: flex;
  align-items: center;
  cursor: pointer;

  input[type=checkbox] {
    display: none;
    opacity: 0;
    visibility: hidden;
  }

  input[type=checkbox]:checked + .checkbox {
    background: #FFCA28;
    border-color: #FFCA28;
  }

  .checkbox {
    display: block;
    width: 19px;
    height: 19px;
    margin-right: 10px;
    border: 1px solid #C4C4C4;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;
    color: $black;
    text-transform: capitalize;
  }
}
</style>