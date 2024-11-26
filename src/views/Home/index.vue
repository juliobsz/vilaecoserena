<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <main class="flex flex-col items-center justify-center w-full h-min-screen">
    <div class="flex flex-col items-center justify-center w-full mt-36">
        <h1 class="text-4xl lg:text-7xl font-bold">Vila EcoSerena</h1>
        <h2 class="text-xl mb-10 text-center">O primeiro Balneário sustentável do mundo</h2>
        <Button label="Agendar Visita" severity="info" class="mb-16" @click="router.push('/agendamento')"/>
    </div>
    <div class="collapse lg:visible flex flex-col items-center justify-center">
      <div class="flex [&:hover>div]:w-16 [&>div:hover]:w-[35rem] w-full">
        <div class="group relative h-[30rem] w-[35rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200 rounded-l-lg">
          <img class="h-full object-cover transition-all" src="../../assets/images/ecoterra1.png" alt="" />
        </div>
        <div class="group relative h-[30rem] w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
          <img class="h-full object-cover transition-all" src="../../assets/images/ecoterra2.png" alt="" />
        </div>
        <div class="group relative h-[30rem] w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
          <img class="h-full object-cover transition-all" src="../../assets/images/ecoterra3.png" alt="" />
        </div>
        <div class="group relative h-[30rem] w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200 rounded-r-lg">
          <img class="h-full object-cover transition-all" src="../../assets/images/ecoterra1.png" alt="" />
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center justify-between w-3/4 mx-auto mt-32 h-2/3">
      <div class="flex flex-col">
        <h1 class="w-1/2 text-3xl font-poppins font-bold">Plantio de árvores</h1>
        <h2 class="w-full text-2xl font-poppins">Ganhe desconto nas suas visitas ao plantar mudas de árvores</h2>
      </div>
      <img alt="mudas" src="../../assets/images/mudas.png" class="collapse lg:visible w-1/4 border-2 border-black/30 rounded-full h-2/3"/>
    </div>
    <div class="flex flex-row items-center justify-between w-3/4 mx-auto mt-32">
      <img alt="trilha" src="../../assets/images/trilhas.png" class="collapse lg:visible flex w-1/4 border-2 border-black/30 rounded-full h-2/3"/>
      <div class="flex flex-col">
        <h1 class="w-1/2 text-3xl font-poppins font-bold">Trilhas ecológicas</h1>
        <h2 class="w-full text-2xl font-poppins">Faça trilhas que explorem a fauna e a flora local</h2>
      </div>
    </div>
    <div class="flex flex-row items-center justify-between w-3/4 mx-auto my-32">
      <div class="flex flex-col">
        <h1 class="w-1/2 text-3xl font-poppins font-bold">Pesca consciente</h1>
        <h2 class="w-full text-2xl font-poppins">Atividades de pesca com práticas sustentáveis como pesque e solte</h2>
      </div>
      <img alt="pesca" src="../../assets/images/pesca.png" class="collapse lg:visible w-1/4 border-2 border-black/30 rounded-full h-2/3"/>
    </div>
  </main>
</template>
