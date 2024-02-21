<template>
  <div>
    <div class="flex">
      <div class="container mx-auto mt-12 px-5">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex justify-end items-center">
            <span class="text-lg">{{ Numbere }}</span>
            <a
              href="#"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg"
              title="Nouvelle notification de paiement"
              @click="updateNotifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </a>
          </div>
          <div class="flex items-center">
            <h3
              class="text-3xl font-medium text-gray-900 dark:text-white font-serif px-2"
            >
              Mes demandes
            </h3>
          </div>

          <br />
          <div class="flex items-center justify-between pb-4">
            <div>
              <button
                @click="openSecondModal"
                type="button"
                class="inline-flex text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  class="w-[20px] h-[20px] text-white dark:text-white mt-1 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
                Ajouter vos enfants
              </button>
            </div>
            <div>
              <button
                type="button"
                class="inline-flex text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <!-- <svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
           </svg>  -->
                <RouterLink to="/admin/demande/create"
                  >Remplir le formulaire de demande</RouterLink
                >
              </button>
            </div>

            <!-- <RouterLink to="/admin/demande/create"><button  type="button" class="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
        </svg>Ajouter </button></RouterLink> -->
          </div>

          <div>
            <button @click="openModal" class=""></button>
            <Modal v-if="isModalOpen" @closeModal="closeModal" />
          </div>

          <table
            class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Nom</th>
                <th scope="col" class="px-6 py-3">Prénom</th>
                <th scope="col" class="px-6 py-3">Classe</th>
                <th scope="col" class="px-6 py-3">Matiere</th>
                <th scope="col" class="px-6 py-3">Repetiteur</th>
                <th scope="col" class="px-6 py-3">Status</th>
                <th scope="col" class="px-6 py-3">Motif</th>

                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody v-if="this.demande.length > 0">
              <tr
                class="bg-white border-b text-lg dark:bg-gray-900 dark:border-gray-700"
                v-for="(enfant, index) in this.demande"
                :key="index"
              >
                <td class="px-6 py-4">
                  {{ enfant.enfants.fname }}
                </td>

                <td class="px-6 py-4">
                  {{ enfant.enfants.lname }}
                </td>
                <td class="px-6 py-4">
                  {{ enfant.tarification.classe.name }}
                </td>
                <td class="px-6 py-4">
                  {{ enfant.tarification.matiere.name }}
                </td>
                <td class="px-6 py-4">
                  {{ enfant.repetiteur.user.name }}
                </td>
                <td class="px-6 py-4">
                  <span
                    v-if="enfant.status === 'En cours'"
                    class="text-gray-500"
                    >En cours</span
                  >
                  <span
                    v-else-if="enfant.status === 'Validé'"
                    class="text-green-500"
                    >Validé</span
                  >
                  <span
                    v-else-if="enfant.status === 'Non Validé'"
                    class="text-red-500"
                    >Non Validé</span
                  >
                  <span v-else>{{ enfant.status }}</span>
                </td>
                <td class="px-6 py-4">
                  {{ enfant.motif }}
                </td>
                <td
                  class="flex items-center px-6 py-4 space-x-3"
                  v-if="enfant.status === 'Validé'"
                >
                  <!--  <a href="#" wire:click="edit({{ $commande }})" wire:loading.attr="disabled"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</a>-->
                  <a
                    href="#"
                    @click="openModal(enfant.id)"
                    wire:loading.attr="disabled"
                    class="font-medium text-blue-600 dark:text-red-500 hover:underline"
                    >Appréciation</a
                  >
                </td>
                <td v-else-if="enfant.status === 'En cours'">
                  <a
                    href="#"
                    @click="
                      openThirdModal(
                        enfant.id,
                        enfant.enfants.id,
                        enfant.tarification.prix,
                        enfant.repetiteur.matricule,
                        enfant.tarification.classe.id,
                        enfant.tarification.matiere.id,
                        enfant.description
                      )
                    "
                    wire:loading.attr="disabled"
                    class="px-6 font-medium text-green-600 dark:text-red-500 hover:underline"
                    >Modifier</a
                  >
                </td>
                <td v-else></td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="5">Loading...</td>
              </tr>
            </tbody>
          </table>

          <div
            v-if="isModalOpen"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div class="bg-white p-8 rounded-lg w-[1250px] h-[725px]">
              <div class="relative p-1 w-full">
                <!-- Modal content -->

                <!-- Modal header -->
                <div
                  class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                >
                  <h3
                    class="text-2xl font-semibold text-gray-900 dark:text-white"
                  >
                    Veuillez nous laisser votre message
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
                  <form
                    @submit.prevent="savePostes"
                    class="space-y-2"
                    action="#"
                  >
                    <div class="flex space-x-2">
                      <div class="flex-1">
                        <label
                          for="email"
                          class="block mb-1 text-xl font-medium text-gray-900 dark:text-white"
                          >Objet</label
                        >
                        <input
                          type="text"
                          name="email"
                          v-model="objet"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                        >Votre Observation</label
                      >

                      <textarea
                        id="message"
                        v-model="content"
                        rows="2"
                        class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Message"
                        required
                      ></textarea>
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

                  <div class="table-responsive py-2">
                    <table class="min-w-full divide-y divide-gray-200">
                      <!-- En-tête du tableau -->
                      <thead
                        class="text-lg text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
                      >
                        <tr>
                          <th
                            class="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                          >
                            N°
                          </th>
                          <th
                            class="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            class="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Objet
                          </th>
                          <th
                            class="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Message(Observation)
                          </th>

                          <th
                            class="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Réponse Admin
                          </th>
                          <!-- ... Ajoutez d'autres colonnes si nécessaire -->
                        </tr>
                      </thead>
                      <!-- Corps du tableau -->
                      <tbody v-if="this.poste.length > 0">
                        <tr
                          class="bg-white border-b text-lg dark:bg-gray-900 dark:border-gray-700"
                          v-for="(enfan, index) in this.poste"
                          :key="index"
                        >
                          <td class="px-6 py-4 whitespace-nowrap">
                            {{ index + 1 }}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            {{ formatDate(enfan.created_at) }}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            {{ enfan.objet }}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            {{ enfan.appreciation_parents }}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            {{ enfan.reponse_admin }}
                          </td>
                          <!-- ... Ajoutez d'autres cellules si nécessaire -->
                        </tr>

                        <!-- ... Ajoutez d'autres lignes si nécessaire -->
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td colspan="5">Loading...</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="isModalSecondOpen"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div class="bg-white p-8 rounded-md w-[1000px]">
              <button
                @click="closeModal"
                class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
              <div class="relative p-4 w-full">
                <!-- Modal content -->

                <!-- Modal header -->
                <div
                  class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                >
                  <h3
                    class="text-2xl font-semibold text-gray-900 dark:text-white"
                  >
                    Ajouter un enfant
                  </h3>

                  <button
                    @click="closeSecondModal"
                    type="button"
                    class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                  <form
                    @submit.prevent="saveEnfants"
                    class="space-y-4"
                    action="#"
                  >
                    <div class="flex space-x-4">
                      <div class="flex-1">
                        <label
                          for="email"
                          class="block mb-1 text-xl font-medium text-gray-900 dark:text-white"
                          >Nom de l'enfant</label
                        >
                        <input
                          type="text"
                          name="email"
                          v-model="fname"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Nom"
                          required
                        />
                      </div>
                      <div class="flex-1">
                        <label
                          for="email"
                          class="block mb-1 text-xl font-medium text-gray-900 dark:text-white"
                          >Prénoms de l'enfant</label
                        >
                        <input
                          type="text"
                          name="email"
                          v-model="lname"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Prénoms"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-1 text-xl font-medium text-gray-900 dark:text-white"
                        >Sexe</label
                      >
                      <select
                        id="countries"
                        v-model="sexe"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      >
                        <option value="">
                          Sélectionner le sexe de votre enfant
                        </option>
                        <option value="Homme" required>Homme</option>
                        <option value="Femme">Femme</option>
                      </select>
                    </div>
                    <div class="flex space-x-4">
                      <div class="flex-1">
                        <label
                          for="email"
                          class="block mb-1 text-xl font-medium text-gray-900 dark:text-white"
                        >
                          Votre Téléphone</label
                        >
                        <input
                          type="number"
                          name="email"
                          v-model="phone"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Téléphone"
                          required
                        />
                      </div>
                      <div class="flex-1">
                        <label
                          for="email"
                          class="block mb-1 text-xl font-medium text-gray-900 dark:text-white"
                        >
                          Votre adresse</label
                        >
                        <input
                          type="text"
                          name="email"
                          v-model="adresse"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="adresse"
                          required
                        />
                      </div>
                    </div>

                    <br />
                    <div class="flex justify-end">
                      <button
                        type="submit"
                        class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="ThirdModal"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div class="bg-white p-8 rounded-lg w-[1000px]">
              <div class="relative p-1 w-full">
                <!-- Modal content -->

                <!-- Modal header -->
                <div
                  class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                >
                  <h3
                    class="text-2xl font-semibold text-gray-900 dark:text-white"
                  >
                    Modifier votre demande
                  </h3>

                  <button
                    @click="closeThirdModal"
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
                  <form
                    class="space-y-6"
                    action="POST"
                    @submit.prevent="updateDemande"
                    enctype="multipart/form-data"
                  >
                    <!-- <ul class="bg-green-300 border-t border-border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="Object.keys(this.errorList).length > 0">
                            <li class="mb-0 ms-3" >
                            {{ this.errorList }}
    
                            </li>
                        </ul> -->

                    <div class="flex space-x-4">
                      <div class="flex-1">
                        <label
                          for="countries"
                          class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                          >Information concernant l'enfant</label
                        >
                        <select
                          id="countries"
                          v-model="enfants_id"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        >
                          <option
                            v-for="(enfant, index) in this.enfantse"
                            :key="index"
                            :value="enfant.id"
                          >
                            {{ enfant.fname }} {{ enfant.lname }}
                          </option>
                        </select>
                      </div>
                      <div class="flex-1">
                        <label
                          for="countries"
                          class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                          >Classe</label
                        >
                        <select
                          id="countries"
                          v-model="classe_id"
                          @change="getPrix"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        >
                          <!-- <option selected  >Choisir votre classe</option> @change="getPrix"  -->

                          <option
                            v-for="(classe, index) in this.classes"
                            :key="index"
                            :value="classe.id"
                          >
                            {{ classe.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="flex-1">
                        <label
                          for="countries"
                          class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                          >Matière</label
                        >
                        <select
                          id="countries"
                          v-model="matiere_id"
                          @change="getPrix"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        >
                          <option
                            v-for="(matier, index) in this.matiere"
                            :key="index"
                            :value="matier.id"
                          >
                            {{ matier.name }}
                          </option>
                        </select>
                      </div>

                      <div class="flex-1">
                        <label
                          for="phone"
                          class="block mb-2 px-3 text-2xl font-medium text-gray-900 dark:text-white"
                          >Rémumération</label
                        >
                        <div class="flex items-center space-x-2">
                          <input
                            type="text"
                            readonly
                            v-model="prix"
                            @change="getRepetiteur"
                            name="phone"
                            id="phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white text-right"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="flex-1">
                        <label
                          for="phone"
                          class="block mb-2 px-3 text-2xl font-medium text-gray-900 dark:text-white"
                          >Matricule du répétiteur</label
                        >
                        <input
                          type="text"
                          @input="getRepetiteur"
                          v-model="matricule"
                          name="phone"
                          id="phone"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder=""
                          required
                        />
                        <div
                          v-if="matricule.length > 0 && repetiteurs.length > 0"
                        >
                          <h2></h2>

                          <ul
                            class="py-4"
                            v-for="(result, index) in repetiteurs"
                          >
                            <li :key="index" class="px-4 py-2 text-lg">
                              <span>{{ result.repetiteur.user.name }},</span>
                            </li>
                            <li class="px-4 py-2 text-lg">
                              <span>{{ result.repetiteur.adresse }}</span>
                            </li>
                          </ul>
                        </div>
                        <div v-else-if="matricule.length > 0" class="text-lg">
                          Ce matricule n'exite pas
                        </div>
                        <div v-else></div>
                      </div>

                      <div class="flex-1">
                        <label
                          for="phone"
                          class="block mb-2 px-3 text-2xl font-medium text-gray-900 dark:text-white"
                          >Informations Complementaires</label
                        >
                        <input
                          type="text"
                          v-model="description"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder=""
                          required
                        />
                      </div>
                    </div>

                    <div class="flex justify-end">
                      <button
                        type="submit"
                        class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
  </div>
  <!-- <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <div class="container mx-auto text-center">
          <p class="text-gray-600">&copy; 2023 Digitalis. Tous droits réservés.
           
          </p>
        </div>
      </footer> -->
</template>
<script>
import axios from "axios";
export default {
  name: "demande",

  data() {
    return {
      isModalOpen: false,
      isModalSecondOpen: false,
      ThirdModal: false,
      parents: [],
      enfants: [],
      repetiteurs: [],
      enfantse: [],
      demande: [],
      poste: [],
      repetit: [],
      prixe: [],
      matiere: [],
      classes: [],
      tarification: [],
      notifications: [],
      notif_id: [],
      demande_id: "",
      selectedEnfant: "",
      parentss_id: "",
      content: "",
      datee: "",
      objet: "",
      fname: "",
      lname: "",
      sexe: "",
      phone: "",
      adresse: "",

      enfants_id: "",
      description: "",
      classe_id: "",
      matricule: "",
      matiere_id: "",
      prix: "",
      tarification_id: "",
      demande_id: "",
      Numbere: "0",
    };
  },
  mounted() {
    this.getparents();
    
   this.getpostes();
    this.$nextTick(() => {
      this.getpostes();
    });
    // this.$nextTick(() => {
    //   this.getDemande();
    //   this.getEnfants();
    //   this.fetchNotifications();
    // });

    this.getRepetiteur();
    this.getClasses();
    this.getMatiere();
    this.getPrix();
    
    
  },
  methods: {
    openModal(enfantId) {
      this.isModalOpen = true;
      this.selectedEnfant = enfantId;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedEnfant = "";
      this.content = "";
      this.datee = "";
      this.objet = "";
    },
    openSecondModal() {
      this.isModalSecondOpen = true;
    },
    closeSecondModal() {
      this.isModalSecondOpen = false;
      this.fname = "";
      this.lname = "";
      this.phone = "";
      this.sexe = "";
      this.adresse = "";
    },
    openThirdModal(
      demandeId,
      enfantId,
      prix,
      matriculee,
      classeId,
      matiereId,
      descriptio
    ) {
      this.ThirdModal = true;
      this.prix = prix + " " + "FCFA";
      this.matricule = matriculee;
      this.classe_id = classeId;
      this.matiere_id = matiereId;
      this.demande_id = demandeId;
      this.enfants_id = enfantId;
      this.description = descriptio;
    },
    closeThirdModal() {
      this.ThirdModal = false;
      this.prix = "";
      this.matricule = "";
      this.classe_id = "";
      this.matiere_id = "";
      this.demande_id = "";
      this.enfants_id = "";
      this.description = "";
    },
    formatDate(dateTimeString) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      const date = new Date(dateTimeString);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;

      return formattedDate;
    },
    // async getparents() {
    //   const token = localStorage.getItem("token");
    //   const config = {
    //     headers: {
    //       Authorization: "Bearer " + token,
    //     },
    //   };

    //   //console.log(config);

    //   const profileResponse = await axios.get(
    //     "http://127.0.0.1:8000/api/profile",
    //     config
    //   );
    //   //console.log(profileResponse);

    //   this.role_id = profileResponse.data.role_id;
    //   this.user_id = profileResponse.data.id;
    //   //console.log(this.role_id);
    //   //console.log(this.user_id);

    //   axios.get("http://127.0.0.1:8000/api/parents").then((res) => {
    //     this.parents = res.data.data.filter(
    //       (parent) => parent.user.id === this.user_id
    //     );

    //     console.log(this.parents)
    //     this.parentss_id = this.parents[0].id;
    //      console.log(this.parentss_id);
    //   });
    //   axios
    //     .get("http://127.0.0.1:8000/api/notifications?user_id=" + this.user_id)
    //     .then((response) => {
    //       this.notifications = response.data.data.filter(
    //         (notificat) => notificat.status == "Non lu"
    //       );
    //       this.Numbere = this.notifications.length;
    //       this.notif_id=this.notifications.map(notification => notification.id)
    //       //console.log(this.notifications);
    //      // console.log(this.Numbere);
    //      // console.log(this.notif_id);
    //     })
    //     .catch((error) => {
    //       console.error("Erreur lors de la requête API :", error);
    //     });
    //   //.getDemande();

    //   axios.get("http://127.0.0.1:8000/api/enfants").then((res) => {
    //     this.enfantse = res.data.data.filter(
    //       (result) => result.parents.id === this.parentss_id
    //     );
    //     // console.log(this.enfantse)
    //   });
    //   axios
    //     .get("http://127.0.0.1:8000/api/postes")
    //     .then((res) => {
    //     console.log(res);
    //       if (res.data && res.data.data) {
    //         this.poste = res.data.data.filter(
    //           (deman) => deman.parents && deman.parents.id === this.parentss_id
    //         );
    //          console.log(this.poste);
    //       } else {
    //         console.error("Données non valides dans la réponse.");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Erreur lors de la requête Axios :", error);
    //     });

    //     axios.get("http://127.0.0.1:8000/api/classes").then((res) => {
    //     this.classes = res.data.data;
    //     // console.log(this.classe)
    //   });

    //   axios.get("http://127.0.0.1:8000/api/demandes").then((res) => {
    //     this.demande = res.data.data.filter(
    //       (demand) => demand.enfants.parents.id === this.parentss_id
    //     );
    //     //console.log(this.demande)
    //   });
     


    //   axios.get("http://127.0.0.1:8000/api/matieres").then((res) => {
    //     this.matiere = res.data.data;
    //     // console.log(this.matiere)
    //   });
    //   this.getPrix();
    // },
    async getparents() {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const profileResponse = await axios.get("http://127.0.0.1:8000/api/profile", config);
    this.role_id = profileResponse.data.role_id;
    this.user_id = profileResponse.data.id;

    const parentsResponse = await axios.get("http://127.0.0.1:8000/api/parents");
    this.parents = parentsResponse.data.data.filter((parent) => parent.user.id === this.user_id);
    this.parentss_id = this.parents[0].id;

    const notificationsResponse = await axios.get("http://127.0.0.1:8000/api/notifications?user_id=" + this.user_id);
    this.notifications = notificationsResponse.data.data.filter((notificat) => notificat.status == "Non lu");
    this.Numbere = this.notifications.length;
    this.notif_id = this.notifications.map(notification => notification.id);

    const enfantsResponse = await axios.get("http://127.0.0.1:8000/api/enfants");
    this.enfantse = enfantsResponse.data.data.filter((result) => result.parents.id === this.parentss_id);

    const posteResponse = await axios.get("http://127.0.0.1:8000/api/postes");
    this.poste = posteResponse.data.data.filter((deman) => deman.parents && deman.parents.id === this.parentss_id);
    console.log(posteResponse);
    console.log(this.parentss_id);

    const classesResponse = await axios.get("http://127.0.0.1:8000/api/classes");
    this.classes = classesResponse.data.data;

    const demandesResponse = await axios.get("http://127.0.0.1:8000/api/demandes");
    this.demande = demandesResponse.data.data.filter((demand) => demand.enfants.parents.id === this.parentss_id);

    const matieresResponse = await axios.get("http://127.0.0.1:8000/api/matieres");
    this.matiere = matieresResponse.data.data;

    this.getPrix();
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
},


    getEnfants() {
      axios.get("http://127.0.0.1:8000/api/enfants").then((res) => {
        this.enfantse = res.data.data.filter(
          (result) => result.parents.id === this.parentss_id
        );
        // console.log(this.enfantse)
      });
    },
    getDemande() {
      axios.get("http://127.0.0.1:8000/api/demandes").then((res) => {
        this.demande = res.data.data.filter(
          (demand) => demand.enfants.parents.id === this.parentss_id
        );
        //console.log(this.demande)
      });
     this.getpostes();

      axios
        .get("http://127.0.0.1:8000/api/postes")
        .then((res) => {
        console.log(res);
          if (res.data && res.data.data) {
            this.poste = res.data.data.filter(
              (postee) => postee.parents && postee.parents.id === this.parentss_id
            );
             console.log(res);
             console.log(res.data);
             console.log(this.poste);
             
          } else {
            console.error("Données non valides dans la réponse.");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la requête Axios :", error);
        });

      this.getEnfants();
    },
    getpostes(){
      axios
        .get("http://127.0.0.1:8000/api/postes")
        .then((res) => {
        console.log(res);
          if (res.data && res.data.data) {
            this.poste = res.data.data.filter(
              (deman) => deman.parents && deman.parents.id === this.parentss_id
            );
             console.log(this.poste);
             console.log(this.parentss_id);
             console.log(res);
             console.log(res.data);
          } else {
            console.error("Données non valides dans la réponse.");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la requête Axios :", error);
        });
    },
    saveEnfants() {
      var mythis = this;
      const token = localStorage.getItem("token");
      const dataToSend = {
        fname: this.fname,
        lname: this.lname,
        phone: this.phone,
        sexe: this.sexe,
        adresse: this.adresse,
        parents_id: this.parentss_id,
      };
      const config = {
        headers: {
          Authorization: "Bearer " + token, // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
        },
      };
      //console.log(dataToSend);
      axios
        .post("http://127.0.0.1:8000/api/enfants", dataToSend, config)
        .then((response) => {
          // Gérer la réponse de la requête POST
          // console.log(response)
          //console.log(response.data)
          localStorage.setItem("enfants_id", response.data.data.id);

          mythis.errorList = response.data.message;
          // alert(response.status);
          if (response.status == 201) {
            this.closeSecondModal();
            mythis.errorList = "Votre enfants a été ajouter avec succès";
            alert("Votre enfants a été ajouter avec succès");
          }
        })
        .catch((error) => {
          if (error.response) {
            mythis.errorList = "une erreur s'est produite";
            // Gérer l'erreur d'authentification ici
          } else {
            // Gérer d'autres erreurs
          }
        });
    },
    savePostes() {
      var mythis = this;
      const dataToSend = {
        objet: this.objet,
        appreciation_parents: this.content,
        demande_id: this.selectedEnfant,
        parents_id: this.parentss_id,
      };
      const token = localStorage.getItem("token");

      // console.log(token);
      const config = {
        headers: {
          Authorization: "Bearer " + token, // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
        },
      };
      // console.log(config);
      //console.log(dataToSend);
      axios
        .post("http://127.0.0.1:8000/api/postes", dataToSend, config)
        .then((res) => {
          // console.log(res.data)
          // alert(res.data.message);
          if (res.status == 201) {
            mythis.errorList = "Appréciation enregister avec succès";
            alert("Appréciation enregister avec succès");
            // this.$router.push('/admin/demande')
            // this.closeModal();
          } else {
            alert("Une erreur s'est produite");
          }
        })
        .catch(function (error) {
          if (error.reponse) {
            if (error.response.status == 422) {
              mythis.errorList = error.response.data.errors;
              // console.log(error.response.data.errors);
            }
          } else if (error.request) {
            //console.log(error.request);
          } else {
            //  console.log('Error'.error.message);
          }
        });
    },
    // getTarification(){
    //     const token = localStorage.getItem('token');
    //     axios.get('http://127.0.0.1:8000/api/tarifications').then(res=>{
    //         this.tarification=res.data.data
    //         console.log(this.tarification)
    //         console.log(res)
    //     });
    // },
    getClasses() {
      axios.get("http://127.0.0.1:8000/api/classes").then((res) => {
        this.classes = res.data.data;
        // console.log(this.classe)
      });
      this.getPrix();
    },

    getMatiere() {
      axios.get("http://127.0.0.1:8000/api/matieres").then((res) => {
        this.matiere = res.data.data;
        // console.log(this.matiere)
      });
      this.getPrix();
    },
    getPrix() {
      const token = localStorage.getItem("token");
      axios.get("http://127.0.0.1:8000/api/tarifications").then((res) => {
        this.prixe = res.data.data.filter(
          (result) =>
            result.matiere.id === this.matiere_id &&
            result.classe.id === this.classe_id
        );

        if (this.matiere_id && this.classe_id && this.prixe.length > 0) {
          this.prix = this.prixe[0].prix + " " + "FCFA";
          this.tarification_id = this.prixe[0].id;
          this.getRepetiteur();
        } else {
          this.prix = "0 FCFA";
          this.tarification_id = null; // Réinitialiser l'id de tarification si la condition n'est pas remplie
          this.getRepetiteur();
        }

        //console.log(this.prixe);
        //console.log(this.prix);
      });

      this.getRepetiteur();
    },
    getRepetiteur() {
      // console.log(this.matiere_id);
      // console.log(this.classe_id);
      // console.log(this.matricule);

      axios.get("http://127.0.0.1:8000/api/repetiteurmcs").then((res) => {
        this.repetiteurs = res.data.data.filter(
          (result) =>
            result.matiere.id === this.matiere_id &&
            result.classe.id === this.classe_id &&
            result.repetiteur.traitementDossiers === "Validé" &&
            result.repetiteur.matricule === this.matricule
        );
        if (this.repetiteurs.length > 0) {
          this.repetiteur_id = this.repetiteurs[0].repetiteur.id;
        }
        // console.log( this.repetiteur_id);

        // console.log(res.data.data);
        // console.log(res.data.data);
        // console.log(this.model.matiere_id);
        // console.log(this.repetiteurs)
        // console.log(res)
      });
    },
    // getRepetiteurs(){
    //     axios.get('http://127.0.0.1:8000/api/repetiteurs').then(res=>{
    //                 this.repetit = res.data.data.filter(result =>
    //                    result.status === 'Validé'

    //                     );
    //                     console.log(res.data.data);
    //                    // console.log(this.model.matiere_id);
    //                 console.log(this.repetit)
    //                 console.log(res)
    //             });

    // },
    fetchNotifications() {
      console.log("test");
      console.log(this.user_id);
      // Utilisez Axios pour effectuer la requête API
      axios
        .get(`http://127.0.0.1:8000/api/notifications?user_id=${this.user_id}`)
        .then((response) => {
          // Mettez à jour les données du composant avec la réponse de l'API
          this.notifications = response.data;
        })
        .catch((error) => {
          console.error("Erreur lors de la requête API :", error);
        });
    },
    updateNotifications(){
      const token = localStorage.getItem("token");

      // console.log(token);
      const config = {
        headers: {
          Authorization: "Bearer " + token, // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
        },
      };
      // console.log(config);
     // console.log(this.notif_id);
      const newStatus = "Lu";  // Remplacez 'nouveauStatut' par le statut souhaité.
const apiUrl = 'http://127.0.0.1:8000/api/notifications';  // Remplacez par l'URL correcte de votre API.

// Utilisez une boucle pour envoyer une requête pour chaque ID.
this.notif_id.forEach(id => {
  // Créez un objet contenant les données à mettre à jour.
  const dataToUpdate = {
    status:"Lu",
    
  };
//console.log(`Updating ID ${id} to status: ${dataToUpdate.status}`);

  // Utilisez Axios pour envoyer la requête PUT à l'API pour chaque ID.
  axios.put(`${apiUrl}/${id}`, dataToUpdate,config)
    .then(response => {
      // Gérez la réponse de l'API si nécessaire.
      //console.log(`Mise à jour réussie pour l'ID ${id} :`, response.data);

      this.$router.push('/admin/payements');
    })
    .catch(error => {
      // Gérez les erreurs de la requête.
      console.error(`Erreur lors de la mise à jour pour l'ID ${id} :`, error);
    });
});

    },
    updateDemande() {
      var mythis = this;

      const dataToSend = {
        description: this.description,
        tarification_id: this.tarification_id,
        repetiteur_id: this.repetiteur_id,
        enfants_id: this.enfants_id,
      };
      const token = localStorage.getItem("token");

      console.log(token);
      const config = {
        headers: {
          Authorization: "Bearer " + token, // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
        },
      };
      //console.log(config);
      //console.log(dataToSend);
      axios
        .put(
          "http://127.0.0.1:8000/api/demandes/" + this.demande_id,
          dataToSend,
          config
        )
        .then((res) => {
          //console.log(res.data);
          // alert(res.data.message);
          if (res.status == 200) {
            mythis.errorList = "Demande modifier avec succès";
            alert("Demande modifier avec succès");
            this.closeThirdModal();
          } else {
            mythis.errorList = "Une erreur s'est produite";
          }
        })
        .catch(function (error) {
          if (error.reponse) {
            if (error.response.status == 422) {
              mythis.errorList = error.response.data.errors;
              console.log(error.response.data.errors);
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error".error.message);
          }
        });
    },
  },
};
</script>
<style>
/* Styles du modal */
.modal {
  display: none; /* Par défaut, le modal est caché */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(
    0,
    0,
    0,
    0.4
  ); /* Fond semi-transparent pour assombrir l'arrière-plan */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* Centrer le modal verticalement */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* Bouton de fermeture du modal */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
