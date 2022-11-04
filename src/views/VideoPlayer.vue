<template>
  <div>
    <video-player class="video-player" :options="videoOptions" />
  </div>
</template>

<script>

import VideoPlayer from '@/components/videoJs/example/videoJs.vue';
import video from '../assets/videos/video_small.mp4';

export default {
  name: 'VideoExample',
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        width: 720,
        height: 480,
        sources: [
          {
            src: video,
            type: 'video/mp4',
          },
        ],
      },
    };
  },
};
</script>
<style>
@import "/node_modules/video.js/dist/video-js.css";
.video-player {
  display: flex;
  justify-content: center;
  padding: 80px 0;
}
</style>
