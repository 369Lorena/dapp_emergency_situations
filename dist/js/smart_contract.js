var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var abi=JSON.parse('[{"constant":true,"inputs":[],"name":"firefighters","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x87267f20"},{"constant":true,"inputs":[],"name":"ambulances","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8d9c28b9"},{"constant":true,"inputs":[],"name":"police","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc7330dd4"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":false,"inputs":[{"name":"n_a","type":"int256"},{"name":"n_f","type":"int256"},{"name":"n_p","type":"int256"}],"name":"set_resources","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3754547d"}]')
var EmergencyContract = web3.eth.contract(abi);
var contractInstance = EmergencyContract.at('0x2540F1eBb791c9793da8162DC4BeEA065b5e5cBD');

function set_resources(){
    let ambulances = $("#ambulances").val();
    let firefighters = $("#firefighters").val();
    let police = $("#police").val();
    contractInstance.set_resources(ambulances,firefighters,police,{from: web3.eth.accounts[0]});
}