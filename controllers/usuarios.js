const {response, request} = require('express');


const usuariosGet = ( req = request,res = response ) => {

    const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;
    
    res.json({
        msg:'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}
const usuariosPut = ( req,res ) => {

    const { id } = req.params;

    res.json({
        msg:'put API - usuarioPost',
        id
    });
}
const usuariosaPost = ( req,res ) => {
     
    const {nombre,edad} = req.body;
    res.json({
        msg:'post API - usuarioPut',
        nombre,
        edad
    });
}
const usuariosDelete = ( req,res ) => {
    res.json({
        msg:'delete API - usuarioDelete'
    });
}
const usuariosPatch = ( req,res ) => {
    res.json({
        msg:'patch API - usuarioPatch'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosaPost,
    usuariosDelete,
    usuariosPatch

}




