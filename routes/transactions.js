var Router = require('express').Router;

var transactions = require('../controllers/transaction')

let transactionsRoutes = Router();

transactionsRoutes.post('/suspicious/approve', transactions.approveTransaction);

transactionsRoutes.post('/suspicious/block', transactions.blockTransaction);

transactionsRoutes.get('/suspicious', transactions.getTransactions);

module.exports = transactionsRoutes;
