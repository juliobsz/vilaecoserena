<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();

const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const today = new Date().getDay();

const selectedDay = ref(0);
const selectedDate = ref(6);
const error = ref(false);
const success = ref(false);

function agendar() {
  if (selectedDay.value === 0) return error.value = true;
  if (selectedDate.value === 6) return error.value = true;

  error.value = false;
  success.value = true;
}
</script>

<template>
  <main class="flex flex-col items-center justify-center w-full h-screen">
    <div class="flex flex-col items-center justify-center w-full mt-36">
      <h1 class="text-4xl lg:text-7xl font-bold mb-8">Agendar Visita</h1>
      <div class="grid grid-rows-3 gap-2 grid-cols-3 lg:grid-cols-5 w-full lg:w-1/2 px-2">
        <div v-for="i in 5" :class="`flex text-xl px-3 rounded-md justify-center mx-1 cursor-pointer ${selectedDay === i ? 'bg-green-400 text-white border-1 border-solid border-gray-500' : 'border-1 border-solid border-white'}`" @click="selectedDay = i">{{ weekdays[today + i] }}</div>
      </div>
      <div v-if="selectedDay !== 0" class="grid gap-2 grid-cols-3 lg:grid-cols-6 w-full lg:w-1/2 mb-8 lg:mb-16 px-2">
        <div v-for="i in 6" :class="`flex text-xl px-3 rounded-md mx-2 cursor-pointer justify-center ${selectedDate === (8 + 2*i) ? 'bg-green-400 text-white border-1 border-solid border-gray-500' : 'border-1 border-solid border-white'}`" @click="selectedDate = (8 + 2*i)">{{ 8 + 2*i }}:00</div>
      </div>
      <Button label="Agendar Visita" severity="info" class="lg:mb-16" @click="agendar"/>
    </div>
    <div v-if="success" class="flex flex-col items-center justify-center w-2/3 lg:w-1/3 rounded-lg bg-green-500 text-white mt-36">
      <h1 class="text-2xl font-bold mb-8 mt-4 text-center">Visita agendada</h1>
      <h1 class="text-xl mb-8 text-center">Te vemos na {{ weekdays[today + selectedDay] }} às {{ selectedDate }} horas!</h1>
    </div>
    <div v-if="error" class="flex flex-col items-center justify-center w-2/3 lg:w-1/3 rounded-lg bg-red-500 text-white mt-36">
      <h1 class="text-2xl font-bold mb-8 mt-4 text-center">Não foi possível agendar a visita</h1>
      <h1 class="text-xl mb-8 text-center">Insira todos os dados.</h1>
    </div>
  </main>
</template>
