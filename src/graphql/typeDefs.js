const typeDefs = `

type User{
    _id: ID
    name: String
    lastname: String
    identification: String
    email: String
    password: String
    mobile: String
    age: String
    address: String
    token: String
}

type Bussines{
    _id: ID
    name: String
    type: String
    nit: String
    email: String
    password: String
    mobile: String
    employes: String
    address: String
}

type Menu{
    id: ID
    title: String
    items: [MenuItem]
}

type MenuItem{
    id: ID
    name: String
    price: String
    image: String
}

type Query{
    users: [User]
    menus: [Menu]
}



type Mutation{
    signup(name: String, type: String, nit: String, email: String!, password: String!, mobile: String, employes: String, address: String) : String
    signin(email: String!, password: String!) : User
    addMenu(title: String): String
    addMenuItem(menuId: ID, name: String, price: String) : String
}
`;

export default typeDefs;
