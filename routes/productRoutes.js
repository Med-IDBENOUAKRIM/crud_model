const router = require('express').Router();

const { getAllProducts, createProduct, deleteOneProduct, updateOneProduct, getVariantsOfProduct, getVariantProduct, listOneProduct } = require('../controllers/productController');
const { isHasKey } = require('../middlewares/guard');
const { validateProductInputs, validateUpdateProductInputs } = require('../middlewares/productInput');


router.get('/', isHasKey, getAllProducts);
router.post('/', isHasKey, validateProductInputs, createProduct);
router.delete('/:product_id', isHasKey, deleteOneProduct);
router.patch('/:product_id', isHasKey, validateUpdateProductInputs, updateOneProduct);
router.get('/:product_id/variants', isHasKey, getVariantsOfProduct);
router.get('/:product_id/variants/:variant_id', isHasKey, getVariantProduct);
router.get('/:product_id', isHasKey, listOneProduct);

module.exports = router;