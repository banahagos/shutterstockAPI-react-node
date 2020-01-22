const express = require('express');
const router = express.Router();
require('dotenv').config()

/* Shutterstock API authentication */
const sstk = require("shutterstock-api");
const applicationConsumerId = process.env.CONSUMER_KEY;
const applicationConsumerSecret = process.env.CONSUMER_SECRET;
sstk.setBasicAuth(applicationConsumerId, applicationConsumerSecret);

/* GET search results. */
router.get('/', async (req, res, next) => {
  try {
    if(req.query.searchTerm !== ''){
      const imagesApi = new sstk.ImagesApi();
      const data = await imagesApi.searchImages({ query: req.query.searchTerm })
      res.json(data.data);
    } else {
      res.json([])
    }
    
  } catch (err) {
    res.json(err)
  }
});

module.exports = router;
