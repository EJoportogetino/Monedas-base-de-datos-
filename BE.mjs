import { readXlsxFile } from 'read-excel-file/node';

document.addEventListener("DOMContentLoaded", function()             // buscador, recibe los datos del documento y (esperemos) muestra 
     {
        const formulario= document.getElementById("Datos");
        formulario.addEventListener("submit", function(event)
          {
            event.preventDefault();
            let anio= parseInt(document.getElementById("anio").value); console.log(anio);
            let monto=parseInt(document.getElementById("Denominacion").value);
            let tipo= document.getElementById("Tipo").value;
            readXlsxFile('./libro1.xlsx').then((rows) =>                            // rescate del archivo de xlsx 
            {
             const columnNames = rows.shift();
             const objs = rows.map((row) => 
             {
               const obj = {};
               row.forEach((cell, i) => 
               {
                 obj[columnNames[i]] = cell; 
                 // if (columnNames[i]==="valor")
                 //   {console.log(columnNames[i], cell)}
                 // if (columnNames[i]==="tipo" && cell==="Peso Moneda Nacional")
                 // {console.log("es")}
         
               });
               //console.log(obj);
               return obj;
             });

             for (let i in Tabla_datos)
               {
                if (anio===Tabla_datos.año[i])
                 {console.log("Cantidad: "+ Tabla_datos[cantidad[i]]+ "valor: " + Tabla_datos[monto[i]]+"tipo: "+ Tabla_datos[tipo[i]])}
               }   
           });
        });
     });









