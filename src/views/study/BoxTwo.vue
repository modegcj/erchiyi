<template>
    <div class="two">
        <h1>第二页</h1>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

// let a = [1,'1'];
// a = [];
// console.log(a);

let extend = ():number=>{
    return 123;
}

onMounted(()=>{
    class twoObj{
        name?:string;
        do(a:string){
            this.name = a;
        }
    }
    let two = new twoObj();
    let t = new twoObj();
    // console.log(two.name,t.name);
    two.do('twoooooo');
    t.do('toooo');
    // console.log(two.name,t.name);
    let identity = <T>(arg:T):T =>{
        return arg;
    }
    let output = identity('string');
    // console.log(output);
})
</script>
<style>
</style>