import StudentModal from "../models/student.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const secret = 'test'



export const signin = async (req, res) => {
    const { email, password} = req.body

    try {
        const oldUser = await StudentModal.findOne({ email });
    
        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
    
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
    
        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
    
        res.status(200).json({ result: oldUser, token });
      } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
      }
}

export const signup = async (req, res) => {
    const { email, password, firstName, lastName} = req.body

    try {
        const oldUser = await StudentModal.findOne({email})

        if(oldUser) return res.status(400).json({message: "Account already exists"})
        const encryptPassword = await bcrypt.hash(password, 12)
        const result = await StudentModal.create({ email, password: encryptPassword, name: `${firstName} ${lastName}`})

        const token = jwt.sign( { email: result.email, id: result._id}, secret , { expiresIn: "1hr"})

        res.status(201).json({ result, token})

    } catch (error) {
        res.status(500).json({ meesage: "Something went wrong"})

        console.log(error);
    }
}