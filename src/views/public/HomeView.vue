
<template>

  <div class="carousel">
    <div
       v-for="(image, index) in images"
      :key="index"

      :class="{ 'hidden': index !== currentIndex, 'block': index === currentIndex }" transition="fade"

      class="slide" 
    >
    <img :src="image.src" :alt="image.alt"  class="h-370 object-cover w-full" >
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p class="text-gray-700 text-center">{{ image.description }}</p>
    </div>
   
    </div>
  </div> 
  <section
  id="cardSection"
  class="overflow-hidden"
  @mouseover="pauseScrollAnimation"
  @mouseout="resumeScrollAnimation"
  >
    <div class="mx-5 bg-trensparent py-3 absolute top-1/2 transform translate-y-1/3">
      <div>
        <div class="card-container">
          <div class="card-wrapper flex items-center justify-center " ref="cardWrapper">
           
            <card-component v-for="(card, index) in apeResults" :key="index"
             :imageSrc="card.profil_imageUrl"
             :title="card.user.name"
             :description="card.adresse"
             class="card-slider text-center "
              />
           
          </div>
      </div>
      </div>
      

    </div>
  </section>

  <section id="clients" class="bg-white py-3">
    <div class="swiper-container mx-auto" data-aos="fade-up">
  
      <div class="clients-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper flex items-center justify-center"> <!-- Utilisez justify-center pour aligner les logos au centre -->
  
          <!-- Utilisez une classe pour les styles communs des logos -->
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/amazon.svg" class="mx-auto h-12 w-12" alt="Amazon">
          </div>
  
          <!-- Répétez le même format pour les autres logos -->
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/microsoft.svg" class="mx-auto h-12 w-12" alt="Microsoft">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/netflix.svg" class="mx-auto h-12 w-12" alt="Netflix">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/sony.svg" class="mx-auto h-12 w-12" alt="Sony">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/verizon.svg" class="mx-auto h-12 w-12" alt="Verizon">
          </div>
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/amazon.svg" class="mx-auto h-12 w-12" alt="Amazon">
          </div>
  
          <!-- Répétez le même format pour les autres logos -->
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/microsoft.svg" class="mx-auto h-12 w-12" alt="Microsoft">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/netflix.svg" class="mx-auto h-12 w-12" alt="Netflix">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/sony.svg" class="mx-auto h-12 w-12" alt="Sony">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/verizon.svg" class="mx-auto h-12 w-12" alt="Verizon">
          </div>

          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/amazon.svg" class="mx-auto h-12 w-12" alt="Amazon">
          </div>
  
          <!-- Répétez le même format pour les autres logos -->
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/microsoft.svg" class="mx-auto h-12 w-12" alt="Microsoft">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/netflix.svg" class="mx-auto h-12 w-12" alt="Netflix">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/sony.svg" class="mx-auto h-12 w-12" alt="Sony">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/verizon.svg" class="mx-auto h-12 w-12" alt="Verizon">
          </div>
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/amazon.svg" class="mx-auto h-12 w-12" alt="Amazon">
          </div>
  
          <!-- Répétez le même format pour les autres logos -->
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/microsoft.svg" class="mx-auto h-12 w-12" alt="Microsoft">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/netflix.svg" class="mx-auto h-12 w-12" alt="Netflix">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/sony.svg" class="mx-auto h-12 w-12" alt="Sony">
          </div>
  
          <div class="swiper-slide px-3">
            <img src="../../assets/img/brands/verizon.svg" class="mx-auto h-12 w-12" alt="Verizon">
          </div>
  
        </div>
        <div class="swiper-pagination"></div>
      </div>
  
    </div>
  </section>
  <section id="repetiteur" class="flex">
    
    <!-- Deux tiers à gauche -->
    <div class="w-2/3 p-2  ">
      <!-- Votre contenu pour la partie gauche ici -->
      <div class="bg-gray-50 mb-4 custom-height">
        <div class="flex  py-2">
          <div class="block w-full  items-center">

            <form >

              <div class="flex items-center">

                <label for="default-search" class=" text-2xl px-3">Filtres</label>


              </div>
            </form>
           <div>
            <form  @submit.prevent="search" >

              <div class="flex items-center py-5">


                  <input type="search"  v-model="searchQuery" @input="search" id="default-search" class="flex-grow p-4 mx-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  required>

              </div>
            </form>
           </div>
           <div class="flex space-x-4 mx-2">
            <div  class="flex-1">
              <form  @submit.prevent="search">

                <div class="flex items-center">
  
                  <label for="default-search" class=" text-2xl px-1"> Par Ville</label>
                    <input type="search"   v-model="searchQueryVille" @input="searchVille" id="default-search" class="flex-grow p-4 mx-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  required>
  
                </div>
              </form>
            </div>
           <div class="flex-1">
            <form  @submit.prevent="search">

              <div class="flex items-center">

                <label for="default-search" class=" text-2xl px-1">Par Cycle</label>
                  <input type="search"   v-model="searchQueryCyle" @input="searchCycle" id="default-search" class="flex-grow p-4 mx-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  required>

              </div>
            </form>
           </div>
           <div class="flex-1">
            <form  @submit.prevent="search">

              <div class="flex items-center">

                <label for="default-search" class=" text-2xl px-1">Par Matiere</label>
                  <input type="search"   v-model="searchQueryMatiere" @input="search" id="default-search" class="flex-grow p-4 mx-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  required>

              </div>
            </form>
           </div>
           </div>
            
          </div>
        </div>
        <div class="custo-height">
          <div v-if="paginatedCards.length > 0">
            <div class="cards-container px-3 ">
              <div class="flex flex-wrap w- justify-center ">
                <Card
                v-for="(card, index) in paginatedCards"
                :key="index"
                :imageSrc="card.profil_imageUrl"
                :imageAlt="card.imageAlt"
                :title="card.user.name"
                :Soustitre="card.adresse"
                :Surtitre="card.cycle +'/'+ card.grade"
                :description="card.niveauEtude"
                :productId="card.id"

                class="w-1/4 mb-2 text-center "
              />
              </div>

           </div>
          </div>
          <div v-else>
            Aucun résultat trouvé.
          </div>

        </div>

       <br>

      <div class="flex justify-center mt-4">
    <nav aria-label="Page navigation example">
      <ul class="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a @click.prevent="goToPage(currentPage - 1)" :class="{'opacity-50 cursor-not-allowed': currentPage === 1}" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
          </a>
        </li>
        <li v-for="page in pages" :key="page">
          <a @click.prevent="goToPage(page)" 
            :class="{
              'z-10 flex items-center justify-center px-3 h-8 leading-tight': true,
              'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white': currentPage === page,
              'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white': currentPage !== page
            }">
            {{ page }}
          </a>
        </li>
        
        <li>
          <a @click.prevent="goToPage(currentPage + 1)" :class="{'opacity-50 cursor-not-allowed': currentPage === totalPages}" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  
      
      </div>
     
    </div>

    <!-- Un tiers à droite -->
    <div class="w-1/3 p-2">
      <!-- Votre contenu pour la partie droite ici -->
      <div class="bg-blue-200 mb-4 custom-height">
        <RepetiteurCard v-for="(card, index) in publicite.slice(-5)" :key="index"
        :image-src="card.publiciteUrl"
        :card-title="card.titre"
      />


      </div>
      
    </div>
  </section>
  

  
  <!-- <section id="clients" class="bg-gray-100 py-16">
    <div class="container mx-auto" data-aos="fade-up">
      <div class="section-header text-center mb-8">
        <h2 class="text-3xl font-semibold">Clients</h2>
        <p class="text-gray-600">Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
      </div>
  
      <div class="clients-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper flex items-center">
          <div class="swiper-slide">
            <img src="../../assets/img/brands/amazon.svg" class="mx-auto" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/brands/microsoft.svg" class="mx-auto" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/brands/netflix.svg" class="mx-auto" alt="">
          </div>
          <div class="flex space-x-4">
           
            <img src="../../assets/img/brands/sony.svg" alt="Partenaire 1" class="h-12 w-12">
    
           
            <img src="../../assets/img/brands/verizon.svg" alt="Partenaire 2" class="h-12 w-12">
    
            
            <img src="../../assets/img/brands/amazon.svg" alt="Partenaire 3" class="h-12 w-12">
    
        </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
   -->
  <!-- <div class="text-center">
    <h2 class="section-title"> Rechercher un répétiteur</h2>
  </div> -->

    <!-- <div class="flex justify-center">
      <div class="block w-1/3  items-center">
        <form  @submit.prevent="search">   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">

              <input type="search"  v-model="searchQuery" @input="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher..." required>
              <button  @click="search" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <svg class="w-4 h-4 text-white-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg></button>
          </div>
        </form>
      </div>
     </div>
     <div v-if="searchResults.length > 0">
      <br> -->
      <!-- <h2>Résultats de la recherche :</h2> -->
      <!-- <ul>
        <li v-for="(result, index) in searchResults" :key="index">
          {{ result.fname }} 
        </li>
      </ul> -->
      <!-- <div class="cards-container  overflow-x-hidden flex space-x-4 p-4">
        <div >
        <div class="flex justify-center">
          <Card
          v-for="(result, index) in searchResults"
           :key="index"
            :imageSrc="result.profil_imageUrl"
             :imageAlt="'Image'"
              :title="result.user.name"
               :description="'Professeur de '+ result.matiere.name"
               :productId="result.id"
          
        />
        </div>
      </div>
    
    </div>
    </div>
    <div v-else>
      Aucun résultat trouvé.
    </div>
   
     
    </div> -->
    <!-- <div class="flex">
      <div class="flex-1">
       
        <h1></h1>
    </div> -->

   
    <!-- <div class="w-64 bg-gray-200 p-4">
      <h3>Rechercher un répétiteur</h3>
     
        <input type="text"  v-model="searchQuery" @input="search" placeholder="Rechercher" class="w-full p-2 border border-gray-300 rounded mb-4">
    
        
        <div  v-if="searchQuery.length > 0 && searchResults.length > 0"> 
            <h2></h2>
           
            <ul class="py-4" v-for="(result, index) in searchResults" >

             <li  :key="index" class="px-4 py-2"><router-link class="text-white-950" active-class="text-green-600" :to="'/details/' + result.id">{{ result.user.name }}</router-link></li>

          </ul>
        </div>
        <div v-else-if="searchQuery.length > 0">
          Aucun résultat trouvé
      </div>
        <div v-else>
          
        </div>
    </div> -->
    <!-- </div> -->
    
  
 <!-- <div class="text-center">
  <h2 class="section-title">Les Répétiteurs certifiés</h2>
  <div  v-if="loading">Chargement en cours... </div>
    <div v-else class="px-3">
      <div class="cards-container overflow-hidden">
        <div  ref="cardsInnerContainer"  class="cards-inner-container flex">
        <div class="flex justify-center">
          <Card
          v-for="item in apeResults"
           :key="item.id"
            :imageSrc="item.profil_imageUrl"
             :imageAlt="'Image'"
              :title="item.user.name"
               :description="'Professeur de '+ item.matiere.name"
               :productId="item.id"
          
        />
        </div>
      </div>
    
    </div>
  </div>
 
   
  </div> -->
 
  <!-- <div class="text-center"> -->
    <!-- <h2 class="section-title">Les autres répétiteurs</h2> -->
    <!-- <div  v-if="loading">Chargement en cours... </div>
    <div v-else class="px-3">
      <div class="cards-container overflow-x-hidden flex space-x-4 p-4">
        <div ref="cardsInnerContainer" class="cards-inner-container flex">
        <div class="flex justify-center">
          <Card
          v-for="item in aceResults"
           :key="item.id"
            :imageSrc="item.profil_imageUrl"
             :imageAlt="'Image'"
              :title="item.user.name"
               :description="'Professeur de '+ item.matiere.name"
               :productId="item.id"
          
        />
        </div>
      </div>
    
    </div>
  </div> -->
  
  
 <!-- <div  v-if="loading">Chargement en cours... </div>
 <div v-else class="px-3">
   <div class="cards-container overflow-x-hidden flex space-x-4 p-4">
    <div ref="cardsInnerContainer" class="cards-inner-container flex">
     <div class="flex justify-center">
       <Card
       v-for="item in autresResults"
        :key="item.id"
         :imageSrc="item.profil_imageUrl"
          :imageAlt="'Image'"
           :title="item.user.name"
            :description="'Professeur de '+ item.matiere.name"
            :productId="item.id"
       
     />
     </div>
    </div>
 </div>
