<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-12 p-4">
      <h3 class="text-3xl font-medium text-gray-900 dark:text-white font-serif">Liste des épreuves</h3><br>
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
               <!-- <button  @click="openSecondModal" type="button" class="inline-flex text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                   <svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
              </svg>
              Ajouter une epreuve
              </button> -->
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





<!-- 
<template>
  <br>
  <br>
  <br>
<div class="container w-2/3 mx-auto my-auto" > 
    
  

    <div class="w-full max px-4 bg-white border border-gray-200 rounded-lg shadow sm:p-12 md:p-12 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#" @submit.prevent="ajout" enctype="multipart/form-data">
            <ul class="bg-blue-100 border-t border-border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="Object.keys(this.errorList).length > 0">
                <li class="mb-0 ms-3" >
                {{ this.errorList }}
            
               
                </li>
            </ul>
            <h3 class="text-xl font-medium text-gray-900 dark:text-white text-center mt-4 mb-8 font-serif">Formulaire d'inscription pour un enfants</h3>
             <h3 class="text-xl font-medium text-gray-900 dark:text-white">Formulaire d'inscription pour un parents</h3> -->
            <!-- <div>
                <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                <input type="text" name="fname" id="fname" v-model="model.fname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nom de votre enfants" required>
            </div>
            <div>
                <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                <input type="text" name="lname" v-model="model.lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Votre prénom de votre enfants" required>
            </div>

            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone</label>
                <input type="number"  v-model="model.phone" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Votre numéro de téléphone" required>
            </div>
            <div>
                
                
            </div>
            <div class="flex justify-end">
                <button type="submit" @click="saveStudent" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enregister</button>
            </div>
           
            
        </form>
    </div>
</div>
<br><br><br>



</template>
<script>
 import axios from 'axios'
export default {
    name:'parentsCreate',
    data(){
        return{
            
            user_id: null,
            error: null,
            matiere:[],
            parents:[],
            errorList:'',
            parents_id:'',
            model:{
                    fname:'',
                    lname:'',
                    phone:'',
                    adresse:'',
                    user_id:'',
                
            }
        }
    },
    mounted(){
      //  console.log('I am here')
      this.getMatiere();
      
      //this.getUserInfo();
      this.getUsers();
      this.$nextTick(() => {
    this.getParents();
  });
      
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
      this.user_id = response.data.id;
      localStorage.setItem('user_id',response.data.id)
      this.$store.commit('setUserId',this.user_id)
      //userIds=this.userId;
      console.log(response.data.id);
    })
    .catch(error => {
      if (error.response === 401) {
        this.error = "Erreur d'authentification : Votre session a expiré. Veuillez vous reconnecter.";
        // Vous pouvez également rediriger l'utilisateur vers la page de connexion ici
      } else {
        this.error = "Une erreur s'est produite. Veuillez réessayer plus tard.";
      }
    });
    this.getParents();
  
        },
        
        
        getMatiere(){
            const token = localStorage.getItem('token');
            axios.get('http://127.0.0.1:8000/api/matieres').then(res=>{
                this.matiere=res.data.data
                console.log(this.matiere)
                console.log(res)
            });
        },
        getParents(){
            const token = localStorage.getItem('token');
            
            axios.get('http://127.0.0.1:8000/api/parents').then(res=>{
                this.parents=res.data.data.filter(parent => parent.user.id === this.user_id)
                console.log(this.parents)
                this.parents_id= this.parents[0].id
                console.log(this.parents_id)
                console.log(res)
            });
        },


        
        saveStudent(){
            var mythis= this;
            const token = localStorage.getItem('token');
            const user_id= this.user_id
            this.$store.commit('setUserId',user_id)
            console.log(user_id);
            const dataToSend = {

  fname:this.model.fname,
  lname:this.model.lname,
   phone:this.model.phone,
  
  parents_id: this.parents_id,
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
                alert(response.status);
                if (response.status==201) {
                    mythis.errorList="Votre enfants a été ajouter avec succès"
                    alert('Votre enfants a été ajouter avec succès')
                    this.$router.push('/admin/demande')
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
        }
    },
}

</script> --> 