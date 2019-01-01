const init = (User, bcrypt) => {
    const addUser = async (userInput) => {
        const { username, name, email, password, confirmed } = userInput;

        const user = await User.findOne({ username: username });
        
        if (user) {
            return Promise.resolve({ msg: 'This username is already registered.' });
        }

        const newUser = new User({ username, name, email, password });
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password, salt);
        newUser.password = hash;

        await newUser.save();
        return Promise.resolve({ msg: 'You are now registered and can log in.' }); 
    };

    return {
        addUser
    }
};

module.exports = {
    init
};