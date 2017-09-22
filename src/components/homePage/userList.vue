<template>
  <div class="menuList">
    <mu-list>
      <mu-list-item :title="userInfo.name">
        <mu-avatar :src="userInfo.avatar" slot="leftAvatar"/>
        <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">{{userInfo.position}} -</span> 
				{{userInfo.mobile}}
      </span>
        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
          <mu-menu-item title="回复"/>
          <mu-menu-item title="标记"/>
          <mu-menu-item title="删除"/>
        </mu-icon-menu>
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-list>
      <mu-sub-header>声音开启设置</mu-sub-header>
      <mu-list-item disableRipple @click="handleToggle('events')" title="事件和提醒">
        <mu-switch v-model="events" slot="right"/>
      </mu-list-item>
      <mu-list-item disableRipple @click="handleToggle('calls')" title="电话">
        <mu-switch v-model="calls" slot="right"/>
      </mu-list-item>
      <mu-list-item disableRipple @click="handleToggle('messages')" title="信息">
        <mu-switch v-model="messages" slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-sub-header>通知设置</mu-sub-header>
      <mu-list-item disableRipple @click="handleToggle('notifications')" title="通知">
        <mu-checkbox v-model="notifications" slot="left"/>
      </mu-list-item>
      <mu-list-item disableRipple @click="handleToggle('sounds')" title="声音">
        <mu-checkbox v-model="sounds" slot="left"/>
      </mu-list-item>
      <mu-list-item disableRipple @click="handleToggle('videoSounds')" title="视频的声音">
        <mu-checkbox v-model="videoSounds" slot="left"/>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        events: false,
        calls: false,
        messages: false,
        notifications: false,
        sounds: false,
        videoSounds: false,
        userInfo: {}
      }
    },
    methods: {
      handleToggle (key) {
        this[key] = !this[key]
      },
      _getUserInfo: function () {
        axios.get('ij/getUserInfo?userId=' + userId).then((req) => {
          this.userInfo = req.data
        }).catch((error) => console.log(error))
      }
    },
    created(){
      this._getUserInfo()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
