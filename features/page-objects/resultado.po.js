'use strict';

class Resultado {
  constructor() {
    this.listagemProdutos = element.all(by.css('.listagem-linha'));
    this.nomeProdutos = element(by.css('#listagemProdutos > ul > li > ul > li > div > div.info-produto > a'));
  }

}

module.exports = Resultado;
