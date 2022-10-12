<template>
<div class="block">
  <div class="container-flex">
    <div class="left-side">
      <h1> {{ title.first }} </h1>
    </div>
    <div class="right-side">
      <btn-one />
      <btn-two />
      <btn-three />
      <btn-four />
      <btn-five />
      <btn-six />
      <btn-seven />
      <btn-eight />
      <btn-nine />
      <btn-ten />
      <btn-eleven />
      <btn-twelve />
      <Btn-thirteen />
      <btn-fourteen />
      <btn-fifteen />
      <btn-sixteen />
    </div>
  </div>
    <div class="container-flex">
      <div class="left-side">
        <h1> {{ title.second }} </h1>
      </div>
    <div class="right-side">
      <btn-seventeen />
      <btn-eighteen />
    </div>
  </div>
 </div>

</template>
<script>
import BtnOne from '@/components/buttons/Animated/buttonOne.vue';
import BtnTwo from '@/components/buttons/Animated/buttonTwo.vue';
import BtnThree from '@/components/buttons/Animated/buttonThree.vue';
import BtnFour from '@/components/buttons/Animated/buttonFour.vue';
import BtnFive from '@/components/buttons/Animated/buttonFive.vue';
import BtnSix from '@/components/buttons/Animated/buttonSix.vue';
import BtnSeven from '@/components/buttons/Animated/buttonSeven.vue';
import BtnEight from '@/components/buttons/Animated/buttonEight.vue';
import BtnNine from '@/components/buttons/Animated/buttonNine.vue';
import BtnTen from '@/components/buttons/Animated/buttonTen.vue';
import BtnEleven from '@/components/buttons/Animated/buttonEleven.vue';
import BtnTwelve from '@/components/buttons/Animated/buttonTwelve.vue';
import BtnThirteen from '@/components/buttons/Animated/buttonThirteen.vue';
import BtnFourteen from '@/components/buttons/Animated/buttonFourteen.vue';
import BtnFifteen from '@/components/buttons/Animated/buttonFifteen.vue';
import BtnSixteen from '@/components/buttons/Animated/buttonSixteen.vue';
import BtnSeventeen from '@/components/buttons/Animated/buttonSeventeen.vue';
import BtnEighteen from '@/components/buttons/Animated/buttonEighteen.vue';

export default {
  name: 'HomePage',
  components: {
    BtnOne,
    BtnTwo,
    BtnThree,
    BtnFour,
    BtnFive,
    BtnSix,
    BtnSeven,
    BtnEight,
    BtnNine,
    BtnTen,
    BtnEleven,
    BtnTwelve,
    BtnThirteen,
    BtnFourteen,
    BtnFifteen,
    BtnSixteen,
    BtnSeventeen,
    BtnEighteen,
  },
  data() {
    return {
      title: {
        first: 'Color Buttons',
        second: 'B&W Buttons',
        default: 'No title yet',
      },
    };
  },
};
</script>