</div> -->
     
    <!-- </div> -->
    <!-- <h2 class="section-title text-center">Les témoignages</h2> -->

<!-- 
<section class="bg-orange-300">
  <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
 
    <div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
      <blockquote class="rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img
            alt="Man"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            class="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <div class="flex justify-center gap-0.5 text-blue-500">
              KIDABILI Laure
            </div>

            <p class="mt-0.5 text-lg font-medium text-gray-900">Comptable à BGFI Banque</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
          Mon enfant est fasciner par le répétiteur qui lui a été affecter
        </p>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img
            alt="Man"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            class="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <div class="flex justify-center gap-0.5 text-blue-500">
              FASSINOU Miguel
            </div>

            <p class="mt-0.5 text-lg font-medium text-gray-900">PDG de l'entreprise SIPA Sarl</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
          C'est une platforme vraiment interressant
        </p>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img
            alt="Man"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            class="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <div class="flex justify-center gap-0.5 text-blue-500">
              
              FIFATIN Hermione
            </div>

            <p class="mt-0.5 text-lg font-medium text-gray-900">Agent Commercial a NSIA</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
          Avec une communication parfaite le répétiteur et un payement en ligne qui limite le déplacement
        </p>
      </blockquote>
      
      <blockquote class="rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img
            alt="Man"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            class="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <div class="flex justify-center gap-0.5 text-blue-500">
              
              FIFATIN Armanda
            </div>

            <p class="mt-0.5 text-lg font-medium text-gray-900">Chef d'agence Commercial a NSIA</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
          Avec une communication parfaite le répétiteur et un payement en ligne qui limite le déplacement
        </p>
      </blockquote>
    </div>
  </div>
