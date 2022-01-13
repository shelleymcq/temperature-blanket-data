// inputs: zipcode/city, year, farenheit/celcius choice


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

const cities = [
    "Washington D.C., US",
    "Alexander City, AL US",
    "Anniston, AL US",
    "Auburn, AL US",
    "Birmingham, AL US",
    "Cullman, AL US",
    "Dothan, AL US",
    "Enterprise, AL US",
    "Eufaula, AL US",
    "Florence, AL US",
    "Fort Payne, AL US",
    "Gadsden, AL US",
    "Huntsville, AL US",
    "Jasper, AL US",
    "Mobile, AL US",
    "Montgomery, AL US",
    "Selma, AL US",
    "Talladega, AL US",
    "Troy, AL US",
    "Tuscaloosa, AL US",
    "Anchorage, AK US",
    "Fairbanks, AK US",
    "Juneau, AK US",
    "Nome, AK US",
    "Seward, AK US",
    "Bullhead City, AZ US",
    "Casa Grande, AZ US",
    "Douglas, AZ US",
    "Flagstaff, AZ US",
    "Green Valley, AZ US",
    "Kingman, AZ US",
    "Lake Havasu City, AZ US",
    "Mesa, AZ US",
    "Nogales, AZ US",
    "Payson, AZ US",
    "Phoenix, AZ US",
    "Prescott, AZ US",
    "Sierra Vista, AZ US",
    "Tucson, AZ US",
    "Yuma, AZ US",
    "Arkadelphia, AR US",
    "Blytheville, AR US",
    "Camden, AR US",
    "Conway, AR US",
    "El Dorado, AR US",
    "Fayetteville, AR US",
    "Forrest City, AR US",
    "Fort Smith, AR US",
    "Harrison, AR US",
    "Hope, AR US",
    "Hot Springs, AR US",
    "Jonesboro, AR US",
    "Little Rock, AR US",
    "Magnolia, AR US",
    "Mountain Home, AR US",
    "Paragould, AR US",
    "Pine Bluff, AR US",
    "Russellville, AR US",
    "Searcy, AR US",
    "Siloam Springs, AR US",
    "Anaheim, CA US",
    "Bakersfield, CA US",
    "Barstow, CA US",
    "Blythe, CA US",
    "Chico, CA US",
    "Clearlake, CA US",
    "Coalinga, CA US",
    "El Centro, CA US",
    "Eureka, CA US",
    "Fresno, CA US",
    "Grass Valley, CA US",
    "Long Beach, CA US",
    "Los Angeles, CA US",
    "Merced, CA US",
    "Modesto, CA US",
    "Monterey, CA US",
    "Napa, CA US",
    "Oakland, CA US",
    "Oceanside, CA US",
    "Oxnard, CA US",
    "Palm Springs, CA US",
    "Red Bluff, CA US",
    "Redding, CA US",
    "Ridgecrest, CA US",
    "Riverside, CA US",
    "Rosamond, CA US",
    "Sacramento, CA US",
    "Salinas, CA US",
    "San Bernardino, CA US",
    "San Diego, CA US",
    "San Francisco, CA US",
    "San Jose, CA US",
    "San Luis Obispo, CA US",
    "Santa Ana, CA US",
    "Santa Barbara, CA US",
    "Santa Clarita, CA US",
    "Santa Cruz, CA US",
    "Santa Maria, CA US",
    "Santa Rosa, CA US",
    "Simi Valley, CA US",
    "Soledad, CA US",
    "Stockton, CA US",
    "Susanville, CA US",
    "Ukiah, CA US",
    "Vallejo, CA US",
    "Visalia, CA US",
    "Yuba City, CA US",
    "Yucca Valley, CA US",
    "Boulder, CO US",
    "Canon City, CO US",
    "Colorado Springs, CO US",
    "Denver, CO US",
    "Durango, CO US",
    "Fort Collins, CO US",
    "Fort Morgan, CO US",
    "Grand Junction, CO US",
    "Montrose, CO US",
    "Pueblo, CO US",
    "Sterling, CO US",
    "Bridgeport, CT US",
    "Danbury, CT US",
    "Hartford, CT US",
    "New Haven, CT US",
    "New London, CT US",
    "Norwalk, CT US",
    "Norwich, CT US",
    "Stamford, CT US",
    "Torrington, CT US",
    "Waterbury, CT US",
    "Willimantic, CT US",
    "Dover, DE US",
    "Newark, DE US",
    "Belle Glade, FL US",
    "Boca Raton, FL US",
    "Boynton Beach, FL US",
    "Bradenton, FL US",
    "Cape Coral, FL US",
    "Cocoa, FL US",
    "Coral Springs, FL US",
    "Crestview, FL US",
    "Daytona Beach, FL US",
    "Deltona, FL US",
    "Destin, FL US",
    "Fort Lauderdale, FL US",
    "Fort Myers, FL US",
    "Fort Walton Beach, FL US",
    "Gainesville, FL US",
    "Homosassa Springs, FL US",
    "Immokalee, FL US",
    "Jacksonville, FL US",
    "Jupiter, FL US",
    "Key Largo, FL US",
    "Key West, FL US",
    "Kissimmee, FL US",
    "Marathon, FL US",
    "Melbourne, FL US",
    "Miami, FL US",
    "Naples, FL US",
    "Ocala, FL US",
    "Orlando, FL US",
    "Palatka, FL US",
    "Palm Coast, FL US",
    "Panama City, FL US",
    "Pensacola, FL US",
    "Pompano Beach, FL US",
    "Port Charlotte, FL US",
    "Port St. Lucie, FL US",
    "Sarasota, FL US",
    "Spring Hill, FL US",
    "St. Augustine, FL US",
    "St. Petersburg, FL US",
    "Tallahassee, FL US",
    "Tampa, FL US",
    "Titusville, FL US",
    "West Palm Beach, FL US",
    "Albany, GA US",
    "Americus, GA US",
    "Athens, GA US",
    "Atlanta, GA US",
    "Augusta, GA US",
    "Bainbridge, GA US",
    "Brunswick, GA US",
    "Carrollton, GA US",
    "Columbus, GA US",
    "Dalton, GA US",
    "Douglas, GA US",
    "Dublin, GA US",
    "Fort Benning South, GA US",
    "Gainesville, GA US",
    "Griffin, GA US",
    "Hinesville, GA US",
    "LaGrange, GA US",
    "Macon, GA US",
    "Milledgeville, GA US",
    "Peachtree City, GA US",
    "Rome, GA US",
    "Savannah, GA US",
    "St. Marys, GA US",
    "Statesboro, GA US",
    "Thomasville, GA US",
    "Tifton, GA US",
    "Valdosta, GA US",
    "Vidalia, GA US",
    "Waycross, GA US",
    "Hilo, HI US",
    "Honolulu, HI US",
    "Kahului, HI US",
    "Boise, ID US",
    "Coeur d'Alene, ID US",
    "Idaho Falls, ID US",
    "Lewiston, ID US",
    "Moscow, ID US",
    "Mountain Home, ID US",
    "Nampa, ID US",
    "Pocatello, ID US",
    "Twin Falls, ID US",
    "Aurora, IL US",
    "Bloomington, IL US",
    "Carbondale, IL US",
    "Champaign, IL US",
    "Charleston, IL US",
    "Chicago, IL US",
    "Crystal Lake, IL US",
    "Danville, IL US",
    "DeKalb, IL US",
    "Decatur, IL US",
    "Dixon, IL US",
    "Effingham, IL US",
    "Elgin, IL US",
    "Freeport, IL US",
    "Galesburg, IL US",
    "Joliet, IL US",
    "Kankakee, IL US",
    "Kewanee, IL US",
    "Lincoln, IL US",
    "Macomb, IL US",
    "Mount Vernon, IL US",
    "Naperville, IL US",
    "Ottawa, IL US",
    "Peoria, IL US",
    "Pontiac, IL US",
    "Quincy, IL US",
    "Rockford, IL US",
    "Springfield, IL US",
    "Streator, IL US",
    "Waukegan, IL US",
    "Bloomington, IN US",
    "Evansville, IN US",
    "Fort Wayne, IN US",
    "Indianapolis, IN US",
    "Kokomo, IN US",
    "Lafayette, IN US",
    "Madison, IN US",
    "Michigan City, IN US",
    "Muncie, IN US",
    "Richmond, IN US",
    "Shelbyville, IN US",
    "South Bend, IN US",
    "Terre Haute, IN US",
    "Vincennes, IN US",
    "Ames, IA US",
    "Burlington, IA US",
    "Carroll, IA US",
    "Cedar Falls, IA US",
    "Cedar Rapids, IA US",
    "Clinton, IA US",
    "Davenport, IA US",
    "Des Moines, IA US",
    "Dubuque, IA US",
    "Fort Dodge, IA US",
    "Iowa City, IA US",
    "Keokuk, IA US",
    "Marshalltown, IA US",
    "Mason City, IA US",
    "Oskaloosa, IA US",
    "Ottumwa, IA US",
    "Sioux City, IA US",
    "Spencer, IA US",
    "Storm Lake, IA US",
    "Waterloo, IA US",
    "Coffeyville, KS US",
    "Dodge City, KS US",
    "Emporia, KS US",
    "Garden City, KS US",
    "Great Bend, KS US",
    "Hays, KS US",
    "Hutchinson, KS US",
    "Lawrence, KS US",
    "Leavenworth, KS US",
    "Liberal, KS US",
    "Manhattan, KS US",
    "Pittsburg, KS US",
    "Salina, KS US",
    "Topeka, KS US",
    "Wichita, KS US",
    "Winfield, KS US",
    "Bowling Green, KY US",
    "Campbellsville, KY US",
    "Danville, KY US",
    "Elizabethtown, KY US",
    "Fort Knox, KY US",
    "Frankfort, KY US",
    "Hopkinsville, KY US",
    "Lexington, KY US",
    "Louisville, KY US",
    "Madisonville, KY US",
    "Middlesborough, KY US",
    "Murray, KY US",
    "Owensboro, KY US",
    "Paducah, KY US",
    "Somerset, KY US",
    "Alexandria, LA US",
    "Bastrop, LA US",
    "Baton Rouge, LA US",
    "Bogalusa, LA US",
    "Fort Polk South, LA US",
    "Hammond, LA US",
    "Houma, LA US",
    "Jennings, LA US",
    "Lafayette, LA US",
    "Lake Charles, LA US",
    "Minden, LA US",
    "Monroe, LA US",
    "Morgan City, LA US",
    "Natchitoches, LA US",
    "New Iberia, LA US",
    "New Orleans, LA US",
    "Opelousas, LA US",
    "Ruston, LA US",
    "Shreveport, LA US",
    "Thibodaux, LA US",
    "Augusta, ME US",
    "Bangor, ME US",
    "Lewiston, ME US",
    "Portland, ME US",
    "Waterville, ME US",
    "Annapolis, MD US",
    "Baltimore, MD US",
    "Cambridge, MD US",
    "Cumberland, MD US",
    "Easton, MD US",
    "Frederick, MD US",
    "Hagerstown, MD US",
    "Ocean Pines, MD US",
    "Salisbury, MD US",
    "Westminster, MD US",
    "Barnstable Town, MA US",
    "Boston, MA US",
    "Brockton, MA US",
    "Fall River, MA US",
    "Gloucester, MA US",
    "Greenfield, MA US",
    "Leominster, MA US",
    "Lowell, MA US",
    "New Bedford, MA US",
    "North Adams, MA US",
    "Northampton, MA US",
    "Pittsfield, MA US",
    "Springfield, MA US",
    "Worcester, MA US",
    "Alpena, MI US",
    "Ann Arbor, MI US",
    "Benton Harbor, MI US",
    "Big Rapids, MI US",
    "Cadillac, MI US",
    "Detroit, MI US",
    "Escanaba, MI US",
    "Flint, MI US",
    "Grand Rapids, MI US",
    "Holland, MI US",
    "Jackson, MI US",
    "Kalamazoo, MI US",
    "Lansing, MI US",
    "Marquette, MI US",
    "Midland, MI US",
    "Mount Pleasant, MI US",
    "Muskegon, MI US",
    "Owosso, MI US",
    "Pontiac, MI US",
    "Port Huron, MI US",
    "Saginaw, MI US",
    "Sault Ste. Marie, MI US",
    "Sturgis, MI US",
    "Traverse City, MI US",
    "Austin, MN US",
    "Bemidji, MN US",
    "Brainerd, MN US",
    "Buffalo, MN US",
    "Duluth, MN US",
    "Fairmont, MN US",
    "Faribault, MN US",
    "Fergus Falls, MN US",
    "Hibbing, MN US",
    "Hutchinson, MN US",
    "Mankato, MN US",
    "Marshall, MN US",
    "Minneapolis, MN US",
    "New Ulm, MN US",
    "Owatonna, MN US",
    "Rochester, MN US",
    "Saint Paul, MN US",
    "St. Cloud, MN US",
    "Willmar, MN US",
    "Worthington, MN US",
    "Biloxi, MS US",
    "Clarksdale, MS US",
    "Cleveland, MS US",
    "Columbus, MS US",
    "Corinth, MS US",
    "Greenville, MS US",
    "Greenwood, MS US",
    "Grenada, MS US",
    "Gulfport, MS US",
    "Hattiesburg, MS US",
    "Jackson, MS US",
    "Laurel, MS US",
    "McComb, MS US",
    "Meridian, MS US",
    "Natchez, MS US",
    "Oxford, MS US",
    "Picayune, MS US",
    "Tupelo, MS US",
    "Vicksburg, MS US",
    "Yazoo City, MS US",
    "Cape Girardeau, MO US",
    "Columbia, MO US",
    "Excelsior Springs, MO US",
    "Farmington, MO US",
    "Fort Leonard Wood, MO US",
    "Jefferson City, MO US",
    "Joplin, MO US",
    "Kansas City, MO US",
    "Kennett, MO US",
    "Kirksville, MO US",
    "Lebanon, MO US",
    "Marshall, MO US",
    "Maryville, MO US",
    "Moberly, MO US",
    "Poplar Bluff, MO US",
    "Rolla, MO US",
    "Sedalia, MO US",
    "Sikeston, MO US",
    "Springfield, MO US",
    "St. Joseph, MO US",
    "St. Louis, MO US",
    "Warrensburg, MO US",
    "Washington, MO US",
    "West Plains, MO US",
    "Billings, MT US",
    "Bozeman, MT US",
    "Butte, MT US",
    "Great Falls, MT US",
    "Helena, MT US",
    "Kalispell, MT US",
    "Missoula, MT US",
    "Beatrice, NE US",
    "Columbus, NE US",
    "Fremont, NE US",
    "Grand Island, NE US",
    "Hastings, NE US",
    "Kearney, NE US",
    "Lexington, NE US",
    "Lincoln, NE US",
    "Norfolk, NE US",
    "North Platte, NE US",
    "Omaha, NE US",
    "Scottsbluff, NE US",
    "Boulder City, NV US",
    "Carson City, NV US",
    "Elko, NV US",
    "Las Vegas, NV US",
    "Pahrump, NV US",
    "Reno, NV US",
    "Berlin, NH US",
    "Claremont, NH US",
    "Concord, NH US",
    "Keene, NH US",
    "Laconia, NH US",
    "Manchester, NH US",
    "Nashua, NH US",
    "Portsmouth, NH US",
    "Rochester, NH US",
    "Jersey City, NJ US",
    "Lakewood, NJ US",
    "Newark, NJ US",
    "Pleasantville, NJ US",
    "Toms River, NJ US",
    "Trenton, NJ US",
    "Vineland, NJ US",
    "Alamogordo, NM US",
    "Albuquerque, NM US",
    "Carlsbad, NM US",
    "Clovis, NM US",
    "Deming, NM US",
    "Farmington, NM US",
    "Gallup, NM US",
    "Las Cruces, NM US",
    "Roswell, NM US",
    "Santa Fe, NM US",
    "Silver City, NM US",
    "Albany, NY US",
    "Amsterdam, NY US",
    "Binghamton, NY US",
    "Brentwood, NY US",
    "Brooklyn, NY US",
    "Buffalo, NY US",
    "Commack, NY US",
    "Coram, NY US",
    "Elmira, NY US",
    "Hempstead, NY US",
    "Huntington Station, NY US",
    "Ithaca, NY US",
    "Jamestown, NY US",
    "Kingston, NY US",
    "Levittown, NY US",
    "Massena, NY US",
    "Middletown, NY US",
    "New City, NY US",
    "New York, NY US",
    "Niagara Falls, NY US",
    "Ogdensburg, NY US",
    "Oneonta, NY US",
    "Oswego, NY US",
    "Plattsburgh, NY US",
    "Poughkeepsie, NY US",
    "Rochester, NY US",
    "Saratoga Springs, NY US",
    "Syracuse, NY US",
    "Utica, NY US",
    "Watertown, NY US",
    "Yonkers, NY US",
    "Asheboro, NC US",
    "Asheville, NC US",
    "Boone, NC US",
    "Burlington, NC US",
    "Charlotte, NC US",
    "Durham, NC US",
    "Elizabeth City, NC US",
    "Fayetteville, NC US",
    "Fort Bragg, NC US",
    "Gastonia, NC US",
    "Greensboro, NC US",
    "Greenville, NC US",
    "Hendersonville, NC US",
    "Hickory, NC US",
    "Jacksonville, NC US",
    "New Bern, NC US",
    "Raleigh, NC US",
    "Roanoke Rapids, NC US",
    "Rocky Mount, NC US",
    "Salisbury, NC US",
    "Statesville, NC US",
    "Wilmington, NC US",
    "Winston-Salem, NC US",
    "Bismarck, ND US",
    "Dickinson, ND US",
    "Fargo, ND US",
    "Grand Forks, ND US",
    "Jamestown, ND US",
    "Minot, ND US",
    "Williston, ND US",
    "Akron, OH US",
    "Ashland, OH US",
    "Ashtabula, OH US",
    "Athens, OH US",
    "Bowling Green, OH US",
    "Cambridge, OH US",
    "Canton, OH US",
    "Chillicothe, OH US",
    "Cincinnati, OH US",
    "Cleveland, OH US",
    "Columbus, OH US",
    "Dayton, OH US",
    "Defiance, OH US",
    "Delaware, OH US",
    "Lima, OH US",
    "Mansfield, OH US",
    "Marion, OH US",
    "Mentor, OH US",
    "New Philadelphia, OH US",
    "Newark, OH US",
    "Portsmouth, OH US",
    "Salem, OH US",
    "Sandusky, OH US",
    "Steubenville, OH US",
    "Toledo, OH US",
    "Urbana, OH US",
    "Wooster, OH US",
    "Youngstown, OH US",
    "Zanesville, OH US",
    "Ada, OK US",
    "Altus, OK US",
    "Ardmore, OK US",
    "Bartlesville, OK US",
    "Chickasha, OK US",
    "Durant, OK US",
    "Elk City, OK US",
    "Enid, OK US",
    "Guymon, OK US",
    "Lawton, OK US",
    "McAlester, OK US",
    "Muskogee, OK US",
    "Oklahoma City, OK US",
    "Okmulgee, OK US",
    "Ponca City, OK US",
    "Shawnee, OK US",
    "Stillwater, OK US",
    "Tahlequah, OK US",
    "Tulsa, OK US",
    "Woodward, OK US",
    "Bend, OR US",
    "City of The Dalles, OR US",
    "Coos Bay, OR US",
    "Corvallis, OR US",
    "Eugene, OR US",
    "Grants Pass, OR US",
    "Hermiston, OR US",
    "Hillsboro, OR US",
    "Klamath Falls, OR US",
    "La Grande, OR US",
    "Medford, OR US",
    "Ontario, OR US",
    "Pendleton, OR US",
    "Portland, OR US",
    "Roseburg, OR US",
    "Salem, OR US",
    "St. Helens, OR US",
    "Allentown, PA US",
    "Altoona, PA US",
    "Bethlehem, PA US",
    "Bloomsburg, PA US",
    "Chambersburg, PA US",
    "Chester, PA US",
    "Erie, PA US",
    "Hanover, PA US",
    "Harrisburg, PA US",
    "Hazleton, PA US",
    "Johnstown, PA US",
    "Lancaster, PA US",
    "Lebanon, PA US",
    "Meadville, PA US",
    "Philadelphia, PA US",
    "Pittsburgh, PA US",
    "Reading, PA US",
    "Scranton, PA US",
    "St. Marys, PA US",
    "State College, PA US",
    "Uniontown, PA US",
    "Wilkes-Barre, PA US",
    "Williamsport, PA US",
    "York, PA US",
    "Newport, RI US",
    "Providence, RI US",
    "Westerly, RI US",
    "Charleston, SC US",
    "Clemson, SC US",
    "Columbia, SC US",
    "Florence, SC US",
    "Greenville, SC US",
    "Greenwood, SC US",
    "Hilton Head Island, SC US",
    "Myrtle Beach, SC US",
    "Orangeburg, SC US",
    "Rock Hill, SC US",
    "Spartanburg, SC US",
    "Sumter, SC US",
    "Aberdeen, SD US",
    "Brookings, SD US",
    "Huron, SD US",
    "Mitchell, SD US",
    "Pierre, SD US",
    "Rapid City, SD US",
    "Sioux Falls, SD US",
    "Watertown, SD US",
    "Yankton, SD US",
    "Bristol, TN US",
    "Chattanooga, TN US",
    "Clarksville, TN US",
    "Columbia, TN US",
    "Cookeville, TN US",
    "Dyersburg, TN US",
    "Jackson, TN US",
    "Johnson City, TN US",
    "Kingsport, TN US",
    "Knoxville, TN US",
    "Lebanon, TN US",
    "McMinnville, TN US",
    "Memphis, TN US",
    "Morristown, TN US",
    "Murfreesboro, TN US",
    "Nashville, TN US",
    "Union City, TN US",
    "Abilene, TX US",
    "Amarillo, TX US",
    "Arlington, TX US",
    "Athens, TX US",
    "Austin, TX US",
    "Bay City, TX US",
    "Beaumont, TX US",
    "Beeville, TX US",
    "Brenham, TX US",
    "Brownsville, TX US",
    "Bryan, TX US",
    "College Station, TX US",
    "Conroe, TX US",
    "Corpus Christi, TX US",
    "Corsicana, TX US",
    "Dallas, TX US",
    "Del Rio, TX US",
    "Denton, TX US",
    "Eagle Pass, TX US",
    "El Campo, TX US",
    "El Paso, TX US",
    "Fort Hood, TX US",
    "Fort Worth, TX US",
    "Freeport, TX US",
    "Gainesville, TX US",
    "Galveston, TX US",
    "Gatesville, TX US",
    "Greenville, TX US",
    "Harlingen, TX US",
    "Henderson, TX US",
    "Houston, TX US",
    "Huntsville, TX US",
    "Irving, TX US",
    "Jacksonville, TX US",
    "Katy, TX US",
    "Kerrville, TX US",
    "Killeen, TX US",
    "Kingsville, TX US",
    "Lake Jackson, TX US",
    "Laredo, TX US",
    "Longview, TX US",
    "Lubbock, TX US",
    "Lufkin, TX US",
    "McAllen, TX US",
    "Midland, TX US",
    "Mineral Wells, TX US",
    "Mount Pleasant, TX US",
    "Nacogdoches, TX US",
    "New Braunfels, TX US",
    "Odessa, TX US",
    "Palestine, TX US",
    "Paris, TX US",
    "Plano, TX US",
    "Port Arthur, TX US",
    "Rio Grande City, TX US",
    "Round Rock, TX US",
    "San Antonio, TX US",
    "San Marcos, TX US",
    "Sherman, TX US",
    "Stephenville, TX US",
    "Sulphur Springs, TX US",
    "Texarkana, TX US",
    "The Woodlands, TX US",
    "Tyler, TX US",
    "Uvalde, TX US",
    "Vernon, TX US",
    "Victoria, TX US",
    "Waco, TX US",
    "Waxahachie, TX US",
    "Wichita Falls, TX US",
    "Brigham City, UT US",
    "Cedar City, UT US",
    "Logan, UT US",
    "Ogden, UT US",
    "Provo, UT US",
    "Salt Lake City, UT US",
    "St. George, UT US",
    "Burlington, VT US",
    "Montpelier, VT US",
    "Rutland, VT US",
    "Alexandria, VA US",
    "Arlington, VA US",
    "Blacksburg, VA US",
    "Centreville, VA US",
    "Charlottesville, VA US",
    "Chesapeake, VA US",
    "Danville, VA US",
    "Fredericksburg, VA US",
    "Hampton, VA US",
    "Harrisonburg, VA US",
    "Leesburg, VA US",
    "Lynchburg, VA US",
    "Newport News, VA US",
    "Norfolk, VA US",
    "Richmond, VA US",
    "Roanoke, VA US",
    "Virginia Beach, VA US",
    "Winchester, VA US",
    "Aberdeen, WA US",
    "Anacortes, WA US",
    "Bellevue, WA US",
    "Bellingham, WA US",
    "Bremerton, WA US",
    "Centralia, WA US",
    "Ellensburg, WA US",
    "Everett, WA US",
    "Federal Way, WA US",
    "Kennewick, WA US",
    "Moses Lake, WA US",
    "Mount Vernon, WA US",
    "Oak Harbor, WA US",
    "Olympia, WA US",
    "Port Angeles, WA US",
    "Pullman, WA US",
    "Redmond, WA US",
    "Seattle, WA US",
    "Spokane, WA US",
    "Sunnyside, WA US",
    "Tacoma, WA US",
    "Vancouver, WA US",
    "Walla Walla, WA US",
    "Wenatchee, WA US",
    "Yakima, WA US",
    "Beckley, WV US",
    "Bluefield, WV US",
    "Charleston, WV US",
    "Fairmont, WV US",
    "Huntington, WV US",
    "Martinsburg, WV US",
    "Morgantown, WV US",
    "Parkersburg, WV US",
    "Wheeling, WV US",
    "Eau Claire, WI US",
    "Green Bay, WI US",
    "Janesville, WI US",
    "Kenosha, WI US",
    "La Crosse, WI US",
    "Madison, WI US",
    "Manitowoc, WI US",
    "Marinette, WI US",
    "Milwaukee, WI US",
    "Oshkosh, WI US",
    "Racine, WI US",
    "River Falls, WI US",
    "Sheboygan, WI US",
    "Wausau, WI US",
    "Casper, WY US",
    "Cheyenne, WY US",
    "Evanston, WY US",
    "Gillette, WY US",
    "Laramie, WY US",
    "Rock Springs, WY US",
    "Sheridan, WY US",
  ];

autocomplete(document.getElementById("myInput"), cities);



// fetch weather data
const noaaUrl =
  "https://www.ncdc.noaa.gov/cdo-web/api/v2/locations?datasetid=GSOM&locationcategoryid=CITY&offset=1049&limit=20";
const noaaToken = "oTpqrhNkWQBIbOWgrvJrCUeJdRKIhbac";

$.ajax({
  url: noaaUrl,
  headers: { token: noaaToken },
})
  .then(function (response) {
    console.log(response.results);
    return response.results;
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === "Washington D.C., US") {
        console.log(data[i].id);
      }
    }
  });

// render to table

// convert table to something printable ????
