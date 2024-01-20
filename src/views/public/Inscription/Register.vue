
<template>
  
 <div class="bg-gray-300">
  <br>
  <br>
  <br>  
  <br>  
 
  <div class="box">
    <div class="card sm-5 " >
     <div class="card-header">
         <h1 class="text-4xl font-bold text-center text-black-500 mt-4 mb-6">Inscription</h1>
     </div>
     <div class="card-body ">

      <ul class="bg-blue-100 border-t border-border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="Object.keys(this.errorList).length > 0">
         <li class="mb-0 ms-3" >
         {{ this.errorList }}
         </li>
     </ul> 
     <form method="POST" @submit.prevent="saveStudent">
       <p class="text-center text-lg"> Voulez vous  créer quel type de compte ?</p>
       <br>
       <div class="flex items-center justify-around ps-2">
         <label v-for="(option, index) in options" :key="option.id" class="flex items-center  space-x-2">
           <input
           required
             type="radio"
             :id="'bordered-radio-' + index"
             v-model="selectedOption"
             :value="option.id"
             :name="'bordered-radio'"
             class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
           />
           <label
             :for="'bordered-radio-' + index"
             class="text-lg font-medium text-gray-900 dark:text-gray-300"
           >
             {{ option.name }}
           </label>
         </label>
       </div>
       <br>
     <!-- <div class="flex items-center ps-2 ">
       <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       <label for="bordered-radio-1" class="flex py-4 ms-1 text-sm font-medium text-gray-900 dark:text-gray-300">Parents</label>
    -->
     
<!--       
       <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       <label for="bordered-radio-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Répétiteur</label>
   </div> -->
   
     

     <div class="mb-6">
       <label for="name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Nom Complet</label>
       <input type="text"  v-model="model.name"  id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="votre nom Complet" required>
     </div>
       <div class="mb-6">
         <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email</label>
         <input type="email"  v-model="model.email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="votre email" required>
       </div>
       <div class="mb-6">
         <label for="password" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Mot de passe</label>
         <input type="password" v-model="model.password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
       </div>
       <!-- <div class="flex items-start mb-6">
         <div class="flex items-center h-5">
           <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
         </div>
         <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
       </div> -->
       <div class="flex justify-between">
         <button type="reset"  class=" w-36 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"><a href="/login" >Annuler</a></button>
         <button type="submit"  class=" w-32 text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enregistrer</button>
       </div>
       
     </form>

     </div>
    </div>

 </div>
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
</template>
<script>
 import axios from 'axios'

export default {
    name:'register',
    data(){
        return{
            errors: [],
            role: [],
            options: [],
            errorList:'',
            selectedOption:'',
            parents:'',
            model:{
                    name:'',
                    email:'',
                    password:'',

            }
        }
    },
    mounted(){
        this.getrole();
      },
    methods:{

      getrole(){

    axios.get('http://127.0.0.1:8000/api/roles',)
   .then(response => {
     this.role = response.data.data;
     this.options = [response.data.data[0], response.data.data[response.data.data.length - 1]];
     this.parents= response.data.data[response.data.data.length - 1]
     console.log( this.role)
     console.log( this.options)
     console.log( this.parents)
   })
   .catch(error => {
        console.error('Erreur lors de la récupération des données depuis l\'API', error);
      });


      },
     
      async saveStudent() {
    try {
        const { name, email, password } = this.model;
        const dataToSend = {
            name,
            email,
            password,
            role_id: this.selectedOption,
        };

        console.log(dataToSend);

        const apiUrl = 'http://127.0.0.1:8000/api/auth/register';
        const response = await axios.post(apiUrl, dataToSend);

        if (response.data.success) {
            alert(response.data.message);
            this.errorList = response.data.message;
            this.$router.push('/login');
        } else {
          if(response.data.data.email){
            alert("ce email existe déjà");
          }else{
            alert(response.data.message);
          }
            
            this.errorList = response.data.message;
            console.log(response);
            console.log(response.data);
            console.log(response.data.data.email);
        }
    } catch (error) {
        console.error("Une erreur inattendue s'est produite:", error);

        if (error.response) {
            this.errorList = error.response.data;
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.error('Une erreur inattendue s\'est produite:', error);
        }
    }
}

        // createAccount:function(){
        //   this.$store.dispatch('createAccount',{
        //     name:this.name,
        //     email:this.email,
        //     password:this.password,
        //   })
        //   //console.log(this.name,this.email,this.password);
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