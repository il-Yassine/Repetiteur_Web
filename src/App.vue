<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
   

    <div class="wrapper">
      <div >
        <!-- Pour afficher le contenu de la page actuelle -->
        <component :is="$route.meta.layout">
          <router-view />
          <!-- Pour afficher le contenu de la page spécifique au modèle de mise en page -->
        </component>
      </div>
      <!-- <div class="bg-indigo-600">
        <nav
          class="
            container
            px-1
            py-3
            mx-auto
            md:flex md:justify-between md:items-center
          "
        >
          <div class="flex items-center justify-between">
            <RouterLink
              to="/"
              class="
                text-xl
                font-bold
                text-gray-50
                md:text-2sm
                hover:text-indigo-200
              "
              >
              <img src="../src/assets/logo2.png" alt="logo" width="60">
            </RouterLink>
            
             <div @click="toggleNav" class="flex md:hidden"> -->
              <!-- <button    @click="toggleNav" class="flex md:hidden text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button> -->
            <!-- </div> -->
          <!-- </div> -->
    
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <!-- <ul
          :class="{
            'flex': showMenu,
            'hidden': !showMenu
          }"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
          "
          >
            <li to="/about" class="text-gray-100 hover:text-indigo-400"><RouterLink  to="/">Home</RouterLink></li>
            <li class="text-gray-100 hover:text-indigo-400"><RouterLink  to="/about">A propos</RouterLink></li>
            <li class="text-gray-100 hover:text-indigo-400"><RouterLink  to="/about">A Contact</RouterLink></li>
            <li class="text-gray-100 hover:text-indigo-400"><RouterLink  to="/about">Nos Services</RouterLink></li>
            <li class="text-gray-100 hover:text-indigo-400"><RouterLink  to="/register">Inscription</RouterLink></li>
            <li class="text-gray-100 hover:text-indigo-400"><RouterLink  to="/login">Connexion</RouterLink></li>

          </ul>
        </nav>
      </div> --> 

    </div>
  </header>


  <RouterView />

 
</template>

<style scoped>

</style>
<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleNav() {
      this.showMenu = !this.showMenu;
    }
  }
}


</script>