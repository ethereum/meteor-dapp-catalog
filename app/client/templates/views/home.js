/**
Template Controllers

@module Templates
*/

/**
The chats template

@class [template] views_home
@constructor
*/


/**
Attach scroll event to make url bar fixed

@method created
*/
Template['views_home'].created = function(){
    //localStorage.clear();

    var block = Blocks.findOne({},{sort: {number: -1}});
    // initiate the geo pattern
    var pattern = GeoPattern.generate((block) ? block.hash : "---");
    $('.latest-block-info').css('background-image', pattern.toDataUrl());
};

Template['views_home'].destroyed = function(){
   
};



Template['views_home'].helpers({
    /**
    Get all current blocks

    @method (blocks)
    */
    'blocks': function(){
        var blocks =  Blocks.find({},{limit: 50, sort: {number: -1}});
        var template = Template.instance();

        Tracker.afterFlush(function(){
            if(template.view.isRendered)
                template.$('.wrapper').css('width', (blocks.count() * 562 + 500) + 'px');
        });
        return blocks.fetch();
    }, 
    /**
    Returns size in latest block

    @method (currentBlockNumber)
    */
    'currentBlockPattern': function(){
        var pattern = GeoPattern.generate(this.hash);
        return (pattern) ?  pattern.toDataUrl() : "white";
    }, 
    /**
    Returns Peercount

    @method (peerCount)
    */
    'peerCount': function(){
        return (web3.eth.peerCount) ?  web3.eth.peerCount : 0 ;
    }, 
    /**
    Returns Gas Price

    @method (gasPrice)
    */
    'gasPrice': function(){
        return (web3.eth.gasPrice) ?  EthTools.fromWei(web3.eth.gasPrice,'finney') : "---";
    }
});



Template['views_home'].events({

});


