module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '518f2e7495812108e17925c05549a3a5'),
  },
});
