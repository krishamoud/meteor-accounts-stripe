Package.describe({
    summary: "Login service for stripe accounts"
});

Package.on_use(function(api) {
    api.use('accounts-base', ['client', 'server']);
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);

    api.use('oauth2', ['client', 'server']);
    api.use('oauth', ['client', 'server']);
    api.use('http', ['server']);
    api.use('underscore', 'server');
    api.use('random', 'client');
    api.use('service-configuration', ['client', 'server']);
  	
  	api.add_files(
    ['lib/stripe_configure.html', 'lib/stripe_configure.js'],
    'client');

    api.add_files("lib/accounts_stripe.js");
    api.add_files('lib/stripe_client.js', 'client');
    api.add_files('lib/stripe_server.js', 'server');
});
