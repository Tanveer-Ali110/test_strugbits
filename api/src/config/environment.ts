/* eslint-disable node/no-process-env */
export default {
    nodeEnv: (process.env.NODE_ENV ?? ''),
    port: (Number(process.env.PORT) ?? 0),
    databaseSetting: {
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    },
    jwt: {
      secret: (process.env.JWT_SECRET ?? ''),
      exp: (process.env.COOKIE_EXP ?? ''), // exp at the same time as the cookie
    }
  } as const;
  