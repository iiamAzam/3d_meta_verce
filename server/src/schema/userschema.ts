import mongoose, {Document} from "mongoose";

interface auth extends Document{
        name:string,
        email:string,
        password:string
}



const Schema = mongoose.Schema

const userSchema = new Schema ({
        name:{
            type :String,
            required: true 
        },
        email:{
            type:String,
            required:true 
        },
        password: {
                type:String,
                require:true
        }

})

export default mongoose.model<auth>('user',userSchema)