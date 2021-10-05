<template>
  <v-app>
    <v-app-bar
      flat
      app
      class="animate__animated animate__fadeIn animate__slower"
      color="#1A1E27"
      dark
      dense
      
    >
      <div class="d-flex align-center mt-5">
        <p class="text-h4 font-weight-bold">Stoc<span class="grey--text">3</span></p>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/backendpapa"
        target="_blank"
        text
        
        plain
        icon
      >
        <v-icon size="25">mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
.nana{
  /* background-color: ; */
}
</style>
