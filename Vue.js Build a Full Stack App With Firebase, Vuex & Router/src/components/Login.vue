<template>

  <div class="row">
    <form>
      <div>
        <p>Logged in as: <br> {{currentUser}} </p>
      </div>
      <div class="form-group row">
        <label class="col-sm-3">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter Email"/>
      </div>
      <div class="form-group row">
        <label class="col-sm-3">Email address</label>
        <input type="password" class="form-control" id="password" placeholder="Enter password"/>
      </div>
      <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign in</button>
      <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign out</button>
    </form>
  </div>

</template>

<script>
  import Firebase from 'firebase'
  import {store} from "../store/store";

  Firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      store.dispatch('setUser', user)
    }
    else {
      store.dispatch('setUser', null)
    }
  })

  export default {
    name: "Login",
    methods: {
      signIn() {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        Firebase.auth().signInWithEmailAndPassword(email, password)
          .catch(reason => {
            let errorCode = reason.code
            let errorMessage = reason.message

            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password')
            }
            else {
              alert(errorMessage)
            }
          })
      },
      signOut() {
        Firebase.auth().signOut().then(() => {
          alert('logged out')
        })
      }
    },
    computed: {
      currentUser() {
        return this.$store.getters.currentUser
      }
    }
  }
</script>

<style scoped>

</style>
