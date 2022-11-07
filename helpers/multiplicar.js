const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 2, listar = false, deep = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= deep; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log(colors.bgRed("============================"));
      console.log(colors.blue("        Tabla del ", base));
      console.log(colors.bgRed("============================"));

      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
