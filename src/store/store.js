export const store = {
    state: {
        users: [
            {
                id: null,
                name: null,
                login:null
            }
        ]
    },

    getUser(){
        return this.state.users.name;
    },

    getLogin(){
        return this.state.users.login;
    },

    setUser(id, name,login){
        this.user.id =id;
        this.user.login = login;
        this.user.name=name
    }
}
