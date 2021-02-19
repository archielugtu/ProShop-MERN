import bcrypt from "bcryptjs";

const users = [
    {
        name: "Rchi Lugtu",
        email: "r@l.com",
        password: bcrypt.hashSync("password123", 10),
        isAdmin: true,
    },
    {
        name: "Melissa Co",
        email: "a@m.com",
        password: bcrypt.hashSync("password123", 10),
    },
    {
        name: "Hez Dev",
        email: "h@d.com",
        password: bcrypt.hashSync("password123", 10),
    },
];

export default users;
