import { data } from '~mocks/savedImage';
import DateUtil from './date';

describe('Date util', () => {
  describe('formatDate', () => {
    test('Expected date format', () => {
      expect(DateUtil.formatDate(new Date(2023, 2, 1))).toBe('March 1 - 2023');
    });
  });
  describe('groupByPeriod', () => {
    const DATE_SECTION = [{ title: 'April 2023', data }];
    test('Based on the SavedImage array, generates DateSection array', () => {
      expect(DateUtil.groupByPeriod(data)).toStrictEqual(DATE_SECTION);
    });
    test('Receives an empty array', () => {
      expect(DateUtil.groupByPeriod([])).toStrictEqual([]);
    });
  });
});
