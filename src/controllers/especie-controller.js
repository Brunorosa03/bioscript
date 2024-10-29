import Especies from '../models/especie-model.js';

export const store = async (req, res) => {
    try {
        const especies = await Especies.create(req.body);
        return res.status(201).json(especies);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const index = async (req, res) => {
    try {
        const especies = await Especies.find().exec();
        return res.status(200).json(especies);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const update = async (req, res) => {
    try {
        const especies = await Especies.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(especies);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const destroy = async (req, res) => {
    try {
        const especies = await Especies.findByIdAndDelete(req.params.id).exec();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};