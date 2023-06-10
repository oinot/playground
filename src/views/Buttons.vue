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
      <btn-nineteen />
      <btn-twenty />
      <btn-twenty-one />
      <btn-twenty-two />
      <button-twenty-three />
      <button-twenty-four />
      <button-twenty-five />
      <button-twenty-six />
      <button-twenty-seven />
      <button-twenty-eight />
      <button-twenty-nine />
      <button-thirty />
      <button-thirty-one />
      <button-thirty-two />
      <button-thirty-three />
      <button-thirty-four />
      <button-thirty-five />
      <button-thirty-six />
      <button-thirty-seven />
    </div>
  </div>
 </div>

</template>
<script>
import BtnOne from '@/components/buttons/Colored/buttonOne.vue';
import BtnTwo from '@/components/buttons/Colored/buttonTwo.vue';
import BtnThree from '@/components/buttons/Colored/buttonThree.vue';
import BtnFour from '@/components/buttons/Colored/buttonFour.vue';
import BtnFive from '@/components/buttons/Colored/buttonFive.vue';
import BtnSix from '@/components/buttons/Colored/buttonSix.vue';
import BtnSeven from '@/components/buttons/Colored/buttonSeven.vue';
import BtnEight from '@/components/buttons/Colored/buttonEight.vue';
import BtnNine from '@/components/buttons/Colored/buttonNine.vue';
import BtnTen from '@/components/buttons/Colored/buttonTen.vue';
import BtnEleven from '@/components/buttons/Colored/buttonEleven.vue';
import BtnTwelve from '@/components/buttons/Colored/buttonTwelve.vue';
import BtnThirteen from '@/components/buttons/Colored/buttonThirteen.vue';
import BtnFourteen from '@/components/buttons/Colored/buttonFourteen.vue';
import BtnFifteen from '@/components/buttons/Colored/buttonFifteen.vue';
import BtnSixteen from '@/components/buttons/Colored/buttonSixteen.vue';
import BtnSeventeen from '@/components/buttons/BlackWhite/buttonSeventeen.vue';
import BtnEighteen from '@/components/buttons/BlackWhite/buttonEighteen.vue';
import BtnNineteen from '@/components/buttons/BlackWhite/buttonNineteen.vue';
import BtnTwenty from '@/components/buttons/BlackWhite/buttonTwenty.vue';
import BtnTwentyOne from '@/components/buttons/BlackWhite/buttonTwentyOne.vue';
import BtnTwentyTwo from '@/components/buttons/BlackWhite/buttonTwentyTwo.vue';
import buttonTwentyThree from '@/components/buttons/BlackWhite/buttonTwentyThree.vue';
import buttonTwentyFour from '@/components/buttons/BlackWhite/buttonTwentyFour.vue';
import buttonTwentyFive from '@/components/buttons/BlackWhite/buttonTwentyFive.vue';
import buttonTwentySix from '@/components/buttons/BlackWhite/buttonTwentySix.vue';
import buttonTwentySeven from '@/components/buttons/BlackWhite/buttonTwentySeven.vue';
import buttonTwentyEight from '@/components/buttons/BlackWhite/buttonTwentyEight.vue';
import buttonTwentyNine from '@/components/buttons/BlackWhite/buttonTwentyNine.vue';
import buttonThirty from '@/components/buttons/BlackWhite/buttonThirty.vue';
import buttonThirtyOne from '@/components/buttons/BlackWhite/buttonThirtyOne.vue';
import buttonThirtyTwo from '@/components/buttons/BlackWhite/buttonThirtyTwo.vue';
import buttonThirtyThree from '@/components/buttons/BlackWhite/buttonThirtyThree.vue';
import buttonThirtyFour from '@/components/buttons/BlackWhite/buttonThirtyFour.vue';
import buttonThirtyFive from '@/components/buttons/BlackWhite/buttonThirtyFive.vue';
import buttonThirtySix from '@/components/buttons/BlackWhite/buttonThirtySix.vue';
import buttonThirtySeven from '@/components/buttons/BlackWhite/buttonThirtySeven.vue';

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
    BtnNineteen,
    BtnTwenty,
    BtnTwentyOne,
    BtnTwentyTwo,
    buttonTwentyThree,
    buttonTwentyFour,
    buttonTwentyFive,
    buttonTwentySix,
    buttonTwentySeven,
    buttonTwentyEight,
    buttonTwentyNine,
    buttonThirty,
    buttonThirtyOne,
    buttonThirtyTwo,
    buttonThirtyThree,
    buttonThirtyFour,
    buttonThirtyFive,
    buttonThirtySix,
    buttonThirtySeven,
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
<style>
html{
  background-color: var(--background);
}
</style>
