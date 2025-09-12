import fs from 'fs'
import os from 'os'

function readFile() {
    fs.readFile('tuts/index.js', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})
}

// completely rewrites
const msg = "Hello world"
function writeMsg(msg) {
    fs.writeFile('tuts/index.js', msg, (err) => {
        if (err) throw err
        console.log('Done')
    })
}

function appendFile(msg) {
    fs.appendFile('tuts/index.js', msg, (err) => {
        if (err) throw err
        console.log('Done')
    })
}

// appendFile(msg)
function osModule() {
    console.log(os.arch())
    console.log(os.platform())
    console.log(os.uptime())
    console.log(os.userInfo())
    console.log(os.cpus().length)
}

osModule()