'use strict';

class Homepage {
  constructor() {
    this.inputBusca = element(by.id('auto-complete'));
    this.btnBusca = element(by.css('#form-buscar > button'));
  }

  buscarFilme(filme){
    this.inputBusca.sendKeys(filme);
    this.btnBusca.click();
  }

  visit() {
    browser.get('http://tghcastro.lojaintegrada.com.br/');
  }
}

module.exports = Homepage;
