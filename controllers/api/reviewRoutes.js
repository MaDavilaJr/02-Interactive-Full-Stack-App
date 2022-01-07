const router = require('express').Router();
const { Review } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const reviews = await Review.findAll();
      res.status(200).json(reviews);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/', async (req, res) => {
    try {
      const newReview = await Review.create({
        ...req.body,
        user_id: req.session.user_id,
        location_id: req.body.location_id
      });
  
      res.status(200).json(newReview);

    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;