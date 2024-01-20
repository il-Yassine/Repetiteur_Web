<template>
    <div class="bg-gray-200">
        <!-- <h2 class=" mt-1 mb-3 text-2xl font-bold gray:text-gray-200 md:text-4xl text-center">
            Information sur le répétiteur</h2> -->
<section class="overflow-hidden py-5 font-poppins dark:bg-gray-800 ">

<br>
<br>
<br>
  <div class="bg-white max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 border border-gray-300 ">
    <!-- Votre contenu actuel ici -->
    <!-- ... -->
    <div class=" max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 ">
      <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4 md:w-1/4  ">
              <div class="sticky top-0 z-50 overflow-hidden ">
                  <div class="relative mb-6 lg:mb-10 lg:h-2/4  rounded-lg">
                      <img :src="product.data.profil_imageUrl" alt=""
                          class="object-cover w-full lg:h-full rounded ">
                          <br>
                          <span class="text-2xl font-medium text-black-500 dark:text-rose-200"> Description: </span>
                          <p class=" text-gray-700 dark:text-gray-400 text-xl">
                              {{  product.data.description }}
                          </p>
                         
                  </div>
                 
              </div>
          </div>
        
          <div class="w-full px-4 md:w-1/2 ">
              <div class="lg:pl-20">
                  <div class="mb-8 ">
                       <!-- <span class="text-lg font-medium text-black-500 dark:text-rose-200">Informations </span>  -->
                     
                      <p class=" text-3xl text-gray-700 dark:text-gray-400">
                          {{ product.data.user.name}} </p>
                        
                     
                      <span class="text-xl font-medium text-black-500 dark:text-rose-200"> Adresse: </span>
                      <p class=" text-gray-700 dark:text-gray-400 text-xl">
                          <span> {{ product.data.adresse }}</span>
                         
                      </p>
                      <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Classe: </p>

                      
                        <!-- Afficher le nom de la classe pour chaque produit -->
                        <p class="text-gray-600 dark:text-gray-300 text-xl"> {{ products.map(product => product.classe.name).join(', ') }}</p>
                     
                       <!-- <p class="text-gray-600 dark:text-gray-300 text-xl ">{{ products[0].classe.name }}</p> -->
                      <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Heure de Disponibilité: </p>
                      <p class="text-gray-600 dark:text-green-300 text-xl">{{ product.data.heureDisponibilite }}</p>
                     
                      <p class="text-xl font-medium text-black-500 dark:text-rose-200"> matières: </p>
                      <p class="text-gray-600 dark:text-green-300 text-xl">{{ products.map(product => product.matiere.name).join(', ') }}</p>
                      <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Matricule: </p>
                      <p class="text-gray-600 dark:text-green-300 text-xl">{{ product.data.matricule }}</p>

                      <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Status: </p>
                      <p class="text-gray-600 dark:text-green-300 text-xl">{{ product.data.status }}</p>
                     
                      <br>
                        <!-- Intégration des étoiles -->
        <div class="star-rating">
          <span v-for="i in maxRating" :key="i" class="star" @click="setRating(i)">
            <i :class="['fas', { 'text-yellow-500': userRating >= i, 'text-gray-300': userRating < i }, 'fa-star']" class="fa"></i>
          </span>
        </div>
                      <br>
                     
                     <a href="/login" class="text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-orange-500 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button">  Faire la demande de répétiteur</a>
                  </div>

              </div>
          </div>
          <div class="w-full px-4 md:w-1/4  ">
            <div class="sticky top-0 z-50 overflow-hidden ">
                <div class="relative mb-6 lg:mb-10 lg:h-2/4  rounded-lg">
                  <!-- <span class="text-lg font-medium text-black-500 dark:text-rose-200">Autres informations </span> -->
                  <br>
                  <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Situation matrimoniale: </p>
                  <p class="text-gray-600 dark:text-green-300 text-xl">{{ product.data.situationMatrimoniale }}</p>
                  <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Ecole de provenence: </p>
                  <p class="text-gray-600 dark:text-green-300 text-xl">{{ product.data.ecole }}</p>
                  <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Cycle: </p>
                  <p class="text-gray-600 dark:text-green-300 text-xl">{{ product.data.cycle }}</p>
                  <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Grade: </p>
                  <p class="text-gray-600 dark:text-green-300 text-xl">{{ product.data.grade }}</p>
                  <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Niveau d'etude: </p>
                  <p class="text-gray-600 dark:text-gray-300 text-xl">{{ product.data.niveauEtude }}</p>
                  <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Status de l'enseignent </p>
                  <p class="text-gray-600 dark:text-green-300 text-xl">{{ product.data.etats }}</p>
                  <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Evaluer par digitalis: </p>
                  <p class="text-gray-600 dark:text-green-300 text-xl">{{ product.data.evaluation }}</p>
                  <p class="text-xl font-medium text-black-500 dark:text-rose-200"> Expérience professionnel: </p>
                  <p class="text-gray-600 dark:text-green-300 text-xl">{{ product.data.experience }}</p>
                </div>
               
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
</section>

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
    name:'details',
  data() {
    return {
      proId:'',
      product:[], // Le produit sera récupéré de la source de données ou de l'API
      products:[], // Le produit sera récupéré de la source de données ou de l'API
      userRating: 0,
      maxRating: 5,
      
    };
  },
 async created() {
    // Vous devrez charger les détails du produit à partir de votre source de données, par exemple :
    // Ici, nous supposons qu'une méthode getProductDetails() est utilisée pour obtenir les détails du produit.

    // Exemple : 
    this.getProductDetails(this.$route.params.id);
    console.log(this.$route.params.id);
   // productId=this.$route.params.id
  },
  methods: {
    getProductDetails(productId) {
        console.log(productId)
        this.proId=productId
            axios.get('http://127.0.0.1:8000/api/repetiteurs/'+productId)
            .then(res=>{
                console.log(res.data);
                this.product= res.data;
            }).catch(function (error){
                if (error.response) {
                    if (error.response.status==404) {
                        alert(error.response.data.message)
                    }
                }
            });
            axios.get('http://127.0.0.1:8000/api/repetiteurmcs')
            .then(res=>{
                console.log(res.data);
                this.products= res.data.data.filter(repetiteur => repetiteur.repetiteur.id === productId);
                console.log( this.products);
            }).catch(function (error){
                if (error.response) {
                    if (error.response.status==404) {
                        alert(error.response.data.message)
                    }
                }
            });
     
    },
    setRating(rating) {
      this.userRating = rating;
      console.log( this.userRating);
      console.log( this.proId);
    },
  }
};

</script>
<style>
.star-rating {
  margin-top: 5px;
}

.star {
  cursor: pointer;
  margin-right: 5px;
}
.fa{
  font-size: 1.5em !important;
}
</style>