const { user, awkward } = require('../models');

module.exports = {
    getUsers(req, res) {
        user.find({})
        .then(userData => {
            res.json(userData);
            console.log(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        }) 
    },

    getUserById(req, res) {
        user.findOne({ _id: req.params.userId })
        .select("-__v")
        .populate('awkward friends')
        .then(userData => {
            if(!userData){ 
                res.status(400).json({ message: "No User found with this ID" });
                return;
            };
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },
    createUser(req, res){ 
        user.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    updateUser(req, res) {
        user.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
        ? res.status(404).json({ message: "No user found with this ID! "})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        user.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
        !user
        ? res.status(404).json({ message: "no user found with this ID "})
        : awkward.deleteMany({ _id: { $in: user.awkward }})
        )
        .then(() => res.json({ message: "User DELETED!"}))
        .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        user.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId }},
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
        ? res.status(404).json({ message: "No user found with this ID" })
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res) {
        user.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId }},
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
        ? res.status(404).json({ message: "No user found with this ID!"})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
};