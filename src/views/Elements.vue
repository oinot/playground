<template>
  <div class="home">
  <h1> {{ title }} </h1>
  <SliderOne />
  <SliderTwo />
  </div>
</template>
<script>
import SliderOne from '../components/Slider/One/SliderCss.vue';
import SliderTwo from '../components/Slider/Two/SliderCss.vue';

export default {
  name: 'ElementsPage',
  components: {
    SliderOne,
    SliderTwo,
  },
  data() {
    return {
      title: 'Elements',
    };
  },
};
</script>
