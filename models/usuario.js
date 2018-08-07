var bcrypt = require ("bcrypt-nodejs");
var mongoose = require ("mongoose");

var SALT_FACTOR = 10;

var usuarioSchema = mongoose.Schema({
    usuario: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    rol: {type: String, required:true},
});

var donothing = () =>{

}

usuarioSchema.pre("save", function(done){
    var usuario = this;
    if(!usuario.isModified("password")){
        return done();
    }
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err){
            return done(err);
        }
        bcrypt.hash(usuario.password, salt, donothing, 
            (err, hashedpassword) => {
                if(err){
                    return done(err)
                }
                usuario.password = hashedpassword;
                done();
            });
    });
});

    usuarioSchema.methods.checkPassword = function(guess, done)  {
        bcrypt.compare(guess, this.password, function(err, isMatch) {
            done(err, isMatch);
        });
    }

    usuarioSchema.methods.name = function(){
        return this.displayName || this.usuario;

    }
    usuarioSchema.methods.roles = function(){
        return this.role;

    }

    var Usuario = mongoose.model("Usuario", usuarioSchema);
    module.exports = Usuario;