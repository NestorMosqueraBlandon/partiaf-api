import menu from "./menu.js";
import users from "./user.js";

export default {
    Query: {
        ...menu.Query
    },

    Mutation: {
        ...users.Mutation,
        ...menu.Mutation
    }
}