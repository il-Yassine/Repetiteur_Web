<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-12 p-4">
        <h3 class="text-3xl font-medium text-gray-900 dark:text-white font-serif">Listes des épreuves</h3><br>
        <div class="flex items-center justify-between pb-4">
            <div class="relative">
            </div>
            <div>
 
            </div>
        </div>
        <table class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    
                    <th scope="col" class="px-6 py-3">
                        Classe
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Matiere
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Epreuve
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Corrigé
                  </th>
                  
                </tr>
            </thead>
            <tbody v-if="this.epreuve.length > 0">
                <tr class="bg-white text-lg border-b dark:bg-gray-900 dark:border-gray-700" v-for="(apprenant,index) in this.epreuve" :key="index">
                    <td class="px-6 py-4">
                        {{ apprenant.classe.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ apprenant.matiere.name }}
                    </td>
                    <td class="px-6 py-4">
                      <a class="font-medium text-blue-600 dark:text-red-500 hover:underline" :href="apprenant.epreuve" target="_blank">Voir</a>
                        
                    </td>
                    <td class="px-6 py-4">
                      <a class="font-medium text-blue-600 dark:text-red-500 hover:underline" :href="apprenant.corrige" target="_blank">Voir</a>
                       
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                <td colspan="3">
                Loading...
                </td></tr>  
              </tbody>
  
        </table>
  
          <div v-if="isModalSecondOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <div class="bg-white p-8 rounded-md ">
  
              <div class="relative p-4 w-full max-w-md max-h-full ">
                <!-- Modal content -->
  
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                       Ajouter une epreuve
                        </h3>
                        <button @click="closeSecondModal"  type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
  
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5">
                        <form @submit.prevent="saveEpreuves" class="space-y-4" action="#">
                          <div>
                            <label for="email" class="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Nom Complet</label>
                            <input type="text" name="email" v-model="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
                        </div>
                           
                            <div class="col-span-2 sm:col-span-1">
                                     <label for="email" class="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Matiere</label>
                                <select  id="category" v-model="matiere_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">votre matiere</option>
                                    <option v-for="(matier,index) in this.matiere" :key="index" :value="matier.id" >{{ matier.name }} </option>
                                    
                                </select>
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="email" class="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Classe</label>
                           <select v-model="classe_id"  id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                               <option selected="">Votre classe</option>
                               <option v-for="(classes,index) in this.classe" :key="index" :value="classes.id" >{{ classes.name }} </option>
                           </select>
                       </div>
                       <div>
                        <label for="email" class="block mb-1 text-lg font-medium text-gray-900 dark:text-white"> Epreuve</label>
                        <input type="file" accept=".pdf" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
                    </div>
                    <div>
                      <label for="email" class="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Corrigé</label>
                      <input type="file" accept=".pdf" name="email"  id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
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
      name: "epreuve",
      data() {
        return {
            
            isModalSecondOpen: false,
            name:'',
            matiere_id:'',
            classe_id:'',
           
            matiere:[],
            classe:[],
            epreuve:[],
           
        };
      },
      // created() {
      //   this.form.local = this.$i18n.locale;
      // },
      mounted(){
      
      this.getMatiere();
      this.getClasse();
      this.getEpreuve();
     
    },
      methods: {
       
    openSecondModal() {
      this.isModalSecondOpen = true;
      
    },
    closeSecondModal() {
      this.isModalSecondOpen = false;
    
    this.matiere_id='';
           this.classe_id='';
           this.name=''; 
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
        getEpreuve(){
            axios.get('http://127.0.0.1:8000/api/epreuves').then(res=>{
                this.epreuve=res.data.data
                console.log(this.epreuve)
                console.log(res)
            });
        },
        saveEpreuves(){
            var mythis= this;
         
           
            const dataToSend = {
  matiere_id:this.matiere_id,
  classe_id:this.classe_id,
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
            axios.post( 'http://127.0.0.1:8000/api/epreuves',dataToSend,config ).then(res =>{
  
                console.log(res.data)
               // alert(res.data.message);
               this.closeSecondModal();
               if (res.status==201) {
                
                    mythis.errorList="Epreuves enregister avec succès"
                   
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
  
  