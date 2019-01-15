jQuery(document).ready(function($) {
	color = "";
	$("#sortear").click(function() {
	  $("#result").removeClass(color);
	  color = getColor();
	  $("#result").text(getBodyPart() + " on " + color);
	  $("#result").addClass(color);

	});

	function getBodyPart() {
	  switch (getRndInteger(1, 4)) {
	    case 1:
	      bp = "Left foot ⬅️";
	      emoji = "👟";
	      break;
	    case 2:
	      bp = "Left hand ⬅️";
	      emoji = "🤚";
	      break;
	    case 3:
	      bp = "Right foot ➡️";
	      emoji = "👟";
	      break;
	    case 4:
	      bp = "Right hand ➡️";
	      emoji = "🤚";
	      break;
	  }
	  return emoji + " " + bp;
	}

	function getColor() {
	  switch (getRndInteger(1, 4)) {
	    case 1:
	      color = "Red";
	      break;
	    case 2:
	      color = "Green";
	      break;
	    case 3:
	      color = "Yellow";
	      break;
	    case 4:
	      color = "Blue";
	      break;
	  }
	  return color;
	}

	function getRndInteger(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

});
