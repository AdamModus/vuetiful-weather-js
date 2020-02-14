const exec = require('child_process').exec;

function getCommandLine() {
  switch (process.platform) {
    case 'darwin':
      return 'open';
    case 'win32':
      return 'start';
    case 'win64':
      return 'start';
    default:
      return 'xdg-open';
  }
}

exec(getCommandLine() + ' ' + './dist/legacy-report.html');
exec(getCommandLine() + ' ' + './dist/modern-report.html');
