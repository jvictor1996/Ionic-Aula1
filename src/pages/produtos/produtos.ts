import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PRODUTOS } from '../../config/api.config';
import { Produto } from '../../model/produto';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  produtos: Produto[] = PRODUTOS;

  /*
  recarrregar a pagina
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }*/
navProdutoDetalhe(produto : Produto){
  this.navCtrl.push('ProdutoDetalhePage',{produto : produto});
  }
}
