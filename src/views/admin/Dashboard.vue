<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-12 p-4">
        <h3 class="text-3xl font-medium text-gray-900 dark:text-white font-serif">Liste des enfants que vous encadrez</h3><br>
        <div class="flex items-center justify-between pb-4">
            <div class="relative">
            </div>
            <div>
               <!-- <button  type="button" class="inline-flex text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> -->
                  <!-- <svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
              </svg> -->
              <!-- <RouterLink to="/admin/repetiteur/create">Postuler pour être répétiteur</RouterLink>
              </button> -->
                 <button  @click="openSecondModal" type="button" class="inline-flex text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                     <svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
                </svg>
                Ajouter votre classe et matiere
                </button>
            </div>
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
                    <!-- <th scope="col" class="px-6 py-3">
                        Parents
                    </th> -->
                    <th scope="col" class="px-6 py-3">
                        Repetiteur
                    </th>
                
                   
                 <th scope="col" class="px-6 py-3">
                        Action
                    </th> 
                </tr>
            </thead>
            <tbody v-if="this.enfants.length > 0">
                <tr class="bg-white text-lg border-b dark:bg-gray-900 dark:border-gray-700" v-for="(apprenant,index) in this.enfants" :key="index">
                    <td class="px-6 py-4">
                        {{ apprenant.enfants.fname }}
                    </td>
                    <td class="px-6 py-4">
                        {{ apprenant.enfants.lname }}
                    </td>
                    <td class="px-6 py-4">
                        {{ apprenant.tarification.classe.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ apprenant.tarification.matiere.name }}
                    </td>
                    <!-- <td class="px-6 py-4">
                        {{ apprenant.enfants.parents.user.name }}
                    </td> -->
                    <td class="px-6 py-4">
                        {{  apprenant.repetiteur.user.name }} 
                    </td>
                    <td class="flex items-center px-6 py-4 space-x-3" v-if="apprenant.status === 'Validé'">
                        <!--  <a href="#" wire:click="edit({{ $commande }})" wire:loading.attr="disabled"
                              class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</a>-->
                          <a href="#" @click="openModal(apprenant.id)"  wire:loading.attr="disabled"
                              class="font-medium text-blue-600 dark:text-red-500 hover:underline">Appréciation</a>
                      </td>
                      <td v-else>
      
                      </td> 
                
                    <!-- <td class="flex items-center px-6 py-4 space-x-3">
                        <a href="#" wire:click="edit({{ $commande }})" wire:loading.attr="disabled"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</a>
                        <a href="#" wire:click="delete({{ $commande }})" wire:loading.attr="disabled"
                            class="font-medium text-red-600 dark:text-red-500 hover:underline">Supprimer</a>
                    </td> -->
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
              <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                &times;
              </button>
              <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                        Appréciation
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
                                <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"> Appréciation sur l'enfant</label>
                                <input type="text" name="email" v-model="content" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"> Présence au postes</label>
                                <input type="date" name="email" v-model="poste" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
                            </div>
                            <br>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enregister</button>

                        </form>
                    </div>

            </div>
            </div>
          </div>


          <div v-if="isModalSecondOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-8 rounded-md w-[500px]">
              
              <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                       Votre matiere et Classe
                        </h3>
                        <button @click="closeSecondModal"  type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                           
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5">
                        <form @submit.prevent="saveMatiereClasse" class="space-y-4" action="#">
                           
                            <div class="col-span-2 sm:col-span-1">
                                     <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Matiere</label>
                                <select  id="category" v-model="matiere_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">votre matiere</option>
                                    <option v-for="(matier,index) in this.matiere" :key="index" :value="matier.id" >{{ matier.name }} </option>
                                    
                                </select>
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Classe</label>
                           <select v-model="classe_id"  id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                               <option selected="">Votre classe</option>
                               <option v-for="(classes,index) in this.classe" :key="index" :value="classes.id" >{{ classes.name }} </option>
                           </select>
                       </div>
                       <br>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enregister</button>

                        </form>
                    </div>

            </div>
            </div>
          </div>



    </div>

    </template>
    <script>
      import axios from 'axios'
    export default {
      name: "dashboard",
      data() {
        return {
            isModalOpen: false,
            isModalSecondOpen: false,
            role_id:'',
            user_id:'',
            selectedEnfant:'',
            poste:'',
            content:'',
            matiere_id:'',
            classe_id:'',
            repetiteurs_id:'',
            repetiteurs:[],
            matiere:[],
            classe:[],
            enfants:[],
            enfantsfiltrer:[]
        };
      },
      // created() {
      //   this.form.local = this.$i18n.locale;
      // },
      mounted(){
      
      this.getMatiere();
      this.getClasse();
      this.getrepetiteur();
      this.$nextTick(() => {
    this.getEnfants();
  });
    },
      methods: {
        openModal(enfantId) {
      this.isModalOpen = true;
      this.selectedEnfant = enfantId;
      console.log(this.selectedEnfant);
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedEnfant = '';
      this.content = '';
      this.poste = '';
    },
    openSecondModal() {
      this.isModalSecondOpen = true;
      
    },
    closeSecondModal() {
      this.isModalSecondOpen = false;
    //   this.selectedEnfant = '';
    //   this.content = '';
    //   this.poste = '';
    this.matiere_id='';
           this.classe_id='';
    },
      async  getrepetiteur(){

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

    axios.get('http://127.0.0.1:8000/api/repetiteurs').then(res=>{
                this.repetiteurs = res.data.data.filter(repetiteur => repetiteur.user.id === this.user_id)
                  
                console.log(this.repetiteurs)
                this.repetiteurs_id= this.repetiteurs[0].id
                console.log(this.repetiteurs_id);

            });
            this.getEnfants();
  },
       async getEnfants(studentId){
            const repetiteur_id = localStorage.getItem('repetiteur_id');
            console.log(repetiteur_id);
            console.log(studentId)
            console.log(this.repetiteurs_id);
           await axios.get('http://127.0.0.1:8000/api/demandes').then(res=>{
                this.enfants=res.data.data.filter(enfant => enfant.repetiteur.id === this.repetiteurs_id);
                console.log(this.enfants)
               
            });
           // console.log(enfants);
        },
        getMatiere(){
           
            axios.get('http://127.0.0.1:8000/api/matieres').then(res=>{
                this.matiere=res.data.data
                console.log(this.matiere)
                console.log(res)
            });
        },
        getClasse(){
            axios.get('http://127.0.0.1:8000/api/classes').then(res=>{
                this.classe=res.data.data
                console.log(this.classe)
                console.log(res)
            });
        },
        saveMatiereClasse(){
            var mythis= this;
         
           
            const dataToSend = {


matiere_id:this.matiere_id,
classe_id:this.classe_id,
repetiteur_id: this.repetiteurs_id,
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
            axios.post( 'http://127.0.0.1:8000/api/repetiteurmcs',dataToSend,config ).then(res =>{

                console.log(res.data)
               // alert(res.data.message);
               this.closeSecondModal();
               if (res.status==201) {
                
                    mythis.errorList="Matiere et classe enregister avec succès"
                   
                    alert('Matiere et classe enregister avec succès')
                   // this.$router.push('/admin/demande')
                  
                }
                else{
                    mythis.errorList="une erreur s'est produite"
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
        },

        savePostes(){
            var mythis= this;
          const  parents_id=localStorage.getItem('parents_id')
          console.log(parents_id);
           
            const dataToSend = {

content:this.content,
poste:this.poste,
demande_id:this.selectedEnfant,
repetiteur_id: this.repetiteurs_id,
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
               this.closeModal();
               if (res.status==201) {
                
                    mythis.errorList="Appréciation enregister avec succès"
                   
                    alert('Appréciation et présence au poste enregister avec succès')
                   // this.$router.push('/admin/demande')
                  
                }
                else{
                    mythis.errorList="une erreur s'est produite"
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
       
      },
    };
    </script>