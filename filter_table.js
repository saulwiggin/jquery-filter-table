<script>
	$("#filter").keyup(function(){
//		$("#filter").css("background-color","pink");
		// Retrieve the input field text and reset the count to zero
		var filter = $(this).val(), count = 0;
		console.log(filter);
// Loop through the comment list
		$("tr").each(function(){
		//	$("filter").css("background-color", "pink");
			console.log("found tr element");
// If the list item does not contain the text phrase fade it out
			if ($(this).text().search(new RegExp(filter, "i")) < 0) {
				$(this).fadeOut();
				console.log("truthy");
// Show the list item if the phrase matches and increase the count by 1
			} else {
				$(this).show();
		//		count++;
				console.log("falsey");
			}
		});

// Update the count
	//	var numberItems = count;
	//	$("#filter-count").text("Number of Comments = "+count);
	//});
	});
//	});
</script>