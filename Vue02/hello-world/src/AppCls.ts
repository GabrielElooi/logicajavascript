import { Component, Vue } from 'vue-property-decorator';

import ExibirNome from './components/ExibirNome.vue';

interface CadastroClienteInterface{
    nome: string
}

@Component({
  components: {
    ExibirNome
  }
})
export default class App extends Vue {

public rsClientes: Array<CadastroClienteInterface> = []

constructor() {
    super()

    this.rsClientes.push({nome: 'Fleek Cursos'})
    this.rsClientes.push({nome: 'Gabriel'})
    this.rsClientes.push({nome: 'Rodrigo'})
    this.rsClientes.push({nome: 'João'})
    this.rsClientes.push({nome: 'Ana'})
}
  
 }