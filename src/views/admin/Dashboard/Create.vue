
<template>
    <div class="">
        <br>
        <div class="container w-full mx-auto my-auto " >
            <h3 class="text-3xl font-medium text-gray-900 dark:text-white text-center mt-4 mb-8 font-serif">Formulaire de demande de répétiteur pour un enfant</h3>
            <div class="w-full max px-4 bg-neutral border border-gray-200 rounded-lg shadow sm:p-12 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                
                <form class="space-y-6" action="#" @submit.prevent="ajout" enctype="multipart/form-data">
                    <ul class="bg-green-300 border-t border-border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="Object.keys(this.errorList).length > 0">
                        <li class="mb-0 ms-3" >
                        {{ this.errorList }}
                    
                       
                        </li>
                    </ul>
                  
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Enfants</label>
                        <select id="countries" v-model="enfants_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <!-- <option selected  >Selectionner votre enfants</option> -->
            
                        <option v-for="(enfant,index) in this.enfants" :key="index" :value="enfant.id" >{{ enfant.fname }} {{ enfant.lname }}</option>
                      
                        </select>
                        </div>
                        <div class="flex-1">
                            <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Classe</label>
                        <select id="countries" v-model="classe_id"   @change="getPrix" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <!-- <option selected  >Choisir votre classe</option> @change="getPrix"  -->
    
                        <option v-for="(classe,index) in this.classes" :key="index" :value="classe.id" >{{ classe.name }}</option>
    
                        </select>
                        </div>
    
                    </div>
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Matière</label>
                        <select id="countries" v-model="matiere_id" @change="getPrix"  class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        <!-- <option selected  >Choisir vos matières</option>  @change="getClasse"          -->
            
                        <option v-for="(matier,index) in this.matiere" :key="index" :value="matier.id" >{{ matier.name }}</option>
                      
                        </select>
                        </div>
                       
                        <!-- <div class="flex-1">
                            <label for="phone" class="block  mb-2 px-3 text-2xl font-medium text-gray-900 dark:text-white">Prix en FCFA</label>
                             <input type="text" readonly  v-model="prix" name="phone"  id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=""> 
                             <span class="block w-1/3 text-3xl font-medium text-gray-900 dark:text-white" >FCFA</span>
                        </div> -->
                        <div class="flex-1 ">
                            <label for="phone" class="block mb-2 px-3 text-2xl font-medium text-gray-900 dark:text-white">Rémumération</label>
                            <div class="flex items-center space-x-2">
                                <input type="text" readonly v-model="prix" @change="getRepetiteur" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white text-right" placeholder="">
                            <!-- <span class="text-2xl font-medium text-gray-900 dark:text-white">FCFA</span> -->
                            </div>
                            
                        </div>
                        
    
                    </div>
                    <div class="flex space-x-4">
    
                        <div class="flex-1">
                            <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Répétiteur</label>
                            <select  id="countries" v-model="repetiteur_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected  >Choisir un répétiteur</option>
                                
                            <option v-for="(repetiteur,index) in this.repetiteurs" :key="index" :value="repetiteur.repetiteur.id" >{{ repetiteur.repetiteur.user.name }} </option>
    
                            </select>
                        </div>
                        <div class="flex-1">
                             <label for="phone" class="block mb-2 px-3 text-2xl font-medium text-gray-900 dark:text-white">Informations Complementaires</label>
                            <input type="text"  v-model="adresse" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
                        </div>
                        
                    </div>
                    
                    
    
                   
                   
                    <div class="flex justify-end">
                        <button type="submit" @click="saveDemande" class=" text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
                    </div>
                   
                    
                </form>
            </div>
        </div>
        <br><br><br>
    
    </div>
   
</template>
<script>
 import axios from 'axios'
