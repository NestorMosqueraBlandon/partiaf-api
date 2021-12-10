import Menu from "../../models/menuModel.js"

export default {
    Query: {
        async menus(_, {}){
            
            const menus = Menu.find({})
            return menus
        }
    },
    Mutation: {
        async addMenu(_, {title}){
            try{
                const newMenu = new Menu({
                    title
                })

                await newMenu.save();

                return 200
            }catch(err)
            {
                console.log(err)
            }
        },

        async addMenuItem(_, {menuId, name, price}){
            try{
                console.log("entro")
            }catch(err)
            {
                console.log(err)
            }
        }
    }
}
