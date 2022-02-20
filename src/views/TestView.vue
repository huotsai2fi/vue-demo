<template>
  <div class="test">
    <h1>This is a test page</h1>
    {{ message }}{{ count }}
    {{ $store.state.message }}
    {{ $store.getters.title }}
    {{ coolMessage }}
    {{ $store.getters.fullTitle }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'message',
      'count',
    ]),
    coolMessage() {
      return this.$store.getters.fullTitle;
    },
  },
};
</script>
