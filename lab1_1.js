function Add(){
  document.getElementById("list").style.display= "block";
}
function Ok(){
  var x = document.getElementById("title");
  var y = document.getElementById("date");
  var z = document.getElementById("description");
  document.getElementById("list").style.display= "none";
  
  //Add Task
  var addednum=1;
  var task= "<div>"+"<textarea id=addedtask"+addednum+
            "readonly=\"true\">"+
            x.value+"\n"+y.value+"\n"+z.value+
            "</textarea>"+"</div>";
  document.getElementById("addtask").innerHTML+=task;
  addednum+=1;
  
  document.getElementById("title").value= "";
  document.getElementById("date").value= "";
  document.getElementById("description").value= "";
  
}
function DeleteAll(){
  document.getElementById("addtask").innerHTML="";
}

