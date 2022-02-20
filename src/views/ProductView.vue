<template>
  <h1>ProductId: {{ $route.params.productId }}</h1>
  <router-link :to="`/products/${$route.params.productId}/comments`">Product Comment</router-link>
  <router-view></router-view>
  {{ info }}
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => { this.info = response.data; });
  },
};

</script>
