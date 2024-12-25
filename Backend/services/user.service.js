import userModel from '../models/user.model.js';

export const createUser = async ({
    email,
    password
}) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    // Hash the password using the static hashpassword method
    const hashedPassword = await userModel.hashpassword(password);

    // Create the user using Mongoose's create method
    const user = await userModel.create({
        email,
        password: hashedPassword
    });

    return user;
};

export default createUser;
