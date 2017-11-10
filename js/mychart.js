$(document).ready(function(){
  start();
});
function start(){
  $("#line").click(function(){ //on selecting line graph
    $("#linegraphc").show(); //show line graph form
    $("#initial").hide(); //hide choices for graphs
    //back button
    $("#linegraphc").append('<input type="button" id="backtoselectl" value="Back" />');
  });
  $("#pie").click(function(){ //on slecting pie chart
    $("#piechartc").show(); //show pie chart form
    $("#initial").hide(); //hide choices for graphs
    //back button
    $("#piechartc").append('<input type="button" id="backtoselectp" value="Back" />');
  });
  $("#bar").click(function(){ //on slecting pie chart
    $("#bargraphc").show(); //show pie chart form
    $("#initial").hide(); //hide choices for graphs
    //back button
    $("#bargraphc").append('<input type="button" id="backtoselectb" value="Back" />');
  });
  //creating new arrays to store data given by user
  var data = [];
  var label = [];
  var color = [];
  //function for back button on selecting line graph
  $("#linegraphc").on('click','#backtoselectl', function(){
    $("#initial").show();
    $("#linegraphc").hide();
    $("#backtoselectl").remove();
  });
  //function for back button on selecting pie chart
  $("#piechartc").on('click','#backtoselectp', function(){
    $("#initial").show();
    $("#piechartc").hide();
    $("#backtoselectp").remove();
  });
  //function for back button on selecting bar graph
  $("#bargraphc").on('click','#backtoselectb', function(){
    $("#initial").show();
    $("#bargraphc").hide();
    $("#backtoselectb").remove();
  });
   //on clicking line graph form
  $("#btn").click(function(){
    var n= $("#value").val(); // taking no. of fields from user
    if(n=="" || isNaN(n) ||n<0){ //validating input
      alert("invalid input!!!")
      return;}
    $("#btndraw").show();
    $("#btn").hide();
    $("#backtoselectl").remove();
    $("h1").hide();
    $("#value").hide();
    for(var i=0;i<n;i++){
      var div = $("<div />");
      div.html(GetDynamicTextBox(i+1)); //creating no. of fields given by user
      $("#showform").append(div);
    }
    });
function GetDynamicTextBox(i) { //function for generating fields
   return 'LABEL&nbsp'+ i +':<input name = "label" type="text" /><br>' +
           'DATA&nbsp'+ i +':<input name = "data" type="number" /><br><br>'
         }
  //on clicking line graph draw button
  $("#btndraw").click(function(){
  $("input[name=data]").each(function () {
      data.push($(this).val()); //storing data values in array data
    });

  $("input[name=label]").each(function () {
    label.push($(this).val()); //storing label values in array label
    });

  var chkd = validatedata(data); //validating data given by user
  var chkv = validateval(label); //validating labels given by user
  if(chkd==false || chkv == false){ //if user has given any invalid value
    data = []; //clear data array
    label = []; //and clear label array
    alert("Invalid Input !!!") //show alert box
  }
  if(chkd && chkv){ //if all inputs are valid . DRAW GRAPH
    $("#btndraw").hide();
    $("#showform").hide();
    //drawing line graph
 var ctx = document.getElementById('myCharty').getContext('2d');
 $("#container").show(); //making the container visible where graph will be shown
 var myChart = new Chart(ctx, {
   type: 'line',
   data: {
     labels: label,
     datasets: [{
       label: 'data1',
       data: data,
       backgroundColor: "blue"
     }]
    }
  });
}
});

 //on clicking pie chart form
$("#btnp").click(function(){
   var n= $("#valuep").val();
   if(n=="" || isNaN(n) || n<0){ //same as line graph
     alert("invalid input!!!")
     return;
   }
   $("#btnpdraw").show();
   $("#btnp").hide();
     $("#backtoselectp").remove();
     $("h1").hide();
   $("#valuep").hide();
   for(var i=0;i<n;i++){
     var div = $("<div />");
     div.html(GetDynamcTextBox(i+1));
     $("#showform").append(div);
   }
 });
 function GetDynamcTextBox(i) {
    return 'LABEL&nbsp'+ i +':<input name = "label" type="text" /><br>' +
           'DATA&nbsp'+ i +':<input name = "data" type="number" /><br>'+
           'COLOR&nbsp'+ i +':<input name="color" type="color" /><br><br>'
 }

//on clicking draw button of pie chart
 $("#btnpdraw").click(function(){
   $("input[name=data]").each(function () {
      data.push($(this).val());
   });
   $("input[name=label]").each(function () {
      label.push($(this).val());
   });
 $("input[name=color]").each(function () {
      color.push($(this).val());
   });

     var chkd = validatedatap(data); //checking data to be non negative,empty or not number
     var chkv = validateval(label);
     if(chkd==false || chkv == false){
       data = [];
       label = [];
       color = [];
       alert("Invalid Input !!!")
     }
     if(chkd && chkv){
       $("#btnpdraw").hide();
       $("#showform").hide();
   //drawing pie chart
 var ctx = document.getElementById('myCharty').getContext('2d');
 $("#container").show();
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: label,
      datasets: [{
      backgroundColor: color,
      data: data
     }]
    }
  });
 }
});
//on clicking bar graph form
$("#btnb").click(function(){
  var n= $("#valueb").val(); // taking no. of fields from user
  if(n=="" || isNaN(n) || n<0){ //all process same as line graph
  alert("invalid input!!!")
    return;}
  $("#btnbdraw").show();
  $("#backtoselectb").remove();
  $("#btnb").hide();
  $("h1").hide();
  $("#valueb").hide();
 for(var i=0;i<n;i++){
   var div = $("<div />");
   div.html(GetDynamicTextBox(i+1)); //creating no. of fields given by user
   $("#showform").append(div);
 }
});
function GetDynamicTextBox(i) { //function for generating fields
return 'LABEL&nbsp'+ i +':<input name = "label" type="text" /><br>' +
        'DATA&nbsp'+ i +':<input name = "data" type="number" /><br><br>'
      }

//on clicking bar graph draw button
$("#btnbdraw").click(function(){
 $("input[name=data]").each(function () {
   data.push($(this).val()); //storing data values in array data
 });
$("input[name=label]").each(function () {
 label.push($(this).val()); //storing label values in array label
 });

      var chkd = validatedata(data);
      var chkv = validateval(label);
      if(chkd==false || chkv == false){
        data = [];
        label = [];
        alert("Invalid Input !!!")
      }
      if(chkd && chkv){
        $("#btnbdraw").hide();
      $("#showform").hide();
 //drawing bar graph
var ctx = document.getElementById('myCharty').getContext('2d');
$("#container").show(); //making the container visible where graph will be shown
var myChart = new Chart(ctx, {
type: 'bar',
data: {
  labels: label,
  datasets: [{
    label: 'data1',
    data: data,
    backgroundColor: "blue"
  }]
 }
});
}
});
function validatedata(arr){
  var c=1;
  jQuery.each(arr, function(i,val){
    if(val==""|| isNaN(val))
    c=0;
  })
  if(c==0){
    return false;
  }
  return true;
}
function validatedatap(arr){
  var c=1;
  jQuery.each(arr, function(i,val){
    if(val==""|| isNaN(val)|| val<=0)
    c=0;
  })
  if(c==0){
    return false;
  }
  return true;
}
function validateval(arr){
  var c=1;
  jQuery.each(arr, function(i,val){
    if(val=="")
    c=0;
  })
  if(c==0){
    return false;
  }
  return true;
}
}
