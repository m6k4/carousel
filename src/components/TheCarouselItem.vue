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
    {{ props.product.getName() }}
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Product } from './Product';

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
</script>
<style lang="sass">
.TheCarouselItem
  background: lighten(gray, 30%)
  border-radius: 5px
  box-shadow: 0 2px 8px rgb(0 0 0 / 16%)
  color: #222
  overflow: hidden

  &__title
    height: 180px

    &__image
      height: 100%



</style>