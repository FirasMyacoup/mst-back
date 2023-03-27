'use strict';

const express = require('express');
const { claimed } = require('../models/index.js');
const router = express.Router();

router.get('/claimed', get);
router.get('/claimed/:id', getClaim);
router.post('/claimed', create);
router.put('/claimed/:id', update);
router.delete('/claimed/:id', deleted);

async function get(req, res) {
    let claimedList = await claimed.findAll();
    res.status(200).json(claimedList);
}

async function getClaim(req, res) {
    let id = parseInt(req.params.id);
    let claim = await claimed.findOne({ where: { id: id } });
    res.status(200).json(claim);
}

async function create(req, res) {
    let obj = req.body;
    let claim = await claimed.create(obj);
    res.status(201).json(claim);
}

async function update(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let claim = await claimed.update(obj, { where: { id: id } });
    res.status(200).json(claim);
}

async function deleted(req, res) {
    let id = parseInt(req.params.id);
    let claim = await claimed.destroy({ where: { id: id } });
    res.status(204).json(claim);
}

module.exports = router