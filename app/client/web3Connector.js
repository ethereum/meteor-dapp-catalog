var watcher = web3.eth.watch('chain');
watcher.changed(function(result) {
    console.log('Block arrived', result);

    result.number = web3.eth.number;

    // update balance
    Blocks.upsert('block_'+ result.number, {
        _id: 'block_'+ result.number,
        number: result.number,
        gasUsed: web3.eth.block(result.number).gasUsed,
        size: web3.eth.block(result.number).size,
        time: web3.eth.block(result.number).time,
        hash: web3.eth.block(result.number).hash,
        miner: web3.eth.block(result.number).coinbase,
        uncles: web3.eth.block(result.number).uncles.Length
    });
});