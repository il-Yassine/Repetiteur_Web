<template>
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        
        <div class="p-4 pb-6 flex justify-center flex-col items-center">
         <img class="md:block hidden" :src="imageSrc" alt=" image" /> 
        <!-- <img class="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" /> -->
        
    </div>
    <div class="p-4 pb-6 flex justify-center flex-col items-center">
      <h3 class=" font-normal text-lg leading-2 text-gray-600 py-3">{{ name }}</h3>
      <p class="font-normal text-base leading-6 text-gray-600">{{ description }}</p>
    </div>
    <div class="p-4 pb-6 flex justify-center flex-col items-center">
        <h3 class=" font-normal text-lg leading-2 text-gray-600 py-3">{{ test }}</h3>
        <p class="font-normal text-base leading-6 text-gray-600">{{ resultat }}</p>
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
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    
    resultat: {
        type: String,
        required: true,
      },
      test: {
        type: String,
        required: true,
      },
    
    },
  };
  </script>
  