<template>
    <div class="container mx-auto mt-12 px-5 ">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
            <h3 class="text-3xl font-medium text-gray-900 dark:text-white font-serif">Bibliothèque</h3>
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
                            Image
                        </th>
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
                        <img src="../../../assets/pdf.jpg" type="" width="60" height="60">
                       </td>
                      
                      <td class="px-6 py-4">
                            {{ apprenant.classe.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ apprenant.matiere.name }}
                        </td>
                        <td class="px-6 py-4">
                          <a class="font-medium text-blue-600 dark:text-red-500 hover:underline" :href="apprenant.epreuve" target="_blank">Télécharger</a>
                           
                        </td>
                        <td class="px-6 py-4">
                          <a class="font-medium text-blue-600 dark:text-red-500 hover:underline" :href="apprenant.corrige" target="_blank">Télécharger</a>
                           
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

        </div>
    </div>

  </template>
  <script>
    import axios from 'axios'
  export default {
    name: "epreuve",
    data() {
      return {
          
          name:'',
          parentss_id:'',
          role_id:'',
          user_id:'',
          classe_id:'',
          classe_id:'',
         
          parents:[],
          demande:[],
          classe:[],
          epreuve:[],
          epreuves:[],
         
      };
    },
    // created() {
    //   this.form.local = this.$i18n.locale;
    // },
    mounted(){
    
    
    this.getEpreuve();
    this.getparents();
      this.$nextTick(() => {
     this.getDemande()
   });
   
  },
    methods: {
        async  getparents(){

const token = localStorage.getItem('token');
    const config = {
headers: {
'Authorization': 'Bearer ' + token,
},
};

//console.log(config);

// Requête pour récupérer le profil
const profileResponse  =await axios.get('http://127.0.0.1:8000/api/profile', config);
//console.log(profileResponse);
// Stocker les données du profil dans le composant ou Vuex
this.role_id = profileResponse.data.role_id;
this.user_id = profileResponse.data.id;
//console.log(this.role_id);
//console.log(this.user_id);

axios.get('http://127.0.0.1:8000/api/parents').then(res=>{
    this.parents = res.data.data.filter(parent => parent.user.id === this.user_id)
      
    //console.log(this.parents)
    this.parentss_id= this.parents[0].id
    //console.log(this.parentss_id);
   
});
this.getDemande();
},
getDemande(){
            axios.get('http://127.0.0.1:8000/api/demandes').then(res=>{
                this.demande=res.data.data.filter(payemet => payemet.enfants.parents.id === this.parentss_id)
                //console.log(this.demande)
                this.classe=this.demande.map(item => item.tarification.classe.id)
                //console.log( this.classe)
                //console.log(res)
            });
            this.getEpreuve();    
        },
     
      getEpreuve(){
          axios.get('http://127.0.0.1:8000/api/epreuves').then(res=>{
              this.epreuves=res.data.data
              //console.log(this.epreuves)
              //console.log(this.classe)
              //console.log(res)
              if (this.classe && this.epreuves) {
  
this.classe=this.demande.map(item => item.tarification.classe.id)
  this.repetFiltered = this.epreuves.filter(repeteItem => {
  // Utilisation de some pour vérifier si l'ID de repetiteur existe dans this.rep
  return this.demande.some(repItem => repItem.tarification.classe.id === repeteItem.classe.id);
  
});
this.epreuve=this.repetFiltered 

  //console.log(this.epreuve);
 // console.log(this.repetFiltered);
 } else {
   console.error('La propriété rep est undefined.');
 }
              
          });
          
      },

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