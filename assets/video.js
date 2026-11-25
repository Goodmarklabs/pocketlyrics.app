// Click-to-play video. The page shows our own poster image; YouTube's player (from the
// privacy-enhanced youtube-nocookie.com domain) is only created after the visitor presses play,
// so no YouTube scripts or cookies load before then. Without JavaScript the poster is a plain
// link to the video on YouTube.
document.addEventListener('click', function (event) {
  var link = event.target.closest && event.target.closest('a[data-video-id]');
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  var id = encodeURIComponent(link.getAttribute('data-video-id'));
  var frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1';
  frame.title = link.getAttribute('data-video-title') || 'Video';
  frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin'; // YouTube refuses to play without a referrer
  frame.className = 'video-frame';
  link.replaceWith(frame);
  frame.focus();
});
