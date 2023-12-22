<template>
    <div>
        <div class="flex">
            
            <div class="container mx-auto mt-12 px-5 ">
               

            
                   
                    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h3 class="text-xl font-bold px-3">Liste des Répétiteurs</h3><br>
     <div class="flex justify-end">
        <button  type="button" class="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <!-- <svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
        </svg> -->
        <RouterLink to="/admin/repetiteur/create">Postuler pour être répétiteur</RouterLink>
        </button>
    </div> 
    <table class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nom
                </th>
                <th scope="col" class="px-6 py-3">
                    Prénom
                </th>
                <th scope="col" class="px-6 py-3">
                    Profil
                </th>
                <th scope="col" class="px-6 py-3">
                    Sexe
                </th>
                <th scope="col" class="px-6 py-3">
                    Grade
                </th>
                <th scope="col" class="px-6 py-3">
                    Ecole de provenance
                </th>
            </tr>
        </thead>
        <tbody v-if="this.repetiteurs.length > 0">
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="(repetiteur,index) in this.repetiteurs" :key="index">
                <td class="px-6 py-4">
                    {{ repetiteur.fname }}
                </td>
                <td class="px-6 py-4">
                    {{ repetiteur.lname }}
                </td>
                <td class="px-6 py-4">
                    <img :src="repetiteur.profil_imageUrl" width="60" alt=" image" srcset="">
                   
                </td>
                <td class="px-6 py-4">
                    {{ repetiteur.sexe }}
                </td>
                <td class="px-6 py-4">
                    {{ repetiteur.grade }}
                </td>
                <td class="px-6 py-4">
                    {{ repetiteur.ecole }}
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
   
</div>

<br>
<br>
<br>
<br>             
<br>             
<br>             

            </div>
            

            <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <div class="container mx-auto text-center">
                  <p class="text-gray-600">&copy; 2023 Digitalis Sarl. Tous droits réservés.
                   
                  </p>
                </div>
              </footer>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name:'repetiteurs',
    data(){
        return{
            repetiteurs:[]
        }
    },
    mounted(){
      //  console.log('I am here')
      this.getRepetiteur();
    },
    methods :{
        getRepetiteur(){
            axios.get('http://127.0.0.1:8000/api/repetiteurs').then(res=>{
                this.repetiteurs=res.data.data
                console.log(this.repetiteurs)
                console.log(res)
            });
        }
    }
  }
</script>
<style>

</style>