/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveNav() {
  var x = document.getElementById('nav');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}

function submitForm(e) {
  e.preventDefault();
  Swal.fire({
    title: 'Message Sent!',
    text: "We'll be in touch as soon as possible.",
    type: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: '#333'
  });
}

// Animate Smooth Scroll for Nav
$('#home-link').on('click', function() {
  const hero = $('#hero').position().top;
  $('html, body').animate(
    {
      scrollTop: hero
    },
    700
  );
});

// Animate Smooth Scroll for Nav
$('#logo-link').on('click', function() {
  const hero = $('#hero').position().top;
  $('html, body').animate(
    {
      scrollTop: hero
    },
    700
  );
});

$('#about-link').on('click', function() {
  const about = $('#about').position().top;
  $('html, body').animate(
    {
      scrollTop: about
    },
    700
  );
});

$('#services-link').on('click', function() {
  const services = $('#services').position().top;
  $('html, body').animate(
    {
      scrollTop: services
    },
    700
  );
});

$('#portfolio-link').on('click', function() {
  const portfolio = $('#portfolio').position().top;
  $('html, body').animate(
    {
      scrollTop: portfolio
    },
    700
  );
});
$('#team-link').on('click', function() {
  const team = $('#team').position().top;
  $('html, body').animate(
    {
      scrollTop: team
    },
    700
  );
});

$('#contact-link').on('click', function() {
  const contact = $('#contact').position().top;
  $('html, body').animate(
    {
      scrollTop: contact
    },
    700
  );
});