</section> -->

<!-- <section class="bg-orange-300">
  <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
 
    <div class="mt-8">
      <div class="testimonial-container">
        <div class="testimonial-wrapper"> -->
          <!-- Premier blockquote -->
          <!-- <blockquote class="testimonial-blockquote rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8 px-3">
            <div class="flex items-center gap-4">
              <img
                alt="Man"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                class="h-14 w-14 rounded-full object-cover"
              />
    
              <div>
                <div class="flex justify-center gap-0.5 text-blue-500">
                  KIDABILI Laure
                </div>
    
                <p class="mt-0.5 text-lg font-medium text-gray-900">Chef Comptable à BGFI Banque</p>
              </div>
            </div>
    
            <p class="mt-4 text-gray-700">
              Mon enfant est fasciner par le répétiteur qui lui a été affecter
            </p>
          </blockquote> -->

          <!-- Deuxième blockquote -->
          <!-- <blockquote class="testimonial-blockquote rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8 px-3"> -->
            <!-- Contenu du deuxième témoignage -->
            <!-- <div class="flex items-center gap-4">
              <img
                alt="Man"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                class="h-14 w-14 rounded-full object-cover"
              />
    
              <div>
                <div class="flex justify-center gap-0.5 text-blue-500">
                  FASSINOU Miguel
                </div>
    
                <p class="mt-0.5 text-lg font-medium text-gray-900">PDG de l'entreprise SIPA Sarl</p>
              </div>
            </div>
    
            <p class="mt-4 text-gray-700">
              C'est une platforme vraiment interressant
            </p>
          </blockquote> -->

          <!-- Troisième blockquote -->
          <!-- <blockquote class="testimonial-blockquote rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8 px-3"> -->
            <!-- Contenu du troisième témoignage -->
            <!-- <div class="flex items-center gap-4">
              <img
                alt="Man"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                class="h-14 w-14 rounded-full object-cover"
              />
    
              <div>
                <div class="flex justify-center gap-0.5 text-blue-500">
                  
                  FIFATIN Hermione
                </div>
    
                <p class="mt-0.5 text-lg font-medium text-gray-900">Agent Commercial à la banque NSIA</p>
              </div>
            </div>
    
            <p class="mt-4 text-gray-700">
              Avec une communication parfaite le répétiteur et un payement en ligne qui limite le déplacement
            </p>
          </blockquote>

          <! Quatrième blockquote -->
          <!-- <blockquote class="testimonial-blockquote rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8 px-3"> -->
            <!-- Contenu du quatrième témoignage -->
            <!-- <div class="flex items-center gap-4">
              <img
                alt="Man"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                class="h-14 w-14 rounded-full object-cover"
              />
    
              <div>
                <div class="flex justify-center gap-0.5 text-blue-500">
                  
                  FIFATIN Armanda
                </div>
    
                <p class="mt-0.5 text-lg font-medium text-gray-900">Chef d'agence Commercial à la banque NSIA</p>
              </div>
            </div>
    
            <p class="mt-4 text-gray-700">
              Avec une communication parfaite le répétiteur et un payement en ligne qui limite le déplacement
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>  -->
<!-- <br>

	<section id="test" class="my-2 dark:bg-dark dark:text-gray-100">
		<div class=" bg-transparent container flex flex-col items-center mx-auto mb-2 md:p-2 md:px-12">
			<h1 class="p-4 text-4xl font-semibold leadi text-center">Quelques témoignages</h1>
		</div>
		<div class=" grid grid-cols-4 gap-4 container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 ">
		<div class="lg:col-span-1">
      <div class="bg-orange-300  flex flex-col max-w-sm mx-4 my-8 shadow-lg">
				<div class=" px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
					<p class="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-8 h-8 dark:text-violet-400">
							<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
							<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
						</svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="absolute right-0 w-8 h-8 dark:text-violet-400">
							<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
							<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
						</svg>
					</p>
				</div>
				<div class="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
					<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" class="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700">
					<p class="text-xl font-semibold leadi">Distinctio Animi</p>
					<p class="text-sm uppercase">Aliquam illum</p>
				</div>
			</div>
    </div>

        <div class="lg:col-span-1">
          <div class=" bg-orange-300 flex flex-col max-w-sm mx-4 my-8  shadow-lg">
            <div class="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p class="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-8 h-8 dark:text-violet-400">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="absolute right-0 w-8 h-8 dark:text-violet-400">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div class="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" class="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700">
              <p class="text-xl font-semibold leadi">Distinctio Animi</p>
              <p class="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
        </div>
		<div class="lg:col-span-1">
      <div class="  bg-orange-300 flex flex-col max-w-sm mx-4 my-6 shadow-lg">
				<div class="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
					<p class="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-8 h-8 dark:text-violet-400">
							<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
							<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
						</svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="absolute right-0 w-8 h-8 dark:text-violet-400">
							<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
							<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
						</svg>
					</p>
				</div>
				<div class="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
					<img src="https://source.unsplash.com/50x50/?portrait?3" alt="" class="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700">
					<p class="text-xl font-semibold leadi">Distinctio Animi</p>
					<p class="text-sm uppercase">Aliquam illum</p>
				</div>
			</div>
    </div>
		<div class=" lg:col-span-1">
      <div class=" bg-orange-300 flex flex-col max-w-sm mx-4 my-6 shadow-lg">
				<div class="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
					<p class="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-8 h-8 dark:text-violet-400">
							<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
							<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
						</svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="absolute right-0 w-8 h-8 dark:text-violet-400">
							<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
							<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
						</svg>
					</p>
				</div>
				<div class="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
					<img src="https://source.unsplash.com/50x50/?portrait?4" alt="" class="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700">
					<p class="text-xl font-semibold leadi">Distinctio Animi</p>
					<p class="text-sm uppercase">Aliquam illum</p>
				</div>
			</div>
    </div>
		</div>
	</section>


 <section class="bg-orange-300">
  <div class="mx-auto w-full px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
    <div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 testimonial-container">
      <blockquote class="rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img
            alt="Man"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            class="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <div class="flex justify-center gap-0.5 text-blue-500">
              KIDABILI Laure
            </div>

            <p class="mt-0.5 text-lg font-medium text-gray-900">Comptable à BGFI Banque</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
          Mon enfant est fasciner par le répétiteur qui lui a été affecter
        </p>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4 text-center">
          <img
            alt="Man"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            class="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <div class="flex justify-center gap-0.5 text-blue-500">
              FASSINOU Miguel
            </div>

            <p class="mt-0.5 text-lg font-medium text-gray-900">PDG de SIPA Sarl</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
          C'est une platforme vraiment interressant
        </p>
      </blockquote>

      <blockquote class="rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img
            alt="Man"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            class="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <div class="flex justify-center gap-0.5 text-blue-500">
              
              FIFATIN Hermione
            </div>

            <p class="mt-0.5 text-lg font-medium text-gray-900">Agent Conmercial a NSIA</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
          Avec une communication parfaite le répétiteur et un payement en ligne qui limite le déplacement
        </p>
      </blockquote>
      
      <blockquote class="rounded-lg bg-gray-100 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img
            alt="Man"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            class="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <div class="flex justify-center gap-0.5 text-blue-500">
              
              FIFATIN Hermione
            </div>

            <p class="mt-0.5 text-lg font-medium text-gray-900">Agent Conmercial a NSIA</p>
          </div>
        </div>

        <p class="mt-4 text-gray-700">
          Avec une communication parfaite le répétiteur et un payement en ligne qui limite le déplacement
        </p>
      </blockquote>
    </div>
  </div>
