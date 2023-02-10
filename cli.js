#!/usr/bin/env node

const args = require('yargs').argv

if(args.h){
  showHelpAndExit()
}
if(args.help && typeof args.help === 'boolean'){
  showHelpAndExit()
}

if(args.v){
  showVersionAndExit()
}
if(args.version && typeof args.version === 'boolean'){
  showVersionAndExit()
}


/* otherwise continue main process */
const envSave = require(`./env-save.js`)

let userOptions={}
if(args.e || args.env) userOptions.env=(args.e || args.env)

let params={}
Object.keys(args).forEach(e=>{ 
  if(!['_','$0','env','help','version'].includes(e)){
    if(typeof args[e] === 'string'){
      params[e] =args[e].replaceAll('\\n','\n').replaceAll('\\t','\t').replaceAll('\\t','\t')
    }else{
      params[e] =args[e]
    }
  }
})

Object.keys(params).forEach(key=>{ 
  envSave(key,params[key],userOptions)
})

function showVersionAndExit(){
  console.log(require('./package.json').version)
  process.exit(0)
}

function showHelpAndExit() {
  let s=`
  Usage: 
    env-save [options] --VARIABLENAME=value [--VARIABLENAME2=value2 ...]
  
  Options:

    --VARIABLENAME=value        Set .env variable
    -e, --env                   Source file. default is ".env"
    -v, --version               Show the version number
    -h, --help                  Show usage information

  Examples:
    env-save --NODE_ENV=production
    env-save --PORT=3000 --USER=root --PASSWD=root --ENV=production

    # We can also use these parameters "ENV", "VERSION" and "HELP"
    # but not lowercase
    
    env-save --VERSION=1.0.1 --ENV=production

  Multiline Example:  new line char: \\n
    env-save --PRIVATEKEY="---BEGIN RSA---\\n...\\nKh9NV\\n-----END RSA---"
`
  console.log(s)
  process.exit(0)
}