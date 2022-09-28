


console.log("js Working ..");

$("#domain_checker_btn").click(function () {
    // alert( "Handler for .click() called." );
    domain_checker($('#domain').val());
});


function domain_checker(domain) {
    $.get("http://api.mdsakir.com/domain/availability", { domain: domain }).done(function (data) {
        if(data.type == 'success'){
            response_html = `<div class="alert alert-success mt-3" role="alert"> Domain is available </div>`;
        }else{
            response_html = `<div class="alert alert-danger mt-3" role="alert"> Domain is not available </div>`;
        }
        $('#domain_response').html(response_html)
    });
}


console.log("Js End");
