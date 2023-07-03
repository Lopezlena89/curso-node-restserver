const {Router}  = require('express');
const { usuariosGet,
        usuariosPut,
        usuariosaPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/',usuariosGet);
router.put('/:id',usuariosPut);
router.post('/',usuariosaPost);
router.delete('/',usuariosDelete);
router.patch('/',usuariosPatch);


module.exports = router;



