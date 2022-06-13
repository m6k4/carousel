<template>
  <div
    class="TheCarousel"
  >
    <span 
      v-if="scrollAmount > 0"
      class="TheCarousel__button left" 
    >
      <button
        class="TheCarousel__button--left"
        @click="scrollLeft"
      />
    </span>
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
    <span  
      v-if="scrollAmount < productDivLength"
      class="TheCarousel__button right"
    >
      <button 
       
        class="TheCarousel__button--right"
        @click="scrollRight"
      />
    </span>
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

const width = 250;
const gapBetweenElements = 8;
let scrollAmount = ref(0);


const elementsCountOnClientView = computed(() => {
  return Math.floor(
    (window.innerWidth - gapBetweenElements) / (width + gapBetweenElements)
  );
});

const productDivLength = computed(() => {
  return (width + gapBetweenElements) * (products.value.length - elementsCountOnClientView.value)
});

const scrollLeft = () => {
  document.getElementsByClassName('TheCarousel__items')[0].scrollTo({
    left: scrollAmount.value - elementsCountOnClientView.value * (width + gapBetweenElements),
    behavior: 'smooth'
  });
  scrollAmount.value -= elementsCountOnClientView.value * (width + gapBetweenElements);
  scrollAmount.value = scrollAmount.value < 0 ? 0 : scrollAmount.value;
};

const scrollRight = () => {
  document.getElementsByClassName('TheCarousel__items')[0].scrollTo({
    left: scrollAmount.value + elementsCountOnClientView.value * (width + gapBetweenElements),
    behavior: 'smooth'
  });
    scrollAmount.value += elementsCountOnClientView.value * (width + gapBetweenElements);
    scrollAmount.value = scrollAmount.value >= productDivLength.value ? productDivLength.value : scrollAmount.value;
};

</script>

<style lang="sass">
.TheCarousel
  background: #F4F8FC
  height: 430px
  position: relative
  padding-top: 20px
  padding-bottom: 20px


  &__button
    position: absolute
    top: 50%
    width: 64px
    height: 64px
    &:hover > &--left
      visibility: visible
      cursor: pointer
    
    &:hover > &--right
      visibility: visible
      cursor: pointer
    
    &--left
      visibility: hidden
      background-color: hsla(0,0%,100%,.5)
      height: 100%
      width: 100%
      background-position: 50%
      border: 0.1px solid #767676
      background-repeat: no-repeat
      background-image: url(https://lokalnie-prod-assets.storage.googleapis.com/ui/versions/f4bc5113/assets/arrow-left-s-line.9f589d46.svg)
        
    &--right
      visibility: hidden
      background-color: hsla(0,0%,100%,.5)
      height: 100%
      width: 100%
      background-position: 50%
      border: 0.1px solid #767676
      background-repeat: no-repeat
      transform: rotate(180deg)
      background-image: url(https://lokalnie-prod-assets.storage.googleapis.com/ui/versions/f4bc5113/assets/arrow-left-s-line.9f589d46.svg)

  &__items
    display: flex
    overflow-x: hidden
    height: 100%
    gap: 8px
    height: 100%
    padding-top: 20px
    padding-bottom: 20px
  
.right
  position: absolute
  right: 0

.left
  position: absolute
  left: 0


</style>