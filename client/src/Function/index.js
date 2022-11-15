import * as api from '../Api';

export const readUsers = async () => {
    try {
        const { data } = await api.readUsers()
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)

    }
}
export const createUser = async (user) => {
    try {
        const { data } = await api.createUser(user)


        return data
    } catch (error) {
        console.log(error)

    }
}
export const updateUser = async (id, user) => {
    try {
        const { data } = await api.updateUser(id, user)


        return data;
    } catch (error) {
        console.log(error)

    }
}
export const deleteUser = async (id) => {
    try {
        await api.deleteUser(id)


    } catch (error) {
        console.log(error)

    }
}
export const readPosts = async () => {
    try {
        const { data } = await api.readPosts()
        return data
    } catch (error) {
        console.log(error)

    }
}
export const createPost = async (post) => {
    try {
        const { data } = await api.createPost(post)


        return data
    } catch (error) {
        console.log(error)

    }
}
export const updatePost = async (id, post) => {
    try {
        const { data } = await api.updatePost(id, post)


        return data;
    } catch (error) {
      alert(error.message)

    }
}
export const deletePost = async (id) => {
    try {
        await api.deletePost(id)


    } catch (error) {
        console.log(error)

    }
}
export const registerUser = async (user) => {
    try {
        const { data } = await api.registerUser(user);


        return data
    } catch (error) {
        alert(error.response.data.message);

    }
}
export const readUserss = async () => {
    try {
        const { data } = await api.readUserss()
        return data
    } catch (error) {
        console.log(error)

    }
}
export const authUser = async (user) => {
    try {
        const { data } = await api.authUser(user)
//const response=alert(`welcomeback ${data.name}`)

        return data
    } catch (error) {
        alert(error.response.data.message);

    }
}
export const deleteUserr = async (id) => {
    try {
        await api.deleteUserr(id)


    } catch (error) {
        console.log(error)

    }
}
export const readComments = async () => {
    try {
        const { data } = await api.readComments()
        return data
    } catch (error) {
        console.log(error)

    }
}
export const createComment = async (comment) => {
    try {
        const { data } = await api.createComment(comment)


        return data
    } catch (error) {
        console.log(error)

    }
}
export const updateComment = async (id, comment) => {
    try {
        const { data } = await api.updateComment(id, comment)


        return data;
    } catch (error) {
      alert(error.message)

    }
}
export const deleteComment = async (id) => {
    try {
        await api.deleteComment(id)


    } catch (error) {
        console.log(error)

    }
}