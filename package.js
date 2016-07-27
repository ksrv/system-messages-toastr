Package.describe({
  name: 'ksrv:system-messages-toastr',
  version: '0.0.1',
  summary: 'Show system messages by toastr',
  git: 'https://github.com/ksrv/system-messages-toastr.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');

  api.use('ecmascript');
  api.use('ksrv:system-messages');
  api.use('matb33:collection-hooks@0.8.3', 'client');
  api.use('chrismbeckett:toastr@0.1.0', 'client');

  api.mainModule('system-messages-toastr.js', 'client');
});
