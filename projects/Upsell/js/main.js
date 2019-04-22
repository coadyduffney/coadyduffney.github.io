// Animate Smooth Scroll
$('#discoverBtn').on('click', function() {
  const section = $('#section-about').position().top - 60;
  $('html, body').animate(
    {
      scrollTop: section
    },
    900
  );
});

$('#product-link').on('click', function() {
  // Grab nav toggle button
  const navToggle = document.getElementById('navi-toggle');
  navToggle.checked = false;
  const section = $('#section-about').position().top - 40;
  $('html, body').animate(
    {
      scrollTop: section
    },
    900
  );
});

$('#home-link').on('click', function() {
  // Grab nav toggle button
  const navToggle = document.getElementById('navi-toggle');
  navToggle.checked = false;

  //   Get top position of header, smooth scroll back up
  const top = $('.header').position().top;
  $('html, body').animate(
    {
      scrollTop: top
    },
    900
  );
});

$('#features-link').on('click', function() {
  // Grab nav toggle button
  const navToggle = document.getElementById('navi-toggle');
  navToggle.checked = false;

  //   Get top position of header, smooth scroll back up
  const top = $('#section-features').position().top;
  $('html, body').animate(
    {
      scrollTop: top
    },
    900
  );
});

$('#news-link').on('click', function() {
  // Grab nav toggle button
  const navToggle = document.getElementById('navi-toggle');
  navToggle.checked = false;

  //   Get top position of header, smooth scroll back up
  const top = $('#section-tours').position().top;
  $('html, body').animate(
    {
      scrollTop: top
    },
    900
  );
});

$('#reviews-link').on('click', function() {
  // Grab nav toggle button
  const navToggle = document.getElementById('navi-toggle');
  navToggle.checked = false;

  //   Get top position of header, smooth scroll back up
  const top = $('#section-stories').position().top;
  $('html, body').animate(
    {
      scrollTop: top
    },
    900
  );
});

$('#demo-link').on('click', function() {
  // Uncheck nav toggle button
  const navToggle = document.getElementById('navi-toggle');
  navToggle.checked = false;

  // Smooth scroll to demo section
  const top = $('#section-book').position().top;
  $('html, body').animate(
    {
      scrollTop: top
    },
    900
  );
});

$('#contact-link').on('click', function() {
  // Uncheck nav toggle button
  const navToggle = document.getElementById('navi-toggle');
  navToggle.checked = false;

  // Smooth scroll to demo section
  const top = $('.footer').position().top;
  $('html, body').animate(
    {
      scrollTop: top
    },
    900
  );
});
