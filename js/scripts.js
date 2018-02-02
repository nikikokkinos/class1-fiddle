
$('.Recipesbutton').click(function() {
  $('#header').css('background', getRandomColor())
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// attempt to make the Octopus image fade in & out

$('.Recipesbutton').click(function() {
  $('#OctopusPicture')
})

$("#OctopusPicture").fadeIn('slow', function(){
    //$(this) -> $("#imgHolder")
    //do something
})
