//JSON
/*
var data = {
  rsvp: ['ixd@ucsd.edu']
};
*/
var data = {
  warning: ['Would you please confirm the following: ']
};

/*
 * GET tasks page.
 */
 /*
exports.adminView = function(req, res){
  res.render('rsvp', data);
};
*/

/*
* Posts???
*/


exports.addMessage = function(req, res){
	//JSON
	//var rsvpEmail = req.body.rsvpEmail;

	var receivedMessage = req.body.messageRequest;
	console.log(receivedMessage);

	
	data.warning.push(receivedMessage);// Add to the current data.
	//sending back so our browser knows it worked.
	res.send(receivedMessage);

};
