jQuery(document).ready(function($) {
	color = "";
	$("#sortear").click(function() {
	  $("#result").removeClass(color);
	  color = getColor();
	  $("#result").text(getBodyPart() + " no " + color);
	  $("#result").addClass(color);

	});

	function getBodyPart() {
	  switch (getRndInteger(1, 4)) {
	    case 1:
	      bp = "Pé esquerdo";
	      emoji = "🦶";
	      break;
	    case 2:
	      bp = "Mão esquerda";
	      emoji = "🤚";
	      break;
	    case 3:
	      bp = "Pé direito";
	      emoji = "🦶";
	      break;
	    case 4:
	      bp = "Mão direita";
	      emoji = "🤚";
	      break;
	  }
	  return emoji + " " + bp;
	}

	function getColor() {
	  switch (getRndInteger(1, 4)) {
	    case 1:
	      color = "Vermelho";
	      break;
	    case 2:
	      color = "Verde";
	      break;
	    case 3:
	      color = "Amarelo";
	      break;
	    case 4:
	      color = "Azul";
	      break;
	  }
	  return color;
	}

	function getRndInteger(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

});
