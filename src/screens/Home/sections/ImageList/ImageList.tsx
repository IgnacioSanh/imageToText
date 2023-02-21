import { H2, StandardFont } from '@theme/typography';
import React from 'react';
import { SectionList, SectionListRenderItem } from 'react-native';

type Item = {
  name: string;
};

interface DateSection {
  title: string;
  data: readonly Item[];
}

const sections: DateSection[] = [
  {
    title: 'Section 1',
    data: [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 4' },
    ],
  },
  {
    title: 'Section 2',
    data: [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 4' },
    ],
  },
];

const renderItem: SectionListRenderItem<Item, DateSection> = ({ item }) => (
  <StandardFont>{item.name}</StandardFont>
);

export default function ImageList() {
  return (
    <SectionList
      sections={sections}
      renderSectionHeader={({ section }) => <H2>{section.title}</H2>}
      renderItem={renderItem}
    />
  );
}
