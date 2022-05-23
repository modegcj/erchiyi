<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type {Ref} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

const msg:Ref = ref<string>('Welcome to Your Vue.js + TypeScript App');
enum Color {Red,Green,Blue};
let c:Color = Color.Red;
let cName = Color[0];
// console.log(c,cName);
onMounted(()=>{
  let arr:Array<number> = [1,2,3,4];
  let arr1:number[] = [5,6,7,8];
  // console.log(arr);
  // console.log(arr1);
  let obj:objObject = Object.create({as:12});
  interface objObject{
    as?:number
  }
  console.log(obj.as);
  let fun = (obj:{a:string,b:number})=>{
    console.log(obj.a,obj.b);
  }
  fun({a:'123',b:123});
})
</script>
