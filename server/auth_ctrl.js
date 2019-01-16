const bcrypt = require('bcryptjs');


module.exports =  {
    signup: async (req, res) => {
        console.log('fired')
        let { username, hash_value } = req.body;
        let db = req.app.get('db')
        let userFound = await db.user_check([username]);
        console.log(userFound)
        if (userFound[0]) {
            return res.status(200).send('Username already exists')
        }
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(hash_value, salt);
        let createdUser = await db.create_user([username, hash])
        req.session.user = { id: createdUser[0].id, username: createdUser[0].username }
        res.status(200).send(req.session.user)
    },
    
    login: async (req, res) => {
        let { username, hash_value } = req.body;
        let db = req.app.get('db')
        let userFound = await db.user_check([username])
        console.log(userFound)
        if(!userFound[0]) {
            return res.status(200).send('no username found')
        }
        let result = bcrypt.compareSync(hash_value, userFound[0].hash_value)
        if (result) {
            req.session.user = {id: userFound[0].id, username: userFound[0].username}
            console.log(req.session.user)
            res.status(200).send(req.session.user)
        } else {
            return res.status(401).send('Incorrect username or password')
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}