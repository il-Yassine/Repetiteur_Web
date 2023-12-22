<template>
    <div>
        <div class="flex">
            <div class="container mx-auto mt-12 px-5 ">
               

            
                   
                    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h3 class="text-3xl font-medium text-gray-900 dark:text-white font-serif">Liste de vos payements</h3><br>
    <!-- <div class="flex justify-end">
        <button  type="button" class="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
        </svg>Ajouter</button>
    </div> -->
    <table class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nom et Prénoms
                </th>
                <th scope="col" class="px-6 py-3">
                    Prix
                </th>
                <th scope="col" class="px-6 py-3">
                    Mois
                </th>
                <th scope="col" class="px-6 py-3">
                Annee
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody v-if="this.payement.length > 0">
            <tr class="bg-white border-b text-lg dark:bg-gray-900 dark:border-gray-700" v-for="(matier,index) in this.payement" :key="index">
                <td class="px-6 py-4">
                    {{ matier.demande.enfants.fname }}  {{ matier.demande.enfants.lname }}
                </td>
                <td class="px-6 py-4">
                    {{ matier.demande.tarification.prix }} FCFA
                </td>
                <td class="px-6 py-4">
                    {{ matier.mois }} 
                </td>
                <td class="px-6 py-4">
                    {{ matier.annee }} 
                </td>
                <td class="px-6 py-4">
                    {{ matier.date }} 
                </td>
                <td class="px-6 py-4">
                     <span v-if="matier.status === 'Payer'" class="text-green-500">Payer</span>
                    <span v-else-if="matier.status === 'Impayer'" class="text-red-500">Impayer</span>
                    <span v-else>{{ matier.status }}</span>
                </td>
                

                <td class="px-6 py-4">
                    <button @click="open( matier.demande.tarification.prix ,matier.id)"  wire:loading.attr="disabled"
                        class="font-medium text-blue-600 dark:text-red-500 hover:underline">payer</button>
                </td>
            </tr>
           
        </tbody>
        <tbody v-else>
            <tr>
            <td colspan="1">
            Loading...
            </td></tr>  
          </tbody>
        
    </table>
</div>

                

            </div>
            <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <div class="container mx-auto text-center">
                  <p class="text-gray-600">&copy; 2023 Digitalis Sarl. Tous droits réservés.
                   
                  </p>
                </div>
              </footer>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import {
  openKkiapayWidget,
  addKkiapayListener,
  removeKkiapayListener,
} from "kkiapay";
  export default {
    name:'payements',
    data(){
        return{
            payement:[],
            user_id:'',
            role_id:'',
            parents:[],
            parentss_id:'',
            prix:'',
            demandId:'',
            reference:'',
        }
    },
    mounted(){
        this.getparents();
      this.$nextTick(() => {
     this.getPayements()
   });
   addKkiapayListener('success',this.successHandler)
    },
    beforeDestroy() {
      removeKkiapayListener('success',this.successHandler)
  },
    
    methods :{
      async  getparents(){

const token = localStorage.getItem('token');
    const config = {
headers: {
'Authorization': 'Bearer ' + token,
},
};

console.log(config);

// Requête pour récupérer le profil
const profileResponse  =await axios.get('http://127.0.0.1:8000/api/profile', config);
console.log(profileResponse);
// Stocker les données du profil dans le composant ou Vuex
this.role_id = profileResponse.data.role_id;
this.user_id = profileResponse.data.id;
console.log(this.role_id);
console.log(this.user_id);

axios.get('http://127.0.0.1:8000/api/parents').then(res=>{
    this.parents = res.data.data.filter(parent => parent.user.id === this.user_id)
      
    console.log(this.parents)
    this.parentss_id= this.parents[0].id
    console.log(this.parentss_id);
   
});
this.getPayements();
},
        getPayements(){
            axios.get('http://127.0.0.1:8000/api/payements').then(res=>{
                this.payement=res.data.data.filter(payemet => payemet.demande.enfants.parents.id === this.parentss_id)
                console.log(this.payement)
                console.log(res)
            });
        },

        open(prix,demande_id) {
            this.demandId=demande_id
      openKkiapayWidget({
        amount: prix,
        api_key: "2dad4950979311ebb611b7e676b55ada",
        sandbox: true,
        phone: "",
      });
      console.log( this.demandId);
    },
    successHandler(response) {
        
      console.log(response.transactionId);
        this.reference= response.transactionId
        const dataToSend = {
            reference:this.reference,
};
const token = localStorage.getItem('token');
           
           console.log(token);
           const config={
               headers: {
       'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
     }
           };
           console.log(config);
console.log(dataToSend);
console.log( this.demandId);
      axios.put('http://127.0.0.1:8000/api/payements/'+this.demandId,dataToSend,config)
.then(response => {
  // La mise à jour a réussi, vous pouvez traiter la réponse ici
  console.log(response.data);
})
.catch(error => {
  // Une erreur s'est produite lors de la mise à jour, vous pouvez traiter l'erreur ici
  console.error('Erreur lors de la mise à jour:', error);
});

    },
    }
  }
  
</script>
<style>

</style>