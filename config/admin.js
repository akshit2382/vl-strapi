module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5fe21fc239f41d7cfeec3db49853a72b'),
  },
});
