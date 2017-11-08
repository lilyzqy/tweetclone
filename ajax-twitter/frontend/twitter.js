const FollowToggle = require('./follow_toggle.js');
$(() => {
  $('.follow-toggle').each((i,el)=> {
    window.el = el;
    new FollowToggle(el);
  });
});
