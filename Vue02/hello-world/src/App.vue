<template>
  <div id="app">
    <p>Aplicação aula</p>
    <exibir-nome v-for="(cliente,chave) in rsClientes" :nome="cliente.nome" v-if="chave == 2"></exibir-nome>
  </div>
</template>

<script lang="ts">
import AppCls from './AppCls'
export default AppCls
</script>