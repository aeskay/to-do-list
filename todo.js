var lists = document.getElementsByTagName('li');

for(var i = 0; i<lists.length; i++) {
	var closeSpan = document.createElement('span');
	closeSpan.className = 'fa fa-trash close';
	lists[i].appendChild(closeSpan);
};

$(document).ready(function(){
	$("li").click(function(){
		$(this).toggleClass('checked');
	});

});


$(document).ready(function(){
	$(".close").click(function(){
		$(this).parents('li').fadeOut();
	});
});


const createList = () => {
	var lister = document.createElement('li');
	var fieldInput = document.getElementById('inputField').value;

	if (!fieldInput){
		document.getElementById('errorMsg').innerHTML = "Input what you want to do in this box!"
		document.getElementById('inputField').style.borderColor = "red";
		document.getElementById('inputField').style.borderWidth = "3px";
	} else {
		var userInput = document.createTextNode(fieldInput);
		lister.appendChild(userInput);
		lister.className = "grow newList";
		var closeSpan = document.createElement('span');
		closeSpan.className = 'fa fa-trash close';
		lister.appendChild(closeSpan);

		document.getElementById('listGroup').appendChild(lister);
		document.getElementById('inputField').value ='';

		var closer = document.getElementsByClassName('close');

		for (k=0; k<=closer.length; k++) {

			$(document).ready(function(){
				$(".newList").click(function(){
					$(this).toggleClass('checked');
				});

				$(".close").click(function(){
					$(this).parents('li').fadeOut();
				});

			});
		}
		
	}
	
}

$(document).ready(function(){
	$("#instHead").click(function(){
		$("#instructDiv").toggleClass('show');
	})

	$("#closeBar").click(function(){
		$("#instructDiv").toggleClass('show');
	})
});