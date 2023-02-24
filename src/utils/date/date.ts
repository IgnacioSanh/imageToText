import { format } from 'date-fns';
import { groupBy } from 'lodash';
import { SavedImage, DateSection } from '~types';

function formatDate(date: Date): string {
  return format(date, 'MMMM d - yyyy');
}

function groupByPeriod(data: SavedImage[]): DateSection[] {
  const grouped = groupBy(data, savedImage =>
    format(savedImage.date, 'MMMM yyyy'),
  );
  return Object.keys(grouped).map<DateSection>(key => ({
    title: key,
    data: grouped[key],
  }));
}

export default {
  formatDate,
  groupByPeriod,
};
