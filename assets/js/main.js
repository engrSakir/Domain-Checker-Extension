


console.log("js Working ..");

$("#domain_checker_btn").click(function() {
    // alert( "Handler for .click() called." );
    domain_checker("www.example.com");
});


function domain_checker(domain){
    if (/\.(com|net)\/?$/i.test(domain)) {
        $("#result").text("Domain is not available");
    } else {
        $("#result").text("Domain is available");
    }
}


console.log("Js End");
