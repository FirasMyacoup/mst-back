'use strict';

const express = require('express');
const { users } = require('../models/index');
const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

async function getUsers(req, res) {
    let usersList = await users.findAll();
    res.status(200).json(usersList);
}

async function getUser(req, res) {
    let id = parseInt(req.params.id);
    let user = await users.findOne({ where: { id: id } });
    res.status(200).json(user);
}

async function createUser(req, res) {
    let obj = req.body;
    let user = await users.create(obj);
    res.status(201).json(user);
}

async function updateUser(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let user = await users.update(obj, { where: { id: id } });
    res.status(200).json(user);
}

async function deleteUser(req, res) {
    let id = parseInt(req.params.id);
    let user = await users.destroy({ where: { id: id } });
    res.status(204).json(user);
}

module.exports = router;