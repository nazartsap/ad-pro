<template> 
  <v-container>
    <v-layout row> 
      <v-flex xs12>
        <v-card class="mt-5">
              <v-img 
              height="300px"
              :src="ad.src">
              </v-img>
              <v-card-text>
                <h1 class="text--primary mb-5"> {{ ad.title }} </h1>
                <p> {{ ad.desc }} </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <modal-dialog>
                </modal-dialog>
                <v-btn text class="success">Buy</v-btn>
              </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'
export default {
    props:['id'],
    computed:{
        ad(){
            const id=this.id
            return this.$store.getters.adById(id)
        }
    },
  components: {
    'modal-dialog': EditAdModal
  }
} 
</script>
