
$(document).ready(function()
{
	var ptag=document.getElementById('indexPara');
	ptag.innerHTML="Following Projects are available"
	url="/getProjects"	
	$.post(url,
    {
      action: "fetch"
    },
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });
	
});

