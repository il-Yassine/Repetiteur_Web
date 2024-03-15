
<template>
  <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    <p class="text-gray-900 ml-3">Chargement en cours...</p>
  </div>
    <div 
    
    v-for="(repetiteur, index) in repetiteurs"
            :key="index"
    class="container w-full mx-auto my-auto" enctype="multipart/form-data">
        <h3 class="text-3xl font-medium text-gray-900 dark:text-white text-center mt-4 mb-8 font-serif text-start">{{ repetiteur.user.name }}</h3>
        <div class="w-full max px-4 bg-white border border-gray-200 rounded-lg shadow sm:p-12 md:p-12 dark:bg-gray-800 dark:border-gray-700">
           <div>
            
            <form 
            
            class="space-y-6" action="#" method="post"  @submit.prevent="updateRepetiteur(repetiteur.id)" enctype="multipart/form-data">
                <ul class="bg-blue-100 border-t border-border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" >
                    {{ this.errorList }}
                
                   
                    </li>
                </ul>
             
 
        
        <div class="grid gap-6 mb-6 md:grid-cols-4">
    
            <!-- <div class="flex-1">
                <label for="classe" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Classe</label>
                <input type="text" name="classe" v-model="model.classe" id="classe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="La où les classe(s) que vous enseignez" required>
            </div> -->
            <div class="flex-1">
              <label for="phone" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Téléphone</label>
              <input type="number"  v-model="repetiteur.phone" name="phone" id="phone" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre numéro de téléphone" required>
          </div>
          <div class="flex-1">
            <label for="adresse" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Commune</label>
            <input type="text" name="adresse"  v-model="repetiteur.commune.name" id="adresse" class="bg-green-100  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre adresse" required>
        </div>
        <div class="flex-1">
          <label for="adresse" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Détails Adresse</label>
          <input type="text" name="adresse"  v-model="repetiteur.adresse" id="adresse" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre adresse" required>
      </div>
      <!-- <div class="flex-1">
        <label for="adresse" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Matricule</label>
        <input type="text" name="adresse"  v-model="repetiteur.matricule" id="adresse" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre adresse" required>
    </div> -->
     <div class="flex-1">
                  <label for="ecole" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Ecole</label>
                  <input type="text" name="ecole"  v-model="repetiteur.ecole" id="ecole" class="bg-green-100  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer l'ecole ou vous enseignez" required>
              </div>
  
             </div>
  
     
              <!-- <div>
                  <label for="grade" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grade</label>
                
                  <select id="countries" v-model="model.grade" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                     <option selected >Choisir votre sexe</option> -->
                    <!-- <option value="Permanent" required>Permanent</option>
                    <option value="Vacataire">Vacataire</option>
                    <option value="Autres">Autres</option>
                    </select> -->
              <!-- </div> --> 
            <!-- <div class="flex space-x-4"> -->
              <!-- <div class="flex-1">
                <label for="countries" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Matières</label>
                <select id="countries" v-model="model.matiere_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                <option selected  >Choisir vos matières</option>
    
                <option v-for="(matier,index) in this.matiere" :key="index" :value="matier.id" >{{ matier.name }}</option>
              
                </select>
               </div> -->
                
              
            <!-- </div> -->
           

               <div class="grid gap-6 mb-6 md:grid-cols-3">
                <div class="flex-1">
                  <label for="grade" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Grade</label>
                  <input type="text" name="grade"  v-model="repetiteur.grade" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre grade" required>
              </div>
             
            <div class="flex-1">
              <label for="dateLieuNaissance" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Date et lieu de naissance</label>
              <input type="text" name="dateLieuNaissance"  v-model="repetiteur.dateLieuNaissance" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-green-1000 dark:placeholder-gray-400 dark:text-white" placeholder=" EX: 20/10/1990/Cotonou" required>
          </div>
          <div class="flex-1">
            <label for="situationMatrimoniale" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Situation matrimoniale</label>
            <input type="text" name="situationMatrimoniale"  v-model="repetiteur.situationMatrimoniale" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-green-1000 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre situation matrimoniale" required>
        </div>
               </div>
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                  <div class="flex-1">
                    <label for="ecole" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Niveau d'etude</label>
                    <input type="text" name="ecole"  v-model="repetiteur.niveauEtude" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-green-1000 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre niveau d'etude" required>
                </div>
               
              <div class="flex-1">
                <label for="countries" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Sexe</label>
                <select id="countries" v-model="repetiteur.sexe" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                 <option selected >Choisir votre sexe</option>
                <option value="Homme" required>Homme</option>
                <option value="Femme">Femme</option>
                </select>
    
               </div > 
               <div class="flex-1">
                <label for="experience" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Expérience</label>
                <input type="text"  v-model="repetiteur.experience" name="experience" id="experience" placeholder="Entrer votre expérience professionnel" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div class="flex-1">
                        <label for="description" class="block text-start text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text" name="description"  v-model="repetiteur.description" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=" Un description de sois pour attirer les parents" required>
                    </div>


                  <div class="flex-1">
                    <label for="heureDisponibilite" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Heure de Disponibilité</label>
                    <input type="text" name="heureDisponibilite"  v-model="repetiteur.heureDisponibilite" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=" EX: Mercredi 14h à 18 et Samedi 14h à 18h" required>
                </div>
                   </div>
                <div class="grid gap-6 mb-6 md:grid-cols-4 text-start">
                  <div class="flex-1">
                    <label class="block text-start mb-2 text-2xl font-medium text-gray-900 " for="large_size">Photo de profil</label>
                    <a :href="repetiteur.profil_imageUrl" target="blank" class="text-xl text-start">Télécharger</a>
      
                  </div>
                
                  <div class="flex-1">
                    <label class="block text-start mb-2 text-2xl font-medium text-gray-900 " for="large_size"> Diplôme</label>
                    <a :href="repetiteur.diplome_imageUrl" target="blank" class="text-xl text-start">Télécharger</a>
      
                  </div>

                     <div class="flex-1">
                    <label class="block text-start mb-2 text-2xl font-medium text-gray-900 " for="large_size">Casier judiciaire</label>
                    <a :href="repetiteur.profil_imageUrl" target="blank" class="text-xl text-start">Télécharger</a>
                  </div>  
                  
                <div class="flex-1">
                <label class="block text-start mb-2 text-2xl font-medium text-gray-900 " for="large_size">L'attestation de résidence</label>
                <a :href="repetiteur.attestationResidence" target="blank" class="text-xl text-start">Télécharger</a>
      
                </div>
                  
                </div>
               
                <div class="grid gap-6 mb-6 md:grid-cols-2 text-start">
                 
                  <div class="flex-1">
                    <label class="block text-start mb-2  text-2xl font-medium text-gray-900 " for="large_size">Pièces d'identité</label>
                    <a :href="repetiteur.identite" target="blank" class="text-xl text-start">Télécharger</a>
      
                  </div>
                 
                </div>
            
             
              <div class="flex justify-end">
                  <button type="button" @click="openModal(repetiteur.phone, repetiteur.dateLieuNaissance,repetiteur.description, repetiteur.sexe, repetiteur.ecole, repetiteur.experience ,repetiteur.adresse, repetiteur.commune.id, repetiteur.heureDisponibilite, repetiteur.grade, repetiteur.niveauEtude, repetiteur.situationMatrimoniale, repetiteur.identite)" class=" text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mettre à jour</button>
              </div>
             
    
                
            </form>
           </div>
        </div>
    </div>
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-2 rounded-md w-[1300px]">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <div class="relative p-1 w-full">
          <!-- Modal content -->
          
              <!-- Modal header -->
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-2xl font-semibold text-gray-900 ">
                  Modifier votre profil
                  </h3>
                  <button @click="closeModal"  type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                     
                  </button>
              </div>
              <!-- Modal body -->
              <div class="p-4 md:p-5">
                  <form @submit.prevent="updateRepetiteur" class="space-y-4" action="#">

                    <div class="grid gap-6 mb-6 md:grid-cols-3">
                      <div class="flex-1">
                        <label class="block mb-2 text-2xl font-medium text-gray-900 " for="large_size">Photo de profil</label>
                        <input ref="profil_imageUrl" @change="onFileChange"  class="block w-full text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file">
          
                      </div>
                    
                      <div class="flex-1">
                        <label class="block mb-2 text-2xl font-medium text-gray-900 " for="large_size">Importer votre diplome</label>
                        <input type="file"  @change="handleFileUpload" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size">
          
                      </div>

                      <div class="flex-1">
                        <label class="block mb-2 text-2xl font-medium text-gray-900 " for="large_size">Importer votre casier judiciaire</label>
                        <input  type="file"  @change="casierJudicaires" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size">
                      </div>  
                        
                      
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                     
                      
                    <div class="flex-1">
                    <label class="block mb-2 text-2xl font-medium text-gray-900 " for="large_size">Importer l'attestation de résidence</label>
                    <input type="file"  @change="attestationResidences" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size">
          
                    </div>
                    <div class="flex-1">
                      <label class="block mb-2  text-2xl font-medium text-gray-900 " for="large_size">Importer votre pièces d'identité</label>
                      <input type="file"  @change="identites" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" >
        
                    </div>
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-4">
    
                      <!-- <div class="flex-1">
                          <label for="classe" class="block mb-2 text-lg font-medium text-gray-900 ">Classe</label>
                          <input type="text" name="classe" v-model="model.classe" id="classe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="La où les classe(s) que vous enseignez" required>
                      </div> -->
                      <div class="flex-1">
                        <label for="phone" class="block mb-2 text-2xl font-medium text-gray-900 ">Téléphone</label>
                        <input type="number"  v-model="phone" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="">
                    </div>
                    <div class="flex-1">
                      <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 ">Commune</label>
                      <select id="countries" v-model="commune" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                       <option value="" >Selectionner votre Commune</option>
                       <option v-for="fruit in communes" :key="fruit.id" :value="fruit.id">{{ fruit.name }}</option>
                      </select>
              
                     </div > 
                  <div class="flex-1">
                    <label for="adresse" class="block mb-2 text-2xl font-medium text-gray-900 ">Détails Adresse</label>
                    <input type="text" name="adresse"  v-model="adresse" id="adresse" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="" >
                </div>
                <div class="flex-1">
                  <label for="ecole" class="block mb-2 text-2xl font-medium text-gray-900 ">Ecole</label>
                  <input type="text" name="ecole"  v-model="ecole" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="">
              </div>
               
            
                       </div>
            
               
                        <!-- <div>
                            <label for="grade" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grade</label>
                          
                            <select id="countries" v-model="model.grade" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                               <option selected >Choisir votre sexe</option> -->
                              <!-- <option value="Permanent" required>Permanent</option>
                              <option value="Vacataire">Vacataire</option>
                              <option value="Autres">Autres</option>
                              </select> -->
                        <!-- </div> --> 
                      <!-- <div class="flex space-x-4"> -->
                        <!-- <div class="flex-1">
                          <label for="countries" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Matières</label>
                          <select id="countries" v-model="model.matiere_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                          <option selected  >Choisir vos matières</option>
              
                          <option v-for="(matier,index) in this.matiere" :key="index" :value="matier.id" >{{ matier.name }}</option>
                        
                          </select>
                         </div> -->
                          
                        
                      <!-- </div> -->
                     
                         <div class="grid gap-6 mb-6 md:grid-cols-4">
                          <div class="flex-1">
                            <label for="grade" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Grade</label>
                            <input type="text" name="grade"  v-model="grade" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="">
                        </div>
                        <div class="flex-1">
                          <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Sexe</label>
                          <select id="countries" v-model="sexe" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                           <option selected >Choisir votre sexe</option>
                          <option value="Homme" required>Homme</option>
                          <option value="Femme">Femme</option>
                          </select>
              
                         </div >
                         <div class="flex-1">
                          <label for="heureDisponibilite" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Heure de Disponibilité</label>
                          <input type="text" name="heureDisponibilite"  v-model="heureDisponibilite" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="">
                      </div> 
                       
                      <div class="flex-1">
                        <label for="dateLieuNaissance" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Date et lieu de naissance</label>
                        <input type="text" name="dateLieuNaissance"  v-model="dateLieuNaissance" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" >
                    </div>
                   
                         </div>
                          <div class="grid gap-6 mb-6 md:grid-cols-4">
                            <div class="flex-1">
                              <label for="ecole" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Niveau d'etude</label>
                              <input type="text" name="ecole"  v-model="niveauEtude" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" >
                          </div>
                         
                       
                         <div class="flex-1">
                          <label for="experience" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Expérience</label>
                          <input type="text"  v-model="experience" name="experience" id="experience" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                      </div>
                      <div class="flex-1">
                        <label for="description" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text" name="description"  v-model="description" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" >
                    </div>
                    <div class="flex-1">
                      <label for="situationMatrimoniale" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Situation matrimoniale</label>
                      <input type="text" name="situationMatrimoniale"  v-model="situationMatrimoniale" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" >
                  </div>
                          </div>

                    <div class="flex justify-end">
                      <button type="submit"  class=" text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
                    </div>

                  </form>
              </div>

      </div>
      </div>
    </div>
    <br><br><br>

    </template>
    <script>
     import axios from 'axios'
    export default {
        name:'profile',
        data(){
            return{
              loading: true,
                matiere:[],
                communes:[],
                repetiteurs:[],
                errorList:'',
                repetiteurs_id:'',
                selectedFile: null,
                isModalOpen: false,
                diplome_imageUrl:'',
                profil_imageUrl:'',
                identite:'',
                casierJudicaire:'',
                attestationResidence:'',
                
                  phone:'',
                adresse:'',
                commune:'',
                description:'',
                dateLieuNaissance:'',
                situationMatrimoniale:'',
                niveauEtude:'',
                heureDisponibilite:'',
                sexe:'',
                grade:'',
                ecole:'',
                experience:'',
                
                user_id:'',

            }
        },
        mounted(){
          //  console.log('I am here')
          this.getMatiere();
          this.getCommune();
          this.getUsers();
          this.$nextTick(() => {
            this.getrepetiteur()});
        
        // this.onFileChange();
        },
        methods:{ 
          openModal(enfantId, dateLieuNaissance,
          description ,sexe,ecole,experience,
           adresse, commune, heure, grade, niveau, situation, identite) {
      this.isModalOpen = true;
      this.phone=enfantId
      this.dateLieuNaissance=dateLieuNaissance
      this.description=description
      this.sexe=sexe
      this.ecole=ecole
      this.experience=experience
      this.adresse=adresse
      this.commune=commune
      this.heureDisponibilite=heure
      this.grade=grade
      this.niveauEtude=niveau
      this.situationMatrimoniale=situation
      this.identite=identite
     
    },
    closeModal() {
      this.isModalOpen = false;
      this.phone='',
      this.dateLieuNaissance='',
      this.description='',
      this.sexe='',
      this.ecole='',
      this.experience='',
      this.adresse='',
      this.commune='',
      this.heureDisponibilite='',
      this.grade='',
      this.niveauEtude='',
      this.situationMatrimoniale='',
      this.identite=''
     
    },
            onFileChange(e){
                 const file = e.target.files[0];
           this.image = file;
    
          // this.sendProfil();
            },
            handleFileUpload(e){
                 const file = e.target.files[0];
           this.pdf = file;
          //  this.sendpdf();
            },
            identites(e){
                 const file = e.target.files[0];
           this.pdfidentite = file;
        // this.sendpdfIdentite();
        this.sendProfil();
           this.sendpdfIdentite();
            },
            casierJudicaires(e){
                 const file = e.target.files[0];
           this.pdfcasierJudicaires = file;
          // this.sendpdfcasierJudicaires();
            },
            attestationResidences(e){
                 const file = e.target.files[0];
           this.pdfattestationResidence = file;
           this.sendpdf();
           this.sendpdfcasierJudicaires();
           this.sendpdfattestationResidence();
           
           
            },
    
            
            sendProfil() {
          const formData = new FormData();
    
          formData.append("file", this.image);
    
          axios
            .post("https://apirepetiteur.sevenservicesplus.com/api/medias", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
                console.log(response);
              if (response.status == 201) {
               // console.log(response);
                this.profil_imageUrl = response.data.data.media_url;
               // console.log(this.profil_imageUrl);
               // this.sendpdf();
                
              }
            })
            .catch((error) => {
              console.error(error);
              this.errorList=" une erreur de connexion internet s'est produite lors de l'enregistrement de l'image de profil";
            });
        },
        sendpdf() {
          const formData = new FormData();
    
          formData.append("file", this.pdf);
          console.log(this.pdf);
    
          axios
            .post("https://apirepetiteur.sevenservicesplus.com/api/medias", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
                console.log(response);
              if (response.status == 201) {
               // console.log(response);
                this.diplome_imageUrl = response.data.data.media_url;
               // console.log(this.profil_imageUrl);
               // this.sendpdfIdentite();
                
              }
            })
            .catch((error) => {
              console.error(error);
              this.errorList=" une erreur de connexion internet s'est produite lors de l'enregistrement du pdf du diplôme";
            });
        },
        sendpdfIdentite() {
          const formData = new FormData();
    
          formData.append("file", this.pdfidentite);
          console.log(this.pdfidentite);
    
          axios
            .post("https://apirepetiteur.sevenservicesplus.com/api/medias", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
               // console.log(response);
              if (response.status == 201) {
                console.log(response);
                this.identite = response.data.data.media_url;
                //console.log(this.identite);
               // this.sendpdfcasierJudicaires();
                
              }
            })
            .catch((error) => {
              console.error(error);
            });
        },
        sendpdfcasierJudicaires() {
          const formData = new FormData();
    
          formData.append("file", this.pdfcasierJudicaires);
          console.log(this.pdfcasierJudicaires);
    
          axios
            .post("https://apirepetiteur.sevenservicesplus.com/api/medias", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
                console.log(response);
              if (response.status == 201) {
               // console.log(response);
                this.casierJudicaire = response.data.data.media_url;
                //console.log(this.casierJudicaire);
               // this.sendpdfattestationResidence();

              }
            })
            .catch((error) => {
              console.error(error);
            });
        },
        sendpdfattestationResidence() {
          const formData = new FormData();
    
          formData.append("file", this.pdfattestationResidence);
          console.log(this.pdfattestationResidence);
    
          axios
            .post("https://apirepetiteur.sevenservicesplus.com/api/medias", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
                console.log(response);
              if (response.status == 201) {
                //console.log(response);
                this.attestationResidence = response.data.data.media_url;
                //console.log(this.attestationResidence);
               // this.saveStudent();
                
              }
            })
            .catch((error) => {
              console.error(error);
            });
        },
        getCommune(){
        axios.get('https://apirepetiteur.sevenservicesplus.com/api/communes').then(res=>{
                this.communes=res.data.data
                console.log(this.commune)
               
            });

      },
            getMatiere(){
                axios.get('https://apirepetiteur.sevenservicesplus.com/api/matieres').then(res=>{
                    this.matiere=res.data.data
                   // console.log(this.matiere)
                   // console.log(res)
                });
            },
            getUsers (){
            
                const token = localStorage.getItem('token');
               
                console.log(token);
                const config={
                    headers: {
            'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
          }
                };
                console.log(config);
         axios.get('https://apirepetiteur.sevenservicesplus.com/api/profile',config)
        .then(response => {
          this.user_id = response.data.id;
          localStorage.setItem('user_id',response.data.id)
          //userIds=this.userId;
          //console.log(response.data.id);
          //console.log(this.user_id);
        })
        .catch(error => {
          if (error.response === 401) {
            this.error = "Erreur d'authentification : Votre session a expiré. Veuillez vous reconnecter.";
            // Vous pouvez également rediriger l'utilisateur vers la page de connexion ici
          } else {
            this.error = "Une erreur s'est produite. Veuillez réessayer plus tard.";
          }
        });
       

    },
           async getrepetiteur(){
            setTimeout(() => {
        this.loading = false; // Set loading to false when data is fetched
      }, 5000);
               
            const token = localStorage.getItem('token');
                const config = {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      };

     // console.log(config);

      // Requête pour récupérer le profil
      const profileResponse  = await axios.get('https://apirepetiteur.sevenservicesplus.com/api/profile', config);
        console.log(profileResponse);
      // Stocker les données du profil dans le composant ou Vuex
      this.role_id = profileResponse.data.role_id;
      this.user_id = profileResponse.data.id;
      //console.log(this.role_id);
      //console.log(this.user_id);

    axios.get('https://apirepetiteur.sevenservicesplus.com/api/repetiteurs').then(res=>{
                this.repetiteurs = res.data.data.filter(repetiteur => repetiteur.user.id === this.user_id)
                  
                //console.log(this.repetiteurs)
                this.repetiteurs_id= this.repetiteurs[0].id
                //console.log(this.repetiteurs_id);

            });
           
          
        },

    
            updateRepetiteur(){
                var mythis= this;
                const token = localStorage.getItem('token');
                const user_id= this.user_id
                console.log(user_id);
                console.log(this.repetiteurs_id);
                const dataToSend = {
    
                    phone:this.phone,
                    adresse:this.adresse,
                    // classe:this.model.classe,
                    diplome_imageUrl:this.diplome_imageUrl,
                    identite:this.identite,
                    casierJudiciaire:this.casierJudicaire,
                    attestationResidence:this.attestationResidence,
                    profil_imageUrl:this.profil_imageUrl,
                    sexe:this.sexe,
                    grade:this.grade,
                    ecole:this.ecole,
                    heureDisponibilite:this.heureDisponibilite,
                    description:this.description,
                    dateLieuNaissance:this.dateLieuNaissance,
                    situationMatrimoniale:this.situationMatrimoniale,
                    niveauEtude:this.niveauEtude,
                    experience:this.experience,
                    // matiere_id:this.model.matiere_id,
                    user_id:user_id,
                    };
    const config={
                    headers: {
            'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
          }
                };
    console.log(dataToSend);
    console.log(this.repetiteurs_id);
                axios.put('https://apirepetiteur.sevenservicesplus.com/api/repetiteurs/'+ this.repetiteurs_id, dataToSend,config )
    .then(response => {
      // Gérer la réponse de la requête POST
      console.log(response)
      console.log(response.data)
    
                   
                    mythis.errorList=response.data.message
                 //   alert(response.data.message);
                    if (response.status==201) {
                        mythis.errorList="Compte répétiteurs mise à jour avec succès"
                        alert('Compte répétiteurs mise à jour avec succès')
                        this.$router.push('/admin/dashboard');
                    }
                    else{
                      mythis.errorList="une erreur s'est produite vueillez réessayer plus tard"
                    }

    })
    .catch(error => {
      if (error.response) {
                console.log(error.response.data.message); 
                this.errorList = "une erreur s'est produite veuiller réessayer ";
    
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.error('Une erreur inattendue s\'est produite:', error);
            }
    });
    
             
                
            },
            async sendRepas() {
          try {
            this.addform.user_id = this.user;
            const response = await axios.post("/api/repas", this.addform );
            if (response.status ==201) {
              console.log(response);
              this.$router.push("/");
            }
          } catch (error) {
            console.log(error.data);
          }
        },
    
    
    
              
                
            }
        }
    
    
    </script>
    
    
    