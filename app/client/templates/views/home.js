/**
Template Controllers

@module Templates
*/

/**
The chats template

@class [template] views_home
@constructor
*/


Template['views_home'].helpers({
    /**
    Returns all topics, available in this chat

    @method (topics)
    @return {Array}
    */
    // 'topics': function(messages){
    //     if(_.isArray(messages)) {
    //         var messages = Messages.find({_id: {$in: messages}}).fetch();
    //         return _.uniq(_.compact(_.pluck(messages, 'topic')));
    //     }
    // }
});



Template['views_home'].events({
    /**
    Detect a link submitted and navigate to it

    @event submit form.url-bar
    */
    'submit form.url-bar': function(e, template){
        var url = template.find('input.dapp-url-bar').value,
            matches = url.match(/^([a-z]*\:\/\/)?([^\/.]+)(:?\/)(.*|$)/i),
            requestedProtocol = (matches && matches[1] != "undefined")? "" : "http://";

        window.location.href = requestedProtocol + url;

    }
});


