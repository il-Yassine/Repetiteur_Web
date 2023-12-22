
 <template>
    
    <div >
      
     <div class="bg-gray-300">
      <br> <br> <br>
      <br>
      <br>
      <br>
      <div class="box">
        <div class="card " >
         <div class="card-header">
             <h4 class="text-4xl text-center font-bold text-black-500 mt-4 mb-6">Connexion</h4>
         </div>
         <div class="card-body">
             
 
          <ul class="bg-blue-100 border-t border-border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="Object.keys(this.errorList).length > 0">
             <li class="mb-0 ms-3" >
             {{ this.errorList }}
 
            
             </li>
         </ul>
         <form @submit.prevent="ajout">
             <div class="mb-6">
               <label for="email" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Email</label>
               <input type="email"   v-model="model.login.email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required>
             </div>
             <div class="mb-6">
               <label for="password" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Mot de passe</label>
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
     
  
 <footer class="bg-neutral-10 text-center text-black dark:bg-black-600 dark:text-neutral-200 lg:text-left">
 <!-- <div
   class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between"> -->
   <!-- <div class="mr-12 hidden lg:block">
    
   </div> -->
   <!-- Social network icons container -->
   <!-- <div class="flex justify-center">
     <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         class="h-4 w-4"
         fill="currentColor"
         viewBox="0 0 24 24">
         <path
           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
       </svg>
     </a>
     <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         class="h-4 w-4"
         fill="currentColor"
         viewBox="0 0 24 24">
         <path
           d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
       </svg>
     </a>
 
   </div> -->
 <!-- </div> -->
 
 <!-- Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. -->
 <div class="mx-6 py-10 text-center md:text-left">
   <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
     <!-- TW elements section -->
     <div class="">
       <h6
         class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
         <!-- <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="mr-3 h-4 w-4">
           <path
             d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
         </svg> -->
         <span> <img src="../../../assets/logo5.png" alt="logo" width="60" ></span>
         MON REPETITEUR
       </h6>
       <br>
       <div class="flex justify-start">
         <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             class="h-4 w-4"
             fill="currentColor"
             viewBox="0 0 24 24">
             <path
               d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
           </svg>
         </a>
         <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             class="h-4 w-4"
             fill="currentColor"
             viewBox="0 0 24 24">
             <path
               d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
           </svg>
         </a>
   
       </div>
       <!-- <p>
         Here you can use rows and columns to organize your footer
         content. Lorem ipsum dolor sit amet, consectetur adipisicing
         elit.
       </p> -->
     </div>
     <!-- Products section -->
     <div class="">
       <h6
         class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
         ACCUEIL
       </h6>
       <p class="mb-4">
         <router-link to="/" class="text-neutral-600 dark:text-neutral-200">Accueil</router-link>
       </p>
       <p class="mb-4">
         <router-link to="/login" class="text-neutral-600 dark:text-neutral-200">Faire une demande</router-link> 
        
       </p>
      
       <p class="mb-4">
         <router-link to="/About" class="text-neutral-600 dark:text-neutral-200"> Ecoles Partenaires</router-link>
       </p>
       <p class="mb-4">
         <router-link to="/login" class="text-neutral-600 dark:text-neutral-200">Epreuve</router-link> 
        
       </p>
 
       
     </div>
     <!-- Useful links section -->
     <div class="">
       <h6
         class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
         ACCUEIL
       </h6>
       <p class="mb-4">
         <router-link to="/About" class="text-neutral-600 dark:text-neutral-200">Qui Sommes-nous</router-link>
       </p>
       
       <p class="mb-4">
         <router-link to="/login" class="text-neutral-600 dark:text-neutral-200">Connexion</router-link>
       </p>
       <p class="mb-4">
         <a href="https://digitalis-benin.com/" target="_blank" class="text-neutral-600 dark:text-neutral-200">
           Digitalis Sarl
         </a>
       </p>
       
     </div>
     <!-- Contact section -->
     <div>
       <h6
         class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
         Contact
       </h6>
       <p class="mb-4 flex items-center justify-center md:justify-start">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="mr-3 h-5 w-5">
           <path
             d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
           <path
             d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
         </svg>
         Bénin, Abomey-Calavi,Togoudo
       </p>
       <p class="mb-4 flex items-center justify-center md:justify-start">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="mr-3 h-5 w-5">
           <path
             d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
           <path
             d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
         </svg>
         info@mon.repetiteur.com
       </p>
       <p class="mb-4 flex items-center justify-center md:justify-start">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="mr-3 h-5 w-5">
           <path
             fill-rule="evenodd"
             d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
             clip-rule="evenodd" />
         </svg>
         + 229 234 567 88
       </p>
       <p class="flex items-center justify-center md:justify-start">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="currentColor"
           class="mr-3 h-5 w-5">
           <path
             fill-rule="evenodd"
             d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
             clip-rule="evenodd" />
         </svg>
         + 229 234 567 89
       </p>
       
     </div>
   </div>
 </div>
 
 <!--Copyright section-->
 <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
   <span>© 2023 Digitalis. Tous droits réservés.</span>
 </div>
 </footer>
    </div>
 

