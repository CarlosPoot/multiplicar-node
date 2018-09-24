
const fs = require('fs');


let listarTabla  = (base , limite) =>{

    return new Promise( (resolve , reject )=>{

        if( !Number( base) ){
            reject(`El valor de la base introducido ${ base } no es un numero`);
            return;
        }else if( !Number(limite)){
            reject(`El valor del limite introduciodo ${ limite }  no es un numero`)
            return;
        }

        for(let i = 1 ; i<=limite ; i++){
            console.log(` ${ base } x ${i} = ${ base * i }`);
        }

        resolve( "Tabla mostrada correctamente" );

    });

};



let crearArchivo = ( base , limite ) =>{

    return new Promise( (resolve , reject) => {

        if( !Number( base) ){
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }else if( !Number(limite)){
            reject(`El valor del limite introduciodo ${ limite }  no es un numero`)
            return;
        }

        let data = '';

        for(let i= 1; i <= limite ; i++){
            data+= `${ base } * ${ i } = ${ base * i } \n`
        }

        fs.writeFile( `tablas/tabla-${ base}.txt` , data, (err) => {
            if( err )
                reject(err);
            else
                resolve( `tabla-${base}.txt` );
        })

    });

}

module.exports = { //añadimos nuestra funcion al modulo para que sea global
    crearArchivo,
    listarTabla
}
