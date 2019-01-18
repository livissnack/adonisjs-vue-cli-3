<!--  -->
<template>
  <div class="wrapper">
    <a-row>
      <a-col :span="24" class="bg-color">
        <div class="content">
          <div class="head">
            <img class="image" :src="logo" alt="">
            <h3 class="name">LivisSnack</h3>
            <h3 class="position">Software Engineer in Shenzhen China</h3>
          </div>
          <div class="body">
            <a-button class="block-btn" icon="global" type="primary" block @click="handleJump('doniai')">Visit doniai.com</a-button>
            <div class="shortbio">
              <span>Creator of </span>
              <a href="javascript:void(0);" @click="handleJump('doniai')">doniai.com </a>
              <span>and </span>
              <a href="javascript:void(0);" @click="handleJump('hiphup')">hiphup.cn</a>
            </div>
            <div class="shorttxt">
              <p>Enthusiastic Programmer and Cryptocurrency Visionary</p>
              <p>Expert in PHP, Laravel, Vuejs and Blockchain Technology</p>
            </div>
            <div class="metacontent">
              <div class="jobs">
                <div class="metahead">Work:&nbsp;</div>
                <div class="metabody">Donica</div>
              </div>
              <div class="schools">
                <div class="metahead">Education:&nbsp;</div>
                <div class="metabody">Huazhong University of Technology Wuchang Branch</div>
              </div>
            </div>
            <div class="social-links">
              <a-icon @click="handleJump('weibo')" class="social-icon" type="weibo-circle" />
              <a-icon @click="handleJump('githup')" class="social-icon" type="github" />
              <a-icon @click="handleJump('twitter')" class="social-icon" type="twitter" />
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Col,
    Icon,
    Row
  } from 'ant-design-vue'
  Vue.use(Col)
  Vue.use(Row)
  Vue.use(Icon)
  export default {
    data() {
      return {
        logo: require('@/assets/avatar.jpeg'),
        social_links: {
          doniai: 'https://doniai.com',
          hiphup: 'https://hiphup.cn',
          weibo: 'https://weibo.com/livissnack',
          githup: 'https://github.com/livissnack',
          twitter: 'https://twitter.com/livissnack'
        }
      }
    },
    methods: {
      handleJump(value) {
        if(value == 'doniai') {
          this.$message.info('站点暂未开发完成，请稍后再试！')
          // window.location.href = this.social_links.doniai
        }
        if(value == 'hiphup') {
          this.$message.info('站点暂未开发完成，请稍后再试！')
          // window.location.href = this.social_links.hiphup
        }
        if(value == 'weibo') {
          window.location.href = this.social_links.weibo
        }
        if(value == 'githup') {
          window.location.href = this.social_links.githup
        }
        if(value == 'twitter') {
          window.location.href = this.social_links.twitter
        }
      }
    }
  }
</script>
<style lang='less' scoped>
  body,html{
    height: 100%;
  }
  .wrapper {
    background-color: #F76B1D;
    background: linear-gradient(135deg, #F76B1D 0%, #F76B1D 30%, #ffb631 100%) fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .content {
      margin: 0 auto;
      width: 620px;
      text-align: center;
      background-color: #fff;
      border-radius: 4px;
      margin-top: 140px;
      color: #333;

      .head {
        box-sizing: border-box;

        .image {
          position: relative;
          width: 120px;
          height: 120px;
          margin-top: -70px;
          background-size: cover;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-position: center center;
          margin-bottom: 20px;
        }
        .name{
          font-size: 20px;
          line-height: 1.2;
          text-transform: none;
          letter-spacing: 2px;
          font-weight: 900;
          color: #333;
        }
        .position{
          font-size: 18px;
          line-height: 1.2;
          text-transform: none;
          letter-spacing: 1.6px;
          font-weight: 500;
          color: #333;
        }
      }

      .body{
        text-align: center;
        .block-btn{
          width: 70%;
          background-color: rgb(247, 107, 29);
          border-color: rgb(247, 107, 29);
          margin: 10px 0;
        }
        .shortbio{
          font-size: 16px;
          max-width: 400px;
          font-weight: 300;
          width: 100%;
          margin: 0 auto;
          word-wrap: break-word;
          a{
            text-decoration: underline;
            color: #333;
          }
        }
        .shorttxt{
          font-size: 16px;
          font-weight: 300;
          margin-top: 10px;
          p{
            margin: 0;
          }
        }
        .metacontent{
          margin-top: 20px;
          .jobs{
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .schools{
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        }
        .social-links{
          display: flex;
          justify-content: center;
          margin-top: 20px;
          padding-bottom: 30px;
          .social-icon{
            margin-left: 10px;
            cursor: pointer;
            svg{
              fill: rgba(54, 71, 78, .7);
              width: 3em !important;
              height: 3em !important;
            }
          }
        }
      }
    }
  }
</style>