</template>
<script>
 import axios from 'axios'
 import { mapState, mapGetters } from 'vuex';
export default {
    name:'login',
    computed: {
    ...mapState('auth', ['isAuthenticated']),
    ...mapGetters('getUserToken', ['isAuthenticated']),
},
    data(){
        return{
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
            model:{
                login:{
                    email:'',
                    password:'',
                    
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
      getrole(){

axios.get('http://127.0.0.1:8000/api/roles',)
.then(response => {
 this.role = response.data.data;
 this.repetiteur = response.data.data[0].id;
 this.parents = response.data.data[2].id;
 //this.options = [response.data.data[0], response.data.data[response.data.data.length - 1]];
 console.log( this.role)
 console.log( this.repetiteur)
 console.log( this.parents)
// console.log( this.options)
})
.catch(error => {
    console.error('Erreur lors de la récupération des données depuis l\'API', error);
  });


  },
  getrepetiteur(){
    axios.get('http://127.0.0.1:8000/api/repetiteurs').then(res=>{
                this.repetiteurs = res.data.data
                  
                console.log(this.repetiteurs)
            });
  },
  getparents(){
    axios.get('http://127.0.0.1:8000/api/parents').then(res=>{
                this.parentes = res.data.data
                  
                console.log(this.parentes)
            });
  },
 
  async saveStudent() {
  try {
    // Requête de connexion
    const loginResponse = await axios.post('http://127.0.0.1:8000/api/auth/login', this.model.login);

    console.log(loginResponse.data);

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

      console.log(config);

      // Requête pour récupérer le profil
      const profileResponse = await axios.get('http://127.0.0.1:8000/api/profile', config);
      
      // Stocker les données du profil dans le composant ou Vuex
      this.role_id = profileResponse.data.role_id;
      this.user_id = profileResponse.data.id;
      console.log(this.role_id);
      console.log(this.user_id);

      const userData = { user_id: this.user_id };
      console.log(userData);

      // Redirection en fonction du rôle
      console.log('Role ID:', this.role_id);
      console.log('Parents:', this.parents);
      console.log('id de utilisateur:', this.user_id);

    
console.log(this.repetiteurs);
// Filtrage des répétiteurs en fonction de l'utilisateur actuel
this.apeResults = Array.isArray(this.repetiteurs)
  ? this.repetiteurs.filter(repetiteur => repetiteur.user.id === this.user_id)
  : [];
  console.log(this.apeResults);

  this.paentResults = Array.isArray(this.parentes)
  ? this.parentes.filter(parente => parente.user.id === this.user_id)
  : [];
  console.log(this.paentResults);
 


      if (this.role_id === this.parents && this.paentResults.length === 0) {
        console.log('test');
        try {
          const parentsResponse = await axios.post('http://127.0.0.1:8000/api/parents', userData, config);
          console.log('Parents Response:', parentsResponse.data);

          // Stockage de l'ID des parents dans le stockage local et Vuex
          console.log(parentsResponse.data.data);
          localStorage.setItem('parents_id', parentsResponse.data.data.id);
          this.$store.commit('setUserParentsId', parentsResponse.data.data.id);

          // Gestion de la réponse de la requête POST
         // alert(parentsResponse.status);
          if (parentsResponse.status === 201) {
            alert('Compte parents validé avec succès');
          }

          // Marquer le compte "parents" comme créé
          localStorage.setItem('parents_created', 'true');
        } catch (parentsError) {
          console.error('Erreur lors de la création du compte parents :', parentsError);
          
        }
      }
     // Redirection en fonction du rôle et de la liste des répétiteurs
if (this.role_id === this.repetiteur && this.apeResults.length === 0) {
  this.$router.push('/admin/repetiteur/create');
} else if(this.role_id === this.parents) {
  this.$router.push('/admin/demande');
  // Redirection vers la demande ou le tableau de bord
  // const redirectPath = this.role_id === this.parents ? '/admin/demande' : '/admin/dashboard';
  // this.$router.push(redirectPath);
} else{
  this.$router.push('/admin/dashboard');
}

    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la connexion :', error);
    if (error.response) {
            this.errorList = 'Vos identifiants son incorrectes';
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
.box{background-color:#fff;display:flex;
    border-radius:1em;width:30vw;flex-direction:column;padding:2em;box-shadow:rgba(100,100,111,.2) 0px 7px 29px 0px;position:relative}
    .box{
      margin-top: 50% important!;
      margin: auto;
      padding: auto;
    }

</style> 
