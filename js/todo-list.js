$(document).ready(function () {

    var TodoList = function() {

      var $todo          = $(' .todo-main' ),
          $todoList         = $(' .todo-list' ),
          $todoListItem     = $( '.todo-list-item' ),
          $todoForm         = $( '.todo-form' ),
          $todoFormInput    = $( '.todo-form-input' ),
          $todoclearList        = $( '.todo-clear' ),
          todoclearListDisplay  = 'todo-clear--display',
          todoCount         = 0;

      function displayTodo() {
        for (todoCount = 0; todoCount < localStorage.length; todoCount++) {
          var todoID        = 'task-' + todoCount;

          
          $todoList.append("<li class='todo-list-item' id='" + todoID + "'><div style='float:left' >" + localStorage.getItem(todoID) + "</div><div style='float:right'><a href='#' id='"+todoCount+"'>&times;</a></div> </li>");
           var $id=$('#'+todoCount);
            $id.on( 'click', function () {
              removeTodo(todoID);
          });
          $todoclearList.addClass( todoclearListDisplay );
        }
      }



      function storeTodo() {
        if ( $todoFormInput.val() !== '' ) {
            var todoID      = 'task-' + todoCount,
                task        = $( '#' + todoID ),
                taskMessage = $todoFormInput.val();

            localStorage.setItem( todoID, taskMessage );

            $todoList.append( "<li class='todo-list-item' id='" + todoID + "'><div style='float:left' >" + taskMessage + "</div><div style='float:right'><a href='#' id='"+todoCount+"'>&times;</a></div> </li>");
            

            var $id=$('#'+todoCount);
            $id.on( 'click', function () {
              removeTodo(todoID);
          });
           
           
            if ( !$todoclearList.hasClass( todoclearListDisplay ) ) {
              $todoclearList.addClass( todoclearListDisplay );
            }

           
            $todoFormInput.val('');
            todoCount++;
        }
      }

      function removeTodo(ID){
       
        $('#'+ID).remove();
        localStorage.removeItem(ID);
      }
      function clearTodo() {

          
          $todoList.empty();
          $todoclearList.removeClass( todoclearListDisplay );

          
          localStorage.clear();
          todoCount = 0;
      }

      function bindEvents() {

         displayTodo();
        $todoForm.on( 'submit', function () {
            storeTodo();
            return false;
        });

      $todoclearList.on( 'click', function () {
          clearTodo();
        });
      }

      bindEvents();
    };

    TodoList();
});
