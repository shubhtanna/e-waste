import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required!'],
    },
    mobileNumber: {
        type: String,
        required: [true, 'Mobile number is required!'],
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/.test(value);
            },
            message: props => `${props.value} is not a valid password!`,
        },
    },
    confirmPassword: {
        type: String,
        required: true,
    },
});

export const User = mongoose.models.user || mongoose.model("user", UserSchema);
