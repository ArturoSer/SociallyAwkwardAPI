const { awkward, user, reaction } = require('../models');

module.exports = {
    getAwkward(req, res){
        awkward.find()
        .then((awkard) => res.json(awkward))
        .catch((err) => res.status(500).json(err));
    },
    getOneAwkward(req, res) {
        awkward.findOne({ _id: req.params.awkwardId })
        .then((awkward) =>
        !awkward
        ? res.status(404).json({ message: "Nothing awkward found with this ID" })
        : res.json(awkward)
        )
        .catch((err) => res.status(500).json(err));
    },
    createAwkward(req, res) {
        awkward
        .create(req.body)
        .then((awkward) => res.json(awkward))
        .catch((err) => res.status(500).json(err));
    },
    updateAwkward(req, res) {
        awkward
        .findOneAndUpdate(
            { _id: req.params.awkwardId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((awkward) =>
        !awkward
        ? res.status(404).json({ message: "Nothing awkward found with this ID" })
        : res.json(awkward) 
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteAwkward(req, res) {
        awkward
        .findOneAndDelete({ _id: req.params.awkwardId })
        .then((awkward) => 
        !awkward
        ? res.status(404).json({ message: "Nothing awkward found with this ID"})
        : user.findOneAndUpdate(
            { awkward: req.params.awkwardId },
            { $pull: { awkward: { _Id: req.params.awkwardId } } },
            { runValidators: true, new: true }
        )
        )
        .then((user) =>
        !user
        ? res.status(404).json({ message: "Awkward.. this has been deleted but no User found with this ID" })
        : res.json({ message: "Awkward and user deleted! "})
        )
        .catch((err) => res.status(500).json(err));
    },
    addReaction(req, res) {
        awkward
        .findOneAndUpdate(
            { _id: req.params.awkwardId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
        )
        .then((awkward) => 
        !awkward
        ? res.status(404).json({ message: "No awkwardness found here with this ID! "})
        : res.json(awkward)
        )
        .catch((err) => res.status(500).json(err));
    },
    removeReaction(req, res) {
        awkward
        .findOneAndUpdate(
            { _id: req.params.awkwardId },
            { $pull: { reaction: { reactionId: req.params.reactionId }}},
            { runValidators: true, new: true }
        )
        .then((awkward) =>
        !awkward
        ? res.status(404).json({ message: "No awkward found here with this ID"})
        : res.json(awkward) 
        )
        .catch((err) => res.status(500).json(err));
    },
};