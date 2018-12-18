const bcrypt = require('bcryptjs');


module.exports =  {
    login: async (req, res) => {
        console.log('fired')
        let { email, password } = req.body;
        let db = req.app.get('db')
        let userFound = await db.user_check([email]);
        if (userFound[0]) {
            return res.status(200).send('Email already exists')
        }
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt);
        let createdUser = await db.create_user([email, hash])
        req.session.user = { id: createdUser[0].id, email: createdUser[0].email }
        res.status(200).send(req.session.user)
    },
    
    register: async (req, res) => {
        let { email, password } = req.body;
        let db = req.app.get('db')
        let userFound = await db.user_check([email])
        if(!userFound[0]) {
            return res.status(200).send('no email found')
        }
        let result = bcrypt.compareSync(password, userFound[0].hash_value)
        if (result) {
            req.session.user = {id: userFound[0].id, email: userFound[0].email}
            res.status(200).send(req.session.user)
        } else {
            return res.status(401).send('Incorrect email or password')
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}