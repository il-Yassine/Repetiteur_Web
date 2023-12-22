<template>
  <div class="">
    <nav
  
      class="
      fixed w-full top-0 left-0
      bg-white
        container-full
         
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <RouterLink
          to="/"
          class="
          px-5
            text-2xl
            font-bold
            text-gray-50
            md:text-2sm
            hover:text-indigo-200
          "
          >
          <img src="../assets/Mon Répétiteur.png" alt="logo" width="70" >
        
        </RouterLink>
         <h2 class="text-dark hover:text-green-500 text-2xl font-bold"></h2>
        <!-- Mobile menu button -->
        <!-- <div @click="toggleNav" class="flex md:hidden"> -->
          <button     @click="toggleNav" class="  bg-purple-400 flex md:hidden text-gray-100 hover:text-gray-400 focus:outline focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>

      </div>
     
   <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
      :class="{
        'flex': showMenu,
        'hidden': !showMenu
      }"
      class="
      font-serif
      justify-end
      font-bold
      text-2xl
        flex-col
        mt-8
        space-y-4
        
        md:flex md:space-y-0 md:flex-row md:items-center  md:space-x-5 md:mt-0
      "
      >
        <li class="px-3 text-dark  hover:text-green-500"><RouterLink  class="focus:text-green-500 active:text-green-500" to="/">Accueil</RouterLink></li>
        <li class="px-3 text-dark hover:text-green-500"><a  class="focus:text-green-500 active:text-green-500" @click="toggleBlink" href="/#repetiteur">Rechercher un répétiteur
          
        </a></li> 
        <li class="px-3 text-dark hover:text-green-500"><RouterLink  class="focus:text-green-500 active:text-green-500" to="/login">Faire une demande</RouterLink></li> 
        
        <li class=" px-3 text-dark hover:text-green-500">
          <button @click="toggleDropdown('menu1')" class="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 md:w-auto text-dark dark:hover:text-white focus:text-green hover:bg-green-600 active:text-green-500">
            Ressources
            <svg  class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
           <div v-if="isDropdownOpen.menu1" id="dropdownNavbar" class="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-xl dark:hover:text-white"><RouterLink  class="font-bold" to="/login">Epreuves</RouterLink></a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-xl dark:hover:text-white font-bold">Examen blanc</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-xl dark:hover:text-white font-bold">Tutoriel</a>
            </li>
          </ul>
         
        </div></li> 
        <li class="px-3 text-dark hover:text-green-500"><RouterLink   class="focus:text-green-500 active:text-green-500" to="/about">A propos</RouterLink></li>
        <li class=" px-3 text-dark hover:text-green-500">
          <button @click="toggleDropdown('menu2')" class="flex items-center justify-between w-full py-2 px-3 text-dark rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 md:w-auto text-dark dark:hover:text-green-500 focus:text-green-500 hover:bg-green-600 active:text-green-500">
            Partenaires
            <svg  class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
           <div v-if="isDropdownOpen.menu2" id="dropdownNavbar" class="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
            <li>
              <a href="/partenaires" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-xl  dark:hover:text-white font-bold">Ecole</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-xl  dark:hover:text-white font-bold">Librairie</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-xl  dark:hover:text-white font-bold">Autres</a>
            </li>
          </ul>
          
        </div></li> 

        <li class=" px-3 "><button class="bg-green-500 px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"><RouterLink  class="focus:text-white active:text-white"  to="/login">Se connecter</RouterLink></button></li>
        <!-- <li>
          <button @click="toggleDropdown" class="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
            Dropdown 
            <svg v-if="isDropdownOpen" class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
      
         
          <div v-if="isDropdownOpen" id="dropdownNavbar" class="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Paramètres</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Gains</a>
              </li>
            </ul>
            <div class="py-1">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" @click="signOut">Se déconnecter</a>
            </div>
          </div>
        </li> -->
      
      </ul>
      
     
    </nav>
  </div>

</template>

<script>
export default {
    name: 'PublicNav',
    data() {
    return {
      showMenu: false,
      isDropdownOpen: {
        menu1: false,
        menu2: false
      }
    };
  },
  methods: {
    toggleNav() {
      this.showMenu = !this.showMenu;
    },
    toggleDropdown(menu) {
      for (const key in this.isDropdownOpen) {
        if (key !== menu) {
          this.isDropdownOpen[key] = false;
        }
      }
      // Ouvrir/fermer le menu actuel
      this.isDropdownOpen[menu] = !this.isDropdownOpen[menu];
    },
    
}
}
</script>

<style>
.active-link {
  color: #38a169; /* Vert Tailwind CSS */
  font-weight: bold; /* Optionnel : mise en gras pour indiquer le lien actif */
}
   
</style>

<!-- 
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search</span>
    </button>
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
    </div>
    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
      </div>
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav> -->
