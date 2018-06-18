var app = angular.module("myApp",[]);
app.controller('main',['$scope','$compile',function($scope,$compile){
	$scope.inputText = "";

	$scope.getData = function() {
		var divElement = angular.element(document.querySelector('#chat-history'));
	    var appendHtml = $compile('<send-msg></send-msg>')($scope);
	    divElement.append(appendHtml);
	    console.log(">>>>>>>>>>",$scope.inputText);
	    $scope.$digest;
    }
	
}])

https://github.com/Hasmat-Ali/feedback-task.git


app.directive('sendMsg', function() {
 return {
   restrict: "E",
   templateUrl:'send_msg_template.html',
   scope:{
   	a:'@'
   }
 }
});

app.directive('rcvMsg', function() {
 return {
   restrict: "E",
   scope: {},
   templateUrl:'rcv_msg_template.html',   
   controller: function($rootScope, $scope, $element) {
     $scope.rcvMsgs = [{text0:"Welcome Shakeela, thanks for giving us the opportunity to serve you. We value your feedback."},
					{text1:"How likely are you to recommended Lab1 to  your friends?"}];     
   }
 }
});
console.log("this is a module file");