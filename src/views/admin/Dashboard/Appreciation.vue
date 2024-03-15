<template>
  <div>
    <div class="flex">
      <div class="container mx-auto mt-12 px-5">
        <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
          <p class="text-gray-600 ml-3">Chargement en cours...</p>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <h3
            class="text-3xl font-medium text-gray-900 dark:text-white font-serif text-start"
          >
            Boites de receptions
          </h3>
          <br />

          <div class="flex">
            <div class="flex items-center space-x-4">
              <button
                type="button"
                @click="searchMessage"
                class="inline-flex text-white bg-blue-900 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Tous les messages
              </button>
              <button
                type="button"
                @click="searchEnAttente"
                class="inline-flex text-white bg-yellow-700 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Messages en attentes
              </button>
              <button
                type="button"
                @click="searchRepondu"
                class="inline-flex text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-20 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Messages Répondus
              </button>
            </div>
            <div class="flex items-center space-x-4 ml-auto">
              <label
                for="countries"
                class="block px-2 mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                >Filtre sur:</label
              >
              <div class="flex items-center">
                <select
                  id="countries"
                  v-model="searche"
                  @change="search"
                  class="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="">Enfants</option>
                  <option
                    v-for="(enfant, index) in this.enfants"
                    :key="index"
                    :value="enfant.lname"
                  >
                    {{ enfant.fname }} {{ enfant.lname }}
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
                  v-model="repet"
                  @change="searchRepet"
                  class="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="">Répétiteur</option>
                  <option
                    v-for="(repetite, index) in this.post"
                    :key="index"
                    :value="repetite.demande.repetiteur.user.name"
                  >
                    {{ repetite.demande.repetiteur.user.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <table
            class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Date</th>
                <th scope="col" class="px-6 py-3">Nom et Prénoms</th>
                <th scope="col" class="px-6 py-3">Matiere</th>

                <th scope="col" class="px-6 py-3">Appréciation sur l'enfant</th>

                <th scope="col" class="px-6 py-3">Répétiteur</th>
                <th scope="col" class="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody v-if="this.poste.length > 0">
              <tr
                class="bg-white border-b text-lg dark:bg-gray-900 dark:border-gray-700"
                v-for="(matier, index) in this.poste"
                :key="index"
              >
                <td class="px-6 py-4">
                  {{ formatDate(matier.poste) }}
                </td>
                <td class="px-6 py-4">
                  {{ matier.demande.enfants.fname }}
                  {{ matier.demande.enfants.lname }}
                </td>
                <td class="px-6 py-4">
                  {{ matier.demande.tarification.matiere.name }}
                </td>

                <td class="px-6 py-4">
                  {{ matier.appreciation_repetiteur }}
                </td>

                <td class="px-6 py-4">
                  {{ matier.demande.repetiteur.user.name }}
                </td>
                <td v-if="matier.reponse_parents === null ">
                  <a
                    href="#"
                    @click="
                      openModal(matier.id, matier.appreciation_repetiteur)
                    "
                    wire:loading.attr="disabled"
                    class="font-medium text-blue-600 dark:text-red-500 hover:underline"
                    >Répondre</a
                  >
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="1">Loading...</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          v-if="isModalOpen"
          class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div class="bg-white p-8 rounded-lg w-[800px]">
            <div class="relative p-4 w-full">
              <!-- Modal content -->

              <!-- Modal header -->
              <div
                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
              >
                <h3
                  class="text-2xl font-semibold text-gray-900 dark:text-white"
                >
                  Observation
                </h3>

                <button
                  @click="closeModal"
                  type="button"
                  class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <!-- Modal body -->
              <div class="p-4 md:p-5">
                <form @submit.prevent="savePostes" class="space-y-4" action="#">
                  <div>
                    <div class="flex-1">
                      <label
                        for="phone"
                        class="block text-start mb-2 px-3 text-2xl font-medium text-gray-900 dark:text-white"
                        >Réponse du Répétiteur</label
                      >
                      <input
                        type="text"
                        readonly
                        v-model="reponsee"
                        name="phone"
                        id="phone"
                        class="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="phone"
                        class="block text-start mb-2 px-3 text-2xl font-medium text-gray-900 dark:text-white"
                        >Votre Réponse</label
                      >
                      <textarea
                        id="message"
                        v-model="content"
                        rows="4"
                        class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div class="flex justify-end">
                    <button
                      type="submit"
                      class="end-2.5 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer
        class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
      >
        <div class="container mx-auto text-center">
          <p class="text-gray-600">
            &copy; 2023 Digitalis. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "appreciation",
  data() {
    return {
      loading: true,
      payement: [],
      poste: [],
      post: [],
      enfants: [],
      repetite: [],
      enfan: [],
      user_id: "",
      poste_id: "",
      searche: "",
      repet: "",
      content: "",
      role_id: "",
      parents: [],
      parentss_id: "",
      prix: "",
      demandId: "",
      reference: "",
      reponsee: "",
      isModalOpen: false,
    };
  },
  mounted() {
    this.getparents();
    this.$nextTick(() => {
      this.getPostes();
      this.getEnfants();
    });
  },

  methods: {
    openModal(enfantId, repetiteur) {
      this.isModalOpen = true;
      this.selectedEnfant = enfantId;
      this.reponsee = repetiteur;
      //console.log(this.selectedEnfant);
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedEnfant = "";
      this.content = "";
      this.reponsee = "";
    },
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

    async getparents() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      //console.log(config);

      // Requête pour récupérer le profil
      const profileResponse = await axios.get(
        "https://apirepetiteur.sevenservicesplus.com/api/profile",
        config
      );
      //console.log(profileResponse);
      // Stocker les données du profil dans le composant ou Vuex
      this.role_id = profileResponse.data.role_id;
      this.user_id = profileResponse.data.id;
      //console.log(this.role_id);
      //console.log(this.user_id);

      axios.get("https://apirepetiteur.sevenservicesplus.com/api/parents").then((res) => {
        this.parents = res.data.data.filter(
          (parent) => parent.user.id === this.user_id
        );

       // console.log(this.parents);
        this.parentss_id = this.parents[0].id;
        //console.log(this.parentss_id);
      });
      this.getPostes();
    },
    getPostes() {
      setTimeout(() => {
        this.loading = false; // Set loading to false when data is fetched
      }, 4000);
      axios.get("https://apirepetiteur.sevenservicesplus.com/api/postes").then((res) => {
        this.payement = res.data.data.filter(
          (payemet) => payemet.demande.enfants.parents.id === this.parentss_id
        );
        //console.log(this.payement);
        //console.log(res);
        this.post = this.payement.filter(
          (result) => result.appreciation_repetiteur != null
        );
        this.poste = this.post;
        this.enfan= this.post.filter((result)=>result.demande.enfants);
        this.repetite= this.post.filter((result)=>result.repetiteur);
        console.log(this.enfan);
        console.log(this.repetite);
       // console.log(this.poste);
      });
     // console.log(this.repet);
      this.getEnfants();
    },
    getEnfants() {
      //console.log(this.parentss_id);
      axios.get("https://apirepetiteur.sevenservicesplus.com/api/enfants").then((res) => {
        this.enfants = res.data.data.filter(
          (result) =>
            // result.status ==='Terminer' &&
            result.parents.id === this.parentss_id
        );
        //console.log(this.enfants);
       // console.log(res);
      });
    },
    search() {
      //console.log(text);
      // Remplacez l'URL de l'API par celle que vous souhaitez utiliser
      //console.log(this.post);
      //console.log("Recherche effectuée avec :", this.searche);
      //   this.poste=this.post.filter(result => result.demande.enfants.name === this.searche)
      this.poste = this.post.filter(
        (result) =>
          result &&
          result.demande &&
          result.demande.enfants &&
          result.demande.enfants.lname &&
          result.demande.enfants.lname.includes(this.searche)
      );
      //console.log(this.poste);
    },
    searchRepet() {
      //console.log(text);
      // Remplacez l'URL de l'API par celle que vous souhaitez utiliser
      //console.log(this.post);
      //console.log("Recherche effectuée avec :", this.repet);
      this.poste = this.post.filter(
        (result) =>
          result &&
          result.demande &&
          result.demande.repetiteur &&
          result.demande.repetiteur.user &&
          result.demande.repetiteur.user.name &&
          result.demande.repetiteur.user.name.includes(this.repet)
      );
      //console.log(this.poste);
    },
    searchEnAttente() {
      this.poste = this.post.filter((result) => result.reponse_parents === null);
    },
    searchRepondu() {
      this.poste = this.post.filter((result) => result.reponse_parents != null);
    },
    searchMessage() {
      this.poste = this.post;
    },

    savePostes() {
      var mythis = this;
      const dataToSend = {
        reponse_parents: this.content,
      };
      const token = localStorage.getItem("token");

      //console.log(token);
      const config = {
        headers: {
          Authorization: "Bearer " + token, // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
        },
      };
     // console.log(config);
      //console.log(dataToSend);
     // console.log(this.selectedEnfant);

      axios
        .put(
          "https://apirepetiteur.sevenservicesplus.com/api/postes/" + this.selectedEnfant,
          dataToSend,
          config
        )
        .then((response) => {
          // La mise à jour a réussi, vous pouvez traiter la réponse ici
         // console.log(response.data);
          //console.log(response);
          if (response.status === 200) {
            alert("Réponse envoyer avec succèes");
            this.closeModal();
          }
        })
        .catch((error) => {
          // Une erreur s'est produite lors de la mise à jour, vous pouvez traiter l'erreur ici
          console.error("Erreur lors de la mise à jour:", error);
        });
    },
  },
};
</script>
<style></style>
