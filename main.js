studentarray=[];
function submit(){
    var display_student_array=[];
    for (var j = 1; j <= 4; j++) 
    { var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
     console.log(name_of_the_student);
      studentarray.push(name_of_the_student); }
   var lengthofarray=studentarray.length;
   for (var k = 0; k < lengthofarray; k++) {
    display_student_array.push("<h4>NAME- "+ studentarray[k] + "</h4>");
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;  
}}