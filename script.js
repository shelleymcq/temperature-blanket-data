// inputs: zipcode/city, year, farenheit/celcius choice

// fetch weather data
const noaaUrl = "https://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes";
const noaaToken = "oTpqrhNkWQBIbOWgrvJrCUeJdRKIhbac";

$.ajax({ 
    url: noaaUrl, 
    headers:{ 'token': noaaToken } 
}).then(function(response) {
    console.log(response);
})


  

// render to table


// convert table to something printable ????