</section>  -->

<section class="pt-4 pb-12 bg-gray-800 mt-1">
  <div class="my-16 text-center">
    <h2
      class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
    >
      Témoignages
    </h2>
    <p class="text-xl text-white">
      L'entreprise elle-même est une entreprise très prospère. lâche sage
    </p>
  </div>
  <div class="grid gap-2 lg:grid-cols-3 ml-12 ">
    <div class="max-w-md p-4 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center -mt-16 md:justify-end">
        <img
          class="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        />
      </div>
      <div>
        <h2 class="text-3xl font-semibold text-gray-800">PDG SIPA Sarl</h2>
        <p class="mt-2 text-gray-600">
          C'est une plateforme vraiment intéressante,
           car elle offre une variété de fonctionnalités
            qui en font un outil indispensable pour les 
            professionnels et les particuliers.
        </p>
      </div>
      <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium text-green-500">FASSINOU Miguel</a>
      </div>
    </div>
    <div class="max-w-md p-4 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center -mt-16 md:justify-end">
        <img
          class="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
          src="https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652__340.jpg"
        />
      </div>
      <div>
        <h2 class="text-3xl font-semibold text-gray-800">Commercial à NSIA</h2>
        <p class="mt-2 text-gray-600">
          Avec une communication parfaite entre le répétiteur 
          et moi, et un payement en ligne qui limite le déplacement 
          vers l'entreprise
        </p>
      </div>
      <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium text-green-500">FIFATIN Hermione</a>
      </div>
    </div>
    <div class="max-w-md p-4 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center -mt-16 md:justify-end">
        <img
          class="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
          src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg"
        />
      </div>
      <div>
        <h2 class="text-3xl font-semibold text-gray-800">Comptable à BGFI Banque</h2>
        <p class="mt-2 text-gray-600">
          Le répétiteur est patient et attentionné. Il prend le
           temps de comprendre les besoins de votre enfant et
            de lui fournir un enseignement adapté.
        </p>
      </div>
      <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium text-green-500">KIDABILI Laure</a>
      </div>
    </div>
  </div>
