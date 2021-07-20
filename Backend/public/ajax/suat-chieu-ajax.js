$(document).ready(function () {
    var disalbed =$('#all-date').is(':checked');
    if (!disalbed) {
        $( "#begin" ).prop( "disabled", true );
        $( "#end" ).prop( "disabled", true );
    }
    $('#all-date').click(function() {
        disalbed = $('#all-date').is(':checked');
        if (disalbed) {
            $( "#begin" ).prop( "disabled", false );
            $( "#end" ).prop( "disabled", false );
          } else {
            $( "#begin" ).prop( "disabled", true );
            $( "#end" ).prop( "disabled", true );
          }  
    });
});
