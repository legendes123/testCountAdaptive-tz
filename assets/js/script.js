$(function(){
	
	var note = $('#note'),
		ts = new Date(1, 10, 1),
		newYear = true;
	
	if((new Date()) > ts){
		
		ts = (new Date()).getTime() + 10*100*15*4*30;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " дн." + ( days==1 ? '':'' ) + ", ";
			message += hours + " час." + ( hours==1 ? '':'' ) + ", ";
			message += minutes + " мин." + ( minutes==1 ? '':'' ) + " и ";
			message += seconds + " сек." + ( seconds==1 ? '':'' ) + " <br />";
			
			
			
			note.html(message);
		}
	});
	
});




const input = document.getElementById('only_num');

input.addEventListener('keydown', function(event) {
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		(event.keyCode == 65 && event.ctrlKey === true) ||
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		return;
	} else {
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});