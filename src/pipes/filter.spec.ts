import {} from 'jasmine'; // in my case or jasmine if you're using jasmine
import {FilterPipe} from './filter.pipe';

const exampleProducts = [
  {name: 'chair', inventory: 5, unit_price: 45.99},
  {name: 'table', inventory: 10, unit_price: 123.75},
  {name: 'sofa', inventory: 2, unit_price: 399.50}];

describe('FilterPipe', () => {
  it('should create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter by receiving just one element', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(exampleProducts, 'chai').toString()).toEqual(exampleProducts[0].toString());
    expect(pipe.transform(exampleProducts, 'ble').toString()).toEqual(exampleProducts[1].toString());
    expect(pipe.transform(exampleProducts, 'of').toString()).toEqual(exampleProducts[2].toString());
    expect(pipe.transform(exampleProducts, '0').toString()).toEqual(exampleProducts[2].toString());
  });

  it('should filter a simple string\'s array', () => {
    const pipe = new FilterPipe();
    const simpleArray = ['hello', 'this', 'pipe', 'is', 'awesome'];
    expect(pipe.transform(simpleArray, 'll').toString()).toEqual(simpleArray[0].toString());
    expect(pipe.transform(simpleArray, 'some').toString()).toEqual(simpleArray[4].toString());
    expect(pipe.transform(simpleArray, 'is').toString()).toEqual(['this', 'is'].toString());
    expect(pipe.transform(simpleArray, 'h').toString()).toEqual(['hello', 'this'].toString());
    expect(pipe.transform(simpleArray, 'lo').toString()).toEqual(simpleArray[0].toString());
    expect(pipe.transform(simpleArray, 'a').toString()).toEqual(simpleArray[4].toString());
  });

  it('should filter a simple string\'s array ignoring the accent marks', () => {
    const pipe = new FilterPipe();
    const simpleArray = ['por qué', 'á', 'adiós', 'camión', 'mä', 'žorro'];
    expect(pipe.transform(simpleArray, 'por que').toString()).toEqual(simpleArray[0].toString());
    expect(pipe.transform(simpleArray, 'que').toString()).toEqual(simpleArray[0].toString());
    expect(pipe.transform(simpleArray, 'ue').toString()).toEqual(simpleArray[0].toString());
    expect(pipe.transform(simpleArray, 'zorro').toString()).toEqual(simpleArray[5].toString());
    expect(pipe.transform(simpleArray, 'adios').toString()).toEqual(simpleArray[2].toString());
    expect(pipe.transform(simpleArray, 'ma').toString()).toEqual(simpleArray[4].toString());
    expect(pipe.transform(simpleArray, 'mion').toString()).toEqual(simpleArray[3].toString());
  });

  it('should filter multiple elements', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(exampleProducts, '5').toString()).toEqual(exampleProducts.toString());
    const firstAndLastElement = [exampleProducts[0], exampleProducts[2]];
    expect(pipe.transform(exampleProducts, '9').toString()).toEqual(firstAndLastElement.toString());
  });

  it('should not find any occurrences', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(exampleProducts, 'w').toString()).toEqual('');
    expect(pipe.transform(exampleProducts, 'chairtable').toString()).toEqual('');
    expect(pipe.transform(exampleProducts, 'sofa99').toString()).toEqual('');
    expect(pipe.transform(exampleProducts, 'inventory').toString()).toEqual('');
    expect(pipe.transform(exampleProducts, '5.2').toString()).toEqual('');
    expect(pipe.transform(exampleProducts, 'chair.3').toString()).toEqual('');
  });
});
