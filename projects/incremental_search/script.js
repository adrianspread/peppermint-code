(function() {
    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Angola",
        "Anguilla",
        "Antigua",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bonaire (Netherlands Antilles)",
        "Bosnia Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo, The Democratic Republic of",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Curacao (Netherlands Antilles)",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iraq",
        "Ireland (Republic of)",
        "Israel",
        "Italy",
        "Ivory Coast",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kosrae Island",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia (FYROM)",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Moldova",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Ponape",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Rota",
        "Russia",
        "Rwanda",
        "Saba (Netherlands Antilles)",
        "Saipan",
        "Samoa",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St. Barthelemy",
        "St. Croix",
        "St. Eustatius (Netherlands Antilles)",
        "St. John",
        "St. Kitts and Nevis",
        "St. Lucia",
        "St. Maarten (Netherlands Antilles)",
        "St. Thomas",
        "St. Vincent and the Grenadines",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Tinian",
        "Togo",
        "Tonga",
        "Tortola",
        "Trinidad and Tobago",
        "Truk",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos",
        "Tuvalu",
        "US Virgin Islands",
        "Uganda",
        "Ukraine",
        "Union Island",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Virgin Gorda",
        "Wallis and Futuna",
        "Yap",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];
    var searchField = $("input");
    console.log(searchField);
    var resultsDiv = $(".results");
    var body = $("body");

    //gdy pisze dzieje sie input
    // gdy musza po nazwach event happening
    // gdy naciskam enter enter happening

    //1. input event.
    // get a list of countries that match the input we got from the user.
    // if the user type gibberish, show a massage that says "no result"
    // if the input field is empty show nothing
    searchField.on("input", function() {
        console.log("input happening...");
        console.log(searchField.val());
        var userInput = searchField.val().toLowerCase();
        console.log("userInput", userInput);
        var results = [];
        for (var i = 0; i < countries.length; i++) {
            console.log(
                "countries:",
                countries[i],
                countries[i].indexOf(userInput)
            );

            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                console.log("Match found!!:", countries[i]);
                results.push(countries[i]);
            }
            // here we need to compare the users input, with the countries[i];
            // indexOf 'Albania'.indexOf('A') --> returns 2
            if (results.length === 4) {
                break;
            }
        } // musze wyczyscic liste bo jak nic nie wpisuje to lista jest wciaz pelna
        // document.body.innerHTML; TO ZWRACA STRONE STRING
        console.log("results array after loop:", results);
        // if the user type gibberish - message "no result"

        var htmlForCountries = "";

        for (var j = 0; j < results.length; j++) {
            // we want to build up our html...  za kazdym razem przebiegiem petli dodaje element html
            htmlForCountries += '<p class="country">' + results[j] + "</p>";
        }
        console.log("htmlForCountries: ", htmlForCountries);
        resultsDiv.html(htmlForCountries);

        // if input gibberish display no result
        if (results.length == 0) {
            htmlForCountries += '<p class="country">' + "no result" + "</p>";
            resultsDiv.html(htmlForCountries);
        }

        // clear list when input clear
        if (userInput.length == 0) {
            htmlForCountries -= '<p class="country">' + "</p>";
            resultsDiv.html(htmlForCountries);
            results = [];
        }
    });

    resultsDiv.on("mouseover", "p", function(e) {
        e.stopPropagation();
        var elem = $(this);
        $("p").removeClass("highlighted");
        elem.addClass("highlighted");
    });

    resultsDiv.on("mouseleave", "p", function(e) {
        e.stopPropagation();
        var elem = $(this);
        elem.removeClass("highlighted");
    });

    resultsDiv.on("mousedown", "p", function(e) {
        e.stopPropagation();
        var elem = $(this);
        // console.log(elem.html());
        searchField.val(elem.html());
        resultsDiv.empty();
    });

    body.click(function(e) {
        e.stopPropagation();
        console.log("click on body");
        resultsDiv.empty();
    });

    searchField.on("keydown", function(e) {
        // var highlighted = $(".highlighted");
        var index = $("p.highlighted").index();
        // console.log("index", index);
        var highlighted = $("p.highlighted");
        // console.log("just highlighted", highlighted);
        // console.log("just highlighted", highlighted.index());

        if (e.keyCode === 40 && index == -1) {
            $("p")
                .eq(0)
                .addClass("highlighted");
            index = 0;
            console.log(
                "arrow down and index of highlighted should be = 0 and is:",
                index
            );
        }

        if (e.keyCode === 40 && index < 3) {
            highlighted.next().addClass("highlighted");
            highlighted.removeClass("highlighted");
            console.log(
                "arrow down and index of highlighted is:",
                $("p.highlighted").index()
            );
        }

        if (e.keyCode === 38 && index > 0) {
            highlighted.prev().addClass("highlighted");
            highlighted.removeClass("highlighted");
            console.log(
                "arrow up and index of highlighted is:",
                $("p.highlighted").index()
            );
        }

        if (e.keyCode === 13 && index > -1) {
            e.stopPropagation();
            // console.log(elem.html());
            var putin = $("p.highlighted").html();
            searchField.val(putin);
            resultsDiv.empty();
        }
    });

    searchField.focus(function() {
        $(this).css("background-color", "yellow");
    });
    searchField.blur(function() {
        $(this).css("background-color", "#90ee90");
    });
})();
