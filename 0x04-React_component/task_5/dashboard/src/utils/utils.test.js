import { getLatestNotification,
         getFooterCopy,
         getFullYear } from './utils';

describe('lates notifications', function() {
  test('return notification', function() {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

describe('footer copy true', function() {
  test('return notification', function() {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });
});

describe('footer copy false', function() {
  test('return notification', function() {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('return curent year', function() {
  test('return notification', function() {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });
});
