const xlsxFile = require('read-excel-file/node');

xlsxFile('./libro1.xlsx').then((rows) =>                            // rescate del archivo de xlsx 
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
      console.log(objs);
    });
  });



programa.addEventListener("DOMContentLoaded", function()             // buscador, recibe los datos del documento y (esperemos) muestra 
     {
        const formulario= programa.getElementsById("Datos");
        formulario.addEventListener("submit", function(event)
          {
            event.preventDefault();
            let anio= parseInt(document.getElementsById("anio").value);
            let monto=parseInt(document.getElementsById("Denominacion").value);
            let tipo= document.getElementById("Tipo").value;
            let Tabla_datos= xlsxFile();
            for (let i in Tabla_datos)
             {
                if (anio===Tabla_datos.año[i])
                 {console.log("Cantidad: "+ Tabla_datos[cantidad[i]]+ "valor: " + Tabla_datos[valor[i]]+"tipo: "+ Tabla_datos[tipo[i]])}
             }
            
              
          });
     });









