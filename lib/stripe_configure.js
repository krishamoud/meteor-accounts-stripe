Template.configureLoginServiceDialogForStripe.siteUrl = function () {
	return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForStripe.fields = function () {
  return [
      {property: 'appId', label: 'Client id '},
      {property: 'secret', label: 'Secret Key'},
      {property: 'scope', label: 'Scope. read_write or read_only'}
  ];
};
