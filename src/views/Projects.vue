<template>
  <div class="projects">
    <h1 class="headline grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="(project, index) in myProjects" :key="index">
          <v-expansion-panel-header>{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="font-weight-bold">Due by {{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb'
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
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Mekideche Imane";
      });
    },
  },
  created() {
    db.collection("projects").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};
</script>
