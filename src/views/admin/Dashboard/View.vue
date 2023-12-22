<template>
    <div>
        <div class="flex">
            <div class="container mx-auto mt-12 px-5 ">

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h3 class="text-3xl font-medium text-gray-900 dark:text-white font-serif">Listes de vos demandes</h3><br>
     <div class="flex items-center justify-between pb-4">
        
        <div>
             <button  @click="openSecondModal" type="button" class="inline-flex text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> 
                <svg class="w-[20px] h-[20px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
           </svg> 
            Ajouter vos enfants
           </button> 
        </div>
        <div>
            <button  type="button" class="inline-flex text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <!-- <svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
           </svg>  -->
            <RouterLink to="/admin/demande/create">Remplir le formulaire de demande</RouterLink>
           </button>
        </div>
             
         
        <!-- <RouterLink to="/admin/demande/create"><button  type="button" class="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
        </svg>Ajouter </button></RouterLink> -->

    </div> 

    <div>
        <button @click="openModal" class=""></button>
        <Modal v-if="isModalOpen" @closeModal="closeModal" />
      </div>
   
    <table class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nom
                </th>
                <th scope="col" class="px-6 py-3">
                    Prénom
                </th>
                <th scope="col" class="px-6 py-3">
                    Classe
                </th>
                <th scope="col" class="px-6 py-3">
                    Matiere
                </th>
                <th scope="col" class="px-6 py-3">
                    Repetiteur
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Motif
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody v-if="this.demande.length > 0">
            <tr class="bg-white border-b text-lg dark:bg-gray-900 dark:border-gray-700" v-for="(enfant,index) in this.demande" :key="index">
                <td class="px-6 py-4">
                    {{ enfant.enfants.fname }}
                </td>
                
                <td class="px-6 py-4">
                    {{ enfant.enfants.lname }}
                </td>
                <td class="px-6 py-4">
                    {{ enfant.tarification.classe.name }}
                </td>
                <td class="px-6 py-4">
                    {{ enfant.tarification.matiere.name }}
                </td>
                <td class="px-6 py-4">
                    {{  enfant.repetiteur.user.name }} 
                </td>
                <td class="px-6 py-4">
                    <span v-if="enfant.status === 'En cours'" class="text-gray-500">En cours</span>
                    <span v-else-if="enfant.status === 'Validé'" class="text-green-500">Validé</span>
                    <span v-else-if="enfant.status === 'Non Validé'" class="text-red-500">Non Validé</span>
                    <span v-else>{{ enfant.status }}</span>
                </td>
                <td class="px-6 py-4">
                    {{ enfant.motif }}
                </td>
                 <td class="flex items-center px-6 py-4 space-x-3" v-if="enfant.status === 'Validé'">
                  <!--  <a href="#" wire:click="edit({{ $commande }})" wire:loading.attr="disabled"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</a>-->
                    <a href="#" @click="openModal(enfant.id)"  wire:loading.attr="disabled"
                        class="font-medium text-blue-600 dark:text-red-500 hover:underline">Appréciation</a>
                </td>
                <td v-else>

                </td> 
            </tr>
           
        </tbody>
        <tbody v-else>
            <tr>
            <td colspan="5">
            Loading...
            </td></tr>  
          </tbody>
        
    </table>
    

    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-md w-[500px]">
         
          <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                    Apprécier un répétiteur
                    </h3>
                   
                    <button @click="closeModal"  type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                       
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5">
                    <form @submit.prevent="savePostes" class="space-y-4" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"></label>
                            <input type="text" name="email" v-model="content" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre appréciation" required>
                        </div>
                       <br>
                       
                        <button type="submit" class="w-full text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
                       
                    </form>
                </div>
            
        </div>
        </div>
      </div>

      <div v-if="isModalSecondOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-md w-[500px]">
          <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            &times;
          </button>
          <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                    Ajouter un enfant
                    </h3>
                    
                    <button @click="closeSecondModal"  type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                       
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5">
                    <form @submit.prevent="saveEnfants" class="space-y-4" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Nom de l'enfant</label>
                            <input type="text" name="email" v-model="fname" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nom" required>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Prénoms de l'enfant</label>
                            <input type="text" name="email" v-model="lname" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Prénoms" required>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"> Votre Téléphone</label>
                            <input type="number" name="email" v-model="phone" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Téléphone" required>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"> Votre adresse</label>
                            <input type="text" name="email" v-model="adresse" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="adresse" required>
                        </div>
            
                       
                        <button type="submit" class="w-full text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
                       
                    </form>
                </div>
            
        </div>
        </div>
      </div>