</section>

<!--   -->
  <!-- Barre latérale -->
  <!-- <div class="w-64 bg-gray-800">
      <div class="flex items-center justify-center h-16 bg-gray-900">
          <span class="text-white text-lg font-semibold">Ma Sidebar</span>
      </div>
      <div class="p-4"> -->
          <!-- Champ de saisie de recherche -->
          <!-- <input type="text"  placeholder="Rechercher..." class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
       
      </div>
  </div> -->

  <!-- Contenu principal -->
  <!-- <div class="flex-1 overflow-hidden"> -->
      <!-- Votre contenu ici -->
  <!-- </div>
</div> -->


<!-- <footer
  class="bg-blue-200 text-center text-black dark:bg-black-600 dark:text-neutral-200 lg:text-left">
  <div
    class="flex items-center justify-center border-b-2 border-dark p-6 dark:border-neutral-500 lg:justify-between">
     <div class="mr-12 hidden lg:block">
     
    </div>  -->
    <!-- Social network icons container -->
    <!-- <div class="flex justify-center">
      <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </a>
      <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </a>

    </div> -->
   <!-- </div>  -->

  <!-- Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. -->
  <!-- <div class="mx-6 py-10 text-center md:text-left">
    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4"> -->
      <!-- TW elements section -->
      <!-- <div class="">
        <h6
          class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start"> -->
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-4 w-4">
            <path
              d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg> -->
          <!-- <span> <img src="../../assets/logo5.png" alt="logo" width="60" ></span>
          MON REPETITEUR
        </h6>
        <br>
        <div class="flex justify-start">
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
    
        </div> -->
        <!-- <p>
          Here you can use rows and columns to organize your footer
          content. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </p> -->
      <!-- </div> -->
      <!-- Products section -->
      <!-- <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          ACCUEIL
        </h6>
        <p class="mb-4">
          <router-link to="/" class="text-neutral-600 dark:text-neutral-200 text-lg">Accueil</router-link>
        </p>
        <p class="mb-4">
          <router-link to="/login" class="text-neutral-600 dark:text-neutral-200 text-lg">Faire une demande</router-link> 
         
        </p>
       
        <p class="mb-4">
          <router-link to="/partenaires" class="text-neutral-600 dark:text-neutral-200 text-lg">Partenaires</router-link>
        </p>
        <p class="mb-4">
          <router-link to="/login" class="text-neutral-600 dark:text-neutral-200 text-lg">Epreuves</router-link> 
         
        </p>

        
      </div>
      < Useful links section -->
      <!-- <div class="">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          ACCUEIL
        </h6>
        <p class="mb-4">
          <router-link to="/About" class="text-neutral-600 dark:text-neutral-200 text-lg">A propos</router-link>
        </p>
        
        <p class="mb-4">
          <router-link to="/login" class="text-neutral-600 dark:text-neutral-200 text-lg ">Connexion</router-link>
        </p>
        <p class="mb-4">
          <a href="https://digitalis-benin.com/" target="_blank" class="text-neutral-600 dark:text-neutral-200 text-lg">
            Digitalis Sarl
          </a>
        </p>
        
      </div> -->
      <!-- Contact section -->
      <!-- <div>
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Contact
        </h6>
        <p class="mb-4 flex items-center justify-center md:justify-start text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-5 w-5 ">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          Bénin, Abomey-Calavi,Togoudo
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-5 w-5">
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          info@mon.repetiteur.com
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clip-rule="evenodd" />
          </svg>
          + 229 234 567 88
        </p>
        <p class="flex items-center justify-center md:justify-start text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
              clip-rule="evenodd" />
          </svg>
          + 229 234 567 89
        </p>
        
      </div>
    </div>
  </div>  -->

  <!--Copyright section-->
  <!-- <div class="bg-white
   p-6 text-center dark:bg-neutral-700">
    <span>© 2023 Digitalis. Tous droits réservés.</span>
  </div>
</footer> -->

