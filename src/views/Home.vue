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
      <v-row class="animate__animated animate__fadeIn animate__slow" v-if="currency.length==0" align="center" justify="center" style="height:30vh">
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
          
          <td  class="text-left" >{{currency["USDUSD"]}}</td>
          <td class="text-left" >{{currency["USDAUD"]}}</td>
          <td class="text-left" >{{currency["USDCAD"]}}</td>
           <td class="text-left" >{{currency["USDSGD"]}}</td>
            <td class="text-left" >{{currency["USDEUR"]}}</td>
             <td class="text-left" >{{currency["USDCHF"]}}</td>
              <td class="text-left" >{{currency["USDNZD"]}}</td>
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
          
        </tr>
        <tr v-if="$store.state.crash==true">
          <td class="text-center">Median</td>
          <td class="text-left">{{((currency["USDAUD"]+aud["AUD"]+cad["AUD"]+sgd["AUD"]+eur["AUD"]+chf["AUD"]+nzd["AUD"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((currency["USDUSD"]+aud["USD"]+cad["USD"]+sgd["USD"]+eur["USD"]+chf["USD"]+nzd["USD"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((currency["USDCAD"]+aud["CAD"]+cad["CAD"]+sgd["CAD"]+eur["CAD"]+chf["CAD"]+nzd["CAD"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((currency["USDSGD"]+aud["SGD"]+cad["SGD"]+sgd["SGD"]+eur["SGD"]+chf["SGD"]+nzd["SGD"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((currency["USDEUR"]+aud["EUR"]+cad["EUR"]+sgd["EUR"]+eur["EUR"]+chf["EUR"]+nzd["EUR"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((currency["USDCHF"]+aud["CHF"]+cad["CHF"]+sgd["CHF"]+eur["CHF"]+chf["CHF"]+nzd["CHF"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((currency["USDNZD"]+aud["NZD"]+cad["NZD"]+sgd["NZD"]+eur["NZD"]+chf["NZD"]+nzd["NZD"])/7).toFixed(5)}}</td>

        <td class="font-weight-bold">
          {{((((currency["USDAUD"]+aud["AUD"]+cad["AUD"]+sgd["AUD"]+eur["AUD"]+chf["AUD"]+nzd["AUD"])/7)+((currency["USDUSD"]+aud["USD"]+cad["USD"]+sgd["USD"]+eur["USD"]+chf["USD"]+nzd["USD"])/7)+((currency["USDCAD"]+aud["CAD"]+cad["CAD"]+sgd["CAD"]+eur["CAD"]+chf["CAD"]+nzd["CAD"])/7)+((currency["USDSGD"]+aud["SGD"]+cad["SGD"]+sgd["SGD"]+eur["SGD"]+chf["SGD"]+nzd["SGD"])/7)+((currency["USDEUR"]+aud["EUR"]+cad["EUR"]+sgd["EUR"]+eur["EUR"]+chf["EUR"]+nzd["EUR"])/7)+((currency["USDCHF"]+aud["CHF"]+cad["CHF"]+sgd["CHF"]+eur["CHF"]+chf["CHF"]+nzd["CHF"])/7)+((currency["USDNZD"]+aud["NZD"]+cad["NZD"]+sgd["NZD"]+eur["NZD"]+chf["NZD"]+nzd["NZD"])/7))/7).toFixed(5)}}
        </td>
        </tr>


        <tr v-else>
          <td class="text-center">Median</td>
          <td class="text-left">{{((aud["AUD"]+cad["AUD"]+sgd["AUD"]+eur["AUD"]+chf["AUD"]+nzd["AUD"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((aud["USD"]+cad["USD"]+sgd["USD"]+eur["USD"]+chf["USD"]+nzd["USD"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((aud["CAD"]+cad["CAD"]+sgd["CAD"]+eur["CAD"]+chf["CAD"]+nzd["CAD"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((aud["SGD"]+cad["SGD"]+sgd["SGD"]+eur["SGD"]+chf["SGD"]+nzd["SGD"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((aud["EUR"]+cad["EUR"]+sgd["EUR"]+eur["EUR"]+chf["EUR"]+nzd["EUR"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((aud["CHF"]+cad["CHF"]+sgd["CHF"]+eur["CHF"]+chf["CHF"]+nzd["CHF"])/7).toFixed(5)}}</td>
          <td class="text-left">{{((aud["NZD"]+cad["NZD"]+sgd["NZD"]+eur["NZD"]+chf["NZD"]+nzd["NZD"])/7).toFixed(5)}}</td>

        <td class="font-weight-bold">
          {{((((aud["AUD"]+cad["AUD"]+sgd["AUD"]+eur["AUD"]+chf["AUD"]+nzd["AUD"])/7)+((aud["USD"]+cad["USD"]+sgd["USD"]+eur["USD"]+chf["USD"]+nzd["USD"])/7)+((aud["CAD"]+cad["CAD"]+sgd["CAD"]+eur["CAD"]+chf["CAD"]+nzd["CAD"])/7)+((aud["SGD"]+cad["SGD"]+sgd["SGD"]+eur["SGD"]+chf["SGD"]+nzd["SGD"])/7)+((aud["EUR"]+cad["EUR"]+sgd["EUR"]+eur["EUR"]+chf["EUR"]+nzd["EUR"])/7)+((aud["CHF"]+cad["CHF"]+sgd["CHF"]+eur["CHF"]+chf["CHF"]+nzd["CHF"])/7)+((aud["NZD"]+cad["NZD"]+sgd["NZD"]+eur["NZD"]+chf["NZD"]+nzd["NZD"])/7))/7).toFixed(5)}}
        </td>
        </tr>
        <!-- <tr
        >
          <td >USD<span class="font-weight-bold">USD</span></td>
          <td></td>
          <td >{{currency["USDUSD"]}}</td>
        </tr>
        
        <tr
        >
          <td>USD<span class="font-weight-bold">CAD</span></td>
          <td></td>
          <td></td>
          <td >{{currency["USDCAD"]}}</td>
        </tr>
        <tr
        >
          <td>USD<span class="font-weight-bold">SGD</span></td>
          <td></td>
          <td></td>
          <td></td>
          <td >{{currency["USDSGD"]}}</td>
        </tr>
         <tr
        >
          <td>USD<span class="font-weight-bold">EUR</span></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td >{{currency["USDEUR"]}}</td>
        </tr>
         <tr
        >
          <td>USD<span class="font-weight-bold">CHF</span></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td >{{currency["USDCHF"]}}</td>
        </tr>
         <tr
        >
          <td>USD<span class="font-weight-bold">NZD</span></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td >{{currency["USDNZD"]}}</td>
        </tr>
        <tr
        >
          <td class="green--text font-weight-bold">MEDIA</td>
          <td>Total:7</td>
          <td>Total:7</td>
          <td>Total:7</td>
          <td>Total:7</td>
          <td>Total:7</td>
          <td>Total:7</td>
          <td>Total:7</td>
          <td class="font-weight-bold" ><span class="text-caption">Total of Media:</span> {{((currency["USDUSD"]+currency["USDAUD"]+currency["USDCAD"]+currency["USDSGD"]+currency["USDEUR"]+currency["USDCHF"]+currency["USDNZD"])/7).toFixed(5)}}</td>
        </tr> -->
        
      
      </tbody>
    </template>
  </v-simple-table>
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
        nzd:[]
      }
    },

    components: {
     
    },
    mounted(){
      axios.get('https://stoc3.herokuapp.com/').then(res=>{
        this.currency=res.data.quotes
      })
      axios.get('https://stoc3.herokuapp.com/data/aud').then(res=>{
        this.aud=res.data.rates
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