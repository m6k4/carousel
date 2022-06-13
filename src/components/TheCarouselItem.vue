<template>
  <div
    class="TheCarouselItem"
    :style="`min-width: ${width}px`"
  >
    <div class="TheCarouselItem__title">
      <img  
        class="TheCarouselItem__title__image"
        :alt="product.getFirstImage().alt" 
        :src="product.getFirstImage().url"
      >
    </div>
    <div class="TheCarouselItem__container">
      <div class="TheCarouselItem__name">
        {{ product.getName() }}
      </div>
      <div class="TheCarouselItem__value">
        <b>{{ product.getPrice()?.amount }} </b>
        {{ getCurrencyLabel }}
      </div>
      <div class="TheCarouselItem__footer">
        <span class="TheCarouselItem__footer-icon" />
        <span class="TheCarouselItem__footer-label">
          {{ product.getLocation().label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { Product } from './Product';
import currencyMap from './currencyMap';

// eslint-disable-next-line no-undef
const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  },
  width: {
    type: Number,
    required: true
  }
});

const getCurrencyLabel = computed(() => {
  return currencyMap.find(item => item.currency === props.product.getPrice()?.currency)?.label;
});
</script>
<style lang="sass">
.TheCarouselItem
  background: #fff
  border-radius: 5px
  box-shadow: 0 2px 8px rgb(0 0 0 / 16%)
  color: #222
  overflow: hidden

  &__title
    height: 180px

    &__image
      height: 100%

  &__container
    padding: 16px 16px 8px 8px
    text-align: left
    display: flex
    flex-direction: column
    height: 225px

  &__name
    margin-top: 10px
    font-weight: 400
    margin-bottom: 8px
    font-size: 16px
    line-height: 1.5

  &__footer
    margin-top: auto
    position: relative

  &__footer-icon
    height: 20px
    width: 20px
    bottom: 2px
    position: absolute
    background-image: url(https://lokalnie-prod-assets.storage.googleapis.com/ui/versions/f4bc5113/assets/map-pin-2.cfcfae57.svg)
    background-size: auto 16px
    background-position: 0 100%
    background-repeat: no-repeat
    
  &__footer-label
    margin-left: 20px
    font-size: 12px
    font-style: italic
    display: block

</style>