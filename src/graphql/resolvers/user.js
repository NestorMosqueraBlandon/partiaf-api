import User from "../../models/userModel.js"
import { generateToken } from "../../utils/utils.js";

export default {
    Mutation: {
        async signup(_, { name, type, nit, email, password, mobile, employes, address }) {
            try {

                const user = await User.findOne({ email })

                if (!user) {
                    const newUser = new User({
                        name, type, nit, email, password, mobile, employes, address
                    })

                    await newUser.save();
                    console.log(newUser)
                    return newUser   
                }
            } catch (err) {
                console.log(err)
            }
        },

        async signin(_, { email, password }) {
            console.log(email)
            console.log(password)
            const user = await User.findOne({email})

            if(user){
                if(password == user.password){
                    return {id: user.id, name: user.name, lastname: user.lastname, email:user.email, address: user.address, age: user.age, mobile: user.email, token: generateToken(user)}
                }
            }
        }
    }
}