export default {
    name:'enfantsCreate',
    data(){
        return{
            repetiteurs:[],
            tarification:[],
            enfants:[],
            parents:[],
            errorList:'',
            user_id:'',
            parents_id:'',
            enfants_id:'',
            classe_id:'',
            tarification_id:'',
            classe:[],
            classes:[],
            repetit:[],
            matiere:[],
            prixe:[],
            matiere_id:'',
            repetiteur_id:'',
            adresse:'',
            prix:'',
            model:{

                 fname:'',
                    lname:'',
                    classe:'',
                    phone:'',
                    adresse:'',
                    matiere_id:'',
                    repetiteur_id:'',
                    parents_id:'',

            }
        }
    },
    mounted(){
        this.getUsers();
        this.getMatiere();
        this.getRepetiteurs();
      this.$nextTick(() => {
    this.getParents();
    this.getEnfants();
  });
      //  console.log('I am here')
      this.getTarification();
      this.getRepetiteur();
      this.getClasses();
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
        getParents(){
            const token = localStorage.getItem('token');
            
            axios.get('http://127.0.0.1:8000/api/parents').then(res=>{
                this.parents=res.data.data.filter(parent => parent.user.id === this.user_id)
                console.log(this.parents)
                this.parents_id= this.parents[0].id
                console.log(this.parents_id)
                console.log(res)
            });
            this.getEnfants();
        },
       
        getEnfants(){
            axios.get('http://127.0.0.1:8000/api/enfants').then(res=>{
                this.enfants=res.data.data.filter(result =>
                // result.status ==='Terminer' &&
                    result.parents.id === this.parents_id
                       
                    );
                console.log(this.enfants)
                console.log(res)
            });
        },
        getTarification(){
            const token = localStorage.getItem('token');
            axios.get('http://127.0.0.1:8000/api/tarifications').then(res=>{
                this.tarification=res.data.data
                console.log(this.tarification)
                console.log(res)
            });
        },
        getClasses(){
            const token = localStorage.getItem('token');
            axios.get('http://127.0.0.1:8000/api/classes').then(res=>{
                this.classes= res.data.data;
                console.log(this.classe)
                console.log(res)
            });
            this.getPrix();
        },
        getClasse(){
            const token = localStorage.getItem('token');
            axios.get('http://127.0.0.1:8000/api/tarifications').then(res=>{
                this.classe= res.data.data
                console.log(this.classe)
                console.log(res)
            });
            this.getPrix();
        },
        getMatiere(){
            const token = localStorage.getItem('token');
            axios.get('http://127.0.0.1:8000/api/matieres').then(res=>{
                this.matiere= res.data.data
                console.log(this.matiere)
                console.log(res)
            });
            this.getPrix();
        },
        getPrix() {
    const token = localStorage.getItem('token');
    axios.get('http://127.0.0.1:8000/api/tarifications').then(res => {
        this.prixe = res.data.data.filter(result =>
            result.matiere.id === this.matiere_id &&
            result.classe.id === this.classe_id
           
        );

        if (this.matiere_id && this.classe_id && this.prixe.length > 0) {
            this.prix = this.prixe[0].prix +' ' + 'FCFA';
            this.tarification_id = this.prixe[0].id ;
            this.getRepetiteur();
        } else {
            this.prix = '0 FCFA';
            this.tarification_id = null; // Réinitialiser l'id de tarification si la condition n'est pas remplie
            this.getRepetiteur();
        }

        console.log(this.prixe);
        console.log(this.prix);
        console.log(res);
    });

    this.getRepetiteur();
},

getRepetiteurs(){
    axios.get('http://127.0.0.1:8000/api/repetiteurs').then(res=>{
                this.repetit = res.data.data.filter(result =>
                   result.status === 'Terminer'

                    );
                    console.log(res.data.data);
                   // console.log(this.model.matiere_id);
                console.log(this.repetit)
                console.log(res)
            });

},
        // getPrix(){
        //     const token = localStorage.getItem('token');
        //     axios.get('http://127.0.0.1:8000/api/tarifications').then(res=>{
        //         this.prixe= res.data.data.filter(result => 
        //            result.matiere.id === this.matiere_id &&
        //            result.classe.id === this.classe_id,
                     
        //             );
        //             if(this.matiere_id ||this.classe_id){
        //                 this.prix=this.prixe[0].prix 
        //             this.tarification_id=this.prixe[0].id 
        //             }else{
        //                 this.prix='0'
        //             }
                   

        //         console.log(this.prixe)
        //         console.log(this.prix)
        //         console.log(res)
        //     });
        //     this.getRepetiteur();
        // },
        getRepetiteur(){
            console.log(this.matiere_id);
            console.log(this.classe_id);
            
            axios.get('http://127.0.0.1:8000/api/repetiteurmcs').then(res=>{
                this.repetiteurs = res.data.data.filter(result =>
                result.matiere.id === this.matiere_id &&
                   result.classe.id === this.classe_id &&
                   result.repetiteur.status === 'Terminer'

                    );
                    console.log(res.data.data);
                   // console.log(this.model.matiere_id);
                console.log(this.repetiteurs)
                console.log(res)
            });
        },
        saveDemande(){
            var mythis= this;


            const dataToSend = {


// adresse:this.adresse,
tarification_id:this.tarification_id,
repetiteur_id:this.repetiteur_id,
enfants_id:this.enfants_id,

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
            axios.post( 'http://127.0.0.1:8000/api/demandes',dataToSend,config ).then(res =>{

                console.log(res.data)
               // alert(res.data.message);
               if (res.status==201) {
                localStorage.setItem('demande_id',res.data.data.id)
                    mythis.errorList="Demande effectuée avec succès"
                    alert('Demande effectuée avec succès')
                    this.$router.push('/admin/demande')
                }
                else{
                    mythis.errorList="Une erreur s'est produite"
                   

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
}

</script>