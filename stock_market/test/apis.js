const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json(
        {
            message: "Handling GET requests in /test."
        }
    );
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name
    }
    res.status(200).json(
        {
            message: "Handling POST requests in /test.",
            product_name: product.name
        }
    );
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    if (id == "special") {
        res.status(200).json({
            message: "You discovered special ID.",
            id: id
        });
    }
    else {
        res.status(200).json(
            {
                message: "You passed an ID"
            }
        )
    }
})

module.exports = router;