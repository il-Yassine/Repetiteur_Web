
  <!-- <main >
    <h1>Page a propos</h1>
  </main> -->
  <template>
    <div class="">
      <div style="overflow: hidden" class="bg-neutral-30" >
        <br>
        <br>
        <br>
        <br>
        <h2 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center pt-5"> LES LIBRAIRIES PARTENAIRES</h2>
          <div class="2xl:container 2xl:mx-auto lg:py-1 lg:px-20 md:py-12 md:px-6 py-1 px-4 ">
  
              <div class="flex lg:flex-row flex-col justify-between gap-4 pt-2 bg-white">
                
                
                <div class="w-full lg:w-12/12 lg:pt-4 bg-gray-200">
                    <!-- <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                             <img class="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" /> 
                             <img class="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" /> -->
                            
                     <!--   </div>
                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                          <h3 class=" font-normal text-lg leading-2 text-gray-600 py-3">Nos Résultats</h3>
                          <p class="font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have</p>
                        </div>
                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <h3 class=" font-normal text-lg leading-2 text-gray-600 py-3">Nos Résultats</h3>
                            <p class="font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have</p>
                          </div>

                    </div> -->
                    <CardComponent  v-for="(card, index) in librairie" :key="index"
                    :imageSrc="card.librairieUrl"
                    :name="card.name"
                    
                    :resultat="card.description"
                    
                    
                    />
                </div>
            </div>

            
              <!-- <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Notre histoire</h1>
                    <p class="font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div class="w-full lg:w-8/12 lg:pt-8">
                    <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                            <img class="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                            <p class="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                        </div>
                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                            <img class="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                            <p class="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                        </div>
                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                            <img class="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                            <p class="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                        </div>
                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                            <img class="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                            <p class="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div> -->
          </div>
        </div>
    </div>
    
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
            librairie: [],
           
        }
    },
  
  mounted(){
    
      this.getLibrairie();
      },

  methods:{
    getLibrairie(){
      axios.get('https://apirepetiteur.sevenservicesplus.com/api/librairies',)
   .then(response => {
     this.librairie = response.data.data;
     //console.log( this.librairie);
     
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

