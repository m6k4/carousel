<template>
  <div
    class="TheCarousel"
  >
    <button
      v-if="scrollAmount > 0"
      class="TheCarousel__button--left"
      @click="scrollLeft"
    >
      lewo
    </button>
    <div 
      id="carousel" 
      class="TheCarousel__items"
    >
      <TheCarouselItem
        v-for="product in products"
        :key="product.getName()"
        :product="product"
        :width="width"
      />
    </div>
    {{scrollAmount }} {{ (width + 8) * (products.length - elementsCountOnClientView)}}
    <button 
      v-if="scrollAmount < (width + 8) * (products.length - 1)"
      class="TheCarousel__button--right"
      @click="scrollRight"
    >
      prawo
    </button>
  </div>
</template>

<script setup lang="ts">import { computed, ref } from 'vue';
import useCarousel from '../composable/useCarousel';
import TheCarouselItem from './TheCarouselItem.vue';

const {
  products,
  getProducts
} = useCarousel();

getProducts();

const elementsCountOnClientView = computed(() => {
  return Math.floor(
    (window.innerWidth - 8) / (width + 8)
  );
});

const width = 200;

let scrollAmount = ref(0);

const scrollLeft = () => {
  document.getElementsByClassName('TheCarousel__items')[0].scrollTo({
    left: scrollAmount.value - elementsCountOnClientView.value * (width + 8),
    behavior: 'smooth'
  });
  console.log(scrollAmount.value - elementsCountOnClientView.value * (width + 8));
  scrollAmount.value -= elementsCountOnClientView.value * (width + 8);
};

const scrollRight = () => {
  document.getElementsByClassName('TheCarousel__items')[0].scrollTo({
    left: scrollAmount.value + elementsCountOnClientView.value * (width + 8),
    behavior: 'smooth'
  });
    scrollAmount.value += elementsCountOnClientView.value * (width + 8);
};

</script>

<style lang="sass">
.TheCarousel
  height: 430px
  position: relative
  padding-top: 20px
  padding-bottom: 20px

  &__button
    background: blue
    height: 50px

    &--left
      position: absolute
      top: 50%
      left: 0

    &--right
      position: absolute
      top: 50%
      right: 0

  &__items
    display: flex
    overflow-x: hidden
    height: 100%
    gap: 8px
    height: 100%
    padding-top: 20px
    padding-bottom: 20px

</style>