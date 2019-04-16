// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
      connection: {
        database: 'agency',
        user:     'bunny',
        password: 'hopper1234'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'agents',
        tableName: 'customers',
      }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// module.exports = {

//   development: {
//     client: 'pg',
//     connection: 'postgres://localhost'
//   },

//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL
//   }

// };