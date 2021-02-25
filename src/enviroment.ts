/**
 * Build enviroment
 */
const enviroment = {
  api: (process.env.api as any) as { url: string },
  stage: process.env.stage,
  development: process.env.NODE_ENV != 'production'
};

export { enviroment };
