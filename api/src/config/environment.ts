/* eslint-disable node/no-process-env */
export default {
  nodeEnv: process.env.NODE_ENV ?? "",
  port: Number(process.env.PORT) ?? 0,
  MONGODB_URI: String(process.env.MONGODB_URI) ?? "",
} as const;
