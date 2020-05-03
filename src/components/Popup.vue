<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn text class="primary" v-on="on">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>Add a new project</v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Informations"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>
          <v-menu>
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="due"
                v-on="on"
                label="Due Date"
                prepend-icon="date_range"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer />
          <v-btn
            text
            class="mx-0 mt-3 primary"
            @click="submit"
            :loading="loading"
            >Add Project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import db from "@/fb";
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        //console.log(this.title, this.content);
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: "Mekideche Aya",
          status: "ongoing",
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            //console.log ('added to db')
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded')
          });
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    },
  },
};
</script>
