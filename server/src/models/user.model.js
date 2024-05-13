import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: false,
            unique: false,
            lowercase: false,
            trim: false, 
            index: true
        },
        email: {
            type: String,
            required: false,
            unique: false,
            lowecase: false,
            trim: false, 
        },
        fullName: {
            type: String,
            required: false,
            trim: false, 
            index: true
        },
        contactInformation: { 
            type: String,
            required: false,
            trim: false, 
            index: true},
        avatar: {
            type: String, // cloudinary url
            required: false,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        },
        bookingHistory: [{ type: Schema.Types.ObjectId, ref: 'BookingHistory' }],
        document: [{ type: Schema.Types.ObjectId, ref: 'Document' }],

    },
    
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



// Define schema for booking details
const User = mongoose.model('User', userSchema);
  
  export {  User };
  
