const mongoose = require ('mongoose');

const AppSchema = new mongoose.Schema({
    note: String,
    created_at: Date
});

const App = mongoose.model ('app', AppSchema);

const AppModel={

    create: function(newData){
        return App.create(newData);
    },

    getAll:function(){
        return App.find().sort({created_at: -1});
    },
};

module.exports = {AppModel};