import Expedition from '../models/expedition-model.js';

export const store = async (req, res) => {
    try {
        const expeditions = await Expedition.create(req.body);
        return res.status(201).json(expeditions);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const index = async (req, res) => {
    try {
        const expeditions = await Expedition.find().exec();
        return res.status(200).json(expeditions);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const update = async (req, res) => {
    try {
        const expeditions = await Expedition.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(expeditions);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const destroy = async (req, res) => {
    try {
        const expeditions = await Expedition.findByIdAndDelete(req.params.id).exec();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};