</div>
            </div>
            
            <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <div class="container mx-auto text-center">
                  <p class="text-gray-600">&copy; 2023 Digitalis. Tous droits réservés.
                   
                  </p>
                </div>
              </footer>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name:'demande',
  
    data(){
        return{
            isModalOpen: false,
            isModalSecondOpen: false,
            parents:[],
            enfants:[],
            demande:[],
            demande_id:'',
            selectedEnfant: '',
            parentss_id:'',
            content:'',
            fname:'',
            lname:'',
            phone:'',
            adresse:'',
        }
    },
    mounted(){
        //this.getStudentData(this.$route.params.id);
      //  console.log('I am here')
      console.log(this.$route.params.id)
      this.getparents();
      this.$nextTick(() => {
     this.getDemande()
   });
//   this.$nextTick(() => {
//   this.getEnfants().then(() => {
//     // Une fois que getEnfants est terminé, appelez getDemande
//     this.getDemande();
//     this.filterEnfants();
//   });
// });
  
    },
    methods :{
        openModal(enfantId) {
      this.isModalOpen = true;
      this.selectedEnfant = enfantId;
      console.log(this.selectedEnfant);
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedEnfant = '';
    },
    openSecondModal() {
      this.isModalSecondOpen = true;
     
    },
    closeSecondModal() {
      this.isModalSecondOpen = false;
      this.fname = '';
      this.lname = '';
      this.phone = '';
      this.adresse = '';
           
    },
    async  getparents(){

const token = localStorage.getItem('token');
    const config = {
headers: {
'Authorization': 'Bearer ' + token,
},
};

console.log(config);

// Requête pour récupérer le profil
const profileResponse  = await axios.get('http://127.0.0.1:8000/api/profile', config);
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
this.getDemande();
},
// getEnfants(){
//     axios.get('http://127.0.0.1:8000/api/enfants').then(res=>{
//                 this.enfants=res.data.data.filter(enfant => enfant.parents.id === this.parentss_id)
//                 console.log(this.enfants[0].id)
//                  this.enfantsIds = this.enfants.map(enfant => enfant.id);
//                 console.log(this.enfants.parents);
//                 console.log(this.enfantsIds);
//                 console.log(this.enfantsfiltrer)
//                 console.log(res)
              
//             });
//             this.getDemande();

// },
        getDemande(studentId){
            const parents_id = localStorage.getItem('parents_id');
            console.log(parents_id);
            console.log(studentId)
            axios.get('http://127.0.0.1:8000/api/demandes').then(res=>{
                this.demande=res.data.data.filter(demand => demand.enfants.parents.id === this.parentss_id)
                console.log(this.demande)
                

            });
          
        },
        saveEnfants(){
            var mythis= this;
            const token = localStorage.getItem('token');
            const dataToSend = {

  fname:this.fname,
  lname:this.lname,
   phone:this.phone,
   adresse:this.adresse,
  parents_id: this.parentss_id,
};
const config={
                headers: {
        'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
      }
            };
console.log(dataToSend);
            axios.post('http://127.0.0.1:8000/api/enfants', dataToSend,config )
.then(response => {
  // Gérer la réponse de la requête POST
  console.log(response)
  console.log(response.data)
  localStorage.setItem('enfants_id',response.data.data.id)

                mythis.errorList=response.data.message
               // alert(response.status);
                if (response.status==201) {
                    this.closeSecondModal();
                    mythis.errorList="Votre enfants a été ajouter avec succès"
                    alert('Votre enfants a été ajouter avec succès')
                   
                }
               
})
.catch(error => {
  if (error.response) {
    mythis.errorList="une erreur s'est produite"
    // Gérer l'erreur d'authentification ici
  } else {
    // Gérer d'autres erreurs
  }
}
);
        },
        savePostes(){
            var mythis= this;
            const dataToSend = {

content:this.content,
demande_id:this.selectedEnfant,
parents_id: this.parentss_id,
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
            axios.post( 'http://127.0.0.1:8000/api/postes',dataToSend,config ).then(res =>{

                console.log(res.data)
               // alert(res.data.message);
               if (res.status==201) {
                
                    mythis.errorList="Appréciation enregister avec succès"
                    alert('Appréciation enregister avec succès')
                   // this.$router.push('/admin/demande')
                   this.closeModal();
                }
                else{
                    alert('Une erreur s\'est produite')
                }
             

            })
            .catch(function(error)
           {
             
                if (error.reponse) {
                    if (error.response.status==422) {
                        mythis.errorList=error.response.data.errors;
                        console.log(error.response.data.errors);
                    }

            } else if (error.request){
                console.log(error.request);
            }else{
                console.log('Error'.error.message); 
            }
           }
            )
        }
    }
  }
</script>
<style>
/* Styles du modal */
.modal {
    display: none; /* Par défaut, le modal est caché */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4); /* Fond semi-transparent pour assombrir l'arrière-plan */
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* Centrer le modal verticalement */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  /* Bouton de fermeture du modal */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

</style>