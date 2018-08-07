//BASE DE DATOS
var express = require("express");
var joya = require("./models/joyeria");
var producto = require("./models/produccion");
var venta = require("./models/ventas")

var passport = require("passport");
var acl = require("express-acl");

var router = express.Router();

//ROLES





//LOGIN
router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", passport.authenticate("login", {
    successRedirect :"/",
    failureRedirect : "/login",
    failureFlash: true
}));

//REGISTRAR
router.get("/registro", (req, res) => {
    res.render("registro");
});

router.post("/registro", (req, res, next)=>{
    var usuario = req.body.usuario;
    var password = req.body.password;
    var rol = req.body.rol;

    Usuario.findOne({usuario: usuario}, (err, zombie) => {
        if(err){
            return next(err);
        }
        if(usuario){
            req.flash("error", "El nombre de usuario ya está en uso");
            return res.redirect("/registro");
        }
        var newUsuario = new Usuario({
            usario: usuario,
            password: password,
            rol: rol
        });
        newUsuario.save(next);
        return res.redirect("/");
    });
});
