var express = require("express");
var aplicacion = express();
aplicacion . get ( ' / ' , function ( req , res ) {
  res . enviar ( ' Hola Mundo ' )
} )

aplicacion.listen (8989)
