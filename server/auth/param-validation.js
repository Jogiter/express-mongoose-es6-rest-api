const Joi = require('joi');

module.exports = {
  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required(),
    },
  },

  // POST /api/auth/register
  register: {
    body: {
      body: {
        username: Joi.string().required(),
        password: Joi.string().required()
      },
    },
  },
};
