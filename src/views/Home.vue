<template>
<div class = "home">
  <div class="nav">
    <the-nav></the-nav>
  </div>
  <div class = "the-title">
  <h2>♦ JUBBLIER COMMISSIONS ♦</h2>
  </div>
    <base-button @click="twitter">Twitter</base-button>
    <base-button @click="email">Email</base-button>
    <base-button @click="tumblr" >Tumblr</base-button>
    <base-button @click="twitch">Twitch</base-button>
  <div class = "comms">
    <img src="../assets/comms.png" alt="comms">
  </div>
  <the-information></the-information>
  
  <base-button @click="waitlist">Here is the waitlist!</base-button>
</div>

</template>

<script>
import TheInformation from '../components/TheInformation.vue';

export default {
  components: {
         TheInformation,
    },
    methods: {
      twitter() {
        window.location.href = 'https://twitter.com/Jubblier';
      },
      tumblr() {
        window.location.href = 'https://jooblesbeebles.tumblr.com/'
      },
      twitch() {
        window.location.href = 'https://www.twitch.tv/jubblier'
      },
      email() {
        window.location.href = "mailto:jule2kool@hotmail.com";
      },
      waitlist() {
        window.location.href = 'https://trello.com/b/KtQOGlUu/jubblier-commission-queue'
      },
    }

};
</script>

<style scoped>


.the-title {
  color: #ff8a00;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.075rem;
  width: calc(100% + 0.075rem);
  font-size: 1.75em;
  line-height: 1.75;
  font-weight: 600;
}

h2{

}

.comms img {
  height: auto;
  max-width: 50%;
  box-sizing: border-box;
}

</style>
