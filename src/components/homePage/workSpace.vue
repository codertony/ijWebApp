<template>
  <div>
    <div class="appBtnRow">
      <router-link class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont icon="&#xe618;" color="blue" size="20px"></iconfont>
        </span>
        <span class="appName">待我审批</span>
      </router-link>
      <router-link class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont icon="&#xe618;" color="blue" size="20px"></iconfont>
        </span>
        <span class="appName">待我审批</span>
      </router-link>
      <router-link class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont icon="&#xe618;" color="blue" size="20px"></iconfont>
        </span>
        <span class="appName">待我审批</span>
      </router-link>
      <router-link class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont icon="&#xe618;" color="blue" size="20px"></iconfont>
        </span>
        <span class="appName">待我审批</span>
      </router-link>
      <router-link class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont icon="&#xe618;" color="blue" size="20px"></iconfont>
        </span>
        <span class="appName">待我审批</span>
      </router-link>
      <router-link class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont icon="&#xe618;" color="blue" size="20px"></iconfont>
        </span>
        <span class="appName">待我审批</span>
      </router-link>
    </div>
    <div class="appBtnRow">
      <router-link class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont icon="&#xe618;" color="blue" size="20px"></iconfont>
        </span>
        <span class="appName">待我审批</span>
      </router-link>
      <router-link class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont icon="&#xe618;" color="blue" size="20px"></iconfont>
        </span>
        <span class="appName">待我审批</span>
      </router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import appBtnSlider from '@/base/appBtnSlider/appBtnSlider'
  import Iconfont from '@/base/iconFont/iconFont'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      appBtnSlider,
      Iconfont
    }
  }
</script>
<style lang="less" scoped rel="stylesheet/less" type="text/css">
  .appBtnRow{
    display: flex;
    flex-wrap: wrap;
    .appBtn{
      width: 25%;
    }
  }

</style>

