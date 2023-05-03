
import { allDayMenu } from '../Menu/menuData';

//The search function does not work


function customSearch(searchTerm) {
    let results = [];
  
    for (let i = 0; i < allDayMenu.length; i++) {
      let item = allDayMenu[i];
      let words = item.title.split(' ');
      let found = false;
  
      for (let j = 0; j < words.length; j++) {
        let word = words[j];
  
        if (word.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1) {
          found = true;
          break;
        }
      }
  
      if (found) {
        results.push(item);
      }
    }
  
    return results;
  }
  
  