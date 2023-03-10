const utilsWorks = require('./utils/works');
const express = require('express');
const rootRouter = require('./router/root');
const userRouter = require('./router/user');
const mongoose = require('mongoose');
const teamRouter = require('./router/team');
const cors = require('cors')
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/dongato')
    .then(() => {
        const app = express();

        app.use(cors())
        app.use(express.json());

        // add routes
        app.use('/', rootRouter);
        app.use('/api/user', userRouter);
        app.use('/api/team',teamRouter);

        app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost', () => {
            console.log('App Start: http://' + (process.env.HOST || 'localhost') + ':' + process.env.PORT || 3000);
        });
    })
    .catch(err => {
        console.log(err)
    })
