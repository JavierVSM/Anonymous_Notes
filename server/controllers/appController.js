const {AppModel} = require( '../models/appModel' );

const AppController = {
        
        getIndex: function (request, response){
            AppModel
                .getAll()
                .then (data  => {
                    response.status( 200 ).json( data );
                });
        },

         add: function (request, response){
            const note= request.body.note;
            const created_at= new Date();

            const newData = {
                note,
                created_at                
            };
            if (note.length < 3 ){
                response.statusMessage = "Note must be at least 3 letters!";
                response.status( 400 ).end();
            }
            else{
                AppModel
                .create(newData)
                .then( result => {
                    response.status( 201 ).json( result );
                })
                .catch( err => {
                    response.statusMessage = "Something goes wrong!";
                    response.status( 400 ).end();
                });
            }
        },
}

module.exports={AppController};