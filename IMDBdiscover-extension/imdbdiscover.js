(function() {
  var interval = setInterval(
    function() {
      var target          = document.getElementById('rso'),
          firstResultLink = target.getElementsByTagName('a')[0];

      if (!!firstResultLink.href) {
        window.location = firstResultLink.href;
        clearInterval(interval);
      }
    }, 200
  );
})();



