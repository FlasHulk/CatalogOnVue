<template>
  <div class="catalog-head">
      <div class="catalog-head__filter">
        <ul class="attributes-list">
          <li
              v-for="attribute in attributeData"
              :key="attribute.id"
              class="attribute-label"
              @click="$emit('delAttribute', attribute)"
          >
            {{attribute.title}}

            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
              <path d="M3.88014 3.53287L6.92018 0.46381C7.02517 0.357812 7.02517 0.185497 6.92018 0.0794987C6.81518 -0.0264996 6.64449 -0.0264996 6.5395 0.0794987L3.49946 3.14856L0.459425 0.0794987C0.354429 -0.0264996 0.183743 -0.0264996 0.078747 0.0794987C-0.026249 0.185497 -0.026249 0.357812 0.078747 0.46381L3.11878 3.53287L0.078747 6.60192C-0.026249 6.70792 -0.026249 6.88024 0.078747 6.98624C0.131514 7.03951 0.200435 7.0656 0.269355 7.0656C0.338275 7.0656 0.407196 7.03896 0.459963 6.98624L3.5 3.91718L6.54004 6.98624C6.5928 7.03951 6.66172 7.0656 6.73064 7.0656C6.79956 7.0656 6.86849 7.03896 6.92125 6.98624C7.02625 6.88024 7.02625 6.70792 6.92125 6.60192L3.88122 3.53287H3.88014Z" fill="#E44747"/>
            </svg>
          </li>
        </ul>

        <div
            v-if="attributeData.length"
            @click="$emit('clearAllAttributes')"
            class="clear-all"
        >
          Clear All
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "CatalogHead",
  props: {
    attributeData: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style lang="scss" scoped>
.catalog-head {
  display: flex;
  align-items: center;
  margin-bottom: 22px;
}

.catalog-head__filter {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.attributes-list {
  display: flex;
  align-items: center;
  gap: 9px;
  flex-wrap: wrap;

  .attribute-label {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid #B0BEC5;
    border-radius: 4px;
    font-weight: 300;
    font-size: 12px;
    line-height: 22px;
    color: $black;

    svg {
      margin-left: 6px;
    }
  }
}

.clear-all {
  margin-left: 10px;
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  text-decoration-line: underline;
  text-transform: capitalize;
  color: $black;

  &:hover {
    text-decoration: none;
  }
}


</style>