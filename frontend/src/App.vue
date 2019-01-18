<template>
  <div id="app">
    <Progress class="progress-style" :strokeWidth="progress.stroke_width" :percent="progress.percent" size="small"
      :status="progress.status" :showInfo="progress.show_info" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import {
    Progress,
  } from 'ant-design-vue'

  export default {
    name: 'app',
    components: {
      Progress,
    },
    created() {
      this.handleProgress()
    },
    data() {
      return {
        progress: {
          percent: 0,
          status: 'normal',
          stroke_width: 3,
          show_info: false,
        }
      }
    },
    methods: {
      handleProgress() {
        for (let i = 0; i <= 100; i++) {
          setTimeout(() => {
            this.progress.percent = i
            if (i > 0 && i > 10) {
              this.progress.status = 'normal'
            }
            if (i > 10 && i > 90) {
              this.progress.status = 'active'
            }
            if (i > 90 && i >= 100) {
              this.progress.status = 'success'
            }
          }, 500)
        }
      }
    }
  }
</script>

<style lang="less">
  @import "./assets/css/normalize.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .progress-style {
      position: fixed;
      left: 0;
      top: -8px;
    }
  }
</style>
