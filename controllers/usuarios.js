const {response, request} = require('express');
const Usuario = require('../models/usuario');


const usuariosGet = ( req = request,res = response ) => {

    const {q,nombre = 'No name',apikey,page = 1, limit} = req.query;

    res.json({
        msg:'Get API - usuarioGet',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}
    
const usuariosPut = ( req,res = response ) => {

    res.json({
        msg:'Put API - usuarioPut'
    });
}
const usuariosPost = async( req,res = response ) => {

    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
        usuario
    });
   
}
const usuariosDelete = ( req,res=response ) => {

    const {id} = req.params;

    res.json({
        msg:'delete API - usuarioDelete',
        id
    });
}
const usuariosPatch = ( req,res=response ) => {
    res.json({
        msg:'patch API - usuarioPatch'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch

}




