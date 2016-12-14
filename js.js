
$(document).ready(function() {
  console.log("Ready");
  var new_name_is = "";
  var savedRole = "";
  var new_name_is = "";
  // console.log(Date.now());
  saveTheName();
  function_select_hero();
  // saveTheRole();
  // saveTheHero();
//
});
function saveTheName() {
  new_name_is = $("#teamName").val();
console.log(new_name_is);
// PASS THE newNameIs INTO A LOCAL STORAGE
// Put the object into storage
  localStorage.setItem('local_name', new_name_is);
  // new_name_is = localStorage.getItem('local_name');
  $("h4").text(new_name_is);
  $("h2").text(new_name_is);




}
//
// function saveTheRole() {
//   savedRole = $("#dropdown1").val();
//   console.log(savedRole);
// // SEND THE savedRole VARIABLE INTO THE BLACKBOARD
// }
//
// function saveTheHero() {
//   savedHero = $("#dropdown2").val();
//   console.log(savedHero);
//   // SEND THE savedHero IMAGE VARIABLE INTO THE BLACKBOARD
// }



function function_select_hero() {
  $("#heroes").change(function(event) {
    event.preventDefault();
    selected_hero = $("#heroes").val();
console.log(selected_hero);
  var private_string = "c1e94b84d2102f0297e3956a992115601ede2399"
  var public_string = "16ed091cdb99bc7b848bd4a3821fdc4d"
  var today = new Date();
  var time_stamp = today.toGMTString();
  var encrypted_hash = CryptoJS.MD5(time_stamp + private_string + public_string);
console.log("hash " + encrypted_hash);
  var url = "https://gateway.marvel.com/v1/public/comics?ts=" + time_stamp + "&apikey=" + public_string + "&hash=" + encrypted_hash;
console.log("this is the url " + url);


var my_hero = selected_hero
  fetch("https://gateway.marvel.com/v1/public/characters?name="+my_hero+"&ts=Tue,%2013%20Dec%202016%2016:35:36%20GMT&apikey=16ed091cdb99bc7b848bd4a3821fdc4d&hash=9dbbfd2a874606c114b07bbb87c5665a")
  .then(function(response) {
    return response.json().then(function(json) {
      var marvel_object = json;
    console.log(json);
      var my_info = marvel_object.data.results;

      var character_name = my_info[0].name;

      var character_image = my_info[0].thumbnail.path;

      for (var i=0; i<my_info.length; i++) {
        console.log(my_info[i].name);
      }



      var image = character_image + "/portrait_uncanny.jpg";
    console.log(image);

      $(".just_image").html("<img src='" + image + "' " + "alt='this is an image of " + character_name + " from Marvel'>")

  })
});
})

}
// FUNCTION TO SEND DATA FROM BLACKBOARD TO NEW TEAM PAGE
function function_send_data() {

}




//   console.log($.get("https://gateway.marvel.com:80/v1/public/characters?name=Iron%20Man&apikey=16ed091cdb99bc7b848bd4a3821fdc4d&hash="+encrypted+"&ts="+ts));
//
// });

//
// $(function(){
// var marvelAPI = 'https://gateway.marvel.com/v1/public/comics?';
// $.getJSON( marvelAPI, {
//     apikey: '16ed091cdb99bc7b848bd4a3821fdc4d',
//     ts: Date.now(),
//     hash: encrypted
//   })
//     .done(function( response ) {
//       var results = response.data.results;
//       var resultsLen = results.length;
//       var output = '<ul>';
//
//       for(var i=0; i<resultsLen; i++){
//         if(results[i].images.length > 0) {
//           var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
//           output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
//         }
//       }
//       output += '</ul>'
//       $('#results').append(output);
//   });
//
// });
//
//
// function getCharacters(name) {
//   $.get("http(s)://gateway.marvel.com/public/characters", {apikey:"16ed091cdb99bc7b848bd4a3821fdc4d", ts: "1481574243931", hash: encrypted})
//   for(let i of name) {
//     console.logt(i);
//   }
// })
//
