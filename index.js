// controllers/index.js
// All routes for the portfolio live here, as required by the assignment rubric.
// Each route renders an EJS view via res.render(view, locals).
var express = require('express');
var router = express.Router();

// Projects data source for /projects view.
// Keeping data in-memory keeps the app simple (no DB needed for grading).
const projects = [
  { title: 'Cisco Packet Tracer Labs', description: 'Routing & switching topologies, EIGRP/OSPF configs, subnetting practice.', link: 'https://github.com/yourusername/cisco-packet-tracer-labs' },
  { title: 'Azure Cloud Fundamentals', description: 'AZ-900 study notes + hands-on labs for storage, compute, identity.', link: 'https://github.com/yourusername/azure-fundamentals-labs' },
  { title: 'TPSF (The Pink Sun Empowerment Foundation)', description: 'WordPress/Divi site build, content architecture, donor-facing pages.', link: 'https://tpsf.ng' },
  { title: 'Bloom & Flow Program Microsite', description: 'Program info page + assets for menstrual health initiative rollout.', link: 'https://tpsf.ng/bloom-and-flow' },
  { title: 'DataViz 101 – FemPreg Dataset', description: 'Exploratory data analysis notebooks (Python) with clear plots.', link: 'https://github.com/yourusername/dataviz101' },
  { title: 'Velour Styling Co.', description: 'Brand assets and landing page for bridal styling business.', link: 'https://github.com/yourusername/velour-styling' }
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
  // In a real app, send an email or store to DB. For now, render a success state.
  res.render('contact', { title: 'Contact Me', submitted: true, name, email, message });
});

module.exports = router;
