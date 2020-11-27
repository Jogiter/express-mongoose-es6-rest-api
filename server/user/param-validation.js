const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      openid: Joi.string().required(),
      username: Joi.string().required(),
      mobileNumber: Joi.string()
        .regex(/^[1-9][0-9]{9}$/)
        .required(),
    },
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      openid: Joi.string().required(),
      username: Joi.string(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/),
    },
    params: {
      userId: Joi.string().hex().required(),
    },
  },
};
