const { describe } = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Muestra la tabla en consola'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
    describe:'Lista los elementos'
  })
  .option("d", {
    alias: "deep",
    type: "number",
    demandOption: false,
    describe:'Define el limite de la tabla'
  })
  .check((argv, options) => {
    if(isNaN(argv.b)){
      throw 'La base tiene que ser un numero'
    }else{
      return true
    }
  }).argv;


module.exports = argv;