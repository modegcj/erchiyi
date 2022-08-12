<template>
    <div class="four">
        <h1>第四页</h1>
    </div>
</template>
<script lang="ts" setup>
// 定义类型
type TNull<T> = T|null;
let a:TNull<number> = 123;
let b:TNull<number> = null
console.log(a,b);
type UNull<U> = (arg:U) => U|null;
let c:UNull<number> = (n)=>null;
console.log(c(123))
</script>
<style>
</style>