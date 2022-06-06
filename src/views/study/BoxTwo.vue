<template>
    <div class="two">
        <h1>第二页</h1>
    </div>
</template>
<script lang="ts" setup>
import { onMounted,ref } from "vue";

// let a = [1,'1'];
// a = [];
// console.log(a);

let extend = ():number=>{
    return 123;
}


interface int{
    readonly x:number;
    y:number;
}
let intlist = ref<int[]>([]);
intlist.value.push({x:123,y:233});
// intlist.value[0].x = 1;
console.log(intlist);
class obj implements int{
    readonly x:number;
    y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}
let objlist:Array<obj> = [];
objlist.push(new obj(1,2));
console.log(objlist);
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