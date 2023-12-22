var connection = new Postmonger.Session();

// Start Sequence
connection.trigger('ready');

connection.on('initActivity', function ( data ) {
    // document.getElementById( 'SMS' ).value = JSON.stringify( data, null, 2);
    var wert = 1;
    document.getElementById( 'SMS' ).value = wert;
    
});

//Save Sequence
connection.on('clickedNext', function () {
    var msg = JSON.parse( document.getElementById( 'SMS' ).value );
    connection.trigger('updateActivity', msg);
});
