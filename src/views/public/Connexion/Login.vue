
 <template>
    
    <div >
      
     <div class="custom-background h-screen">
      <br> <br>
      

      <div class="flex flex-col items-center justify-center px-6 py-9 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 " >
         <div class="card-header">
             <h4 class="text-4xl text-center font-bold text-black-500 mt-4 mb-6">Authentification</h4>
         </div>
         <div class="card-body">
             
 
          <ul class="bg-blue-100 border-t border-border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="Object.keys(this.errorList).length > 0">
             <li class="mb-0 ms-3" >
             {{ this.errorList }}
 
            
             </li>
         </ul>
         <form @submit.prevent="ajout">
             <!-- <div class="mb-1">
               <label for="email" class="block text-start mb-2 text-xl font-medium text-gray-900 dark:text-white">Email</label>
               <input type="email"   v-model="model.login.email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="">
             </div>

             <label for="email" class="block  mb-2 text-xl font-medium text-gray-900 dark:text-white">Où</label>

             <div class="mb-2">
              <label for="email" class="block text-start mb-2 text-xl font-medium text-gray-900 dark:text-white">Téléphone</label>
              <input type="number"   v-model="model.login.phone" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="">
            </div> -->
           
          <!-- <div class="mb-1" v-if="!phoneFilled || !model.login.phone" >
            <label for="email" class="block text-start mb-2 text-xl font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" v-model="model.login.email" id="email" @input="toggleFields" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="">
        </div>
        
       
        
        <div class="mb-2" v-if="!emailFilled || !model.login.email">
            <label for="phone" class="block text-start mb-2 text-xl font-medium text-gray-900 dark:text-white">Téléphone</label>
            <input type="number" v-model="model.login.phone" id="phone" @input="toggleFields" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="">
        </div> -->
        <div class="mb-1" v-if="!phoneFilled || !model.login.phone">
          <label for="email" class="block text-start mb-2 text-xl font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" v-model="model.login.email" id="email" @input="toggleFields" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="">
      </div>
      
      <div class="mb-2" v-if="!emailFilled || !model.login.email">
          <label for="phone" class="block text-start mb-2 text-xl font-medium text-gray-900 dark:text-white">Téléphone</label>
          <input type="number" v-model="model.login.phone" id="phone" @input="toggleFields" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="">
      </div>
      
      
        
             <div class="mb-1">
               <label for="password" class="block text-start mb-2 text-xl font-medium text-gray-900 dark:text-white">Mot de passe</label>
               <input type="password" v-model="model.login.password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
             </div>
             <div class="flex items-center justify-between">
        <div class="hidden sm:flex sm:items-start">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="rounded border-gray-300 mt-1 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div class="ml-1 text-sm">
            <label
              for="remember"
              class="text-lg font-medium text-primary dark:text-gray-300"
              >Se souvenir de moi
            </label>
          </div>
        </div>

        <a
          href="/auth/forgot-password"
          class="text-lg font-medium text-primary-normal hover:underline dark:text-primary-500"
        >
          Mot de passe oublie
        </a>
      </div>
      <br>
             <div class="flex justify-center">
                 <!-- <span>Pas encore de compte ? <a href="/signup">S'inscrire</a> </span>  -->
                 <button type="submit"  @click="saveStudent" class="text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Connexion</button>
                 
             </div>
             <br>
             <span class="text-xl font-blue ">
                 Pas encore de compte ? <a href="/register" class="font-medium text-green-500 hover:underline dark:text-orange-400">S'inscrire</a>
             </span>
           </form>
           <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            <p class="text-gray-900 ml-3">Chargement en cours...</p>
          </div>
        
         </div>
        </div>
        
 
     </div>
    </div>
     <br>
     <br>
     <br>
     <br>
     <br>
     <br>
     </div>
     
  
