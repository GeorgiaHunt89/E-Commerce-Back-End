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
  
// Get router to find single tag by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
    // Includes associated Products data
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tags found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post router to create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post router to update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await tag.update({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'Cannot update tag with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
