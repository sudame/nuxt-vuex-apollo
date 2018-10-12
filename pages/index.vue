<template>
  <section class="section">
    <!-- ボタンをクリックするとgetProjectsListが発火 -->
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
    // vuexからprojectsを読み込み
    ...mapState(['projects']),
  },
  methods: {
    // vuexからgetProjectsListを読み込み
    ...mapActions(['getProjectsList']),
  },
};
</script>

<style>
.projects-list {
  margin: 0.5rem auto;
}
</style>
