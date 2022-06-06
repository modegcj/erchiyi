<template>
    <div class="one">
        <h1>二吃一</h1>
        <div class="checkerboard">
            <template v-if="true">
                <!-- 线条 -->
                <div class="line_row line1"></div>
                <div class="line_row line2"></div>
                <div class="line_col line3"></div>
                <div class="line_col line4"></div>
            </template>
            <template v-if="true">
                <!-- 点 -->
                <div @click="clickSpot(bol.isShow,index)" v-for="bol,index of spotList" :key="index" :class="'spot' + (index+1) + ' ' + (index===selectIndex?'select':'') + ' ' + (bol.isShow?'show':'')" class="spot">
                    <span :class="bol.isRed?'red':''"></span>
                </div>
            </template>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type {Ref} from 'vue';
interface spot{
    isShow:boolean,
    isRed:boolean
}
// 选中的棋子索引
let selectIndex:Ref = ref<number|null>(null);
// 棋子列表
let spotList:Ref = ref<spot[]>([]);
for(let i = 0,len = 16;i < len;i ++){
    let spot:spot = {
        isShow: false,
        isRed: false,
    }
    if(i < 4){
        spot.isShow = true;
    }else if(i > 11){
        spot.isShow = true;
        spot.isRed = true;
    }
    spotList.value.push(spot);
}
// @params
// bol:点击的棋子是否显示
// index:点击的棋子索引
let clickSpot = (bol:boolean,index:number):void|boolean => {
    if(bol){
        selectIndex.value = index;
    }else if(selectIndex.value!==null){
        if((selectIndex.value===index-4||selectIndex.value===index+4||selectIndex.value===index+1||selectIndex.value===index-1)){
            if((index+1)%4===0&&index+1===selectIndex.value){
                return false;
            }
            spotList.value[selectIndex.value].isShow = false;
            if(spotList.value[selectIndex.value].isRed){
                spotList.value[index].isRed = true;
            }else{
                spotList.value[index].isRed = false;
            }
            selectIndex.value = null;
            spotList.value[index].isShow = true;
        }
    }
}
</script>
<style lang="scss">
@mixin flexattr{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.one{
    @include flexattr;
}
.checkerboard{
    width: 300px;
    height: 300px;
    border: 1px solid #9c9ca1;
    background: #bce9a2;
    position: relative;
    // 线
    .line1{
        top: 100px;
        left: 0;
    }
    .line2{
        left: 0;
        bottom: 100px;
    }
    .line3{
        top: 0;
        left: 100px;
    }
    .line4{
        top: 0;
        right: 100px;
    }
    // 点
    .spot1{
        left: -12px;
        top: -12px;
    }
    .spot2{
        left: 87px;
        top: -12px;
    }
    .spot3{
        right: 87px;
        top: -12px;
    }
    .spot4{
        right: -12px;
        top: -12px;
    }
    .spot5{
        left: -12px;
        top: 87px;
    }
    .spot6{
        left: 87px;
        top: 87px;
    }
    .spot7{
        right: 87px;
        top: 87px;
    }
    .spot8{
        right: -12px;
        top: 87px;
    }
    .spot9{
        left: -12px;
        bottom: 87px;
    }
    .spot10{
        left: 87px;
        bottom: 87px;
    }
    .spot11{
        right: 87px;
        bottom: 87px;
    }
    .spot12{
        right: -12px;
        bottom: 87px;
    }
    .spot13{
        left: -12px;
        bottom: -12px;
    }
    .spot14{
        left: 87px;
        bottom: -12px;
    }
    .spot15{
        right: 87px;
        bottom: -12px;
    }
    .spot16{
        right: -12px;
        bottom: -12px;
    }
}
.line_row{
    height: 1px;
    width: 100%;
    background: #9c9ca1;
    position: absolute;
}
.line_col{
    height: 300px;
    width: 1px;
    background: #9c9ca1;
    position: absolute;
}
.spot{
    width: 20px;
    height: 20px;
    border: 4px dashed #3c80fd;
    border-color: rgba($color: #000000, $alpha: 0);
    position: absolute;
    cursor: pointer;
    &.select{
        border-color: #3c80fd;
    }
    &.show span{
        visibility: visible;
    }
    span{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: #000;
        visibility: hidden;
        &.red{
            background: #F00;
        }
    }
}
</style>