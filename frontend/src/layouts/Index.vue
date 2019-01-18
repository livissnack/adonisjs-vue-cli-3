<!-- 这是一个layout继承模板 -->
<template>
  <a-locale-provider :locale="locale">
    <div class="wrapper">
      <Navbar :localeValue="locale" @listenToChildEvent="showLocaleFromChild" />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </a-locale-provider>
</template>

<script>
  import Navbar from '../components/Navbar'
  import { setup } from '../utils/i18n'
  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
  import enUS from 'ant-design-vue/lib/locale-provider/en_US'
  export default {
    data() {
      return {
        locale: zhCN,
      }
    },
    components: {
      Navbar
    },
    methods: {
      showLocaleFromChild(data) {
        if(data=='en'){
          this.locale = enUS
          setup('en')
        }
        if(data=='zh-cn'){
          this.locale = zhCN
          setup('zh')
        }
      }
    }
  }
</script>
<style lang='less' scoped>
  .wrapper {
    margin-top: 10px;
  }

  .content {
    width: 100%;
    padding: 20px;
  }
</style>