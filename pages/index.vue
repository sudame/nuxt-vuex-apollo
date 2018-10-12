<template>
  <section class="section">
    <button @click="getProjectsList">get</button>
    <div class="projects-list" v-for="project in projects" :key="project.id">
      {{ project }}
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['projects']),
  },
  methods: {
    ...mapActions(['getProjectsList']),
  },
};
</script>

<style>
.projects-list {
  margin: 0.5rem auto;
}
</style>
