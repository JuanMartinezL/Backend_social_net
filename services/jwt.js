import jwt from "jwt-simple";
import moment from "moment";
import dotenv from "dotenv"

//Cargar varible de entorno desde el archivo .env
dotenv.config();

//Clave secreta 
const secret = process.env.SECRET_KEY ;

//Metodo para generara los tokens
//Unix: segundos transcurridos desde el 1 de enero de 1970hast hoy
const createToken = (user) =>{
    const payload ={
        userId: user._id,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(7, "days").unix() //fecha de expiracion
    }

    //Devolver el token 
    return jwt.encode(payload, secret);
};

export{
    secret,
    createToken
};