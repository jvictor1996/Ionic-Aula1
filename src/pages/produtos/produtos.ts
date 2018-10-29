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

  id_categoria : number;
  produtos : Produto[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id_categoria = this.navParams.get('id');

    for (var item in PRODUTOS){
      if(PRODUTOS[item].categoria_id==this.id_categoria){
        this.produtos.push(PRODUTOS[item]);
      }
    }
  }

navProdutoDetalhe(produto : Produto){
  this.navCtrl.push('ProdutoDetalhePage',{produto : produto});
  }
}
