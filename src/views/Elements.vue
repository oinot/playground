<template>
  <div class="home">
  <h1> {{ title }} </h1>
  <SliderOne />
  </div>
</template>
<script>
import SliderOne from '../components/Slider/One/SliderCss.vue';

export default {
  name: 'ElementsPage',
  components: {
    SliderOne,
  },
  data() {
    return {
      title: 'Elements',
    };
  },
};
</script>
