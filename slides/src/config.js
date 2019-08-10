const isProd = process.env.NODE_ENV === 'production';

export default {
  isProd,
  publicPath: '/slides',
};