<footer class="bg-green-600 text-white py-6">
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row justify-between ml-12">
      <!-- Section de contact -->
      <div class="md:w-1/3">
        <h2 class="text-2xl font-semibold mb-4">Contactez-nous</h2>
        <!-- <p>Siège: IITA, Maison SPERO COSSI </p> -->
        <p class="text-lg">Abomey-Calavi, Code Postal</p>
        <p class="text-lg">Email : contact01.digitalis@gmail.com</p>
        <p class="text-lg">Téléphone : +229 97825820</p>
      </div>

      <!-- Liens rapides -->
      <div class="md:w-1/3 mt-4 md:mt-0">
        <h2 class="text-2xl font-semibold mb-4">Liens rapides</h2>
        <ul>
          <li><a href="/" class="hover:text-gray-400 ">Accueil</a></li>
          <li><a href="/#repetiteur" class="hover:text-gray-400 text-lg">Rechercher un répétiteur</a></li>
          <li><a href="/login" class="hover:text-gray-400 text-lg">Faire une demande</a></li>
          <li><a href="/login" class="hover:text-gray-400 text-lg">Connexion</a></li>
        </ul>
      </div>

      <!-- Réseaux sociaux -->
      <div class="md:w-1/3 mt-4 md:mt-0">
        <h2 class="text-2xl font-semibold mb-4">Suivez-nous</h2>
        <ul class="flex space-x-4 lg:ml-1 mt-6 ml-28">
          <li><a href="#" class="text-white hover:text-gray-400 text-lg"><svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a></li>
          <li><a href="#" class="text-white hover:text-gray-400 text-lg"><svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a></li>
          <li><a href="#" class="text-white hover:text-gray-400 text-lg"><svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg></a></li>
          <li><a href="#" class="text-white hover:text-gray-400 text-lg"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          class="w-6 h-6 text-white" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg></a></li>
        </ul>
        <h2 class="text-xl font-semibold mt-2">Notre site</h2>
        <a href="https://digitalis-benin.com/" class=" text-white hover:text-gray-400 text-lg">digitalis-benin.com</a>
      </div>
    </div>
  </div>
 
</footer>
 <div class="bg-gray-700 h-6"> <h2 class="text-lg text-white text-center font-semibold ">Copyright@ 2023 dévolopper par Digitalis
</h2></div>

</template>

