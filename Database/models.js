import mongoose from 'mongoose';

const emailSchema = mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    subject: String,
    body: String,
    date: {
        type: Date,
        required: true
    },
    image: String,
    name: {
        type: String,
        required: true
    },
    starred: {
        type: Boolean,
        required: true,
        default: false
    },
    bin: {
        type: Boolean,
        required: true,
        default: false
    },
    type: {
        type: String,
        required: true,
    },
})

const Email = mongoose.model('emails', emailSchema, "Gmail-Clone");



const authSchema = mongoose.Schema({
    email: {
        type: "string",
        required: true,
    },
    password: {
        type: "string",
        required: true,
    },
    isAccountVerified: {
        type: "boolean",
        required: true,
    },
})

const Auth = mongoose.model('auth',authSchema, "Authentication");

export  {Auth, Email};