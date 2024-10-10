import { type } from "express/lib/response";
import { Schema, model } from "mongoose";
import mongoosePginate from "mongoose-paginate-v2";

const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    nick: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    bio: String,

    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: "role_user"
    },
    image: {
        type: String,
        default: "default_user.png"
    },
    create_at: {
        type: Date,
        default: Date.now
    }

});

//Configurar plugin de paginacionde mongo

UserSchema.plugin(mongoosePaginate);

export default model("User", UserSchema, "users");
