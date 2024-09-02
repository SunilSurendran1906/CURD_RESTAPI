import User from "../model/userModel.js";

export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "The user already exists" });
    }
    const savedUser = await userData.save();
    res.status(200).json({ savedUser, message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const fetch = async (req, res) => {
  try {
    const allUsers = await User.find();
    if (allUsers.length === 0) {
      return res.status(404).json({ message: "users is not Found" });
    }
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "user is not found" });
    }
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(201)
      .json({ updateUser, message: "user was updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "updateUser error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ id, message: "user is not found" });
    }
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(201).json({ message: "user was deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "delete  user error" });
  }
};
