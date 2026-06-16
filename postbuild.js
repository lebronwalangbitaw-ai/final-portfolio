import fs from 'fs';
import path from 'path';

const shellPath = path.join('dist', 'client', '_shell.html');
const indexPath = path.join('dist', 'client', 'index.html');
const errorPath = path.join('dist', 'client', '404.html');

if (fs.existsSync(shellPath)) {
  fs.copyFileSync(shellPath, indexPath);
  console.log('Successfully copied _shell.html to index.html');
  fs.copyFileSync(shellPath, errorPath);
  console.log('Successfully copied _shell.html to 404.html');
} else {
  console.error('Error: _shell.html not found in dist/client/');
}
