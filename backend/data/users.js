import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Bund Fati',
        email: 'bund@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Cook Pu',
        email: 'pupu@example.com',
        password: bcrypt.hashSync('123456',10)
    }
]

export default users