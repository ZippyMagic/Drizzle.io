/* 
*System API by @ZippyMagic
*
*Will be logged
*/

function System() {
		
	this.Print = function(text) {
		var body = document.body.innerHTML;
			
		document.body.innerHTML = body + text + '<br>';
	}
    this.getDate = function() {    	
		var today = new Date();
        var date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDay();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var Date2 = date + ' -- ' + time;
        
		return Date2;
    }
}
