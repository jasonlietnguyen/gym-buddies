(function () {
angular.module('gym-buddies')
.component('chatComponent', {
    templateUrl: 'app/components/chat/chat.html',
    controller: ChatController
})

function ChatController(FBREF, $firebaseArray){
            var sc = this;
            
            var chatRef = new Firebase(FBREF + 'chats')            

            sc.list = $firebaseArray(chatRef)
            
            sc.addChat = function(chat){
                sc.list.$add(chat)
                sc.newChat = null
            }
            
            sc.removeChat = function(chat){
                sc.list.$remove(chat)
            }
            
        }
} ())