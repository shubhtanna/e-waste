import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required:true,
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
                // Password should have at least one uppercase letter, one special character, and be at least 8 characters long
                return /^(?=.[A-Z])(?=.[!@#$%^&])(?=.[a-z]).{8,}$/.test(value);
            },
            message: props => `${props.value} is not a valid password!,`
        },
    },
    confirmPassword: {
        type: String,
        required: true,
    },
});

export const User = mongoose.models.Users || mongoose.model('Users', UserSchema);