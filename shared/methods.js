/**
 * Created by vladimir on 12/03/16.
 */
Meteor.methods({
    UpdateChat :function(chatId,chat){
        var chatObj = Chats.findOne({_id: chatId});
        console.log("chat:"+chatObj);
        console.log("messages:"+chat.messages);
        Chats.update({_id:chatId  },{"$set": {"messages":chat.messages}});
    }
})