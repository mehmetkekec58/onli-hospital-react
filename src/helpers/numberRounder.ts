import { containTexts } from './../contains/containTexts';

export function numberRounder(number: number): string {
    let numberString:string = number.toString();
  
      if (number < 1000) {
          return numberString;
      }
  
      if (number >= 1000 && number < 10000) {
          if (numberString.charAt(1) === '0') {
              return `${numberString.charAt(0)} ${containTexts.THOUSAND}`;
          }
          return `${numberString.charAt(0)},${numberString.charAt(1)} ${containTexts.THOUSAND}`;
      }
  
      if (number >= 10000 && number < 100000) {
          if (numberString.charAt(2) === '0') {
              return `${numberString.substring(0,2)} ${containTexts.THOUSAND}`;
          }
          return `${numberString.substring(0, 2)},${numberString.charAt(2)} ${containTexts.THOUSAND}`;
      }
  
      if (number >= 100000 && number < 1000000) {
          return `${numberString.substring(0, 3)} ${containTexts.THOUSAND}`;
      }
  
      if (number >= 1000000 && number < 10000000) {
          if (numberString.charAt(2) !== '0') {
              return `${numberString.charAt(0)},${numberString.substring(1,3)} ${containTexts.MILLION}`;
          }
          if (numberString.charAt(1) !== '0') {
              return `${numberString.charAt(0)},${numberString.charAt(1)} ${containTexts.MILLION}`;
          }
          return `${numberString.charAt(0)} ${containTexts.MILLION}`;
      }
      return numberString;
  
  }