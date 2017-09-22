<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <mu-bottom-nav shift id="bottomNav">
      <mu-bottom-nav-item value="menuList" title="菜单" icon="view_list" to="/homePage/menuList"
                          activeClass="mu-bottom-item-active" exact replace/>
      <mu-bottom-nav-item value="homePage" title="主页" icon="account_balance" to="/homePage/workSpace"
                          activeClass="mu-bottom-item-active" exact replace/>
      <mu-bottom-nav-item value="userList" title="我的" icon="assignment_ind" to="/homePage/userList"
                          activeClass="mu-bottom-item-active" exact replace/>
    </mu-bottom-nav>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
<style lang="less" scoped rel="stylesheet/less" type="text/less">
  html, body {
    height: 100%;
    overflow-y: hidden;
  }
  
  #app {
    height: 100%;
    overflow-y: auto;
  }
  
  #bottomNav {
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>

