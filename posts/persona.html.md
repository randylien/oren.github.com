---
date: 2012-09-27
title: Mozilla Persona
authorLink: 'https://github.com/oren'
authorName: 'oren'
authorImage: 'https://secure.gravatar.com/avatar/ea28a1533185f15e9364a8db6f9c0bae?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
layout: post
---

It's decentralized public-key based authentication, wrapped up in an extremely user- and dev-friendly package. Francois Marier did a good job of explaining it at Kiwi PyCon 2012: https://www.youtube.com/watch?v=iZBTc7iEkQY
(Think OpenID, but easier to use, easier to implement, and with better privacy protection.)
In brief: instead of a username and password at login, you get a user's email address and cryptographically signed assertion proving their ownership of that address. The assertions are ephemeral and scoped to your site, so once you verify it, you can set a session cookie and throw away the assertion. No more password column in your database, yet you still retain a direct relationship with your users.
Here's the underlying spec (working on getting it updated for Beta 1, but the principles are all there) https://github.com/mozilla/id-specs/blob/prod/browserid/inde...

<video id="player" poster="http://videos-cdn.mozilla.net/serv/drafts/persona-beta1-360p.png" controls preload="none" data-setup="{}">
  <source src="http://videos-cdn.mozilla.net/serv/drafts/persona-beta1-360p.mp4" type="video/mp4">
  <source src="http://videos-cdn.mozilla.net/serv/drafts/persona-beta1-360p.ogv" type="video/ogg">
  <source src="http://videos-cdn.mozilla.net/serv/drafts/persona-beta1-360p.webm" type="video/webm">
  <!--[if IE]>
  <object type="application/x-shockwave-flash"
    data="https://s3.amazonaws.com/callahad-persona-vids/player.swf">
    <param name="allowfullscreen" value="true">
    <param name="flashvars" value="file=http://s3.amazonaws.com/callahad-persona-vids/persona-beta1-360p.mp4&controlbar.position=over&image=http://videos-cdn.mozilla.net/serv/drafts/persona-beta1-360p.png">
    <param name="movie" value="https://s3.amazonaws.com/callahad-persona-vids/player.swf">
  </object>
  <![endif]-->
</video>

