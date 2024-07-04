require ("dotenv").config();

class ConectarBD {
    constructor() {
    this.conexion = null;
    this.mysql = require("mysql2/promise");
    }
    async conectarMySQL() {
    try {
        this.conexion=await this.mysql.createConnection({
        host: process.env.HOST_MySQL,
        user: process.env.USER_MySQL,
        password: process.env.PASSWORD_MySQL ,
        database: process.env.DATABASE_MySQL,
        port: process.env.PORT_MySQL ,
        });
        console.log("Conexion creada a MySql");
    } catch (error) {
        console.error("Error al crear la conexion", error);
    }
    }
    async cerrarConexion() {
    if (this.conexion != null) {
        try {
                await this.conexion.end();
                console.log("Conexion cerrada de MySql");
            } catch (error) {
                console.error("Error al cerrar la conexion", error);
            }
        }
        else{
            console.error("Error al cerrar la conexión"+error);
        }
    }
}
module.exports=ConectarBD;
