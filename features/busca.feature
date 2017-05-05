# language: pt
Funcionalidade: Busca

  Contexto: Estar na Loja Integrada
    Dado que eu esteja na Loja Integrada

  Cenário: Buscar um filme pelo nome completo
    Quando eu busco o filme "Senhor dos Anéis - As Duas Torres"
    Então visualizo o resultado de busca com apenas esse filme

  Cenário: Buscar um filme por parte do nome
    Quando eu busco pelo termo "Senhor"
    Então visualizo o resultado de busca com todos os filmes que tem esse termo
