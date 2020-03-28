const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pipo:pipo@cluster0-8vfrh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected'))
    .catch(e => console.log(e));