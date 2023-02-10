const fs = require('fs')
const path = require('path')

var options = {
  env: '.env',
  quote:'"',
}

module.exports = (param, value, userOptions) =>{
  if (userOptions) {
    Object.assign(options, userOptions)
  }

  let lines = fs.readFileSync(options.env, 'utf8').split('\n')
  let s = ''
  let bulundu=false
  let startedQuote = ''
  let paramName = ''
  let multilineValue = (value || '').toString().indexOf('\n') > -1

  lines.forEach((e,index) => {
    let line = e.trim()
    if (startedQuote) {
      let endQuotePosition = line.indexOf(startedQuote, 1) > -1 ? line.indexOf(startedQuote, 1) : -1
      if (endQuotePosition > -1) {
        line = line.substring(endQuotePosition + 1)
        if(paramName === param) {

          s+=multilineValue?options.quote + (value || '').toString() + options.quote: (value || '').toString()
          bulundu=true
        }
        let comment = ''
        if (line.indexOf('#') > -1) {
          comment = line.substring(line.indexOf('#'))
          s+= ' ' + comment + '\n'
        }
        
        startedQuote = ''
      }
    } else {
      if (!line.startsWith('#') && line.indexOf('=') > -1) {
        paramName = line.split('=')[0].trim()
        let paramValue = line.split('=')[1]
        if (paramName == param) {


          s += `${paramName}=`

          startedQuote = paramValue.length > 0 && (paramValue[0] == `'` || paramValue[0] == `"`) ? paramValue[0] : ''
          let endQuotePosition = startedQuote && paramValue.indexOf(startedQuote, 1) > -1 ? paramValue.indexOf(startedQuote, 1) : -1

          if (!startedQuote || (startedQuote && endQuotePosition > -1)) {
            s+=multilineValue?options.quote + (value || '').toString() + options.quote: (value || '').toString()
            bulundu=true
            paramValue = paramValue.substring(endQuotePosition + 1)
            let comment = ''
            if (paramValue.indexOf('#') > -1) {
              comment = paramValue.substring(paramValue.indexOf('#'))
              s+= ' ' + comment
            }
            
            startedQuote = ''
            s += '\n'
          }
        } else {
          s+=line + '\n'
        }
      } else {
        if(index==lines.length-1) {
          if(e!=''){
            s += line+ '\n'  
          }
        }else{
          s += line+ '\n'
        }
      }

    }
  })

  if(!bulundu){
    s+=param+'='
    s+=multilineValue?options.quote + (value || '').toString() + options.quote: (value || '').toString()
    s+='\n'
  }

  fs.writeFileSync(options.env, s, 'utf8')
}
