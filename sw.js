


self.addEventListener('install', function(event) {
  event.waitUntil(

    
    caches.open('todoapp').then(function(cache) {

      
      return cache.addAll([
        './',
        './index.html',
        './js/app.js',
        './js/jquery.js',
        './css/style.css',
        './favicon.ico',
        './manifest.json',
        './img/icon-60.png',
        './todo.png',
        './css/bootstrap.css',
        './js/todo-list.js'
      ]);
    })
  );
});

self.addEventListener('activate',function(event){
console.log('Event : Activate');
  event.waitUntil(
    caches.keys().then(function(keys){

      return Promise.all(keys.map(function(key,i){
        if(key!== 'todoapp' ){
          return caches.delete(keys[i]);
        }
      }))
    })
  )
});

self.addEventListener('fetch', function(event) {
  console.log('Event : Fetch');
  event.respondWith(

     caches.match(event.request).then(function(response) {

     return response || fetch(event.request);
    })
  );
});



self.addEventListener('notificationclose', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;

    console.log('Closed notification: ' + primaryKey);
  });

  self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
    var action = e.action;

    if (action === 'close') {
      notification.close();
    } else {
     
      notification.close();
    }
  });
