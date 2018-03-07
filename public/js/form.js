$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	//initConfirmation();
	initListeners();
}

function initListeners(){

	//dummy listeners for the users.

	$("#addEvent").click(function{

			e.preventDefault();
  			console.log("Clicked add");
			window.confirm("Are you sure you like to add Events?");

	});

	$("#deleteEvent").click(function{

			e.preventDefault();
  			console.log("Clicked add");
			window.confirm("Are you sure you like to delete Events?");

	});

}





function initConfirmation(){


	//to do this....
	//1. get the label of the field inside that form. OR JUST CONFIRM!!!!!!
	//2. post that label inside the post request.

 	$("#addEventForm").submit(function(e){

  		e.preventDefault();
  		console.log("submitting form...");

  		var input;


  		$("input").each(function(){
 			input = $(this); // This is the jquery object of the input
		});

  		console.log(input);
		//sending post request
		//$.post('addMessage', {label : label}, postCallback);

	});
	/* 	
	function postCallback(res){

		// chenge to the appropriate message....
		alert("message under construction, check later!");

	} 
	*/

}