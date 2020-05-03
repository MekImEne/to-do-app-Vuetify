<template>
  <div class="team">
    <h1 class="headline grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(person,index) in team" :key="index">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="title">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Mekideche Imane",
          role: "Graphic Designer",
          avatar: "/avatar-3.png"
        },
        {
          name: "Amokrane Abdennour",
          role: "Web developer",
          avatar: "/avatar-1.png"
        },
        {
          name: "Meherhera Amina",
          role: "Web developer",
          avatar: "/avatar-2.png"
        },
        {
          name: "Boukhemia Hichem",
          role: "Sales guru",
          avatar: "/avatar-4.png"
        },
        {
          name: "Seba Ikram",
          role: "Social Media maverick",
          avatar: "/avatar-5.png"
        }
      ]
    };
  }
};
</script>
