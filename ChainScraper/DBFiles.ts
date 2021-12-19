import { Settings } from "./Settings";
import { FileSizes, FileDetails } from "./Types";

export class DBFiles {

    static async GetSizes():Promise<FileSizes>{
         const kusama_pruned = this.readLastLine("pruned_kusama");
         const kusama_full = this.readLastLine("full_kusama");
         const kusama_archive = this.readLastLine("archive_kusama");

         const polkadot_pruned = this.readLastLine("pruned_polkadot");
         const polkadot_full = this.readLastLine("full_polkadot");
         const polkadot_archive = this.readLastLine("archive_polkadot");

         return Promise.all([kusama_archive,kusama_full,kusama_pruned,polkadot_archive,polkadot_full,polkadot_pruned]).then(x=>{
                return {
                        kusama_archive:x[0],   
                        kusama_full:x[1],
                        kusama_pruned:x[2],
                        polkadot_archive:x[3],
                        polkadot_full:x[4],
                        polkadot_pruned:x[5]
                       }
             
         });
       
    }


    private static async readLastLine(file:string):Promise<FileDetails> {
        var fs = require('fs');
        var readline = require('readline');
        var stream = require('stream');
        var file_path = Settings.db_file_path+file+'.txt';

        var instream = fs.createReadStream(file_path);
        var outstream = new stream;
        var rl = readline.createInterface(instream, outstream);
        var datetime= "";

        const stats = fs.statSync(file_path);
        datetime = stats.ctime;
        var read_line="";

        for await (const line of rl) {
            read_line = line;
        }
        
        return {
                    size: read_line.split('\t',2)[0],    
                    created: new Date(datetime)
                }
    }

    
}