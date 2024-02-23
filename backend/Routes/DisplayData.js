const express = require('express')
const router = express.Router();
router.post('/medData', (req, res) => {
    try {
        // console.log(global.med)
        res.send([global.med])
    } catch (error) {
        console.log(error.message)
    }
});

module.exports = router
