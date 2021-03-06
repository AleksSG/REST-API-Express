const router = require('express-promise-router')();

const {
    index, newUser, getUser, replaceUser
} = require('../controllers/user');

router.get('/', index);
router.post('/', newUser);

router.get('/:userId', getUser);
router.put('/:userId', replaceUser);

module.exports = router;