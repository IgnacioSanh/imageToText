import React from 'react';
import { SectionList, SectionListRenderItem } from 'react-native';

import { SectionHeader, SectionListItem } from './components/index';

type Item = {
  name: string;
  date: string;
  imageURI?: string;
};

interface DateSection {
  title: string;
  data: readonly Item[];
}

const sections: DateSection[] = [
  {
    title: 'Section 1',
    data: [
      { name: 'Item 1', date: 'March 3, 2023' },
      { name: 'Item 2', date: 'March 3, 2023' },
      { name: 'Item 3', date: 'March 3, 2023' },
      { name: 'Item 4', date: 'March 3, 2023' },
    ],
  },
  {
    title: 'Section 2',
    data: [
      { name: 'Item 1', date: 'March 3, 2023' },
      { name: 'Item 2', date: 'March 3, 2023' },
      { name: 'Item 3', date: 'March 3, 2023' },
      { name: 'Item 4', date: 'March 3, 2023' },
    ],
  },
  {
    title: 'Section 3',
    data: [
      { name: 'Item 1', date: 'March 3, 2023' },
      { name: 'Item 2', date: 'March 3, 2023' },
      { name: 'Item 3', date: 'March 3, 2023' },
      { name: 'Item 4', date: 'March 3, 2023' },
    ],
  },
  {
    title: 'Section 4',
    data: [
      { name: 'Item 1', date: 'March 3, 2023' },
      { name: 'Item 2', date: 'March 3, 2023' },
      { name: 'Item 3', date: 'March 3, 2023' },
      { name: 'Item 4', date: 'March 3, 2023' },
    ],
  },
];

const renderItem: SectionListRenderItem<Item, DateSection> = ({
  item: { date, name },
}) => <SectionListItem subtitle={date} title={name} />;

export default function ImageList() {
  return (
    <>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} />
        )}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled
      />
    </>
  );
}
