
var app=(function(){
	'use strict';

	var todoForm         = document.querySelector( '.todo-form' );
	


	if (!('Notification' in window)) {
	    console.log('This browser does not support notifications!');
	    return;
  	}

	Notification.requestPermission(function(status) {
	    console.log('Notification permission status:', status);
	});


	function displayNotification() {

		if (Notification.permission == 'granted') {
		  navigator.serviceWorker.getRegistration().then(function(reg) {
		    var options = {
		      body: 'New Data Added In ToDo List',
		      icon: '../todo.png',
		      vibrate: [100, 50, 100],
		      data: {
		        dateOfArrival: Date.now(),
		        primaryKey: 1
		      }
        };
        reg.showNotification('ToDo List!!!', options);
      });
    }
  }

  todoForm.addEventListener('submit', function() {
    displayNotification();
  });

	if ( 'serviceWorker' in navigator ) {
	  navigator.serviceWorker.register( 'sw.js' ).then(function(registration) {

	   
	    console.log( 'ServiceWorker registration successful. Scope: ' + registration.scope )

	    
	  }).catch(function(err) {

	   
	    console.log( 'ServiceWorker registration failed. Error: ' + err);
	  });
	}

	
})();



