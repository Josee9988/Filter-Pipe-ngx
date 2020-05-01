import {Pipe, PipeTransform} from '@angular/core';
// @ts-ignore
import deburr from 'lodash.deburr';

@Pipe({
  name: 'filterPipe',
  pure: false
})
/**
 * Class that filters array of objects without with accent mark support.
 * @author Jose Gracia
 * @link repository: https://github.com/Josee9988/Filter-Pipe-ngx
 * @link originally based on: https://github.com/solodynamo/ng2-search-filter
 */
export class FilterPipe implements PipeTransform {

  /**
   *
   * @param items List of items to filter
   * @param term  a string term to compare with every property of the list
   * @param excludes List of keys which will be ignored during search
   */
  static filter(items: Array<{ [key: string]: any }>, term: string, excludes: any): Array<{ [key: string]: any }> {

    const toCompare = deburr(term.toLowerCase());

    // tslint:disable-next-line:no-shadowed-variable
    function checkInside(item: any, term: string) {

      if (typeof item === 'string' && deburr(item.toString().toLowerCase()).includes(toCompare)) {
        return true;
      }

      for (const property in item) {
        if (item[property] === null || item[property] === undefined || excludes.includes(property)) {
          continue;
        }
        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        } else if (deburr(item[property].toString().toLowerCase()).includes(toCompare)) {
          return true;
        }
      }
      return false;
    }

    return items.filter(item => checkInside(item, term));
  }
  /**
   * @param items object from array
   * @param term term's search
   * @param excludes array of strings which will ignored during search
   */
  transform(items: any, term: string, excludes: any = []): any {
    if (!term || !items) {
      return items;
    }

    return FilterPipe.filter(items, term, excludes);
  }

}
