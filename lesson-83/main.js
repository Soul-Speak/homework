const user = {
    name: 'Dima',
    age: 18,
    height: 175,

    hello(name) {
        console.log(`Hello ${name}`)
    }

}

user.hello(`Dimasik`)

// ===================================================================

const users = [
    {
        name: 'Alex',
        age: 25,
        isAdmin: false
    },
    {
        name: 'John',
        age: 22,
        isAdmin: true
    },
    {
        name: 'Peter',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Roy',
        age: 20,
        isAdmin: true
    },
    {
        name: 'August',
        age: 26,
        isAdmin: false
    },
    {
        name: 'Cindy',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Chris',
        age: 19,
        isAdmin: false
    },

]

let allNotAdminUsers = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        allNotAdminUsers++
    }
}


console.log('Обычных пользователей:', allNotAdminUsers)
