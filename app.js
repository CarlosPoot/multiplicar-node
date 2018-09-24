const { argv }  = require('./config/yargs');
           

const { crearArchivo , listarTabla} = require( './multiplicar/multiplicar' ) // destructuramos para obtener la funcion y no tener que utilizar el nombre del paquete en cada llamada
console.log(argv);

let comando = argv._[0];
let base = argv.base;
let limite  = argv.limite;

switch( comando ){
    case 'listar':
        
        listarTabla( base , limite ).then(  (respuesta)=>{
            console.log(  respuesta );
        }).catch( error =>{
            console.log(error);
        })
        break;
    case 'crear':
        crearArchivo( base , limite )
        .then(  ( archivo ) =>{
            console.log(  `Archivo creado: ${ archivo }` )
        })
        .catch( error =>{
            console.log( error );
        });
        
        break;
    default:
        console.log("Parametros invalidos");
}





