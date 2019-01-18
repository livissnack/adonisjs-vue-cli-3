<template>
  <div class="home">
    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld,
    },
    data() {
      return {}
    },
    computed: {},
    created() {
      this.handleSubmit()
    },
    methods: {
      handleSubmit () {
        // this.$message.info('This is a normal message')
      }
    }
  }
</script>

<style lang="less" scoped>
  .home{
    margin-top: 40px;
  }
</style>

