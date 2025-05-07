const Blockfrost = require("@blockfrost/blockfrost-js");
const API = new Blockfrost.BlockFrostAPI({
  projectId: "preprodx2V0nPCSUCQRitmZv9fUMCQu3BiVVXBg", 
});
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const add = "addr_test1wzs7xqd6y04p6nyeqjzt8gpuktw4x82p4ve9fmg5vut22ksl6el0e"

async function runExample(add) {

  try {
    let address = await API.addresses(add);
    function adaconv (address) {
        for (index in address.amount){
            if (address.amount[index].unit === "lovelace"){
              return address.amount[index].quantity / 1000000
            }
        }        
    }
    const assetconv = async (address) => {
        let list = []
        for (index in address.amount){
            try{
            if (address.amount[index].unit != "lovelace"){
                let asset = await API.assetsById(address.amount[index].unit)
                let assetdecoded = hexToUtf8(asset.asset_name)
                list.push(assetdecoded)
            }
        } catch (err) {
            console.log("error", err);
          }        
        }     
        return list  
    }
    const convert = (from, to) => str => Buffer.from(str, from).toString(to)
    const hexToUtf8 = convert('hex', 'utf8')    

   let ada = adaconv(address)
      let listAssetNames = await assetconv(address)

    const csvWriter = createCsvWriter({
    path: "output.csv",
    header: [
        {id: 'ADD', title: 'Address'},
        {id: 'ADA', title: 'ADA'},
        {id: 'AST', title: 'Asset_Name'}
    ]
    });
    
    const records = [
    {ADD: address.address, ADA:ada, AST:listAssetNames },
    ];
 
    csvWriter.writeRecords(records)    
        .then(() => {
            console.log('CSV created! Check within this folder, it should be called output.csv');
        });

    } catch (err) {
    console.log("error", err);
  }
    }

runExample(add)

