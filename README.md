# Marketplace

![BannerImg]

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

# Sobre
Marketplace é um projeto desenvolvido por e disponibilizado por [Progamo](https://progamo.com.br/).


# As tecnologias ultilisadas foram:

* No back-end usamos o [NodeJS](https://nodejs.org/en/)
* Na web usamos o [ReactJS](https://reactjs.org/)
* No mobile usamos o [React-Native](https://reactnative.dev/)

## Como utilizar?

Para utilizar é simples, vamos lá:

Clone o repósitorio na sua maquina usando:
```
git@github.com:progamo/mypdv.git
```

### Iniciando o back-end

Agora vamos dar inicio ao back-end.
Entre na pasta ``server`` pelo terminal e teremos que instalar as dependências dela, para isso digite:
```
yarn install
```
Agora temos que iniciar todas as migrates com o seguinte comando:
```
yarn typeorm migration:run
```
Feito? Ok.
Agora sim vamos dar o start. Digite:
```
yarn dev:server
```

## Release History

* 0.1.0
    * Configure Express
    * CHANGE: Rename `foo()` to `bar()`
* 0.0.1
    * Work in progress

## Informações

* Devoloper: [Manoel Neto](https://github.com/progamo/)
* Web Site: [Progamo](https://www.progamo.com.br)
* Contato: contato@progamo.com.br

Distributed under the XYZ license. See ``LICENSE`` for more information.



<!-- Markdown link & img dfn's -->
[BannerImg]: https://img.ibxk.com.br/2018/01/22/22134438514083.jpg?w=1120&h=420&mode=crop&scale=both

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki

