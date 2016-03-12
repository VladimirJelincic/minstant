/**
 * Created by vladimir on 12/03/16.
 */
Chats = new Mongo.Collection("chats");

Chats.allow({
    'insert': function(userId,doc){
        console.log("insert:"+userId+"/"+doc);
            return CheckUser(userId,doc);
    },
    'update': function(userId,doc){
        console.log("update:"+userId+"/"+doc);
        return CheckUser(userId,doc);
    },

    'remove': function (userId,doc) {
        console.log("remove:"+userId+"/"+doc);
        return CheckUser(userId,doc);
    }

})

function CheckUser(userId,doc) {
    console.log("testing security on chat");
    if (Meteor.user()) {

        console.log("Userid:" + userId);


        if (userId == doc.user1Id || userId == doc.user2Id) {
            console.log("true");
            return true
        } else {
            console.log("false");
            return false;
        }

    };
    return false;
}