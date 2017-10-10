<template>
    <transition name="fade">
        <div class="test">
          这是一个单独的应用
        </div>
    </transition>
</template>
<style lang="less" rel="stylesheet/less" type="text/less">
    &.fade-enter-active, &.fade-leave-active{
        transition: all .5s ease
    }
    &.fade-enter, &.fade-leave-active{
        transform: translate3d(100%,0,0);
    }
    .test{
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #ffffff;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        created(){
            console.log(this.$router)
        },
        computed:{
        },
        methods:{
        },
        components:{
            
        }
    }
</script>
