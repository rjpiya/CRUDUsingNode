
const db = require('../models/dbcon');



//To get Data of all student
exports.getStudentData=(req,res) => {
    var obj;
    var myQuery="select * from student";
    db.query(myQuery,(err,result,fields)=>{
        if(err){
            res.jsonp(err)
        }else{
            if(result[0]!=null){
             
                  obj={
                    "result":result,
                    "success":true,
                    "message":"All data get successfully"
                }
                
                  res.jsonp(obj)
            }else{
                obj={
                    "success":false,
                    "message":"No data found"
                }
                res.jsonp(obj)
            }
        }
    })
}

//Add a new student
exports.addStudent= (req,res) => {
    var inputparams=req.body.data;
   var id=parseInt(inputparams);
    var obj;
    
    var myQuery="insert into `student` (name,mobile,email) values('"+inputparams.name+"',"+inputparams.mobileno+",'"+inputparams.email+"')"
    db.query(myQuery,function(err,result,fields){
        if(result.affectedRows>=1){
            obj={
                "success":true,
                "message":"Student added successfully"
            }
            res.jsonp(obj)
        }
        else{
            obj={
                "success":false,
                "message":"Something went wrong"
            }
            res.jsonp(obj)
        }
    })
   
   
};


//To delete particular student
exports.deleteStudent=(req,res) => {
    var inputParams=req.body.data;
    var obj;
    var myQuery="delete from student where id='"+inputParams.student_id+"'";
    db.query(myQuery,(err,result,fields)=>{
        if(err){
            res.jsonp(err)
        }else{
            if(result.affectedRows>=1){
             
                  obj={
                    "success":true,
                    "message":"Student deleted successfully"
                }
                
                  res.jsonp(obj)
            }else{
                obj={
                    "success":false,
                    "message":"Something went wrong"
                }
                res.jsonp(obj)
            }
        }
    })
}



//Update particular student
exports.updateStudent= (req,res) => {
    var inputparams=req.body.data;
    var obj;
    var myQuery="UPDATE student set name='"+inputparams.name+"' , mobile='"+inputparams.mobileno+"', email='"+inputparams.email+"' where id='"+inputparams.student_id+"'"
  
    db.query(myQuery,function(err,result,fields){
        if(result.affectedRows>=1){
            obj={
                "success":true,
                "message":"Student updated successfully"
            }
            res.jsonp(obj)
        }
        else{
            obj={
                "success":false,
                "message":"Something went wrong"
            }
            res.jsonp(obj)
        }
    })
   
   
};

