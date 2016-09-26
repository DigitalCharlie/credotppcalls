/* Runs lookup */
	$(function() {
	    console.log( "ready!" );
	    $('#basic-search').on('submit',function(event){
	    	event.preventDefault();
	    	var lookup_zip = $('#zip-search').val();
	    	var lookup_data = {
			 "zip": lookup_zip,
			 "apikey": "593843c677374434b1d1403432d034ed",
			};

			$.ajax({
			 url: 'https://congress.api.sunlightfoundation.com/legislators/locate',
			 type: 'GET',
			 data: lookup_data,
			 dataType: 'jsonp',
			 jsonp:'callback',
			 success: function(data, textStatus, jqXHR) {
			   console.log(data);
			   console.log(textStatus);
			   console.log(jqXHR);
				var rep;
				$.each(data.results, function(index, value) {
				 if (value.chamber === 'house') {
				   rep = value;
				 }
				});
				 $('#rep_name').text(rep.first_name);
				 $('#phone_number').text(rep.phone);

				$.each(rep_table, function(index, value) {
					if (value.bioguide_id === rep.bioguide_id) {
						$.extend(rep,value);
					}
				});
				$('#whipcount_id').text(rep.whipcount_id);
			 }
			}).done(function( data ) {
			 console.log( "Data Loaded: " + data );
			});
	    });
	});

/* Controls Overlay */
	$(function() {
	    $("#test").click(function() {
	        $('.overlay').css('display', 'block');
	        setTimeout(function() {
	          $('.overlay').css('opacity', 1);
	          }, 50);
	    });
	});

	$(function() {
	    $("#overlay").click(function() {
	        $('.overlay').css('display', 'none');
	        setTimeout(function() {
	          $('.overlay').css('opacity', 0);
	          }, 50);
	    });

	    $('#overlay-content').click(function(e) {
	        e.stopPropagation();
	    });
	});

