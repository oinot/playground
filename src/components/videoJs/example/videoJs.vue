<template>
  <div>
    <video
    ref="videoPlayer"
    class="video-js">
      <track
      kind="captions"/>
    </video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
    });
  },
  beforeUnMount() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
