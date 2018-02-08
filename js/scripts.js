<script
  src="http://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  
<script>
$(document).ready(function(){
    $("button").click(function(){
        var imgUrl = $(this).data('rel');
        $("#area").html("<img src='" + imgUrl + "' alt='description' />");
    });
});
</script>
