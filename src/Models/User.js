import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    Name: {
        type: String,
    },
    Username: {
        type: String,
        unique: true,
        required: [true,"Username Required!"],
    },
    MobileNumber: {
        type: String,
        required: [true,"Username Required!"],
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^(?=.[A-Z])(?=.[!@#$%^&])(?=.[a-z]).{8,}$/.test(value);
            },
            message: props => `${props.value} is not a valid password!,`
        },
    confirmPassword: {
        type: String,
        required: true,
    },
})

export const User = mongoose.models.users || mongoose.model("users", UserSchema);