<script>
import Card from '@/components/card/Card.vue';
import RepetiteurCard from '@/components/card/RepetiteurCard.vue';
import CardComponent  from '@/components/card/Cards.vue';
import axios from 'axios'
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  components: {
    Card,
    CardComponent,
    RepetiteurCard,

  },
  data() {
    return {
     
      items: ['Slide 1', 'Slide 2', 'Slide 3'],
      animationFrameId: null,
      isHovered: false,
      images: [
        {
          src: '/src/assets/images/images6.jpg',
          alt: 'Image 1',
          title: 'Bienvenu sur votre platforme pour accéder aux répétiteurs compétents pour vos enfants',
          description: ''
        },
        //  {
        //   src: '/src/assets/images/images11.jpg',
        //   alt: 'Image 1',
        //   title: 'Bienvenu sur votre platforme pour accéder aux répétiteurs compétents pour vos enfants',
        //   description: ''
        // },
        // {
        //   src: '/src/assets/images/images4s.jpg',
        //   alt: 'Image 1',
        //   title: 'Des Répétiteurs compétents et de qualité',
        //   description: ''
        // },

       
  
      ],
      currentIndex: 0,
      cards: [
        {
          imageSrc: '/src/assets/images/images.jpg',
          imageAlt: 'Image 1',
          title: 'DAOUDOU Eléazar',
          description: 'Professeur de Maths',
         
        },
        {
          imageSrc: '/src/assets/images/images3.jpg',
          imageAlt: 'Image 2',
          title: 'FASSINOU Martial',
          description: 'Professeur de PCT',
        
        },
        {
          imageSrc: '/src/assets/images/images.jpg',
          imageAlt: 'Image 1',
          title: 'SEFANDE Stéphane',
          description: 'Professeur de Français',
         
        },
        {
          imageSrc: '/src/assets/images/images3.jpg',
          imageAlt: 'Image 2',
          title: 'DA COSTA Tony',
          description: 'Professeur d\' Allemand ',
         
        },
        // Add more cards as needed
      ],
      apiData: [],
      loading: true,
      searchQuery: '',
      searchQueryVille: '',
      searchQueryCyle: '',
      searchQueryMatiere: '',
      searchResults: [],
      repetiteur: [],
      apeResults: [],
      aceResults: [],
      autresResults: [],
      publicite: [],
      currentPage: 1,
      itemsPerPage: 20,
      totalPages: 5,
      clignote: false,
      isBlinking: false,
     
    
    };
  },
 
  async created() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/repetiteurs'); // Remplacez par votre URL d'API
      this.apiData = response.data; // Assurez-vous que la structure de votre réponse correspond à ce que vous attendez
      console.log( this.apiData.data);
      this.apeResults = response.data.data.filter(results =>
                  results.grade ==='APE' &&
                  results.status ==='Terminer' 

                 );
                 console.log( this.apeResults);
                 this.aceResults = response.data.data.filter(resultes =>
                 resultes.grade ==='ACE' &&
                 resultes.status ==='Terminer' 
                //  result.matiere_id.matiere.name.includes(this.searchQuery)
                 );
                 console.log( this.aceResults);
                 this.autresResults = response.data.data.filter(resultees =>
                 resultees.grade ==='Autres' &&
                 resultees.status ==='Terminer' 
                 
                //  result.matiere_id.matiere.name.includes(this.searchQuery)
                 );
                 console.log( this.autresResults);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    } finally {
      this.loading = false; // Met fin au chargement une fois les données chargées
    }
  },
   computed: {
    filteredRepa() {
  const searchTerm = this.searchQuery.toLowerCase();
  const filteredData = this.repass.filter((result) => {
    return (
      result.status === 'Terminer' &&
      (
        result.adresse.includes(searchTerm) ||
        result.ecole.includes(searchTerm) ||
        result.niveauEtude.includes(searchTerm) ||
        result.cycle.includes(searchTerm) ||
        result.grade.includes(searchTerm) ||
        // (result.matiere && result.matiere.name.includes(searchTerm)) ||
        (result.user && result.user.name.includes(searchTerm))
      )
    );
  });

  return filteredData;
},

    // Calcule les cartes à afficher en fonction de la page actuelle
    // paginatedCards() {
    //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    //   const endIndex = startIndex + this.itemsPerPage;
    //   return this.cards.slice(startIndex, endIndex);
    // },
    paginatedCards() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;

  // Vérifier si la page actuelle est valide
  if (startIndex >= this.searchResults.length || endIndex <= 0) {
    return []; // Retourner un tableau vide si la page est invalide
  }

  return this.searchResults.slice(startIndex, endIndex);
},
    // Vérifie si le bouton "Charger plus" doit être affiché
    showLoadMoreButton() {
      return this.currentPage * this.itemsPerPage < this.cards.length;
    },
    // pages() {
      
    //   return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    // },
    pages() {
  const totalCards = this.cards.length;
  const totalPages = Math.ceil(totalCards / this.itemsPerPage);

  return Array.from({ length: totalPages }, (_, index) => index + 1);
},

  },
  watch: {
    isBlinking(newVal) {
      if (newVal) {
        // Démarrez l'animation de clignotement si isBlinking est vrai
        this.startBlinkAnimation();
      } else {
        // Arrêtez l'animation de clignotement si isBlinking est faux
        this.stopBlinkAnimation();
      }
    },
  },
  mounted(){
      //  console.log('I am here')
      this.search();
      this.searchVille();
      this.search();
      this.getPublicité();
     // this.startCarousel();
   // this.scrollAnimation();
    console.log(this.currentPage, this.totalPages);
    
      },
    
  methods: {
    toggleBlink() {
      this.isBlinking = !this.isBlinking; // Inverse la valeur de isBlinking
    },
    getPublicité(){
      axios.get('http://127.0.0.1:8000/api/publicites',)
   .then(response => {
     this.publicite = response.data.data;
     console.log( this.publicite);
     
   })
   .catch(error => {
        console.error('Erreur lors de la récupération des données depuis l\'API', error);
      });
    },
   
    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }, 5000); // Changer 5000 par l'intervalle souhaité en millisecondes
    },
    loadMore() {
      // Ajoutez ici la logique pour charger plus d'éléments depuis votre source de données (définie localement)
      // Assurez-vous d'ajuster cette logique en fonction de votre situation réelle
      try {
        const newCards = this.getMoreCards(); // Remplacez par votre logique pour récupérer plus de cartes localement
        this.searchResults = this.searchResults.concat(newCards);
        this.currentPage++;
      } catch (error) {
        console.error('Erreur lors du chargement des données supplémentaires', error);
      }
    },

    // Exemple d'une fonction pour récupérer davantage de cartes (à adapter à votre cas)
    getMoreCards() {
      // Mettez en œuvre ici la logique pour récupérer plus de cartes (par exemple, à partir de votre source de données locale)
      // Assurez-vous de retourner un tableau de nouvelles cartes
      // Exemple fictif :
      const additionalCards = [
        { imageSrc: '...', imageAlt: '...', title: 'Card 5', description: 'Description 5', VoirPlus: 'Voir plus 5' },
        { imageSrc: '...', imageAlt: '...', title: 'Card 6', description: 'Description 6', VoirPlus: 'Voir plus 6' },
        // ... (d'autres données)
      ];
      return additionalCards;
    },
    goToPage(page) {
      // if (page >= 1 && page <= this.pages) {
      //   this.currentPage = page;
      // }
      this.currentPage = page;
      
    },
    async getrepetiteur() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/repetiteurs ");
        if (response.data) {
          this.repetiteur= response.data.data;
          console.log(this.repetiteur);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    search() {
    //console.log(text);
      // Remplacez l'URL de l'API par celle que vous souhaitez utiliser
      console.log('Recherche effectuée avec :', this.searchQuery);
      try {
       

        // Utilisez Axios pour effectuer la requête à l'API
        axios.get('http://127.0.0.1:8000/api/repetiteurs').then(res=>{
             
                 this.searchResults = res.data.data.filter(result =>
                 result.status ==='Terminer'&& (
                  result.adresse.includes(this.searchQuery)||
                  result.ecole.includes(this.searchQuery)||
                  result.niveauEtude.includes(this.searchQuery)||
                  result.cycle.includes(this.searchQuery)||
                  result.grade.includes(this.searchQuery)||
                 
                  // (result.matiere && result.matiere.name.includes(this.searchQuery)) ||
                  (result.user && result.user.name.includes(this.searchQuery))
                )
                 );
                console.log(this.searchResults)
                
            });
        // Filtrez les résultats en fonction de votre logique
       // this.searchResults = res.data.data.filter(result => result.fname === includes(this.searchQuery));
        console.log(res.data);
        console.log(this.searchResults);
      } catch (error) {
        console.error('Erreur lors de la recherche:', error);
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
      }
    },
    searchVille() {
    //console.log(text);
      // Remplacez l'URL de l'API par celle que vous souhaitez utiliser
      console.log('Recherche effectuée avec :', this.searchQueryVille);
      try {
       

        // Utilisez Axios pour effectuer la requête à l'API
        axios.get('http://127.0.0.1:8000/api/repetiteurs').then(res=>{
             
                 this.searchResults = res.data.data.filter(result =>
                 result.status ==='Terminer'&& (
                  result.adresse.includes(this.searchQueryVille)
                )
                 );
                console.log(this.searchResults)
                
            });
        // Filtrez les résultats en fonction de votre logique
       // this.searchResults = res.data.data.filter(result => result.fname === includes(this.searchQuery));
        console.log(res.data);
        console.log(this.searchResults);
      } catch (error) {
        console.error('Erreur lors de la recherche:', error);
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
      }
    },
    searchCycle() {
    //console.log(text);
      // Remplacez l'URL de l'API par celle que vous souhaitez utiliser
      console.log('Recherche effectuée avec :', this.searchQuery);
      try {
       

        // Utilisez Axios pour effectuer la requête à l'API
        axios.get('http://127.0.0.1:8000/api/repetiteurs').then(res=>{
             
                 this.searchResults = res.data.data.filter(result =>
                 result.status ==='Terminer'&& (
                  result.cycle.includes(this.searchQueryCyle)
                )
                 );
                console.log(this.searchResults)
                
            });
        // Filtrez les résultats en fonction de votre logique
       // this.searchResults = res.data.data.filter(result => result.fname === includes(this.searchQuery));
        console.log(res.data);
        console.log(this.searchResults);
      } catch (error) {
        console.error('Erreur lors de la recherche:', error);
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
      }
    },
    pauseScrollAnimation() {
      this.$refs.cardWrapper.style.animationPlayState = "paused";
    },
    resumeScrollAnimation() {
      this.$refs.cardWrapper.style.animationPlayState = "running";
    },
    clignoterInput() {
      // Activer l'effet de clignotement
      this.clignote = true;

      // Désactiver l'effet après une seconde (1000 ms)
      setTimeout(() => {
        this.clignote = false;
      }, 1000);
    },
    scrollAnimation() {
      // Ajouter votre animation de défilement ici
      // Utilisez l'ID de la trame d'animation pour chaque carte
      //this.cards.forEach((card) => {
      //  card.animationFrameId = requestAnimationFrame(card.scrollAnimation);
    //  });
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    }
    
  },
  

};


