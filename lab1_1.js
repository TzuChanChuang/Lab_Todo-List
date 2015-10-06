var addednum=1;
function Add(){
  document.getElementById("list").style.display= "block";
}
function Ok(){
  var x = document.getElementById("title");
  var y = document.getElementById("date");
  var z = document.getElementById("description");
  document.getElementById("list").style.display= "none";
  
  //Add Task
  var task= "<div>"+"<textarea id=addedtask"+addednum+" "+
            "readonly=\"true\">"+
            x.value+"\n"+y.value+"\n"+z.value+
            "</textarea>"+"</div>";
  var edit= "<button type=\"button\" "+
            "id=edit"+addednum+" onclick=\"Edit("+addednum+")\""+
            ">Edit</button>";
  var delete1= "<button type=\"button\" "+
               "id=delete"+addednum+" onclick=\"Delete("+addednum+")\" "+
               ">Delete</button>";
  document.getElementById("addtask").innerHTML+=task+edit+delete1;
  addednum+=1;
  
  //remove original text
  document.getElementById("title").value= "";
  document.getElementById("date").value= "";
  document.getElementById("description").value= "";
  
}
function DeleteAll(){
  document.getElementById("addtask").innerHTML="";
}
function Delete(num){
  var element=document.getElementById("addedtask"+num);
  document.getElementById("addedtask"+num).parentNode.removeChild(element);
  var element2=document.getElementById("edit"+num);
  document.getElementById("edit"+num).parentNode.removeChild(element2);
  var element3=document.getElementById("delete"+num);
  document.getElementById("delete"+num).parentNode.removeChild(element3);
}
function Edit(num){
  document.getElementById("addedtask"+num).readOnly= false;
  document.getElementById("edit"+num).onclick= function(){Confirm(num);};
  document.getElementById("edit"+num).innerHTML= "Confirm";
}
function Confirm(num){
  document.getElementById("addedtask"+num).readOnly= true;
  document.getElementById("edit"+num).onclick= function(){Edit(num);};
  document.getElementById("edit"+num).innerHTML= "Edit";
}
