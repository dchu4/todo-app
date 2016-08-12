(function() {
  "use strict";

  angular.module("app").controller("todoController",function($scope){
    $scope.tasks = [{ taskName: "Task 1", complete: false}, { taskName: "Task 2", complete: false}, { taskName: "Task 3", complete: false}];
    // $scope.incomplete = 3;

    $scope.addTask = function(newTaskName){
      if(newTaskName !== ""){
        var taskObject = {taskName: newTaskName, complete: false};

        $scope.tasks.push(taskObject);
        $scope.addNewTask = "";
      }
      else{
        alert("Add Text");
      }
    };

    $scope.toggleComplete = function(task){
      if(!task.complete){
        task.complete = !task.complete;
      }
      else{
        task.complete = !task.complete;
      }
    };

    $scope.clearTask = function(index){
      $scope.tasks.splice(index,1);
    };

    $scope.incompleteTasks = function(){
      var incomplete = 0;

      for(var i = 0; i < $scope.tasks.length; i++){
        if($scope.tasks[i].complete == false){
          incomplete++;
        }
      }
      return incomplete;
    }

    $scope.deleteComplete = function(){
      for(var i = 0; i < $scope.tasks.length; i++){
        if($scope.tasks[i].complete == true){
          $scope.clearTask(i);
          i--;
        }
      }
    }

    $scope.showActive = function(task){
      return !task.complete;
    }

    $scope.showComplete = function(){
      
    }

  });

}());