let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

let fs = require('fs');
function writeScreenShot(data, filename) {
  let stream = fs.createWriteStream(filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

const Homepage = require('../page_objects/homepage.po.js');
const Resultado = require('../page_objects/resultado.po.js');

module.exports = function() {
  const homepage = new Homepage();
  const resultado = new Resultado();

  this.Given('que eu esteja na Loja Integrada', function () {
         homepage.visit()
         browser.takeScreenshot().then(function (png) {
             writeScreenShot(png, 'screens/home.png');
         });
       });

  this.When(/^eu busco o filme "([^"]*)"$/, function (filme) {
         homepage.buscarFilme(filme)
         browser.takeScreenshot().then(function (png) {
             writeScreenShot(png, 'screens/busca.png');
         });
       });

  this.Then(/^visualizo o resultado de busca com apenas esse filme$/,  {timeout: 70 * 1000}, function(callback) {
         expect(resultado.listagemProdutos.count()).to.eventually.equal(1);
         expect(resultado.nomeProdutos.getText()).to.eventually.contain('Senhor dos Anéis - As Duas Torres')
          .and.notify(callback);
          browser.takeScreenshot().then(function (png) {
              writeScreenShot(png, 'screens/resultado_busca_filme.png');
          });
       });

  this.When(/^eu busco pelo termo "([^"]*)"$/, function (termo, callback) {
        homepage.buscarFilme(termo)
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'screens/busca.png');
        });
        callback();
          });

  this.Then(/^visualizo o resultado de busca com todos os filmes que tem esse termo$/, {timeout: 70 * 1000}, function (callback) {
        expect(resultado.listagemProdutos.count()).to.eventually.equal(2)
         .and.notify(callback);
          });

};
