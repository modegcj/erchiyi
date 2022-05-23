<template>
    <div class="box">
        <div class="title">
            <router-link v-for="title,index of titlearr" :key="index" :to="title.path">
                <div class="titletext">{{title.name}}</div>
            </router-link>
        </div>
        <div class="body">
            <router-view v-slot="{Component}">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>  
            </router-view>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
// 定义标题对象接口
interface titleobj{
    name: string;
    path: string;
}
const titlearr = ref<titleobj[]>([{name:'第一页',path:'/one'},{name:'第二页',path:'/two'},{name:'第三页',path:'/three'},{name:'第四页',path:'/fore'}]);

</script>
<style lang="scss">
@mixin flexattr{
    display: flex;
    flex-direction: column;
    align-items: center;
}
$height:40px;
$padding: 15px;
.box{
    @include flexattr;
    height: 100%;
}
.title{
    height: $height;
    line-height: $height;
    display: flex;
    width: 100%;
    a{
        text-decoration:none;
        color: #333333;
        &.router-link-active{
            color: #FF0000;
            .titletext{
                background: #DCDCE2;
            }
        }
    }
    .titletext{
        padding: 0 $padding;
        cursor: pointer;
    }
    :hover{
        color: #FF0000;
    }
}
.body{
    flex: 1;
    width: 100%;
}
// 过渡动画
.fade-enter-active,.fade-leave-active{
    transition: opacity 0.5s ease;
}
.fade-enter-from,.fade-leave-to{
    opacity: 0;
}
</style>