var common = require("./common.js")
let Web3 = require("web3")
var BigNumber = require('bignumber.js');

if(typeof web3 != 'undefined'){
    web3=new Web3(web3.currentProvider);
}else{
    web3 = new Web3('http://192.168.3.67:3065');
}

//构成转账的交易结构
tx = {}
tx.from = common.allowAccount
tx.to = common.contractAddress
tx.gas = 300000
tx.gasPrice = web3.utils.toWei("1","gwei")
tx.input = common.transferFrom + common.fromAccountLength + common.toAccountLength + common.getValueLength(13)

web3.eth.sendTransaction(tx,function(error,result){
    if(error != undefined){
        console.log(error)
    }
    console.log(result)
})

