import cheerio from 'cheerio';

import MOCK_HTML from './fixtures/sample';

import StaticParser from './parser';

let parser: StaticParser;

beforeAll(() => {
  parser = new StaticParser(MOCK_HTML.HTML);
});

test('select all link elements and get href attribute', async () => {
  expect(parser.getAttrs('a', 'href')).toEqual([
    '#home',
    '#news',
    '#contact',
    '#about',
    '#extra'
  ]);
});

test('select by class and attribute and get same attribute', async () => {
  expect(parser.getAttrs('.drink-list [href]', 'href')).toEqual(['#extra']);
});

test('select by class and attribute and get different attribute', async () => {
  expect(parser.getAttrs('.drink-list [a="b"]', 'href')).toEqual(['#extra']);
});

test('select by class and emelement input type and get value', async () => {
  expect(parser.getAttrs('.food-list input', 'value')).toEqual(['hallowin']);
});

test('get children attributes', async () => {
  expect(parser.getChildrenAttrs('.nav', 'href')).toEqual([
    '#home',
    '#news',
    '#contact',
    '#about'
  ]);
});

test('get children and select element which has specific attribute', async () => {
  expect(parser.getChildrenAttrs('.food-list', 'value')).toEqual(['hallowin']);
});

test('get texts', async () => {
  expect(parser.getTexts('a')).toEqual([
    'Home',
    'News',
    'Contact',
    'About',
    'Extra'
  ]);
});

test('get list of attributes', async () => {
  expect(parser.getTexts('.drink-list [a="b"]')).toEqual(['Tea', 'Extra']);
});

test('get children texts', async () => {
  expect(parser.getChildrenTexts('ol')).toEqual([
    'Coffee',
    'Tea',
    'Milk',
    'Extra'
  ]);
});
