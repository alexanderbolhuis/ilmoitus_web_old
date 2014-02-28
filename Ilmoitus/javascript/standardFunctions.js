// Add a row to a table. Is a direct copy of the final row. Execute just before filling in forms in the final row. (onkeydown)
function addTableRow(tableId) {
	var table = $("#"+tableId);
	$("#"+tableId+" tbody tr").last().clone().appendTo("table tbody");
	var lastRow = $("#"+tableId+" tbody tr").last();

	if($("#"+tableId+" tbody tr").last().hasClass("even")) {
		$("#"+tableId+" tbody tr").last().removeClass("even");
	} else {
		$("#"+tableId+" tbody tr").last().addClass("even");
	}
	
}

function removeTableRow(tableId, rowIndex) {
	if($("#"+tableId+" tbody tr").length > 1) {
		$("#"+tableId+" tbody tr").eq(rowIndex).remove();
		$("#"+tableId+" tbody tr").each(function( index, element ) {
			if(index % 2) {
				$(element).addClass("even");
			} else {
				$(element).removeClass("even");
			}
		});
	} else {
		//Clear row input fields
	}
}

/**
 * Show an error message with the given message and title.
 * 
 * @param {String} message The message the error should show. Can use HTML.
 * @param {String} title Optional. The title of the error message.
 */
function showMessage(message, title) {
    title = (typeof title === "undefined") ? "" : title; //Title is optional.
    $("body").append(
	"<div class='coverBg' onclick='closeMessage();' id='coverBg' ></div>"+
    "<div class='cover' id='messageCover'>" +
        "<div class='header'>" +
            title +
            "<div class='closeButton' onclick='closeMessage();'>X</div>" +
        "</div>" +
        "<div class='contentMessage'>" +
        	message +
        "</div>" +
    "</div>");
    $("#messageCover").fadeIn();
    $("#coverBg").fadeIn();
}

/**
 * Close the error message
 */
function closeMessage() {
	$("#messageCover").fadeOut();
	$("#coverBg").fadeOut();
    setTimeout(function(){
        $("#messageCover").remove();
        $("#coverBg").remove();
    }, 600);
    
}