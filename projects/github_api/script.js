(function() {
    //btoa('ivana'); konwertowanie do formatu rozumianego przez komputery
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(".repos-container").on("click", ".fullname", function(e) {
        e.stopPropagation();

        var clicked = $(this);
        var commits = clicked.next();

        if (commits.html().length > 0) {
            console.log(commits.html().length);
            commits.toggle();
        } else {
            var username = $('input[name="username"]').val();
            var password = $('input[name="password"]').val();
            var elem = $(this).html();
            var baseUrl = "https://api.github.com";
            var newEndPoint = "/repos/" + elem + "/commits"; // tu zrobic tak bu pojawil sie     /repos/:owner/:repo/commits

            $.ajax({
                url: baseUrl + newEndPoint,
                headers: {
                    Authorization: "Basic " + btoa(username + ":" + password) // tu musi byc spacja
                },
                success: function(response) {
                    var responseSliced = response.slice(0, 10);
                    var reposTemplateSliced = Handlebars.templates.reposTwo({
                        data: responseSliced /// tych danych handle bar oczekuje po lewej zawsze data
                    });
                    $(e.target)
                        .next()
                        .html(reposTemplateSliced);
                }
            });
        }
    });

    $("button").on("click", function() {
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();
        var userToSearch = $('input[name="user-to-search"]').val();
        var baseUrl = "https://api.github.com";
        var endPoint = "/users/" + userToSearch + "/repos"; // tu zrobic tak bu pojawil sie
        $.ajax({
            url: baseUrl + endPoint,
            headers: {
                Authorization: "Basic " + btoa(username + ":" + password) // tu musi byc spacja
            },
            success: function(response) {
                var reposTemplate = Handlebars.templates.repos({
                    data: response /// tych danych handle bar oczekuje po lewej zawsze data
                });
                $(".repos-container").html(reposTemplate);
            } // closes succes
        }); // closes ajax
    }); // closes click
})(); // closes iife

//profile picture
//user username
//name repository
// tego dzukam

// full_name  imie uzytkownika i nazwa repozytorium
// name
//
