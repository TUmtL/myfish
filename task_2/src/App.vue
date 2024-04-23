<template>
  <div>
    <select v-model="choose.start">
    <option v-for="one of moneyList" :key="one" :value="one">{{ one }}</option></select>
    <input @input="reCountStart()" v-model='count'>
    <select v-model="choose.end">
    <option v-for="one of moneyList" :key="one" :value="one">{{ one }}</option></select>
    <input @input="reCountEnd()" v-model='result'>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
const moneyList = ["EUR", "RUB", "USD"];
const choose = ref({
  start:"USD",
  end:'RUB'
})
const count = ref(1);
const multiplaer = ref(0)
const result = ref(multiplaer.value)
function reCountStart(){
  result.value = count.value * multiplaer.value 
}

function reCountEnd(){
  count.value = result.value / multiplaer.value
}
fetch(`https://v6.exchangerate-api.com/v6/6fdc98bd7705845063e0204c/pair/${choose.value.start}/${choose.value.end}`).then(res => res = res.json()).then(res => {multiplaer.value = res.conversion_rate ; reCountStart()})
watch(()=> choose , ()=>fetch(`https://v6.exchangerate-api.com/v6/6fdc98bd7705845063e0204c/pair/${choose.value.start}/${choose.value.end}`).then(res => res = res.json()).then(res => multiplaer.value = res.conversion_rate) , {deep:true})
</script>

<style>
</style>