// controllers/index.js
// Each route renders an EJS view via res.render(view, locals).
var express = require('express');
var router = express.Router();

// Projects data source for /projects view.
const projects = [
  { title: 'TPSF (The Pink Sun Empowerment Foundation)', description: 'A website built using WordPress and Divi. Utilized content architecture, user interface and user experience design skills.', link: 'https://thepinksunfoundation.org' },
  { title: 'Descriptive information about TPSF Microsite', description: 'Program informational page and description about other TPSF programs.', link: 'https://thepinksunfoundation.org/about-us/' },
  { title: 'Velour Styling Co.', description: 'Instagram branded page for a bridal styling business.', link: 'https://www.instagram.com/velourstyling.co/velour-styling' }
];

router.get('/', function(req, res) {
  // Home
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res) {
  // About Me
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res) {
  // Projects — server renders the array above
  res.render('projects', { title: 'Projects', projects });
});

router.get('/contact', function(req, res) {
  // Contact form
  res.render('contact', { title: 'Contact Me', submitted: false });
});

// simple form handler (no DB/email) to satisfy "functionality"
router.post('/contact', function(req, res) {
  const { name, email, message } = req.body;
  res.render('contact', { title: 'Contact Me', submitted: true, name, email, message });
});

module.exports = router;
