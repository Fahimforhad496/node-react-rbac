const Joi = require("joi");

const schema = Joi.object().keys({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    username: Joi.string().min(3).max(30).required(),
    address: Joi.string().min(3).max(30).required(),
    phoneNumber: Joi.string().min(3).max(30).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
        .required(),
    roleName: Joi.string().min(3).max(30).required(),
    roleId: Joi.string().min(3).max(30).required(),
    roleAlias: Joi.string().required(),
    password: Joi.string().min(3).max(30).required(),
});

const validate = (data) => {
    const result = schema.validate(data);
    data.createdAt = new Date();
    data.updatedAt = new Date();
    result.value = data;
    return result;
};

module.exports = validate;