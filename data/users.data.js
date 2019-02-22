const init = (User, bcrypt) => {
    const addUser = async (userInput) => {
        const { username, name, email, password, confirmed } = userInput;

        const user = await User.findOne({ username: username });
        
        if (user) {
            return Promise.reject({ msg: 'This username is already registered.' });
        }

        const newUser = new User({ username, name, email, password });
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password, salt);
        newUser.password = hash;

        await newUser.save();
        return Promise.resolve({ msg: 'You are now registered and can log in.' }); 
    };

    const updateUser = async (userInput) => {
        const { id, name, email } = userInput;
        const user = await User.findById(id);
        user.name = name;
        user.email = email;
        
        await user.save();
        return Promise.resolve({ msg: 'User information was successfully updated.'});
    };

    const findUser = async (username, password) => {
        const user = await User.findOne({ username: username });

        if (!user) {
            return Promise.reject({ msg: 'That username is not registered.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return Promise.reject({ msg: 'Password is incorrect.' });
        }

        return Promise.resolve(user);
    };

    const findById = async (id) => {
        const user = await User.findById(id);
        return Promise.resolve(user);
    }

    return {
        addUser,
        updateUser,
        findUser,
        findById
    }
};

module.exports = {
    init
};