function updateContentAndURL(html_fname) {
	var updater = function(){
		$.get(html_fname, function(new_html){
			var new_doc = new DOMParser().parseFromString(new_html, "text/html");
			var new_content = new_doc.getElementById("content").innerHTML;
			$("#content").html(new_content);
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
			window.history.pushState({"html":new_html}, "", html_fname);
		})
	}
	return updater
}

function updateContentAndURLWithElem(html_fname, element_id) {
	var updater = function(){
		$.get(html_fname, function(new_html){
			var new_doc = new DOMParser().parseFromString(new_html, "text/html");
			var new_content = new_doc.getElementById("content").innerHTML;
			$("#content").html(new_content);
			document.getElementById(element_id).scrollIntoView();
			window.history.pushState({"html":new_html}, "", html_fname + '#' + element_id);
		})
	}
	return updater
}

$(document).ready(function(){
	$(".btth-btn").click(updateContentAndURL("/btth.html"));
	$(".btth-1-btn").click(updateContentAndURLWithElem("/btth.html", "btth-1"));
	$(".btth-2-btn").click(updateContentAndURLWithElem("/btth.html", "btth-2"));
	$(".btth-3-btn").click(updateContentAndURLWithElem("/btth.html", "btth-3"));
	$(".btth-4-btn").click(updateContentAndURLWithElem("/btth.html", "btth-4"));
	$(".btth-5-btn").click(updateContentAndURLWithElem("/btth.html", "btth-5"));
	$(".btth-6-btn").click(updateContentAndURLWithElem("/btth.html", "btth-6"));
	$(".sf-btn").click(updateContentAndURL("/starfall.html"));
	$(".sf-guide-btn").click(updateContentAndURL("/starfall/guide.html"));
	$(".sf-cmds-btn").click(updateContentAndURL("/starfall/commands.html"));
	$(".contact-btn").click(updateContentAndURL("/contact.html"));
});

// Get the button:
let mybutton = document.getElementById("top-btn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function topNavToggle() {
  var x = document.getElementById("topnav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}