(function () {
angular.module('gym-buddies')
.component('shareComponent', {
    templateUrl: 'app/components/share/share.html',
    controller: ShareController
})

function ShareController(FBREF, $firebaseArray){
            var sc = this;
            
            var shareRef = new Firebase(FBREF + 'posts')            

            sc.list = $firebaseArray(shareRef)
            
            sc.addShare = function(share){
                sc.list.$add(share)
                sc.newShare = null
            }
            
            sc.removeShare = function(share){
                sc.list.$remove(share)
            }






        }
} ())