'use strict ';

const express = require('express');
const { deals } = require('../models/index.js');
const router = express.Router();


router.get('/deals', getDeals);
router.get('/deals/:id', getDeal);
router.post('/deals', createDeal);
router.put('/deals/:id', updateDeal);
router.delete('/deals/:id', deleteDeal);

async function getDeals(req, res) {
    let dealsList = await deals.findAll();
    res.status(200).json(dealsList);
}

async function getDeal(req, res) {
    let id = parseInt(req.params.id);
    let deal = await deals.findOne({ where: { id: id } });
    res.status(200).json(deal);
}

async function createDeal(req, res) {
    let obj = req.body;
    let deal = await deals.create(obj);
    res.status(201).json(deal);
}

async function updateDeal(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let deal = await deals.update(obj, { where: { id: id } });
    res.status(200).json(deal);
}

async function deleteDeal(req, res) {
    let id = parseInt(req.params.id);
    let deal = await deals.destroy({ where: { id: id } });
    res.status(204).json(deal);
}

module.exports = router;