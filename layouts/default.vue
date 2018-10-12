<template>
  <div>
    <global-header></global-header>
    <nuxt/>
  </div>
</template>

<script>
import GlobalHeader from '~/components/GlobalHeader';

export default {
  components: {
    GlobalHeader,
  },
};
</script>


<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
</style>
