import { type } from "express/lib/response";
import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const FollowSchema = Schema({
    following_user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },
    followed_user: {
        type: Schema.ObjectId,
        ref: "User",
        required: true
    },
    create_ad: {
        type: Date,
        default: Date.now
    }
});

//Definir un indice unico paraevitar seguir varias veces al mismo usuario

FollowSchema.index({following_user: 1, followed_user: 1}, {unique: true});

//Configurar el plugin de paginacion
FollowSchema.plugin(mongoosePaginate)