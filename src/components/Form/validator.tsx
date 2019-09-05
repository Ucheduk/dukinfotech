const validate = (value: string, rules: any[]):boolean => {
  let isValid = true;
  
  for (let rule in rules) {
  
    switch (rule) {
          case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;
        
        case 'isRequired': isValid = isValid && requiredValidator(value); break;
            
        case 'isEmail': isValid = isValid && emailValidator(value); break;
        
          default: isValid = true;
    }

  }
  
  return isValid;
}


/**
 * minLength Val
 * @param  value 
 * @param  minLength
 * @return          
 */
const minLengthValidator = (value: string, minLength: number): boolean => {
    return value.length >= minLength;
}

/**
 * Check to confirm that feild is required
 * 
 * @param  value 
 * @return       
 */
const requiredValidator = (value: string): boolean => {
    return value.trim() !== '';	
}

/**
 * Email validation
 * 
 * @param value
 * @return 
 */
const emailValidator = (value: string): boolean => {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(value).toLowerCase());
}



export default validate;