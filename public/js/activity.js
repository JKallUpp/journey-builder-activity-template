var connection = new Postmonger.Session();

// Start Sequence
connection.trigger('ready');

connection.on('initActivity', function ( data ) {
    // document.getElementById( 'configuration' ).value = JSON.stringify( data, null, 2);
    document.getElementById( 'configuration' ).value = "121212";
    
});

//Save Sequence
connection.on('clickedNext', function () {
    var configuration = JSON.parse( document.getElementById( 'configuration' ).value );
    connection.trigger('updateActivity', configuration);
});
