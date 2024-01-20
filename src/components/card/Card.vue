<!-- <template>
  <div class="card ">
    <img :src="imageSrc" :alt="imageAlt" class="card-image">
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      <h6 class="card-subtitle text-lg">{{ Soustitre }}</h6>
      <p class="card-supertitle">{{ Surtitre }}</p>
      <p class="card-description">{{ description }}</p>
    </div>
      Intégration des étoiles 
     <div class="star-rating">
      <span v-for="i in parseInt(5)" :key="i" class="star" @click="setRating(i)">
        <i :class="{ 'fas': userRating >= i, 'far': userRating < i } fa-star"></i>
      </span>
    </div>
    
    <router-link :to="'/details/' + productId">
      <button class="card-button">Voir Plus</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    Surtitre: {
      type: String,
      required: true,
    },
    Soustitre: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userRating: 0,
    };
  },
  methods: {
    setRating(rating) {
      this.userRating = rating;
    },
  },
};
</script> -->
<template>
  <div class="card">
    <img :src="imageSrc" :alt="imageAlt" class="card-image">
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      <h6 class="card-subtitle text-lg">{{ Soustitre }}</h6>
      <p class="card-supertitle">{{ Surtitre }}</p>
      <p class="card-description">{{ description }}</p>
      <p class="card-descriptio">{{ descriptio }}</p>

      <!-- Intégration des étoiles -->
       <!-- <div class="star-rating">
        <span v-for="i in maxRating" :key="i" class="star" @click="setRating(i)">
          <i :class="['fas', { 'text-yellow-500': userRating >= i, 'text-gray-300': userRating < i }, 'fa-star']"></i>
        </span>
      </div>  -->

      <router-link :to="'/details/' + productId">
        <button class="card-button">Voir Plus</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    Surtitre: {
      type: String,
      required: true,
    },
    Soustitre: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    descriptio: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userRating: 0,
      maxRating: 5,
    };
  },
  methods: {
    setRating(rating) {
      this.userRating = rating;
    },
  },
};
</script>


<style scoped>

.card {
  flex: 0 0 auto;
  width: 260px;
  height:300px ;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin-left: 10px;
  animation-play-state: running; /* Par défaut, l'animation est en cours d'exécution */
}
/*
.card:hover {
  transform: scale(1.05);
  animation-play-state: paused; /* En pause lors du survol 
}
*/
.card-image {
  width: 100%;
  height: 58%;
}

.card-title {
  font-size: 0.75rem;
 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.card-subtitle {
  font-size: 0.75rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-supertitle {
  font-size: 0.75rem;
 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-description {
  font-size: 0.75rem;
 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-descriptio {
  font-size: 0.75rem;
 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-button {
  align-self: flex-end;
  padding: 0.5rem 1rem;
  background-color: #3490dc;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.card-button:hover {
  background-color: #2779bd;
}
.star-rating {
  margin-top: 5px;
}

.star {
  cursor: pointer;
  margin-right: 5px;
  

}
</style>

