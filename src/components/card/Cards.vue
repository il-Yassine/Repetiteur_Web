<!-- Card.vue -->

<template>
    <!-- <div class="px-2 min-w-fit test">
      <div class="overflow-hidden flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover px-1 w-full rounded-t-lg md:h-auto md:w-32 md:rounded-s-lg" :src="imageSrc" alt="">
        <div class="flex flex-col justify-between p-2 leading-normal">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
        </div>
      </div>
    </div> -->
    <div class="px-2 min-w-fit test">
      <div class="overflow-hidden flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 sm:flex-col">
        <img class="object-cover px-1 w-full rounded-t-lg md:h-auto md:w-32 md:rounded-s-lg" :src="imageSrc" alt="">
        <div class="flex flex-col justify-between p-2 leading-normal">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    props: {
       
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    },
  };
  </script>
  
  <style>
  /* Ajoutez des styles spécifiques au besoin */
  .test{
    cursor: pointer;
  }
  </style>
  