let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

const Homepage = require('../page_objects/homepage.po.js');
const Resultado = require('../page_objects/resultado.po.js');

module.exports = function() {
  const homepage = new Homepage();
  const resultado = new Resultado();

  this.Given('que eu esteja na Loja Integrada', function () {
         homepage.visit()
       });

  this.When(/^eu busco o filme "([^"]*)"$/, function (filme) {
         homepage.buscarFilme(filme)
       });

  this.Then(/^visualizo o resultado de busca com apenas esse filme$/,  {timeout: 50 * 1000}, function(callback) {
         expect(resultado.listagemProdutos.count()).to.eventually.equal(1);
         expect(resultado.nomeProdutos.getText()).to.eventually.contain('Senhor dos Anéis - As Duas Torres')
          .and.notify(callback);
       });

};
