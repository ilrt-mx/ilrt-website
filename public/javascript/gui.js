now.ready(function(){
  menuItemSelect('menu-first');
  fillRandomVideos();
  setPlayer();
});

$(document).ready(function() {

/*
 * Menu
 */

$('#menu li').click(function () {
  var id = $(this).attr('id');
  menuItemSelect(id);
});

$('#menu-login').click(function () {
  window.location = '/login';
});

/*
 * Video Player
 */
 
$('#vp-close').click(function () {
  document.videoPlayer.player.pauseVideo();
  $('#videoplayer-wraper').fadeOut(1000);
});

/*
 * Login
 */
 
$('#auth_button').click(function () {
  authenticate();
});

$('#auth_inputs input').focus(function () {
  if (this.pastFocused) return;
  this.pastFocused = true;
  this.value = ''; 
  $(this).css('color', '1f1f1f');
});

$('#auth_inputs input').keypress(function(event) {
  if (event.which == 13) authenticate();
});

});

/*
 * Util
 */
 
function authenticate (email, passw) {
  var email = $('#auth_email').val();
  var passw = $('#auth_passw').val();
  $.post('/authentication', {email: email, passw: passw}, function(data) {
    if (data == 'nouser') {
      loginFail();
    }
    else {
      window.location = '/';
    }
  });
};

/*
 * Animations
 */
 
function menuItemSelect (id) {
  if ($('#'+id).hasClass('active')) return;
  menuItemUnselect();
  $('#'+id).addClass('active');
  $('.active').animate({'border-color': '#1f1f1f'}, 'medium');
  
  var name = id.replace('menu-', '');
  now.loadContent(name, function (data) {
    $('#inner').html(data);
    setTimeout(function () {
      var px = $('#inner').height();
      $('#wraper').height(px);
    }, 500);
  });
};

function menuItemUnselect () {
  $('.active').animate({'border-color': '#eeeeee'}, 'medium');
  $('.active').removeClass('active');
};

function loginFail () {
  $('#auth_email').css('color', '#f67578');
  $('#auth_passw').css('color', '#f67578');
  $('#auth_email').animate({color: '#1f1f1f'}, 3000, 'easeInCubic');
  $('#auth_passw').animate({color: '#1f1f1f'}, 3000, 'easeInCubic');
};

/*
 * Videos
 */

function setPlayer () {
  document.videoPlayer = {};
  var params = { allowScriptAccess: 'always', allowFullScreen: 'true' };
  var atts = { id: 'player' };
  
  swfobject.embedSWF(
    'http://www.youtube.com/v/Bx4e9objtcE?enablejsapi=1&playerapiid=ytplayer&version=3',
    'vpembed',
    '640',
    '360',
    '8',
    null,
    null,
    params,
    atts
  );
}

function onYouTubePlayerReady (playerId) {
  player = document.getElementById("player");
  document.videoPlayer.player = player;
  player.loadVideoById(document.videoPlayer.nextLoad);
  player.playVideo();
}

function playVideo (id) {
  $('#videoplayer-wraper').fadeIn(1000);
  document.videoPlayer.nextLoad = id;
  
  if (jQuery.browser.mozilla == true) {
    onYouTubePlayerReady();
  }
}

function fillRandomVideos () {
  var numVideos = Math.floor($('#random-videos-bar').height()/141)+1;
  now.loadContent('random_videos', function (data) {
    $('#random-videos-bar').html(data);
  }, numVideos);
};

function filterVideos () {
  var colection = [];
  $('#tags-form input').each(function (index) {
    if (this.checked)
      colection.push(this.value);
  });
  now.loadContent('videos_byTags', appendVideos, colection);
};

function appendVideos (html) {
  $('#videos-cont').html(html);
};