<footer class="bg-green-600 text-white py-6">
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row justify-between ml-12">
      
      <div class="md:w-1/3">
        <h2 class="text-2xl font-semibold mb-4">Contactez-nous</h2>
        
        <p class="text-lg">Abomey-Calavi, Code Postal</p>
        <p class="text-lg">Email : contact01.digitalis@gmail.com</p>
        <p class="text-lg">Téléphone : +229 97825820</p>
      </div>

      
      <div class="md:w-1/3 mt-4 md:mt-0">
        <h2 class="text-2xl font-semibold mb-4">Liens rapides</h2>
        <ul>
          <li><a href="/" class="hover:text-gray-400 text-lg ">Accueil</a></li>
          <li><a href="/#repetiteur" class="hover:text-gray-400 text-lg">Rechercher un répétiteur</a></li>
          <li><a href="/login" class="hover:text-gray-400 text-lg">Faire une demande</a></li>
          <li><a href="/login" class="hover:text-gray-400 text-lg">Connexion</a></li>
        </ul>
      </div>

  
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
        <a href="https://digitalis-benin.com/" target="blank" class=" text-white hover:text-gray-400 text-lg">digitalis-benin.com</a>
      </div>
    </div>
  </div>
 
</footer>
  <div class="bg-gray-700 h-6"> <h2 class="text-lg text-white text-center font-semibold ">Copyright@ 2023 dévolopper par Digitalis
</h2></div> 
    </div>
 

</template>
<script>
 import axios from 'axios'
 
