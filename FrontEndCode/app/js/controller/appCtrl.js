checkInApp.controller('appCtrl', ['$scope', '$rootScope', '$state', '$http', '$timeout', '$filter', '$sessionStorage', function ($scope, $rootScope, $state, $http, $timeout, $filter, $sessionStorage) {
   
    
    
    
    const url="http://localhost:9000";
    $scope.getStudentrecord=function()
    {      
    $http.get(url+"/crud/getStudentData").then(function(data) { 
        
        $scope.resultdata=data.data.result;
            
    }, function(error) {
        console.log("view error",error)
        
    });  
    }
    
    $scope.getStudentrecord();    
    $scope.loginSubmit=function()
    {
        $state.go('dashboard');
    }
    $scope.addstd={};
    $scope.validform=true
    $scope.submitted=true
    
    
    $scope.editRecords={}
    $scope.edit_form=function(item)
    {
        console.log("view items",item)
        $scope.editRecords.student_id=item.id
        $scope.editRecords.name=item.name
        $scope.editRecords.mobileno=item.mobile
        $scope.editRecords.email=item.email
        
        
    }
    
    $scope.delete_records=function(index)
    {
        console.log("view item value",index);
        $scope.delete_val=index;
         
    }
     
$scope.delete_recorditem={}
    $scope.delete_item=function()
    {
      $scope.delete_recorditem.student_id=$scope.delete_val
       
       // $http.post(url+"/crud/deleteStudent/student_id?="+$scope.delete_va, {headers: {'Content-Type': 'application/json'} })
         $http.post(url+"/crud/deleteStudent/", {data: $scope.delete_recorditem}, {headers: {'Content-Type': 'application/json'} })
        .then(function (response) {
           // return response;
             $scope.getStudentrecord();
             $('#studentDeleteModal').hide(); 
                
               
          })
        
        
       
        //$("#studentDeleteModal").css("display", "none");
    }
    $scope.edit_records_recordsObj=[]
    $scope.edit_records=function(fromvalid,item)
    {  
        if(fromvalid){
            
                $scope.validform=true
           // $('#studentEditModal').hide();
               if(item.name!=undefined && item.mobileno!=undefined && item.email!=undefined)
             {
             
            $http.post(url+"/crud/updateStudent", {data: $scope.editRecords}, {headers: {'Content-Type': 'application/json'} })
        .then(function (response) {
           // return response;
                 
                $scope.getStudentrecord();
                  $('#studentEditModal').hide();
                
          })   
            } 
            }
        else{
            $scope.submitted=false;
        }
        
        
    }

    $scope.add_student_recds={}
    var cnt=0;
    $scope.add_records=function(fromvalid,item)
    { 
        
        if(fromvalid){
            console.log("data",fromvalid);
                $scope.validform=true
               if(item.name!=undefined && item.mobileno!=undefined && item.email!=undefined)
             {
                
        $scope.add_student_recds.name=$scope.addstd.name;
        $scope.add_student_recds.mobileno=$scope.addstd.mobileno;
        $scope.add_student_recds.email=$scope.addstd.email;
            $http.post(url+"/crud/addStudent", {data: $scope.add_student_recds}, {headers: {'Content-Type': 'application/json'} })
        .then(function (response) {
                console.log("view res error",response)
           // return response;
                
                $scope.getStudentrecord();
                $('#studentAddModal').hide();
          })   
            } 
            }
        else{
            $scope.submitted=false
            console.log(" view else ",fromvalid)
        }
        
        
    }
      
    
       }]);
