module.exports = (app, passport) => {

	// index routes
	app.get('/', (req, res) => {
		res.render('index', {
		});
	});
	//login view
	app.get('/login', (req, res) => {
		res.render('login.ejs', {
			message: req.flash('loginMessage')
		});
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/panel',
		failureRedirect: '/login',
		failureFlash: true
	}));

	// signup view
	app.get('/signup', (req, res) => {
		res.render('signup', {
			message: req.flash('signupMessage')
		});
	});
	app.get('/maps', (req, res) => {
		res.render('maps')
	});

app.get('/profile2', isLoggedIn, (req, res) => {
		res.render('profile2', {
			user: req.user
		});
	});

app.get('/edit', isLoggedIn, (req, res) => {
		res.render('edit', {
		});
	});

app.get('/tutorial', (req, res) => {
		res.render('tutorial');
	});
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/panel',
		failureRedirect: '/signup',
		failureFlash: true // allow flash messages
	}));

	//profile view
	app.get('/panel', isLoggedIn, (req, res) => {
		res.render('profile', {
			user: req.user
		});
	});

	// logout
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}
