
$(document).ready(function() {
  // HIDES THE ACCEPTED TEXT
  $("#accepted").hide();  // To hide


  var new_name_is = "";
  var savedRole = "";
  var new_name_is = "";
  var passUp = localStorage.getItem('local_name');
  $("h4").text(passUp);
  $("h2").text(passUp);

  // function_populate_team();
// FUNCTION TO SEND DATA FROM LOCAL STORAGE TO NEW TEAM PLACE
  $(".show").on('click', function(event) {
    event.preventDefault();
    load_team();
  })
});
  saveTheName();
  saveTheRole();
  function_select_hero();
  function_send_data();

// THIS FUNCTION TAKES THE ENTERED NAMED AND PASSES IT TO BOTH TITLES

function saveTheName() {
  $("#teamName").change(function () {
// ERASES ALL THE MEMBERS FROM PREVIOUS TEAMS
    localStorage.clear();
  new_name_is = $("#teamName").val();
// PASS THE newNameIs INTO A LOCAL STORAGE
  localStorage.setItem('local_name', new_name_is);
  var passUp = localStorage.getItem('local_name');
  $("h4").text(passUp);
  $("h2").text(passUp);
  // new_name_is = localStorage.getItem('local_name');
})
}





function saveTheRole() {
  $("#roles").change(function(event) {
    event.preventDefault();
    var selected_role = $("#roles").val();
// SEND THE savedRole VARIABLE INTO THE BLACKBOARD
  $(".char_role").text(selected_role);

  $("#accepted").hide();  // To hide

  })
}




function function_select_hero() {
  $("#heroes").change(function(event) {
    event.preventDefault();
    selected_hero = $("#heroes").val();
      var private_string = "c1e94b84d2102f0297e3956a992115601ede2399"
      var public_string = "16ed091cdb99bc7b848bd4a3821fdc4d"
      var today = new Date();
      var time_stamp = today.toGMTString();
      var encrypted_hash = CryptoJS.MD5(time_stamp + private_string + public_string);
      var url = "https://gateway.marvel.com/v1/public/comics?ts=" + time_stamp + "&apikey=" + public_string + "&hash=" + encrypted_hash;


      var my_hero = selected_hero
      fetch("https://gateway.marvel.com/v1/public/characters?name="+my_hero+"&ts=Tue,%2013%20Dec%202016%2016:35:36%20GMT&apikey=16ed091cdb99bc7b848bd4a3821fdc4d&hash=9dbbfd2a874606c114b07bbb87c5665a")
      .then(function(response) {
        return response.json().then(function(json) {
        var marvel_object = json;
        var my_info = marvel_object.data.results;
        var character_name = my_info[0].name;
        var character_image = my_info[0].thumbnail.path;
      for (var i=0; i<my_info.length; i++) {
        var char_name = my_info[i].name;

      }
      localStorage.setItem("name", char_name);
      pass_name_blackboard();

      var image = character_image + "/portrait_uncanny.jpg";
      $(".bi_image").html("<img src='" + image + "' " + "alt='this is an image of " + character_name + " from Marvel'>")

  })
});
})

}
// FUNCTION TO SEND THE NAME TO BLACKBOARD
function pass_name_blackboard() {
  var blackboard_name = localStorage.getItem("name");
  $(".bi_char_name").html("<p>"+blackboard_name+"</p>")

}

// FUNCTION TO SEND DATA FROM BLACKBOARD TO LOCAL STORAGE
function function_send_data() {
  $(".full_character").on('submit', function(event) {
    event.preventDefault();
      var bb_role = $("div.char_role").text();
      var bb_name = $("div.bi_char_name").text();
      var bb_pic = $("div.bi_image img").attr('src');
      var role_name = bb_role + "_name";
    localStorage.setItem(role_name, bb_name);
      var role_pic = bb_role + "_pic";
    localStorage.setItem(role_pic, bb_pic);
// UNHIDES THE ACCEPT TEXT
// $("#accepted").toggle();
    // $("#accepted").show();  // To unhide
   $("#accepted").slideDown("slow");
  // $("#accepted").slideDown( "slow", function() {
    // Animation complete.
  // });
  });
}


function load_team() {

  // SENDS LEADER INFO
  var name = localStorage.getItem('Leader_name');
  var image = localStorage.getItem('Leader_pic');
  $(".leader").html("<p>"+name+"</p><img src='"+image+"' alt='this is a picture of "+name+"'>");
  // SENDS CO-LEADERS INFO
  var name = localStorage.getItem('Co_leader1_name');
  var image = localStorage.getItem('Co_leader1_pic');
  $(".co_leader1").html("<p>"+name+"</p><img src='"+image+"' alt='this is a picture of "+name+"'>");

  var name = localStorage.getItem('Co_leader2_name');
  var image = localStorage.getItem('Co_leader2_pic');
  $(".co_leader2").html("<p>"+name+"</p><img src='"+image+"' alt='this is a picture of "+name+"'>");
  // SENDS MEMBER INFO
  var name = localStorage.getItem('Member1_name');
  var image = localStorage.getItem('Member1_pic');
  $(".member1").html("<p>"+name+"</p><img src='"+image+"' alt='this is a picture of "+name+"'>");

  var name = localStorage.getItem('Member2_name');
  var image = localStorage.getItem('Member2_pic');
  $(".member2").html("<p>"+name+"</p><img src='"+image+"' alt='this is a picture of "+name+"'>");

  var name = localStorage.getItem('Member3_name');
  var image = localStorage.getItem('Member3_pic');
  $(".member3").html("<p>"+name+"</p><img src='"+image+"' alt='this is a picture of "+name+"'>");

  var name = localStorage.getItem('Member4_name');
  var image = localStorage.getItem('Member4_pic');
  $(".member4").html("<p>"+name+"</p><img src='"+image+"' alt='this is a picture of "+name+"'>");
}
