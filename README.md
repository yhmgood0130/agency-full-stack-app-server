# How to run this server

## Install dependencies

npm install

## Install Knex 

npm install -g knex

### Operating System

Windows 10

## Set up the PostgreSQL

If you don't have PostgreSQL installed and set up, it will require extra steps depending on the OS System. (Mainly it will be creating the user, setting up the role, and resetting the password).

For Windows, I was able to have an access to PostgreSQL by running 'psql -h localhost -U postgres' on cmd

Once you are successfully running and having an accesss to PostgreSQL,

Create database agency in PostgreSQL 

'CREATE DATABASE agency;' and

Run these two lines of code.

knex migrate:latest

And

knex seed:run

(If you have any issue, please run knex migrate:rollback and rerun migrate and seed again).

PS: I had a duplicate key value violates unique constraint "customer_pkey" in Customer table and it turns out there was duplicated ID :9848 in Customer.json...

## How to finally run the server

npm i -g nodemon

and

run 'nodemon' on CMD
