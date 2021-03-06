const { Router } = require('express');
const {
  handlerGetAllUsers,
  handlerGetOneUser,
  handlerGetUserByEmail,
  handlerCreateUser,
  handlerDeleteUser,
  handlerUpdateUser,
} = require('./user.controller');

const router = Router();

router.get('/', handlerGetAllUsers)
router.get('/email', handlerGetUserByEmail)
router.get('/:id', handlerGetOneUser)
router.post('/', handlerCreateUser)
router.delete('/:id', handlerDeleteUser)
router.patch('/:id', handlerUpdateUser)

module.exports = router;