<template>
  <header class="page-header">
    <hr>
    <div>
      <h3 class="page-title">{{ title }}</h3>
    </div>
  </header>
    <div id="carousel" class="carousel">
      <button class="arrow prev">
        <svg id="previous" width="24px" height="24px" viewBox="0 0 40 40">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(20.000000, 20.000000)
                    scale(-1, 1) translate(-20.000000, -20.000000) ">
                <circle fill="#222221" cx="20" cy="20" r="20"></circle>
                <circle fill="#FFFFFF" cx="20" cy="20" r="9.33333333"></circle>
                <g transform="translate(7.181412, 7.180532)" fill="#222221">
                  <path d="M13.4890497,17.0220906 C13.2514181,17.2760673
                        12.9194883,17.4194006 12.5724708,17.4194006
                          C12.2241959,17.4194006 11.8922661,17.2760673
                        11.6546345,17.0220906 L4.92299708,9.84285088 L6.75741228,8.12159357
                        L12.5724708,14.3239035 L18.3862719,8.12159357 L20.2206871,9.84285088
                        L13.4890497,17.0220906 Z M12.5724708,0.000628654971
                        C5.62834795,0.000628654971
                        -0.000628654971,5.62834795 -0.000628654971,12.5724708
                        C-0.000628654971,19.5153363 5.62834795,25.1430556
                        12.5724708,25.1430556 C19.5140789,25.1430556
                        25.1430556,19.5153363 25.1430556,12.5724708
                        C25.1430556,5.62834795 19.5140789,0.000628654971
                        12.5724708,0.000628654971 L12.5724708,0.000628654971 Z"
                        transform="translate(12.571213, 12.571842)
                        rotate(-90.000000) translate(-12.571213, -12.571842) ">
                  </path>
                </g>
              </g>
            </g>
          </svg>
      </button>
      <div class="gallery">
        <ul>
          <li>
            <a href="https://www.bricodepot.es/marcas/blooma" draggable="false" aria-label="Blooma">
               <img src="https://www.bricodepot.es/media/wysiwyg/Blooma_2.jpg" alt="Blooma" draggable="false">
            </a>
          </li>
          <li>
            <a href="https://www.bricodepot.es/marcas/titan" draggable="false" aria-label="Titan">
                <img src="https://www.bricodepot.es/media/wysiwyg/Titan-logo_6.jpg" alt="Blooma" draggable="false">
            </a>
          </li>
          <li>
            <a href="https://www.bricodepot.es/marcas/verve" draggable="false" aria-label="Verve">
                <img src="https://www.bricodepot.es/media/wysiwyg/Verve_2.jpg" alt="Verve" draggable="false" />
            </a>
          </li>
          <li>
            <a href="https://www.bricodepot.es/marcas/magnusson" draggable="false" aria-label="Magnusson">
              <img src="https://www.bricodepot.es/media/wysiwyg/Verve_Copy_2.jpg" alt="Magnusson" draggable="false" />
            </a>
          </li>
          <li>
            <a href="https://www.bricodepot.es/marcas/cooke-lewis" draggable="false" aria-label="Cooke & Lewis">
              <img src="https://www.bricodepot.es/media/wysiwyg/cooke_lewis_logo_2.png" alt="Cooke & Lewis" draggable="false">
            </a>
          </li>
          <li>
            <a href="https://www.bricodepot.es/marcas/erbauer" draggable="false" aria-label="Erbauer">
              <img
                src="https://www.bricodepot.es/media/wysiwyg/erbauer_logo_2.png"
                alt="Erbauer">
            </a>
          </li>
          <li>
            <a href="https://www.bricodepot.es/marcas/evalux" draggable="false" aria-label="Evalux">
              <img
                src="https://www.bricodepot.es/media/wysiwyg/evalux_logo_2_1.png"
                alt="Evalux">
            </a>
          </li>
        </ul>
      </div>
      <button class="arrow next">
        <svg id="next" width="24px" height="24px" viewBox="0 0 40 40">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g>
                  <circle fill="#222221" cx="20" cy="20" r="20"></circle>
                  <circle fill="#FFFFFF" cx="20" cy="20" r="9.33333333"></circle>
                  <g transform="translate(7.181412, 7.180532)" fill="#222221">
                    <path d="M13.4890497,17.0220906 C13.2514181,17.2760673 12.9194883,17.4194006
                          12.5724708,17.4194006 C12.2241959,17.4194006 11.8922661,17.2760673
                          11.6546345,17.0220906 L4.92299708,9.84285088 L6.75741228,8.12159357
                          L12.5724708,14.3239035 L18.3862719,8.12159357 L20.2206871,9.84285088
                          L13.4890497,17.0220906 Z M12.5724708,0.000628654971
                          C5.62834795,0.000628654971
                          -0.000628654971,5.62834795 -0.000628654971,12.5724708
                          C-0.000628654971,19.5153363 5.62834795,25.1430556
                          12.5724708,25.1430556 C19.5140789,25.1430556
                          25.1430556,19.5153363 25.1430556,12.5724708
                          C25.1430556,5.62834795 19.5140789,0.000628654971
                          12.5724708,0.000628654971 L12.5724708,0.000628654971 Z"
                          transform="translate(12.571213, 12.571842) rotate(-90.000000)
                          translate(-12.571213, -12.571842) ">
                    </path>
                  </g>
                </g>
              </g>
            </svg>
      </button>
    </div>
</template>
<script>
export default {
  name: 'SliderTwo',
  data() {
    return {
      title: 'Transform a column into a row',
    };
  },
};
</script>
<style scoped>
@import '@/components/Slider/Two/SliderCss.css';
</style>
