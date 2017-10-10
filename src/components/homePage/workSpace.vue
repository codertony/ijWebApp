<template>
  <div>
    <div class="appGroup">
      <div class="appGroup-title">
        常用应用
      </div>
      <div class="appBtnRow">
        <router-link v-for="item in appList" class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont :icon="item.icon" size="28px" :class='item.color'></iconfont>
        </span>
          <span class="appName">{{item.name}}</span>
        </router-link>
      </div>
    </div>
  
    <div class="appGroup">
      <div class="appGroup-title">
        房管应用
      </div>
      <div class="appBtnRow">
        <router-link v-for="item in appList" class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont :icon="item.icon" size="28px" :class='item.color'></iconfont>
        </span>
          <span class="appName">{{item.name}}</span>
        </router-link>
      </div>
    </div>
  
    <div class="appGroup">
      <div class="appGroup-title">
        相寓应用
      </div>
      <div class="appBtnRow">
        <router-link v-for="item in appList" class="appBtn" to="/test">
        <span class="appIcon">
          <iconfont :icon="item.icon" size="28px" :class='item.color'></iconfont>
        </span>
          <span class="appName">{{item.name}}</span>
        </router-link>
      </div>
    </div>
    
  </div>
</template>
<script>
  import appBtnSlider from '@/base/appBtnSlider/appBtnSlider'
  import Iconfont from '@/base/iconFont/iconFont'
  export default{
    data(){
      return {
        appList:[
          {
            name:'我的待审',
            icon:'&#xe60f;',
            color:'blue',
            link:''
          },
          {
            name:'我的待审',
            icon:'&#xe611;',
            color:'red',
            link:''
          },
          {
            name:'我的待审',
            icon:'&#xe601;',
            color:'yellow',
            link:''
          },
          {
            name:'我的待审',
            icon:'&#xe60c;',
            color:'green',
            link:''
          },
          {
            name:'我的待审',
            icon:'&#xe60d;',
            color:'yellow',
            link:''
          },
          {
            name:'我的待审',
            icon:'&#xe60f;',
            color:'blue',
            link:''
          },
          {
            name:'我的待审',
            icon:'&#xe611;',
            color:'red',
            link:''
          },
          {
            name:'我的待审',
            icon:'&#xe601;',
            color:'yellow',
            link:''
          },
          {
            name:'我的待审',
            icon:'&#xe60c;',
            color:'green',
            link:''
          },
          {
            name:'我的待审',
            icon:'&#xe60d;',
            color:'yellow',
            link:''
          },
         
        ]
      }
    },
    components: {
      appBtnSlider,
      Iconfont
    }
  }
</script>
<style lang="less" scoped rel="stylesheet/less" type="text/less">
  @import "../../common/css/var";
  .appBtnRow{
    display : flex;
    flex-wrap : wrap;
    margin: 10px 0 5px 0;
    .appBtn{
      width : 25%;
      text-align : center;
      margin-bottom: 10px;
      .appName{
        color: @textColor;
      }
      .appIcon{
        margin : 5px auto;
        display : block;
      }
    }
  }
  
  .appGroup{
    border-bottom: 1px solid #f0f0f0;
    .appGroup-title{
      margin: 15px 0 0 12px;
      font-size: 15px;
      color: @lightTextColor;
      position: relative;
      padding-left: 12px;
      &:before{
        content: "";
        background-color: @primaryColor;
        display: inline-block;
        height: 15px;
        width: 6px;
        border-radius: 2px;
        position: absolute;
        top: 3px;
        left: 0;
      }
    }
  }
  
  
</style>

