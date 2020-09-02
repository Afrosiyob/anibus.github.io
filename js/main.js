$( document ).ready( function () {
    $( '.top-box' ).click( function ( e ) {
        var iClass = $( this ).children( '#icon' ).attr( 'class' );
        e.preventDefault();
        $( this ).next( '.under-box' ).slideToggle();
        if ( iClass == 'fa fa-angle-down' ) {
            $( this ).children( '#icon' ).removeClass( 'fa-angle-down' ).addClass( 'fa-angle-up' );
        } else if ( iClass == 'fa fa-angle-up' ) {
            $( this ).children( '#icon' ).removeClass( 'fa-angle-up' ).addClass( 'fa-angle-down' );
        }
    } );
    $( '.tab-btn' ).click( function ( e ) {
        var tabId = $( this ).attr( 'id' );
        $( `${ '#Left' + tabId }` ).fadeToggle( function () {
            $( '.inner-item' ).not( this ).fadeOut();
        } );
    } );
} );