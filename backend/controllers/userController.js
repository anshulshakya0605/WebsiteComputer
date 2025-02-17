import User from "../models/User.js";
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    if (!username || !email || !password) {
      return res.status(400).json({status:false, message:"All fields are required"})
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};



export const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    
    const existingUser = await User.findOne({email});
    const isMatch = await bcrypt.compare(password, existingUser.password)
    if (!email || !isMatch) {
      return res.status(400).json({status:false, message:"Invalid email or password"})
    }
   await res.status(200).json({status:true, message:"Login Successful"})
  } catch (error) {
    res.status(500).json({status:false, message:"Server Error"}, error)
  }
}