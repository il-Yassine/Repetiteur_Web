<template>
   <div class="custo-background h-screen">
    <div class="container mx-auto mt-12 px-5 ">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-50">
            <h3 class=" mx-3 my-3 text-3xl font-medium text-gray-900 dark:text-white font-serif">Liste des épreuves d'examens blancs</h3>
            <div class="flex items-center flex justify-end pb-4 mx-3">
                <div class="">
                  <div class="flex items-center space-x-4 ml-auto">
                    <label
                      for="countries"
                      class="block px-2 mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                      >Filtre sur:</label
                    >
                    <div class="flex items-center">
                      <select
                        id="countries"
                        v-model="classes"
                        @change="search"
                        class="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      >
                        <option value="">Classes</option>
                        <option
                          v-for="(enfant, index) in this.classe"
                          :key="index"
                          :value="enfant.name"
                        >
                          {{ enfant.name }}
                        </option>
                      </select>
                    </div>
                    <div class="flex items-center">
                      <label
                        for="countries"
                        class="block px-2 mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                      ></label>
                      <select
                        id="countries"
                        v-model="matieres"
                        @change="searchRepet"
                        class="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      >
                        <option value="">Matières</option>
                        <option
                          v-for="(repetite, index) in this.matiere"
                          :key="index"
                          :value="repetite.name"
                        >
                          {{ repetite.name }}
                        </option>
                      </select>
                    </div>
                  </div>
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
                <tbody v-if="this.epreuves.length > 0">
                    <tr class="bg-white text-lg border-b dark:bg-gray-900 dark:border-gray-700" v-for="(apprenant,index) in this.epreuves   " :key="index">
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
   </div>

  </template>
  <script>
    import axios from 'axios'
  export default {
    name: "examens",
    data() {
      return {
          
          
          
          epreuves:[],
          matiere:[],
          classe:[],
          epreuv:[],
          matieres:'',
          classes:'',
         
      };
    },
    // created() {
    //   this.form.local = this.$i18n.locale;
    // },
    mounted(){
    
    
    this.getEpreuve();

  },
    methods: {
      
     
      getEpreuve(){
          axios.get('http://127.0.0.1:8000/api/epreuves').then(res=>{
              this.epreuv=res.data.data.filter(repItem => repItem.type === 'Examens')
             
              //console.log(this.classe)
              //console.log(res)
           this.epreuves=this.epreuv

          // console.log(this.epreuves)
          });

          axios.get('http://127.0.0.1:8000/api/matieres').then(res=>{
              this.matiere=res.data.data
              //console.log(this.matiere)
             
              //console.log(res)
          
              
          });

          axios.get('http://127.0.0.1:8000/api/classes').then(res=>{
              this.classe=res.data.data
             
              //console.log(this.classe)
              //console.log(res)
          
              
          });
          
      },
      search() {

      //console.log(this.epreuv);
     // console.log("Recherche effectuée avec :", this.classes);
      this.epreuves = this.epreuv.filter(
        (result) =>
          result &&
          result.classe &&
          result.classe.name &&
          result.classe.name.includes(this.classes)
      );
      //console.log(this.epreuves);
    },
    searchRepet() {
     // console.log(this.epreuv);
      //console.log("Recherche effectuée avec :", this.matieres);
      this.epreuves = this.epreuv.filter(
        (result) =>
          result &&
          result.matiere &&
          result.matiere.name &&
          result.matiere.name.includes(this.matieres)
      );
      //console.log(this.epreuves);
    },
    
    
    },
  };
  </script>
  <style>
  .custo-background {
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
