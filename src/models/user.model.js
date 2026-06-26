import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username : {
            type : String,
            unique : true,
            required : true,
            lowercase : true,
            trim : true,
            index : true
        },
        email : {
            type : String,
            unique : true,
            required : true,
            lowercase : true,
            trim : true,
        },
        fullname : {
            type : String,
            required : true,
            trim : true,
            index : true
        },
        avatar : {
            type : String,
            required : true,
        },
        coverimage:{
            type : String,

        },
        watchhistory : [
            {
                type: Schema.Types.ObjectId,
                ref : "video"
            }
        ],
        password:{
            type: String,
            required:[true,'password is required']
        },
        refreshtoken:{
            type:String
        }

},
{
    timestamps : true
}
)


export const User = mongoose.model("User", userSchema)