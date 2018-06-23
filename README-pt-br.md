# VStore Server

Uma API REST em nodejs criado para gerenciaruma loja de produtos

## Traduções

Este README está disponível em outras linguas:

- [LEIAME](https://gitlab.com/vstore/vstore-server/blob/master/README.md) (Inglês)

## Pré-requisitos

* [Nodejs](https://nodejs.org/en/download/) versão >= 8.11.3
* MySQL or Mariadb
    * [MySQL](https://dev.mysql.com/downloads/mysql/) versão >= 5.6
    * [MariaDB](https://downloads.mariadb.org/) versão >= 10.3

## Instalação

1 - Para isntalar as dependências execute o comando abaixo

```sh
  npm install
```

2 - Depoisdisso edite o arquivo *.env*

3 - Crie o banco de dados usando o script [schema.sql](https://gitlab.com/vstore/vstore-server/blob/master/scripts/schema.sql) dentro da pasta  scripts

```sh
  mysql -u YOUR_USER -p < scripts/schema.sql
```

## Iniciando a aplicação

Para iniciar a aplicação execute o comando abaixo

```sh
  npm start
```
