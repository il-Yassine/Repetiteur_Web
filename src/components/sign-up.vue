<template>
  <div class="box">
  
   
    <h1>S'inscrire</h1>
   
    <div class="in">
        <label for="name">Nom Complet</label>
        <div>  <input type="text" v-model="username" placeholder="Entrer votre Nom Complet"
             /><img v-if="username.length >= 5" src="../assets/ok.svg" alt=""></div>

             <label for="name">Adresse Mail</label>
        <div>  <input type="text" v-model="mail" placeholder="Entrer votre adresse mail"
             /><img v-if="mail.length >= 6" src="../assets/ok.svg" alt=""></div>
  
    <div class="button_action">
      <button v-on:click="mail = ' @gmail.com' ">@gmail.com</button> <button v-on:click="mail = '@yahoo.com' ">@yahoo.com</button>  
    </div>
    </div>
    <div class="in">
    <label for="name">Mot de passe</label>
    <div>
      <v-text-field type="password"> 
        <input v-model="password_confirmation" type="password" placeholder="8 caracteres minimum" required/><img v-if="password_confirmation.length >= 8" src="../assets/ok.svg" alt="">

      </v-text-field>
      </div>  
     <div class="password_bar">
      <div :class="{'bar':true, 'green':(password_confirmation.length > 1)}" ></div> 
      <div :class="{'bar':true, 'green':(password_confirmation.length > 3)}" ></div> 
      <div :class="{'bar':true, 'green':(password_confirmation.length > 5)}" ></div>  
      <div :class="{'bar':true, 'green':(password_confirmation.length > 7)}" ></div> 
    </div>
    </div>
    <div class="check_bar">
      <div> <input type="checkbox" name="" id="">
      <label for="">Se souvenir de moi</label></div>
      <a href="">Mot de passe oublié ? </a>

    </div>

    <button class="log">
      Se connecter
      </button>
     
  
  <span>Déja inscrit ? <a href="/signin">Se connecter</a> </span> 
  </div>
  
  </template>
  <!-- <style src="/public/style.css"></style> -->
  
  <script>
  export default {
  
    data() {
      return {
        password:"",
        userLoggedIn: false,
        username:"",
        mail:"",
        mail_confirm:"",
        password_confirmation:"",
        isActive: false,

      };
      
    },
    toggle() {
this.isActive = ! this.enable ;
},
  };
  
  </script>
  
  
  
  
  