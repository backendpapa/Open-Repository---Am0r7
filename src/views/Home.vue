<template>
  <div>
    <div class="block animate__animated animate__fadeIn">
     <v-container>
  
        <v-row style="height:88.5vh;color:white" class="" no-gutters align="center" justify="center">
      <!-- <v-col cols="12" xl="6" lg="6" class="animate__animated animate__fadeIn animate__slower">
        <p style="font-weight:bold" class="text-h2 animate__animated animate__fadeInLeft">The <span style="color:#5CAB90">world's</span> most powerful exchange service</p>
        <p style="font-size:17px;margin-right:20%">Get the most accurate market data, alerts,conversions,tools and more - all on this platform</p>
        <v-row no-gutters>
          <v-text-field flat class="text-caption font-weight-bold" placeholder="Email Address" dense solo></v-text-field>
          <v-btn style="text-transform:none;" class="ml-3 text-caption" height="39" color="#5CAB90" dark large>Try now!  </v-btn>
          <v-spacer></v-spacer>
        </v-row>
      </v-col> -->
      <v-col cols="12" xl="12" lg="12">
        
    <!-- <v-row  no-gutters align="center" justify="center"> -->
      <v-row class="animate__animated animate__fadeIn animate__slow" v-if="loaded==false" align="center" justify="center" style="height:30vh">
          <v-spacer></v-spacer>
            <div >
              <p class="text-center"> 
        <v-progress-circular
      :width="3"
      color="green"
      indeterminate
    ></v-progress-circular>
    </p>
            </div>
          <v-spacer></v-spacer>
      </v-row>
      
  <v-simple-table v-else  class="card animate__animated animate__tada"  >
    <template v-slot:default>
      <thead>
        <tr>
          <th></th>
          <th>USD</th>
          <th>AUD</th>
          <th>CAD</th>
          <th>SGD</th>
          <th>EUR</th>
          <th>CHF</th>
          <th>NZD</th>
          <th>GBP</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-if="$store.state.crash==true">
           <td class="font-weight-bold ">USD</td>
          <td  class="text-left red--text" >{{0}}</td>
          <td  class="text-left red--text" >{{0}}</td>
          <td  class="text-left red--text" >{{0}}</td>
          <td  class="text-left red--text" >{{0}}</td>
          <td  class="text-left red--text" >{{0}}</td>
          <td  class="text-left red--text" >{{0}}</td>
          <td  class="text-left red--text" >{{0}}</td>
        </tr>
         <tr
         v-else
        >
          <td class="font-weight-bold">USD</td>
          
          <td  class="text-left" >{{currency["USD"]}}</td>
          <td class="text-left" >{{currency["AUD"]}}</td>
          <td class="text-left" >{{currency["CAD"]}}</td>
           <td class="text-left" >{{currency["SGD"]}}</td>
            <td class="text-left" >{{currency["EUR"]}}</td>
             <td class="text-left" >{{currency["CHF"]}}</td>
              <td class="text-left" >{{currency["NZD"]}}</td>
              <td class="text-left" >{{currency["GBP"]}}</td>
        </tr>
         <tr
        >
          <td class="font-weight-bold">AUD</td>
          
           <td class="text-left" >{{aud["USD"]}}</td>
           <td class="text-left" >{{aud["AUD"]}}</td>
            <td class="text-left" >{{aud["CAD"]}}</td>
             <td class="text-left" >{{aud["SGD"]}}</td>
              <td class="text-left" >{{aud["EUR"]}}</td>
               <td class="text-left" >{{aud["CHF"]}}</td>
                <td class="text-left" >{{aud["NZD"]}}</td>
                <td class="text-left" >{{aud["GBP"]}}</td>
          
        </tr>
         <tr
        >
          <td class="font-weight-bold">CAD</td>
          
           <td class="text-left" >{{cad["USD"]}}</td>
           <td class="text-left" >{{cad["AUD"]}}</td>
            <td class="text-left" >{{cad["CAD"]}}</td>
             <td class="text-left" >{{cad["SGD"]}}</td>
              <td class="text-left" >{{cad["EUR"]}}</td>
               <td class="text-left" >{{cad["CHF"]}}</td>
                <td class="text-left" >{{cad["NZD"]}}</td>
                <td class="text-left" >{{cad["GBP"]}}</td>
          
        </tr>
         <tr
        >
          <td class="font-weight-bold">SGD</td>
          
           <td class="text-left" >{{sgd["USD"]}}</td>
           <td class="text-left" >{{sgd["AUD"]}}</td>
            <td class="text-left" >{{sgd["CAD"]}}</td>
             <td class="text-left" >{{sgd["SGD"]}}</td>
              <td class="text-left" >{{sgd["EUR"]}}</td>
               <td class="text-left" >{{sgd["CHF"]}}</td>
                <td class="text-left" >{{sgd["NZD"]}}</td>
                 <td class="text-left" >{{sgd["GBP"]}}</td>
          
        </tr>
        <tr
        >
          <td class="font-weight-bold">EUR</td>
          
           <td class="text-left" >{{eur["USD"]}}</td>
           <td class="text-left" >{{eur["AUD"]}}</td>
            <td class="text-left" >{{eur["CAD"]}}</td>
             <td class="text-left" >{{eur["SGD"]}}</td>
              <td class="text-left" >{{eur["EUR"]}}</td>
               <td class="text-left" >{{eur["CHF"]}}</td>
                <td class="text-left" >{{eur["NZD"]}}</td>
                 <td class="text-left" >{{eur["GBP"]}}</td>
          
        </tr>
        <tr
        >
          <td class="font-weight-bold">CHF</td>
         
           <td class="text-left" >{{chf["USD"]}}</td>
            <td class="text-left" >{{chf["AUD"]}}</td>
            <td class="text-left" >{{chf["CAD"]}}</td>
             <td class="text-left" >{{chf["SGD"]}}</td>
              <td class="text-left" >{{chf["EUR"]}}</td>
               <td class="text-left" >{{chf["CHF"]}}</td>
                <td class="text-left" >{{chf["NZD"]}}</td>
                <td class="text-left" >{{chf["GBP"]}}</td>
          
        </tr>
        <tr
        >
          <td class="font-weight-bold">NZD</td>
         
           <td class="text-left" >{{nzd["USD"]}}</td>
            <td class="text-left" >{{nzd["AUD"]}}</td>
            <td class="text-left" >{{nzd["CAD"]}}</td>
             <td class="text-left" >{{nzd["SGD"]}}</td>
              <td class="text-left" >{{nzd["EUR"]}}</td>
               <td class="text-left" >{{nzd["CHF"]}}</td>
                <td class="text-left" >{{nzd["NZD"]}}</td>
                 <td class="text-left" >{{nzd["GBP"]}}</td>
          
        </tr>
         <tr
        >
          <td class="font-weight-bold">GBP</td>
         
           <td class="text-left" >{{gbp["USD"]}}</td>
            <td class="text-left" >{{gbp["AUD"]}}</td>
            <td class="text-left" >{{gbp["CAD"]}}</td>
             <td class="text-left" >{{gbp["SGD"]}}</td>
              <td class="text-left" >{{gbp["EUR"]}}</td>
               <td class="text-left" >{{gbp["CHF"]}}</td>
                <td class="text-left" >{{gbp["NZD"]}}</td>
                <td class="text-left" >{{gbp["GBP"]}}</td>
          
        </tr>
        <tr v-if="$store.state.crash==false">
          <td class="text-center">Median</td>
          <td class="text-left">{{((currency["AUD"]+aud["AUD"]+cad["AUD"]+sgd["AUD"]+eur["AUD"]+chf["AUD"]+nzd["AUD"]+gbp["AUD"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((currency["USD"]+aud["USD"]+cad["USD"]+sgd["USD"]+eur["USD"]+chf["USD"]+nzd["USD"]+gbp["USD"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((currency["CAD"]+aud["CAD"]+cad["CAD"]+sgd["CAD"]+eur["CAD"]+chf["CAD"]+nzd["CAD"]+gbp["CAD"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((currency["SGD"]+aud["SGD"]+cad["SGD"]+sgd["SGD"]+eur["SGD"]+chf["SGD"]+nzd["SGD"]+gbp["SGD"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((currency["EUR"]+aud["EUR"]+cad["EUR"]+sgd["EUR"]+eur["EUR"]+chf["EUR"]+nzd["EUR"]+gbp["EUR"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((currency["CHF"]+aud["CHF"]+cad["CHF"]+sgd["CHF"]+eur["CHF"]+chf["CHF"]+nzd["CHF"]+gbp["CHF"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((currency["NZD"]+aud["NZD"]+cad["NZD"]+sgd["NZD"]+eur["NZD"]+chf["NZD"]+nzd["NZD"]+gbp["NZD"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((currency["GBP"]+aud["GBP"]+cad["GBP"]+sgd["GBP"]+eur["GBP"]+chf["GBP"]+nzd["GBP"]+gbp["GBP"])/8).toFixed(5)}}</td>

        
        </tr>


        <tr v-else>
          <td class="text-center">Median</td>
          <td class="text-left">{{((aud["AUD"]+cad["AUD"]+sgd["AUD"]+eur["AUD"]+chf["AUD"]+nzd["AUD"]+gbp["AUD"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((aud["USD"]+cad["USD"]+sgd["USD"]+eur["USD"]+chf["USD"]+nzd["USD"]+gbp["AUD"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((aud["CAD"]+cad["CAD"]+sgd["CAD"]+eur["CAD"]+chf["CAD"]+nzd["CAD"]+gbp["AUD"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((aud["SGD"]+cad["SGD"]+sgd["SGD"]+eur["SGD"]+chf["SGD"]+nzd["SGD"]+gbp["SGD"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((aud["EUR"]+cad["EUR"]+sgd["EUR"]+eur["EUR"]+chf["EUR"]+nzd["EUR"]+gbp["EUR"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((aud["CHF"]+cad["CHF"]+sgd["CHF"]+eur["CHF"]+chf["CHF"]+nzd["CHF"]+gbp["CHF"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((aud["NZD"]+cad["NZD"]+sgd["NZD"]+eur["NZD"]+chf["NZD"]+nzd["NZD"]+gbp["NZD"])/8).toFixed(5)}}</td>
          <td class="text-left">{{((aud["GBP"]+cad["GBP"]+sgd["GBP"]+eur["GBP"]+chf["GBP"]+nzd["GBP"]+gbp["GBP"])/8).toFixed(5)}}</td>

        
        </tr>
        
      
      </tbody>
    </template>
  </v-simple-table>
  <v-row class="mt-4" no-gutters>
    <v-spacer></v-spacer>
    <div v-if="$store.state.crash==true">
       <v-card flat class="pa-2 text-h6 red--text">
         {{((((aud["AUD"]+cad["AUD"]+sgd["AUD"]+eur["AUD"]+chf["AUD"]+nzd["AUD"]+gbp["AUD"])/8)+((aud["USD"]+cad["USD"]+sgd["USD"]+eur["USD"]+chf["USD"]+nzd["USD"]+gbp["AUD"])/8)+((aud["CAD"]+cad["CAD"]+sgd["CAD"]+eur["CAD"]+chf["CAD"]+nzd["CAD"]+gbp["CAD"])/8)+((aud["SGD"]+cad["SGD"]+sgd["SGD"]+eur["SGD"]+chf["SGD"]+nzd["SGD"]+gbp["SGD"])/8)+((aud["EUR"]+cad["EUR"]+sgd["EUR"]+eur["EUR"]+chf["EUR"]+nzd["EUR"]+gbp["EUR"])/8)+((aud["CHF"]+cad["CHF"]+sgd["CHF"]+eur["CHF"]+chf["CHF"]+nzd["CHF"]+gbp["CHF"])/8)+((aud["NZD"]+cad["NZD"]+sgd["NZD"]+eur["NZD"]+chf["NZD"]+nzd["NZD"]+gbp["NZD"])/8)+((aud["NZD"]+cad["GBP"]+sgd["GBP"]+eur["GBP"]+chf["GBP"]+nzd["GBP"]+gbp["GBP"])/8))/8).toFixed(5)}}
       </v-card>
    </div>
    <div v-else>
        <v-card flat class="pa-2 text-h6">
          {{((((currency["AUD"]+aud["AUD"]+cad["AUD"]+sgd["AUD"]+eur["AUD"]+chf["AUD"]+nzd["AUD"]+gbp["AUD"])/8)+((currency["USD"]+aud["USD"]+cad["USD"]+sgd["USD"]+eur["USD"]+chf["USD"]+nzd["USD"]+gbp["USD"])/8)+((currency["CAD"]+aud["CAD"]+cad["CAD"]+sgd["CAD"]+eur["CAD"]+chf["CAD"]+nzd["CAD"]+gbp["CAD"])/8)+((currency["SGD"]+aud["SGD"]+cad["SGD"]+sgd["SGD"]+eur["SGD"]+chf["SGD"]+nzd["SGD"]+gbp["SGD"])/8)+((currency["EUR"]+aud["EUR"]+cad["EUR"]+sgd["EUR"]+eur["EUR"]+chf["EUR"]+nzd["EUR"]+gbp["EUR"])/8)+((currency["CHF"]+aud["CHF"]+cad["CHF"]+sgd["CHF"]+eur["CHF"]+chf["CHF"]+nzd["CHF"]+gbp["CHF"])/8)+((currency["NZD"]+aud["NZD"]+cad["NZD"]+sgd["NZD"]+eur["NZD"]+chf["NZD"]+nzd["NZD"]+gbp["NZD"])/8)+((currency["GBP"]+aud["GBP"]+cad["GBP"]+sgd["GBP"]+eur["GBP"]+chf["GBP"]+nzd["GBP"]+gbp["GBP"])/8))/8).toFixed(5)}}
        </v-card>
    </div>
    <v-spacer></v-spacer>
  </v-row>
    <!-- </v-row> -->
      </v-col>
    </v-row>
     </v-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'Home',
    data(){
      return {
        currency:[],
        aud:[],
        cad:[],
        sgd:[],
        eur:[],
        chf:[],
        nzd:[],
        gbp:[],
        loaded:false
      }
    },

    components: {
     
    },
    mounted(){
      axios.get('https://stoc3.herokuapp.com/').then(res=>{
        this.currency=res.data.rates
        this.loaded=true
        console.log(res.data)
      })
      axios.get('https://stoc3.herokuapp.com/data/aud').then(res=>{
        this.aud=res.data.rates
        console.log(res.data)
      })
      axios.get('https://stoc3.herokuapp.com/data/cad').then(res=>{
        this.cad=res.data.rates
      })
      axios.get('https://stoc3.herokuapp.com/data/sgd').then(res=>{
        this.sgd=res.data.rates
      })
      axios.get('https://stoc3.herokuapp.com/data/eur').then(res=>{
        this.eur=res.data.rates
      })
      axios.get('https://stoc3.herokuapp.com/data/chf').then(res=>{
        this.chf=res.data.rates
      })

      axios.get('https://stoc3.herokuapp.com/data/nzd').then(res=>{
        this.nzd=res.data.rates
      })
      axios.get('https://stoc3.herokuapp.com/data/gbp').then(res=>{
        this.gbp=res.data.rates
      })
    }
  }
</script>
<style>
.block{
  background: url('../assets/stock.jpg'),#6DB3F2;
  /* background: url('images/checked.png'), #6DB3F2; */
  background-size: cover;
  
}
.card {
 
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}


</style>