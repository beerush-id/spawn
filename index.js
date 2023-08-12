const { spawn } = require('child_process');
const argv = process.argv.slice(2).join(' ');
const commands = argv.split(' -- ');

for (const command of commands) {
  const [ target, ...args ] = command.split(' ');
  const [ cmd, delay ] = target.split(':');

  if (delay) {
    console.log(`[${cmd}]: Waiting ${delay}ms...`);
    setTimeout(() => {
      const cp = spawn(cmd, args, { shell: true });

      cp.stdout.on('data', (data) => {
        console.log(`[${cmd}]: ${data.toString().replace(/\n$/, '')}`);
      });
    }, parseInt(delay));
  } else {
    const cp = spawn(cmd, args, { shell: true });

    cp.stdout.on('data', (data) => {
      console.log(`[${cmd}]: ${data.toString().replace(/\n$/, '')}`);
    });
  }
}
