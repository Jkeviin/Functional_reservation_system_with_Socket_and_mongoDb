const mongoose = require("mongoose");
mongoose.set("debug", true);

//const {Lavadero, Reserva } = require("./model")

const conectarDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Jkeviin:Jkeviin2130@cluster0.ovudi9t.mongodb.net/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
/*
    const nuevoLavadero = new Lavadero({
      hora_apertura: '9:00 AM',
      hora_cierre: '5:00 PM',
    });

    const nuevaReserva = new Reserva({
      id_lavadero: nuevoLavadero._id,
      fecha: '2023-03-20',
      hora: '10:00 AM',
    });

    await nuevoLavadero.save();
    await nuevaReserva.save();*/
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectarse a la base de datos", error);
    process.exit(1);
  }
};


module.exports = conectarDB;