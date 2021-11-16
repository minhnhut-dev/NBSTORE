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
    ClassicEditor
            .create( document.querySelector( '#des' ) )
            .catch( error => {
                console.log( error );
            } );


    // doah thu

    // $('#month-revenue-month').change(function(){
    //     window.location.replace("/?month="+$(this).val()+"&year_revenue_month="+$('#year-revenue-month').val()+"&year_revenue_year="+$('#year-revenue-year').val());
    // });
    // $('#year-revenue-month').change(function(){
    //     window.location.replace("/?month="+$('#month-revenue-month').val()+"&year_revenue_month="+$(this).val()+"&year_revenue_year="+$('#year-revenue-year').val());
    // });
    // $('#year-revenue-year').change(function(){
    //     window.location.replace("/?month="+$('#month-revenue-month').val()+"&year_revenue_year="+$(this).val()+"&year_revenue_month="+$('#year-revenue-month').val());
    // });

});
