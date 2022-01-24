<template>
      <v-dialog
        v-model="modal"
        width="400px"
      >
       <template v-slot:activator="{ on }"><v-btn 
          v-on="on"
          color="warning"
          flat
          >
        Edit</v-btn></template>
          <v-card>
          <v-container>
              <v-layout row>
                  <v-flex xs>
                      <v-card-title>
                          <h1 class="text--primary">Edit Ad</h1>
                      </v-card-title>
                  </v-flex>
              </v-layout>
              <v-layout row>
                  <v-flex xs>
                      <v-card-text>
                          Lorem ipsum.
                      </v-card-text>          			
                  </v-flex>
              </v-layout>
              <v-layout row>
                  <v-flex xs>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="">Cancel</v-btn>
                          <v-btn color="success">Save</v-btn>
                      </v-card-actions>         			
                  </v-flex>
              </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
</template>
<script>

    export default {
        data() {
            return {
                modal: false
            }
        }
    }
    
</script>
