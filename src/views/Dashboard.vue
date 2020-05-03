<template>
  <div class="dashboard">
    <h1 class="headline grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout wrap row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              small
              dark
              color="grey"
              @click="sortBy('title')"
              v-on="on"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              small
              dark
              color="grey"
              @click="sortBy('person')"
              v-on="on"
            >
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person name</span>
        </v-tooltip>
      </v-layout>

      <v-card
        v-for="(project, index) in projects"
        :key="index"
        :class="`project ${project.status}`"
      >
        <v-card-text>
          <v-layout row wrap class="pa-3">
            <v-flex xs12 md6>
              <div class="caption grey--text">Project Title</div>
              <div class="black--text">{{ project.title }}</div>
            </v-flex>
            <v-flex xs6 sm2 md2>
              <div class="caption grey--text">Person</div>
              <div class="black--text">{{ project.person }}</div>
            </v-flex>
            <v-flex xs6 sm2 md2>
              <div class="caption grey--text">Due By</div>
              <div class="black--text">{{ project.due }}</div>
            </v-flex>
            <v-flex xs2 sm4 md2>
              <!--<div class="caption grey--text">Status</div>
              <div class="black--text">{{project.status}}</div>-->
              <div class="right">
                <v-chip
                  small
                  class="white--text caption my-2"
                  :color="get_color_status(project.status)"
                  >{{ project.status }}</v-chip
                >
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  data() {
    return {
      /*projects: [
        {
          title: "Design a new website",
          person: "Mekideche Imane",
          due: "1st May 2020",
          status: "ongoing",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae similique numquam veniam vel, necessitatibus, perspiciatis rerum ratione voluptas officiis temporibus eligendi itaque soluta aut quasi nam aperiam repellendus ipsa officia?"
        },
        {
          title: "Code up the homepage",
          person: "Amokrane Abdennour",
          due: "10th May 2020",
          status: "complete",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae similique numquam veniam vel, necessitatibus, perspiciatis rerum ratione voluptas officiis temporibus eligendi itaque soluta aut quasi nam aperiam repellendus ipsa officia?"
        },
        {
          title: "Design video thumbnails",
          person: "Meherhera Amina",
          due: "20th March 2020",
          status: "complete",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae similique numquam veniam vel, necessitatibus, perspiciatis rerum ratione voluptas officiis temporibus eligendi itaque soluta aut quasi nam aperiam repellendus ipsa officia?"
        },
        {
          title: "Create a community forum",
          person: "Boukhemia Hichem",
          due: "11 January 2020",
          status: "overdue",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae similique numquam veniam vel, necessitatibus, perspiciatis rerum ratione voluptas officiis temporibus eligendi itaque soluta aut quasi nam aperiam repellendus ipsa officia?"
        }
      ]*/
      projects: [],
    };
  },
  methods: {
    get_color_status(status) {
      if (status == "complete") return "#3cd1c2";
      else if (status == "ongoing") return "orange";
      else return "red";
    },

    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  created() {
    db.collection("projects").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>
