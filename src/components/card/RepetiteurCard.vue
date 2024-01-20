<template>
    <div class="py-1 px-2">
      <div class="max-w-md p-6 bg-white rounded-lg shadow-md">
        <img :src="imageSrc" alt="Publicité" class="w-full h-auto rounded-lg">
        <div class="mt-4">
          <p class="text-gray-700 text-center text-base">{{ cardTitle }}</p>
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
      cardTitle: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles Tailwind spécifiques au composant si nécessaire */
  </style>