<template>
  <div class="about">
    <h1>{{msg}}</h1>
    <div class="box">
      这是一个块元素
      <span class="span1">这是一个行内元素1</span>
      <span class="span2">这是一个行内元素1</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Ref } from "@vue/reactivity";
import { onMounted, ref } from 'vue';

let msg:Ref<string> = ref<string>('This is an about page');
class Animal{
  name:string;
  constructor(name:string){
    this.name = name;
  }
  do(){
    return this.name
  }
}
class Dog extends Animal{
  color:string;
  size:string;
  constructor(name:string,color:string,size:string){
    super(name);
    this.color = color;
    this.size = size;
  }
  greet(){
    return this.color+';'+this.size;
  }
}
let xiaohei = new Dog('小黑','red','big');
// console.log(xiaohei.do(),1);
// console.log(xiaohei.greet(),2);
onMounted(()=>{
  // console.log(xiaohei);
  let myAdd:(baseValue:number,increment:number) => number = function(x,y){return x+y};
  // console.log(myAdd(3,7))

  let myReduce = (baseValue:number,increment:number):number=>{
    return baseValue-increment
  }
  
  // console.log(myReduce(7,3));
  let a:number = 12;
  let b:string = a.toString();
  console.log(b)
})
</script>
<style lang="scss" scoped>
.box{
  .span1{
    color: red;
  }
  &:hover{
    color: blue;
  }
}
</style>