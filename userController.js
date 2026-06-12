const User = require("../models/User");

// CREATE USER

exports.createUser = async (req, res) => {

    try {

        const user =
            await User.create(req.body);

        res.status(201).json({
            success: true,
            data: user
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// GET ALL USERS

exports.getUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET SINGLE USER

exports.getUser = async (req, res) => {

    try {

        const user =
            await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// UPDATE USER

exports.updateUser = async (req, res) => {

    try {

        const user =
            await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE USER

exports.deleteUser = async (req, res) => {

    try {

        const user =
            await User.findByIdAndDelete(
                req.params.id
            );

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message:
                "User Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};