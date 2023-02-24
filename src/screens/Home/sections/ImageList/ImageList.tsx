import React, { useMemo } from 'react';
import { SectionList, SectionListRenderItem } from 'react-native';

import { SectionHeader, SectionListItem } from './components/index';
import { SavedImage, DateSection } from '~types';
import { DateUtil } from '~utils';
import { data } from '~mocks/savedImage';

const renderItem: SectionListRenderItem<SavedImage, DateSection> = ({
  item: { date, name, uri, id },
}) => (
  <SectionListItem
    subtitle={DateUtil.formatDate(date)}
    title={name}
    imageURL={uri}
    id={id}
  />
);

const MOCK_IMAGES = true;

interface ImageListProps {
  images: SavedImage[];
}

export default function ImageList({ images }: ImageListProps) {
  const sections = useMemo(() => {
    return DateUtil.groupByPeriod(MOCK_IMAGES ? [...data, ...images] : images);
  }, [images]);

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