export default {
    name:'login',
    data(){
        return{
          loading: false,
            userId: null,
            user_id:'',
            errorList:'',
            role:[],
            apeResults:[],
            paentResults:[],
            repetiteurs:[],
            parentes:[],
            parents:'',
            repetiteur:'',
            emailFilled: false,
            phoneFilled: false,
            model:{
                login:{
                    email:'',
                    password:'',
                    phone:''
                    
                },
            }
        }
    },
    mounted(){
        this.getrole();
        this.getrepetiteur();
        this.getparents();
      },
    methods:{
      toggleFields() {
        this.emailFilled = this.model.login.email !== '';
        this.phoneFilled = this.model.login.phone !== '';
    },
   
      getrole(){

axios.get('https://apirepetiteur.sevenservicesplus.com/api/roles',)
.then(response => {
 this.role = response.data.data;
 this.repetiteur = response.data.data[0].id;
 this.parents = response.data.data[2].id;
 //this.options = [response.data.data[0], response.data.data[response.data.data.length - 1]];
//  console.log( this.role)
//  console.log( this.repetiteur)
//  console.log( this.parents)
// console.log( this.options)
})
.catch(error => {
    console.error('Erreur lors de la récupération des données depuis l\'API', error);
  });


  },
  getrepetiteur(){
    axios.get('https://apirepetiteur.sevenservicesplus.com/api/repetiteurs').then(res=>{
                this.repetiteurs = res.data.data
                  
               // console.log(this.repetiteurs)
            });
  },
  getparents(){
    axios.get('https://apirepetiteur.sevenservicesplus.com/api/parents').then(res=>{
                this.parentes = res.data.data
                  
               // console.log(this.parentes)
            });
  },
 
  async saveStudent() {

    setTimeout(() => {
        this.loading = true; // Set loading to false when data is fetched
      }, 2000);
  try {
    let loginData = {};
    if (this.model.login.email) {
      loginData = { email: this.model.login.email, password: this.model.login.password };
    } else if (this.model.login.phone) {
      loginData = { phone: this.model.login.phone, password: this.model.login.password };
    }
    console.log(loginData);
    // Requête de connexion
    const loginResponse = await axios.post('https://apirepetiteur.sevenservicesplus.com/api/auth/login',loginData);

    console.log(loginResponse);

    this.model.login = { email: '', password: '' };

    if (loginResponse.data.token_type) {
      const token = loginResponse.data.access_token;
      localStorage.setItem('token', token);
      
      // Utilisation du token pour la deuxième requête
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      };

      //console.log(config);

      // Requête pour récupérer le profil
      const profileResponse = await axios.get('https://apirepetiteur.sevenservicesplus.com/api/profile', config);
      
      // Stocker les données du profil dans le composant ou Vuex
      this.role_id = profileResponse.data.role_id;
      this.user_id = profileResponse.data.id;
      // console.log(this.role_id);
      // console.log(this.user_id);

      const userData = { user_id: this.user_id };
      //console.log(userData);

      // Redirection en fonction du rôle
      // console.log('Role ID:', this.role_id);
      // console.log('Parents:', this.parents);
      // console.log('id de utilisateur:', this.user_id);

    
//console.log(this.repetiteurs);
// Filtrage des répétiteurs en fonction de l'utilisateur actuel
this.apeResults = Array.isArray(this.repetiteurs)
  ? this.repetiteurs.filter(repetiteur => repetiteur.user.id === this.user_id)
  : [];
 // console.log(this.apeResults);

  this.paentResults = Array.isArray(this.parentes)
  ? this.parentes.filter(parente => parente.user.id === this.user_id)
  : [];
  //console.log(this.paentResults);
 


      if (this.role_id === this.parents && this.paentResults.length === 0) {
        //console.log('test');
        try {
          const parentsResponse = await axios.post('https://apirepetiteur.sevenservicesplus.com/api/parents', userData, config);
          //console.log('Parents Response:', parentsResponse.data);

          // Stockage de l'ID des parents dans le stockage local et Vuex
          //console.log(parentsResponse.data.data);
          
          

          // Gestion de la réponse de la requête POST
         // alert(parentsResponse.status);
          if (parentsResponse.status === 201) {
            alert('Compte parents validé avec succès');
          }

       
        } catch (parentsError) {
          console.error('Erreur lors de la création du compte parents :', parentsError);
          
        }
      }
     // Redirection en fonction du rôle et de la liste des répétiteurs
if (this.role_id === this.repetiteur && this.apeResults.length === 0) {
  this.$router.push('/admin/repetiteur/create');
} else if(this.role_id === this.parents) {
  this.$router.push('/admin/demande');
 
} else{
  this.$router.push('/admin/profil');
}

    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la connexion :', error);
    if (error.response) {
           // this.errorList = 'Vos identifiants sont incorrectes';
            alert('Vos identifiant sont incorrecte')
            console.log(error.response.data.message);
            console.log(error.response);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.error('Une erreur inattendue s\'est produite:', error);
            console.log(error);
        }

    // Gérer l'erreur (par exemple, afficher un message d'erreur)
    this.error = "Une erreur s'est produite. Veuillez réessayer plus tard.";
  }
}

//   async saveStudent() {
//   try {
//     // Requête de connexion
//     const loginResponse = await axios.post('http://127.0.0.1:8000/api/auth/login', this.model.login);

//     console.log(loginResponse.data);

//     this.model.login = {
//       email: '',
//       password: '',
//     };

//     if (loginResponse.data.token_type) {
//       const token = loginResponse.data.access_token;
//       localStorage.setItem('token',loginResponse.data.access_token)
//       // Utilisation du token pour la deuxième requête
//       const config = {
//         headers: {
//           'Authorization': 'Bearer ' + token,
//         },
//       };

//       console.log(config);

//       // Requête pour récupérer le profil
//       const profileResponse = await axios.get('http://127.0.0.1:8000/api/profile', config);
      
//       // Stocker les données du profil dans le composant ou Vuex
//       this.role_id = profileResponse.data.role_id;
//       this.user_id = profileResponse.data.id;
//       console.log(this.role_id);
//       console.log(this.user_id);
//       const userData = {
//   user_id:this.user_id,
 
// };
// console.log(userData);

      
//       // Vous pouvez également stocker d'autres données du profil si nécessaire
//       // this.$store.commit('setUserProfile', profileResponse.data);

//       // Redirection en fonction du rôle
//                 console.log('Role ID:', this.role_id);
//           console.log('Parents:', this.parents);

//           if (this.role_id === this.parents) {
//             const dataToSend = {
// user_id:this.user_id,
// };
//       if (!localStorage.getItem('parents_created')) {

//         console.log('test');
//         try {
//           const parentsResponse = await axios.post('http://127.0.0.1:8000/api/parents', dataToSend, config);
//           console.log('Parents Response:', parentsResponse.data);

//           // Stockage de l'ID des parents dans le stockage local et Vuex
//           console.log(parentsResponse.data.data);
//           localStorage.setItem('parents_id', parentsResponse.data.data.id);
//           this.$store.commit('setUserParentsId', parentsResponse.data.data.id);

//           // Gestion de la réponse de la requête POST
//           alert(parentsResponse.status);
//           if (parentsResponse.status === 201) {
//             alert('Compte parents créé avec succès');
//           }

//           // Marquer le compte "parents" comme créé
//           localStorage.setItem('parents_created', 'true');
//         } catch (parentsError) {
//           console.error('Erreur lors de la création du compte parents :', parentsError);
//         }
//       }


//             console.log('Redirection vers /admin/demande');
//             this.$router.push('/admin/demande');
//             this.$router.push({ name:'demande'}); 
//           } else {
//             console.log('Redirection vers /admin/dashboard');
//             this.$router.push('/admin/dashboard');
//             this.$router.push({ name: 'dashboard' }); 
//           }

//     }
//   } catch (error) {
//     console.error('Une erreur s\'est produite lors de la connexion :', error);

//     // Gérer l'erreur (par exemple, afficher un message d'erreur)
//     this.error = "Une erreur s'est produite. Veuillez réessayer plus tard.";
//   }
// }



    }

    
}

