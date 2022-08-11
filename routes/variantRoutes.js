const router = require('express').Router();

const { createNewVariant } = require('../controllers/variantController');
const { isHasKey } = require('../middlewares/guard');
const { validateVariantInputs } = require('../middlewares/variantInput');


router.post('/new', isHasKey, validateVariantInputs, createNewVariant);

module.exports = router;