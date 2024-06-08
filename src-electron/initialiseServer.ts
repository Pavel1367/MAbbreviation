const path = require('path')
const {spawn} = require('child_process')
let serverProcess
export const initialiseServer = () => {
    const isProd = process.env.NODE_ENV === 'production'

    const serverPath = isProd ? 
    path.join(process.resourcesPath, 'server', 'server.exe')  :
    path.resolve(__dirname, './server')
    const command = isProd ? serverPath : 'node';
    const args = isProd ? [] : [serverPath];
    serverProcess = spawn(command,args); 
  
    serverProcess.stdout.on('data', (data: Buffer) => {
      console.log(`Server stdout: ${data}`); 
    });
  
    serverProcess.stderr.on('data', (data: Buffer) => {
      console.error(`Server stderr: ${data}`); 
    });
  
    serverProcess.on('close', (code: number) => {
      console.log(`Server process exited with code ${code}`); 
    });
}
