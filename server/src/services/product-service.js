const models = require("../models/data-models");
const { ProductViewModel } = require("../models/view-models/product-view-model");
const { NotFound } = require("../utils/errors");
const Model = models.Product;

const getAll = async () => {
    const items = await Model.find();
    let viewModels = items.map((item) => ProductViewModel.convert(item));
    return viewModels;
};

const save = async (product) => {
    const model = await Model.createNew(product);
    const savedItem = await model.save();
    return savedItem._id;
};

const update = async (product) => {
    const id = product.id;
    let model = await Model.findById(id);
    if (model) {
        model.name = product.name;
        model.cost = product.cost;
        model.sku = product.sku;
        model.updatedAt = Date.now().toString();
        model.save();
        return model._id;
    }
    throw new NotFound("Product not found by the id: " + id);
};

const deleteById = async (id) => {
    let model = await Model.findById(id);
    if (model) {
        let result = await Model.deleteOne({ _id: id });
        return result;
    }

    throw new NotFound("Product not found by the id: " + id);
};
const getById = async (id) => {
    let model = await Model.findById(id);
    let viewModel = ProductViewModel.convert(model);
    return viewModel;
};

module.exports = { getAll, save, update, deleteById, getById };
