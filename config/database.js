module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfhj1v1gp3jh03lfr8ag-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_ryb7'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'VDCFGz9bZmYqMlpx9bqrqGktiCmCsL4R'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
