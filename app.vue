<template>
  <div>
    {{ storeData }}
    <br>
    {{ $t('hello') }}

    <div class="alert alert-primary" role="alert">
      測試Bootstrap是否有引入
    </div>
    <v-app>
      <v-btn>
        Vuetify的Button
      </v-btn>
    </v-app>
  </div>
</template>
<script setup>
// use Pinia
import { useSampleStore } from "~~/store/sample"
const store = useSampleStore();
const storeData = computed(() => store.data)

</script>

<style lang="scss">

</style>