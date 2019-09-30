const models = require("../models");

function approveTransaction(req, res) {
  try {
    const { transactionId } = req.body;
    models[transactionId].status = 1;
    res.json({ route: "approve", suspicious: models[transactionId] });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: error.toString() });
  }
}

function blockTransaction(req, res) {
  try {
    const { transactionId } = req.body;
    models[transactionId].status = 2;
    res.json({ route: "approve", suspicious: models[transactionId] });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: error.toString() });
  }
}

function getTransactions(req, res) {
  const filterTransactions = Object.keys(models)
    .filter(key => !models[key].status)
    .reduce((prevObj, curKey) => {
      prevObj[curKey] = models[curKey];
      return prevObj;
    }, {});
  res.json({ route: "getTransactions", suspicious: filterTransactions });
}

module.exports = {
  approveTransaction,
  blockTransaction,
  getTransactions
};
