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
        width: 600,
        height: 338,
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
@import "/src/components/videoJs/example/video-js.css";
.video-player {
  display: flex;
  justify-content: center;
  padding: 80px 0;
}
</style>
