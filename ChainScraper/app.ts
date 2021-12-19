import express from 'express'; //Required for endpoint
import { ApiPromise } from '@polkadot/api';//Required for chain interaction
import { SessionKeys } from './SessionKeys';
import { Settings } from './Settings';
import { DBFiles } from './DBFiles';
import { mainModule } from 'process';


// Set up the express app
const app = express(); 

app.all('/',  (req, res) => {

    var address: string = req.query.address;
    var era: number = req.query.era;


});

app.all('/payouts', (req, res) => {

    var address: string = req.query.address;
    var era: number = req.query.era;

});

app.all('/QueuedKeys', (req, res) => {

    var address: string = req.query.address;
    const api = ApiPromise.create({ provider: Settings.getServer(address) });
    
    SessionKeys.getQueuedKeys(address, api).then(value => {

        res.status(200).send(
            value
        );

    });

});


app.all('/NextKeys', (req, res) => {

    var address: string = req.query.address;
    const api = ApiPromise.create({ provider: Settings.getServer(address) });

    SessionKeys.getNextKeys(address, api).then(value => {

        res.status(200).send(
            value
        );

    });

});


app.all('/DBSizes', (req, res) => {
     
    DBFiles.GetSizes().then(sizes=>{

        res.status(200).send(
            sizes
        );

    });

});

//Listen for the connection on the specified port
app.listen(Settings.listen_port, () => {
    console.log(`Server running on port ${Settings.listen_port}`)
});







