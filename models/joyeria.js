var mongoose = require ("mongoose");

var joyeriaSchema = mongoose.Schema({
    nombre: { type: String, required: true, unique: true},
    precio: { type: Number, required: true},
    cantidad: {type: Number, required: true},
    descripcion: { type: String },
});

var donothing = () =>{
}

var Joya = mongoose.model("Joya", joyeriaSchema);
module.exports = Joya;