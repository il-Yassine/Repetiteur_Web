>
<template>

    <div class="flex h-screen">
  

      <div class="w-1/7 shadow-2xl bg-gray-800 text-white" v-if="$route.name !== 'dashboard' && $route.name !== 'repetiteurCreate' && $route.name !== 'epreuve' && $route.name !== 'profile'">
        

            <img src="../../assets/Repetiteur.png" alt="Logo" class="h-24 mt-1 mx-5" />

        <div class="p-4 text-2xl font-bold">Dashboard</div>
            <h4 class="px-4 py-2 hover:bg-gray-600 text-xl">{{ name }}</h4>
       

        <ul class="py-4 text-lg" >
            <!-- <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white hover:text-gray-300" active-class="text-green-600" to="/admin/parents/create">Parents</router-link></li>
            <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white hover:text-gray-300" active-class="text-green-600" to="/admin/repetiteur">Répétiteur</router-link></li> -->
          
           <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/admin/demande">Demande</router-link></li>
           <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white hover:text-gray-300" active-class="text-green-600" to="/admin/payements">Payements</router-link></li>
           <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white hover:text-gray-300" active-class="text-green-600" to="/admin/epreuves">Epreuves</router-link></li>
           <!-- <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/livreurDash">Livreurs</router-link></li>
            <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/livraisonDash">Livraisons</router-link></li>
           <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/reservationDash">Reservations</router-link></li>
           <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/profils">Profils</router-link></li> -->
          <li @click="logout" class="px-4 py-2 hover:bg-gray-600 text-white-950 hover:text-gray-300" active-class="text-green-600"><a href="">Deconnexion</a></li> 

        </ul>

      </div>
      <div v-else class="w-1/7 shadow-2xl bg-gray-800 text-white" >

          <img src="../../assets/Repetiteur.png" alt="Logo" class="h-24 mt-1 mx-5" />

        <div class="p-4 text-2xl font-bold">Dashboard</div>
        <p  class="px-4 py-2 hover:bg-gray-600 text-center text-lg "> {{ name }}</p>
        <ul class="py-4 text-lg">
          <!-- ... Autres éléments du menu ... -->
          <li class="px-4 py-2 hover:bg-gray-600">
              <router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/admin/dashboard">Dashboard</router-link>
          </li>
          <li class="px-4 py-2 hover:bg-gray-600">
            <router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/admin/epreuve">Epreuves</router-link>
           
        </li>
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/admin/profil">Profils</router-link>
        </li>
        <li @click="logout" class="px-4 py-2 hover:bg-gray-600">
          <a href="#">Deconnexion</a>
      </li>
          <!-- ... Autres éléments du menu ... -->
      </ul>
        
      </div>

      <!-- Contenu du tableau de bord -->
      <div class="w-full p-4">
        <slot/>
        <main>
            <router-view></router-view>
          </main>
      </div>
     
    </div>
    
    </template>
    
    <script>
import Dashboard from './dashboard.vue';
import axios from 'axios'

    export default {
      name: 'AdminLayout',
      data(){
        return{
            
            name: null,
          
        }
    },
      mounted(){
        this.getUsers();
      },

      methods:{
        getUsers (){
            const token = localStorage.getItem('token');
           
            console.log(token);
            const config={
                headers: {
        'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
      }
            };
            console.log(config);
     axios.get('http://127.0.0.1:8000/api/profile',config)
    .then(response => {
      this.name = response.data.name;
      localStorage.setItem('name',response.data.name)
      //this.$store.commit('setUserId',this.user_id)
      //userIds=this.userId;
      console.log(response.data.name);
    })
    .catch(error => {
      if (error.response === 401) {
        this.error = "Erreur d'authentification : Votre session a expiré. Veuillez vous reconnecter.";
        // Vous pouvez également rediriger l'utilisateur vers la page de connexion ici
      } else {
        this.error = "Une erreur s'est produite. Veuillez réessayer plus tard.";
      }
    });
  
        },
        logout(){
          localStorage.removeItem('token')
         // localStorage.removeItem('user_id')
            this.$router.push('/login')
        }
      }
    };
    </script>



