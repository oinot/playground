<template>
  <div class="home">
  <h1> {{ title }} </h1>
  <RadioCheckbox />
  </div>
</template>
<script>
import RadioCheckbox from '../components/Accordion/RadioCheckbox.vue';

export default {
  name: 'ElementsPage',
  components: {
    RadioCheckbox,
  },
  data() {
    return {
      title: 'Elements',
    };
  },
};
</script>
