<template v-slot:activator="{ on }"><v-btn 
          v-on="on"
          color="primary"
            >
        Buy</v-btn></template>
          <v-container>
              <v-layout row>
                  <v-flex xs>
                      <v-card-title>
                     <h1 class="text--primary">Do you wan't to buy it?</h1>
                        </v-card-title>

                  </v-flex>
              </v-layout>
              <v-layout row>
                  <v-flex xs>
                      <v-card-text>
                        <v-text-field
                        name="name" 
                            label="Your name" 
                            type="text" 
                            v-model="name" 
                        >
                        </v-text-field>
                    <v-text-field
                    name="phone" 
                    label="Your phone" 
                    type="text" 
                v-model="phone" 
                v-model="phone" 
                </v-text-field>      
                    
                  </v-flex>
              </v-layout>
              <v-layout row>
                  <v-flex xs>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="onCancel">Close</v-btn>
                        <v-btn color="success" @click="onSave">Save</v-btn>
                        </v-card-actions> 
                    
                  </v-flex>
              </v-layout>
          </v-container>
<script>

    export default {
        props: ['ad'],
        data() {
            return {
                modal: false,
                editedTitle: this.ad.title,
                editedDesc: this.ad.desc

            }
    },
    methods: {
    onCancel (){
    this.editedTitle = this.ad.title
    this.editedDesc = this.ad.desc
    this.modal = false
    },
    onSave (){
    if (this.editedTitle !== '' && this.editedDesc !== '') {
    this.$store.dispatch('updateAd', {
            title: this.editedTitle,
            desc: this.editedDesc,
            id: this.ad.id
        })
    this.modal = false
            }
        }
    } 
}
</script>
