$(document).ready(function() {
  let tID = 0;
  let x, y, z;

  function startSlot() {
      x = Math.floor(Math.random() * 3 + 1);
      y = Math.floor(Math.random() * 3 + 1);
      z = Math.floor(Math.random() * 3 + 1);

      $('#left').attr('src', 'img/cheese0' + x + '.jpg');
      $('#center').attr('src', 'img/cheese0' + y + '.jpg');
      $('#right').attr('src', 'img/cheese0' + z + '.jpg');

      tID = setTimeout(startSlot, 70);
  }

  function stopSlot() {
      clearTimeout(tID);
      if (x === y && y === z) {
          let cheeseName;
          if (x === 1) {
              cheeseName = "フレッシュ";
          } else if (x === 2) {
              cheeseName = "カマンベール";
          } else if (x === 3) {
              cheeseName = "ゴルゴンゾーラ";
          }
          $('#cheeseName').text(cheeseName);
      } else {
          $('#cheeseName').text("");
      }
  }

  $('#startButton').click(function() {
      startSlot();
  });

  $('#stopButton').click(function() {
      stopSlot();
  });
});