</script>
<style>
.carousel{
  /* display: flex;*/
  color: #000;
  overflow-x: auto;
  scroll-snap-type: mandatory;
  /*-webkit-overflow-scrolling: touch;*/
}
/*
.carousel-slide{
  scroll-snap-align: start;
}

.slide {
  transition: transform 0.3s ease-in-out;
}



.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
}

.prev-button {
  left: 0;
}

.next-button {
  right: 0;
}
.hidden {
  display: none;
} */
.cards-inner-container {
  white-space: nowrap;
  display: inline-flex;
  overflow: hidden;
  
  display: inline-flex;  /* Affiche les cartes en ligne */
 /* animation: scrollAnimation 20s linear infinite; */
}
.cards-container {
  display: flex;
  
  overflow-x: hidden; /* Permet le défilement horizontal si nécessaire */
}
@keyframes scrollAnimation {
  from {
    transform: translateX(100%);  /* Commence à la fin pour créer un effet continu */
  }
  to {
    transform: translateX(-100%);  /* Déplace les cartes vers la gauche */
  }
}

/* Appliquer des marges à gauche sauf pour la première carte */
.card {
  margin-left: 10px;
  font-size: 17px;
  
}

/* Ne pas appliquer de marge à gauche pour la première carte */
.card:first-child {
  margin-left: 0;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
/* footer css*/
.footer {
  background-color: #f1f1f1;
  padding: 20px;
}
.router-link-active {
  font-weight: bold;
}
.section-title {
  font-size: 2.5rem; /* Taille de la police */
   /* Poids de la police */
  color: #333; /* Couleur du texte */
  text-align: center; /* Alignement du texte */
 /* text-transform: uppercase; */ /* Convertir le texte en majuscules */
  letter-spacing: 1px; /* Espacement entre les lettres */
  /* Ajoutez d'autres propriétés CSS selon vos préférences */
}

.carousel-container {
  display: flex;
  overflow: hidden;
}

.carousel-slide {
  flex: 0 0 100%;
  transition: transform 0.5s ease;
}

.active-slide {
  transform: translateX(0);
}
.h-370 {
  height: 739px;
}
/* Animation de fondu (fade) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@keyframes testimonialScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* Assurez-vous que la valeur correspond à la largeur d'un élément */
  }
  /* 0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-200%);
  }
  75% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(0);
  } */
}
@keyframes swiperScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* Assurez-vous que la valeur correspond à la largeur d'un élément */
  }
}
@keyframes SildeScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* Assurez-vous que la valeur correspond à la largeur d'un élément */
  }
}


.testimonial-container {
  width: 100%;
  overflow: hidden;
}
 
.test{
  overflow: hidden;
}
@keyframes swiperScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* Assurez-vous que la valeur correspond à la largeur d'un élément */
  }
}
.card-container {
  width: 100%;
  overflow: hidden;

  bottom: 0;
}
.card-wrapper {
  display: flex;
  animation: swiperScroll 60s linear infinite;
  white-space: nowrap;
}
.card-slide {
  flex: 0 0 auto;

 
} 

/* .swiper-container {
  width: 88%;
  overflow: hidden;
}
.swiper-wrapper {
  display: flex;
  animation: testimonialScroll 60s linear infinite;
}
.swiper-slide {
  flex: 0 0 auto;
} */


.testimonial-wrapper {
  display: flex;
  animation: testimonialScroll 55s linear infinite;
}
.testimonial-blockquote {
  flex: 0 0 auto;
  width: 30%; /* Ajustez la largeur selon vos besoins */
  margin-bottom: 20px;
  margin-left: 20px;
}
.custom-height {
  height: 2000px; /* Ajustez la valeur de la hauteur selon vos besoins */
}
.custo-height {
  height: 1720px; /* Ajustez la valeur de la hauteur selon vos besoins */
}
.pagination-container {
  position: fixed;
  bottom: 20px;  /* Ajustez cela en fonction de la position verticale souhaitée */
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff; /* Vous pouvez ajuster la couleur de fond selon vos besoins */
  z-index: 1000; /* Ajustez la valeur de z-index selon vos besoins */
  padding: 10px; /* Ajoutez un espacement intérieur pour améliorer l'apparence */
  border-radius: 8px; /* Ajoutez un arrondi aux coins si nécessaire */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ajoutez une ombre pour améliorer la visibilité */
}
@keyframes clignotement {
  0% { background-color: yellow; }
  50% { background-color: transparent; }
  100% { background-color: yellow; }
}

.clignotant {
  animation: clignotement 1s infinite;
}
.blink {
  animation: blink-animation 1s infinite;
}

@keyframes blink-animation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>