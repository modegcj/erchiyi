<template>
    <div class="three">
        <h1>第三页</h1>
        <div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
let numberList = ref<number[]>([]);
for(let i:number = 0; i < 16;i ++){
    let random = parseInt((Math.random()*100).toString());
    numberList.value.push(random);
}
console.log(numberList.value)
</script>
<style>
</style>