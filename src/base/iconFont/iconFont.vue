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
          default: ''
        },
        size: {
          type: String,
          default: 15
        }
      },
        computed:{
            style(){
                if(this.color){
                    return "color:"+this.color+";font-size:"+ this.size
                }else{
                    return "font-size:"+ this.size
                }
            }
        },
        methods:{
        },
        components:{
            
        }
    }
</script>
