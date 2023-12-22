var connection = new Postmonger.Session();

// Start Sequence
connection.trigger('ready');

connection.on('initActivity', function ( data ) {
    // document.getElementById( 'SMS' ).value = JSON.stringify( data, null, 2);
    document.getElementById( 'SMS' ).value = "121212";
    
});

//Save Sequence
connection.on('clickedNext', function () {
    var msg = JSON.parse( document.getElementById( 'SMS' ).value );
    connection.trigger('updateActivity', msg);
});
