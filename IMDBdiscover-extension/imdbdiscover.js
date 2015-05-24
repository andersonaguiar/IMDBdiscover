$(function(){
  var interval = setInterval(
    function() {
      if ($('#rso a:first').attr('href') != undefined) {
        window.location = $('#rso a:first').attr('href');
        clearInterval(interval);
      }
    }, 200
  );
});
