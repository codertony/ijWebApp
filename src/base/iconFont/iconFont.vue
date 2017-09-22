<template>
    <i class="iconfont" :style="style" v-html="icon"></i>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">
   
</style>
<script>
    export default{
      name: 'slider',
      props: {
        icon: {
          type: String,
          default: ''
        },
        color: {
          type: String,
          default: '#000000'
        },
        size: {
          type: String,
          default: 15
        }
      },
        computed:{
            style(){
              return "color:"+this.color+";font-size:"+ this.size
            }
        },
        methods:{
        },
        components:{
            
        }
    }
</script>
