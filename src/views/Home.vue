<template>
  <div>
    <div class="block animate__animated animate__fadeIn">
     <v-container>
        <v-row style="height:88.5vh;color:white" class="" no-gutters align="center" justify="center">
      <v-col cols="12" xl="6" lg="6" class="animate__animated animate__fadeIn animate__slower">
        <p style="font-weight:bold" class="text-h2 animate__animated animate__fadeInLeft">The <span style="color:#5CAB90">world's</span> most powerful exchange service</p>
        <p style="font-size:17px;margin-right:20%">Get the most accurate market data, alerts,conversions,tools and more - all on this platform</p>
        <v-row no-gutters>
          <v-text-field flat class="text-caption font-weight-bold" placeholder="Email Address" dense solo></v-text-field>
          <v-btn style="text-transform:none;" class="ml-3 text-caption" height="39" color="#5CAB90" dark large>Try now!  </v-btn>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
      <v-col cols="12" xl="6" lg="6">
        
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
          <th>AUD</th>
          <th>USD</th>
          <th>CAD</th>
          <th>SGD</th>
          <th>EUR</th>
          <th>CHF</th>
          <th>NZD</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
         <tr
        >
          <td>USD<span class="font-weight-bold">AUD</span></td>
          <td >{{currency["USDAUD"]}}</td>
        </tr>
        <tr
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
        </tr>
        
      
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
        currency:[]
      }
    },

    components: {
     
    },
    mounted(){
      axios.get('https://stoc3.herokuapp.com/').then(res=>{
        this.currency=res.data.quotes
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