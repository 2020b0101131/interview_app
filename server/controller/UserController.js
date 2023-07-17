import add_users from '../schema/UserSchema.js'; // add_user is name of collection
import User from '../schema/UserSchema.js';
import register from '../schema/registerUser.js';

//////////////////////////////////////////////////////////////////////////////////
export const addUser = async(request, response) => {
    const user = request.body;
    const newUser = new User(user); //validating the data with schema
    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}

//////////////////////////////////////////////////////////////////////////////
export const getUsers = async(request, response) => {

    try {
        const users = await add_users.find({});
        response.status(200).json(users);
    } catch (error) {

        response.status(404).json({ message: error.message })
    }
}

//////////////////////////////////////////////////////////////////////////////
export const getUser = async(request, response) => {
        try {
            // const user = await add_users.find({ _id: request.params.id });
            const user = await add_users.findById(request.params.id);
            response.status(200).json(user)
        } catch (error) {
            response.status(409).json({ message: error.message });
        }
    }
    //////////////////////////////////////////////////////////////////////////////
export const editUser = async(request, response) => {
        let user = request.body;
        const editUser = new add_users(user);
        try {
            await add_users.updateOne({ _id: request.params.id }, editUser);
            response.status(201).json(editUser);
        } catch (error) {
            response.status(409).json({ message: error.message });
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////e
export const deleteUser = async(request, response) => {
        try {
            await add_users.deleteOne({ _id: request.params.id });
            response.status(200).json({ message: "User Deleted Successfully" });
        } catch (error) {
            response.status(409).json({ message: error.message });
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////e
export const registerUser = async(request, response) => {

        const user = request.body;
        const newRegister = new register(user);
        try {
            await newRegister.save();
            response.status(201).json(newRegister);
        } catch (error) {
            response.status(401).json({ message: error.message })
        }
    }
    //////////////////////////////////////////////////////////////////////////////
export const loginUser = async(request, response) => {
        const data = request.body;
        try {
            const user = await register.findOne(data);

            if (user) {
                if (user.email === data.email && user.password === data.password) {
                    response.status(200).send({ message: "Login Successful", user: user })
                } else {
                    response.status(401).send({ message: "Password did not matched" })
                }
            } else {
                response.send({ message: "User not registered" });
            }
            // response.status(200).json(user);
        } catch (error) {
            response.status(404).json({ message: error.message })
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////
export const userProfile = (request, response) => {
    try {
        const profileData = register.findOne({ email });
        response.status(200).json(profileData);
    } catch (error) {
        response.status(401).send({ message: "Error during gerProfle in backend" })
    }
}