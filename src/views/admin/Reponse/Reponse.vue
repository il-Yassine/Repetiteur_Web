<template>
    <div class="">
      <br />
  
      <div class="container w-full mx-auto my-auto">
        <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          <p class="text-gray-900 ml-3">Chargement en cours...</p>
        </div>
        <h3
          class="text-3xl font-medium text-gray-900 dark:text-white text-center mt-2 mb-4 font-serif text-start"
        >
          Boites de réceptions
        </h3>
      </div>
      <br />
      <!-- <div
        class="w-full max px-4 bg-neutral border border-gray-200 rounded-lg shadow sm:p-6 md:p-6"
      >
        <table
          class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">N°</th>
              <th scope="col" class="px-6 py-3">Date</th>
              <th scope="col" class="px-6 py-3">Message parents</th>
  
              <th scope="col" class="px-6 py-3">Reponse Admin</th>
            </tr>
          </thead>
          <tbody v-if="this.messagees.length > 0">
            <tr
              class="bg-white border-b text-lg dark:bg-gray-900 dark:border-gray-700"
              v-for="(matier, index) in this.messagees"
              :key="index"
            >
              <td class="px-6 py-4">
                {{ index + 1 }}
              </td>
              <td class="px-6 py-4">
                {{ formatDate(matier.created_at) }}
              </td>
              <td class="px-6 py-4">
                {{ matier.message }}
              </td>
  
              <td class="px-6 py-4">
                {{ matier.reponse_admin }}
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="1">Loading...</td>
            </tr>
          </tbody>
        </table>
      </div> -->
      <div class="w-full max px-4 bg-neutral border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 overflow-y-auto">
        <table class="w-full table-auto text-sm text-left text-gray-500">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50">
                <tr>
                    
                    <th scope="col" class="px-6 py-3">Date</th>
                    <th scope="col" class="px-6 py-3">Message</th>
                    <th scope="col" class="px-6 py-3">Réponse</th>
                </tr>
            </thead>
            <tbody v-if="this.messagees.length > 0">
                <tr class="bg-white border-b text-lg " v-for="(matier, index) in this.messagees.slice(0, 8)" :key="index">
                    
                    <td class="px-6 py-4">{{ formatDate(matier.created_at) }}</td>
                    <td class="px-6 py-4 whitespace-normal overflow-hidden overflow-ellispsis max-w-xs">{{ matier.message }}</td>
                    <td class="px-6 py-4">{{ matier.reponse_admin }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="1">Loading...</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    name: "reponse",
    data() {
      return {
        loading:true,
        user_id: "",
        messagees: [],
      };
    },
    mounted() {
      this.getUsers();
  
      this.$nextTick(() => {
        this.getMessage();
      });
    },
    methods: {
      formatDate(dateTimeString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateTimeString);
  
        // Récupérer les composants de la date
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois commencent à 0, donc ajout de 1
        const day = String(date.getDate()).padStart(2, "0");
  
        // Construire la date dans le format YYYY-MM-DD
        const formattedDate = `${day}-${month}- ${year}`;
  
        return formattedDate;
      },
      getUsers() {
        const token = localStorage.getItem("token");
  
        //console.log(token);
        const config = {
          headers: {
            Authorization: "Bearer " + token, // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
          },
        };
        //console.log(config);
        axios
          .get("https://apirepetiteur.sevenservicesplus.com/api/profile", config)
          .then((response) => {
            this.user_id = response.data.id;
            //   this.name=response.data.name
            //   this.phone=response.data.phone
            //   this.email=response.data.email
            //console.log(response.data.id);
            //console.log( this.user_id);
          })
          .catch((error) => {
            if (error.response === 401) {
              this.error =
                "Erreur d'authentification : Votre session a expiré. Veuillez vous reconnecter.";
              // Vous pouvez également rediriger l'utilisateur vers la page de connexion ici
            } else {
              this.error =
                "Une erreur s'est produite. Veuillez réessayer plus tard.";
            }
          });
  
        this.getMessage();
      },
      getMessage() {
        setTimeout(() => {
        this.loading = false; // Set loading to false when data is fetched
      }, 3000);
        axios
          .get("https://apirepetiteur.sevenservicesplus.com/api/messages")
          .then((res) => {
            this.messagees = res.data.data.filter(
              (result) => result.user.id === this.user_id
            );
            console.log(this.user_id);
            console.log(this.messagees);
          });
      },
    },
  };
  </script>
  