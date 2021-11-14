# Desafio Klever - FrontEnd

As tecnologias utilizadas foram:

- React
- Redux
- TailwindCSS
- [Requisição de API](https://docs.awesomeapi.com.br/api-de-moedas)
- Jest
- MirajeJS (removido devido a conflitos com a API) para emular o backend

## Sobre o desafio

O desafio técnico consistia em criar uma aplicação Web que efetue um CRUD (Create, Read, Update and Delete), essa aplicação devia ser elaborada em React e consumir uma API, deve também ser utilizado validação de Inputs e Redux. 

Houve problemas na hora da implementação devido ao server do MirajeJS entrar em conflito com a API utilizada na aplicação, foi removido porém ainda estão mantido no histórico de commits a utilização.

Como ponto adicional, reescrevemos o codigo base para tirar melhor proveito de alguns hooks padrões do React e testes unitários com Jest na tela de Login.

## [Screenshots da Aplicação](/screenshots/)

---
## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `yarn start`

Executa o aplicativo no modo de desenvolvimento. \
Abra [http: // localhost: 3000] (http: // localhost: 3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições. \
Você também verá quaisquer erros de lint no console.

ATENÇÃO! Esse projeto foi desenvolvido para fins de estudo e por isso, NÃO POSSUI DESING RESPONSIVO! Por esse motivo ele ainda não foi disponibilizado como Deploy. A depender do dispositivo pode haver quebra de estilos e de desing. Por favor, aguarde o deploy ou inicie o diretório sabendo que há a possibilidade dele ser seus estilos refatorados.

### `yarn test`

Inicia o executor de teste no modo de observação interativo. \
Consulte a seção sobre [execução de testes] (https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

Para fins de disponibilização, há apenas um arquivo de teste, contentdo 2 suites, 7 testes no total, apenas 4 testes estão passando. Sim, é de propósito. Caso esteja usando esse projeto como base, é o código que está errado, não o teste :D

### `yarn build`

Compila o aplicativo para produção na pasta `build`. \
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes. \
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação] (https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

### `yarn eject`

** Nota: esta é uma operação unilateral. Depois de `ejetar`, você não pode mais voltar! **

Se não estiver satisfeito com a ferramenta de construção e as opções de configuração, você pode `ejetar` a qualquer momento. Este comando removerá a dependência de compilação única de seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente em seu projeto para que você tenha total controle sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles irão apontar para os scripts copiados para que você possa ajustá-los. Neste ponto, você está sozinho.

Você nunca precisa usar `ejetar`. O conjunto de recursos selecionados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para ela.

## Saber mais

Você pode aprender mais na [documentação do aplicativo Criar React] (https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender o React, verifique a [documentação do React] (https://reactjs.org/).
