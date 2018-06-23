# VStore Server

A node.js REST API create to manager a products store

## Translations

This README is also available in other languages:

- [LEIAME](https://gitlab.com/vstore/vstore-server/blob/master/README-pt-br.md) (Brazilian Portuguese)

## Prerequisites

* [Nodejs](https://nodejs.org/en/download/) version >= 8.11.3
* MySQL or Mariadb
    * [MySQL](https://dev.mysql.com/downloads/mysql/) version >= 5.6
    * [MariaDB](https://downloads.mariadb.org/) version >= 10.3

## Install

1 - To install the dependencies run below command

```sh
  npm install
```

2 - After that edit *.env* file

3 - Create a database using the script [schema.sql](https://gitlab.com/vstore/vstore-server/blob/master/scripts/schema.sql) inside the folder scripts

```sh
  mysql -u YOUR_USER -p < scripts/schema.sql
```

## Start application

To start the application run below command

```sh
  npm start
```
