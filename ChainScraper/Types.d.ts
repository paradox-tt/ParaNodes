export interface FileSizes{

    kusama_pruned:FileDetails,
    kusama_full:FileDetails,
    kusama_archive:FileDetails,
    polkadot_pruned:FileDetails,
    polkadot_full:FileDetails,
    polkadot_archive:FileDetails

}

export interface FileDetails{
    size:string,
    created:Date
}