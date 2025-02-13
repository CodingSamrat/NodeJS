// Common js
const fs = require('fs')
// const path = require('path')
// File System


// // ESM
// import fs from 'fs'

const allFiles = fs.readdirSync('./')

console.log(allFiles)