</script>
<style>

    
    
.custom-background {
  background-image: url('../../../assets/images/images4.jpg');
  /* Remplacez 'votre-image.jpg' par le nom de votre image */
  background-size: cover;
  /* Ajustez la taille de l'image */
  background-repeat: no-repeat;
  background-position: center center;
  /* Centrez l'image */
  /* Ajoutez d'autres styles Tailwind CSS ou CSS personnalisés au besoin */
}

</style> 



<!-- const ROLE_PARENT = 'parent';
const ROLE_REPETITEUR = 'repetiteur';

async function saveStudent() {
  try {
    const loginResponse = await axios.post('http://127.0.0.1:8000/api/auth/login', this.model.login);

    if (loginResponse.data && loginResponse.data.access_token) {
      const token = loginResponse.data.access_token;
      localStorage.setItem('token', token);
      const profileResponse = await axios.get('http://127.0.0.1:8000/api/profile', { headers: { 'Authorization': 'Bearer ' + token } });

      if (profileResponse.data && profileResponse.data.role_id) {
        const roleId = profileResponse.data.role_id;
        const userId = profileResponse.data.id;
        const userData = { user_id: userId };
        const repetiteurs = this.filterUsersByRole(this.repetiteurs, userId);
        const parents = this.filterUsersByRole(this.parentes, userId);

        if (roleId === ROLE_PARENT && parents.length === 0) {
          await this.createParentAccount(userData);
        }

        this.redirectUser(roleId, repetiteurs);
      }
    }
  } catch (error) {
    this.handleErrorResponse(error);
  }
}

function filterUsersByRole(users, userId) {
  return Array.isArray(users) ? users.filter(user => user.user.id === userId) : [];
}

async function createParentAccount(userData) {
  try {
    const token = localStorage.getItem('token');
    const config = { headers: { 'Authorization': 'Bearer ' + token } };
    const parentsResponse = await axios.post('http://127.0.0.1:8000/api/parents', userData, config);

    if (parentsResponse.status === 201) {
      console.log('Compte parents validé avec succès');
    }
  } catch (error) {
    console.error('Erreur lors de la création du compte parents :', error);
  }
}

function redirectUser(roleId, repetiteurs) {
  if (roleId === ROLE_REPETITEUR && repetiteurs.length === 0) {
    this.$router.push('/admin/repetiteur/create');
  } else if (roleId === ROLE_PARENT) {
    this.$router.push('/admin/demande');
  } else {
    this.$router.push('/admin/dashboard');
  }
}

function handleErrorResponse(error) {
  console.error('Une erreur s\'est produite lors de la connexion :', error);
  if (error.response) {
    alert('Vos identifiants sont incorrects');
    console.log(error.response.data.message);
    console.log(error.response);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.error('Une erreur inattendue s\'est produite:', error);
    console.log(error);
  }
} -->