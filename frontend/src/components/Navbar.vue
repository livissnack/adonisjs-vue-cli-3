<!--  -->
<template>
  <div class="header">
    <div class="logo" @click="$router.push({name:'home'})">
      <img :src="logoUrl" :alt="$t('logoAlt')" />
    </div>
    <div class="nav">
      <Menu v-model="current" mode="horizontal">
        <SubMenu>
          <span slot="title" class="submenu-title-wrapper">
            <Icon type="user" />
            {{ $t('topMenu.user') }}
          </span>
          <ItemGroup>
            <MenuItem key="setting:1">{{ $t('topMenu.sub_user.user_list') }}</MenuItem>
          </ItemGroup>
        </SubMenu>
        <SubMenu>
          <span slot="title" class="submenu-title-wrapper">
            <Icon type="global" />
            {{ $t('topMenu.website') }}
          </span>
          <ItemGroup>
            <MenuItem key="setting:2">{{ $t('topMenu.sub_website.shop') }}</MenuItem>
            <MenuItem key="setting:3">{{ $t('topMenu.sub_website.blog') }}</MenuItem>
            <MenuItem key="setting:4">{{ $t('topMenu.sub_website.forum') }}</MenuItem>
            <MenuItem key="setting:5">{{ $t('topMenu.sub_website.vpn') }}</MenuItem>
            <MenuItem key="setting:6">{{ $t('topMenu.sub_website.nav') }}</MenuItem>
            <MenuItem key="setting:7">{{ $t('topMenu.sub_website.crawle') }}</MenuItem>
            <MenuItem key="setting:8">{{ $t('topMenu.sub_website.pinxin') }}</MenuItem>
            <MenuItem key="setting:9">{{ $t('topMenu.sub_website.doniai') }}</MenuItem>
          </ItemGroup>
        </SubMenu>
        <SubMenu>
          <span slot="title" class="submenu-title-wrapper">
            <Icon type="wechat" />
            {{ $t('topMenu.wechat') }}
          </span>
          <ItemGroup>
            <MenuItem key="setting:10">{{ $t('topMenu.sub_wechat.official_accounts') }}</MenuItem>
            <MenuItem key="setting:11">{{ $t('topMenu.sub_wechat.mini_program') }}</MenuItem>
          </ItemGroup>
        </SubMenu>
        <SubMenu>
          <span slot="title" class="submenu-title-wrapper">
            <Icon type="api" />
            {{ $t('topMenu.api') }}
          </span>
          <ItemGroup>
            <MenuItem key="setting:12" @click="$router.push({name:'ListApi'})">{{ $t('topMenu.sub_api.public_api') }}</MenuItem>
            <MenuItem key="setting:13">{{ $t('topMenu.sub_api.private_api') }}</MenuItem>
          </ItemGroup>
        </SubMenu>
        <SubMenu>
          <span slot="title" class="submenu-title-wrapper">
            <Icon type="pay-circle" />
            {{ $t('topMenu.order') }}
          </span>
          <ItemGroup>
            <MenuItem key="setting:14">{{ $t('topMenu.sub_order.order_list') }}</MenuItem>
          </ItemGroup>
        </SubMenu>
        <SubMenu>
          <span slot="title" class="submenu-title-wrapper">
            <Icon type="bar-chart" />
            {{ $t('topMenu.total') }}
          </span>
          <ItemGroup>
            <MenuItem key="setting:15">{{ $t('topMenu.sub_total.shop_income_report') }}</MenuItem>
            <MenuItem key="setting:16">{{ $t('topMenu.sub_total.mini_program_income_report') }}</MenuItem>
          </ItemGroup>
        </SubMenu>
      </Menu>

      <div class="change-locale">
        <RadioGroup size="small" :defaultValue="zhCN" @change="changeLocale">
          <RadioButton key="en" :value="enUS">En</RadioButton>
          <RadioButton key="cn" :value="zhCN">Zh</RadioButton>
        </RadioGroup>
      </div>

      <Menu v-model="current" mode="horizontal">
        <SubMenu class="dropdown">
          <span slot="title" class="submenu-title-wrapper">
            {{ $t('topMenu.username') }}
            <Icon type="down" />
          </span>
          <ItemGroup>
            <MenuItem key="setting:17"> {{ $t('topMenu.sub_username.user_center') }} </MenuItem>
            <MenuItem key="setting:18"> {{ $t('topMenu.sub_username.user_logout') }} </MenuItem>
          </ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  </div>
</template>

<script>
  import {
    Menu,
    Icon,
    Radio,
  } from 'ant-design-vue'
  import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
  import enUS from 'ant-design-vue/lib/locale-provider/en_US'
  import moment from 'moment'

  export default {
    data() {
      return {
        locale: null,
        zhCN,
        enUS,
        current: ['mail'],
        logoUrl: require('../assets/logo.png')
      }
    },
    props: ["localeValue"],
    components: {
      Menu: Menu,
      MenuItem: Menu.Item,
      SubMenu: Menu.SubMenu,
      ItemGroup: Menu.ItemGroup,
      Icon: Icon,
      RadioGroup: Radio.Group,
      RadioButton: Radio.Button,
    },
    methods: {
      changeLocale(e) {
        const localeValue = e.target.value.locale
        if (!localeValue) {
          moment.locale('en');
        } else {
          moment.locale('zh-cn');
        }
        this.$emit("listenToChildEvent", localeValue)
      },
    }
  }
</script>
<style lang='less' scoped>
  .header {
    position: relative;
    z-index: 99;
    display: flex;
  }

  .logo {
    width: 70px;
    text-align: center;
    cursor: pointer;

    &:after {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }

    img {
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
  }

  .nav {
    display: flex;
    justify-content: space-between;
    flex: 1;
    margin-left: -10px;
    border-bottom: 1px solid #eee;

    .ant-menu {
      border-bottom: 0;
    }
  }

  .dropdown {
    float: right;
  }

  .change-locale{
    display: flex;
    justify-content: flex-end;
    flex: 1;
    margin-top: 10px;
  }
</style>