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
                <div @click="clickSpot(bol.isShow,index,bol.xindex,bol.yindex)" v-for="bol,index of spotList" :key="index" :class="'spot' + (index+1) + ' ' + (index===selectIndex?'select':'') + ' ' + (bol.isShow?'show':'')" class="spot">
                    <span :class="bol.isRed?'red':''"></span>
                </div>
            </template>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
interface spot{
    isShow:boolean;
    isRed:boolean;
    xindex:number;
    yindex:number;
    changeShow(s:boolean):void;
    changeColor(c:boolean):void;
}
class spotobj implements spot{
    isShow:boolean;  //是否显示
    isRed:boolean;  //棋子颜色
    readonly xindex: number;  //x索引
    readonly yindex: number;  //y索引
    constructor(isShow: boolean,isRed:boolean,xindex: number,yindex: number){
        this.isShow = isShow;
        this.isRed = isRed;
        this.xindex = xindex;
        this.yindex = yindex;
    }
    changeShow(bol:boolean){
        this.isShow = bol
    }
    changeColor(bol:boolean){
        this.isRed = bol
    }
}
// 选中的棋子索引
let selectIndex = ref<number|null>(null);
// 选中棋子的x轴索引
let selectXIndex = ref<number|null>(null);
// 选中的棋子y轴索引
let selectYIndex = ref<number|null>(null);
// 棋子列表
let spotList = ref<spotobj[]>([]);
let xindex = 0;
let yindex = 0;
for(let i = 0,len = 16;i < len;i ++){
    xindex = i%4;
    yindex = Math.floor(i/4);
    if(i < 4){
        spotList.value.push(new spotobj(true,false,xindex,yindex));
    }else if(i > 11){
        spotList.value.push(new spotobj(true,true,xindex,yindex));
    }else{
        spotList.value.push(new spotobj(false,false,xindex,yindex));
    }
}
// @params
// bol:点击的棋子是否显示
// index:点击的棋子索引
// xindex:点击的棋子的x轴索引
// yindex:点击的棋子的y轴索引
let clickSpot = (bol:boolean,index:number,xindex:number,yindex:number):void|boolean => {
    if(bol){
        selectIndex.value = index;
        selectXIndex.value = xindex;
        selectYIndex.value = yindex;
    }else if(selectIndex.value!==null){
        // 第一种判断棋子移动方法
        // if((selectIndex.value===index-4||selectIndex.value===index+4||selectIndex.value===index+1||selectIndex.value===index-1)){
        //     if((selectIndex.value+1)%4===0&&index===selectIndex.value+1){
        //         return false;
        //     }
        //     if((index+1)%4===0&&index+1===selectIndex.value){
        //         return false;
        //     }
        // 第二种判断棋子移动方法
        if(((xindex+1===selectXIndex.value||xindex-1===selectXIndex.value)&&yindex===selectYIndex.value)||((yindex+1===selectYIndex.value||yindex-1===selectYIndex.value)&&xindex===selectXIndex.value)){
            // 棋子移动并判断红黑棋
            spotList.value[selectIndex.value].isShow = false;
            if(spotList.value[selectIndex.value].isRed){
                spotList.value[index].changeColor(true);
            }else{
                spotList.value[index].changeColor(false);
            }
            selectIndex.value = null;
            selectXIndex.value = null;
            selectYIndex.value = null;
            spotList.value[index].changeShow(true);
        }
        // }
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