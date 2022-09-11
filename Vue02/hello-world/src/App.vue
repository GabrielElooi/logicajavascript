<template>
  <div id="app">
    <p>Aplicação aula</p>
    <exibir-nome> </exibir-nome>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ExibirNome from './components/ExibirNome.vue';

@Component({
  components: {
    ExibirNome
  }
})
export default class App extends Vue { }
