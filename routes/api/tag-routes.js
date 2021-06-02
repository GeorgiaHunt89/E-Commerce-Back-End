const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get router to find all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
    // Includes associated Products data
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tags found' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
