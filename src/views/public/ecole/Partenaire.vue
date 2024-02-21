
  <!-- <main >
    <h1>Page a propos</h1>
  </main> -->
  <template>
    <body style="overflow: hidden" class="bg-neutral-60">
        <br>
        <br>
        <br>
        <br>
        <h2 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center pt-5"> LES ECOLES PARTENAIRES</h2>
          <div class="2xl:container 2xl:mx-auto lg:py-1 lg:px-20 md:py-12 md:px-6 py-1 px-4">
  
              <div class="flex lg:flex-row flex-col justify-between gap-8 pt-2 bg-gray-200">
                
                
                <div class="w-full lg:w-12/12 lg:pt-4">
                  
                    <CardComponent  v-for="(card, index) in ecole" :key="index"
                    :imageSrc="card.ecoleUrl"
                    :name="card.name"
                    :description="card.description"
                    :test="'Nos Résultats'"
                    :resultat="card.resultat"
                    
                    
                    />
                </div>
            </div>

            
          </div>
      </body>
  </template>
  
  <script>
  import axios from 'axios'
  import CardComponent from '../../../components/card/CardItem.vue';
  export default {
    components: {
    CardComponent,
  },
  data(){
        return{
            ecole: [],
           
        }
    },
  
  mounted(){
    
      this.getEcole();
      },

  methods:{
    getEcole(){
      axios.get('http://127.0.0.1:8000/api/ecoles',)
   .then(response => {
     this.ecole = response.data.data;
    // console.log( this.ecole);
     
   })
   .catch(error => {
        console.error('Erreur lors de la récupération des données depuis l\'API', error);
      });
    },
  }
  
  }
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

