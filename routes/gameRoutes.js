import Games from '../client/src/components/games/Game';

odule.exports = app =>{

    app.get(
        '/games',
        async (req,res) => {


            res.send({});
        }
        
    );

}