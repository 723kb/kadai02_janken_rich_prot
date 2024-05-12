// ヘッダーを上部固定 うまくいかない
// $(document).ready(function() {
//   $('#menu-toggle').on('click', function() {
//     $('#nav-menu').toggleClass('hidden');
//   });

//   $(window).on('scroll', function() {
//     var header = $('header');
//     header.toggleClass('sticky', $(this).scrollTop() > 0);
//   });
// });

// なぜか1→2→3→4→4になる
//ページを読み込んだら1枚目の写真の大きさを取得
// $(window).on("load", function() {
//   var firstImgWidth = $("#mv_wrap img:first-child").width();
//   var firstImgHeight = $("#mv_wrap img:first-child").height();

//   // 2枚目以降の写真に取得した大きさをあてる
//   $("#mv_wrap img:not(:first-child)").css({
//     "width": firstImgWidth + "px",
//     "height": firstImgHeight + "px",
//     "object-fit": "cover"
//   }).hide();

//    //現在の表示写真と次に表示する写真を取得
//   var intervalId = setInterval(function() {
//     var currentImg = $("#mv_wrap img:first-child");
//     var nextImg = currentImg.next("img");

//     // 4枚目の画像がない場合は、最初の画像をフェードインさせる
//     if (nextImg.length === 0) {
//       nextImg = $("#mv_wrap img:first-child");
//     } else if (currentImg.index() === 3) {
//       // 4枚目の画像の場合はタイマーを停止する
//       clearInterval(intervalId);
//     }

//     // 4枚目の画像でない場合は通常のフェードイン・フェードアウトを行う
//     currentImg.fadeOut("slow", function() {
//       nextImg.fadeIn("slow");
//     });

//     // 4枚目の画像でない場合は画像を移動する
//     if (nextImg.index() !== 3) {
//       currentImg.appendTo("#mv_wrap");
//     }
//   }, 5000);
// });

$(document).ready(function(){
  var images = $('#mv_wrap img'); // 画像の配列を取得
  var currentIndex = 0; // 現在の画像のインデックス
  var delay = 5000; // フェードインの遅延時間（ミリ秒）

  function fadeInNextImage() {
    // 現在の画像を非表示
    $(images[currentIndex]).removeClass('active').hide();
    // 次の画像のインデックスを更新
    currentIndex = (currentIndex + 1) % images.length;
    // 次の画像を表示
    $(images[currentIndex]).addClass('active').show();
  }
  

  // 最初の画像以外を非表示にする
  images.not('.active').hide();

  // 指定した遅延時間ごとに次の画像を表示する
  setInterval(fadeInNextImage, delay);
});


$(window).on('scroll load', function(){        /* ページロード時、またはスクロールされた時*/
  var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
  var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
  $('.fadeIn').each(function(){                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
    var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
    if(scroll > cntPos - windowHeight + windowHeight / 3){  /* 要素がある位置までスクロールされていたら */
      $(this).addClass('active');              /* 「active」のクラスを付与 */
    }
  });
});


    // ページトップボタンの表示・非表示
    $(function () {
      const topbtn = $('#topbtn');   // 定数topbtnに#topbtnを代入
      topbtn.hide(); //topbtnを隠す
      $(window).scroll(function () { //ページスクロール毎に以下を実行
        if ($(this).scrollTop() > 200) { //ページ上端からスクロール位置が200px以上で
          topbtn.fadeIn(); //ボタン表示
        } else { //それ以外は
          topbtn.fadeOut(); //フェードアウト
        }
      });
    });

    // ページトップボタンのスクロール機能
    // #topbtnをクリックしたら0.7秒かけてTOPへ戻る
    $(function () {
      $("#topbtn").on("click", function () {
        $("html,body").animate({ scrollTop: 0 }, 700);
      });
    });

    //  下からふわっと出てくるプラグイン
    ScrollReveal().reveal('.js_box', { 
      duration: 2000, // アニメーションの完了にかかる時間
      viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
      reset: true,   // 何回もアニメーション表示するか
      mobile: false   //モバイルブラウザでアニメーションを無効にする
    });







