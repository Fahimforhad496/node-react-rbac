const models = require("../models/data-models");
const { RoleViewModel } = require("../models/view-models/role-view-model");
const { NotFound } = require("../utils/errors");
const Model = models.Role;

const getAll = async () => {
    const items = await Model.find();
    let viewModels = items.map((item) => RoleViewModel.convert(item));
    return viewModels;
};

const save = async (role) => {
    const model = await Model.createNew(role);
    const savedItem = await model.save();
    return savedItem._id;
};

const update = async (role) => {
    const id = role.id;
    let model = await Model.findById(id);
    if (model) {
        model.name = role.name;
        model.updatedAt = Date.now().toString();
        model.save();
        return model._id;
    }
    throw new NotFound("Role not found by the id: " + id);
};

const deleteById = async (id) => {
    let model = await Model.findById(id);
    if (model) {
        let result = await Model.deleteOne({ _id: id });
        return result;
    }

    throw new NotFound("Role not found by the id: " + id);
};
const getById = async (id) => {
    let model = await Model.findById(id);
    let viewModel = RoleViewModel.convert(model);
    return viewModel;
};

module.exports = { getAll, save, update, deleteById, getById };
