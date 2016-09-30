$.validator.addMethod( "fullName", function( value, element ) {
	return this.optional( element ) || /\w+\s+\w+/.test( value );
}, "Please enter a first and last name." );

$.validator.addMethod( "zipcodeUS", function( value, element ) {
	return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
}, "Please enter a valid zip code." );
