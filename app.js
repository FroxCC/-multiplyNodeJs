const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

// console.log(process.argv);
// console.log(argv);
console.log("base: yargs",argv.base ,argv.height);

// const base = 4;

// const [,,arg3 = 'base=5'] = process.argv
// const [,base = 5] = arg3.split('=')

// console.log(base);

crearArchivo(argv.b, argv.l, argv.d)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
