import React, { useState } from 'react';

import { TextInput } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';

import {
  DateSearchButton,
  InputWrapper,
  SearchButton,
  ClearFilter,
  Filters,
} from './styles';
import DatePicker from 'react-native-date-picker';
import { SmallFont } from '@theme/typography';

interface SearchBarProps {
  search: (filter?: string) => void;
  setFilterDate: (date?: Date) => void;
}

export default function SearchBar({ search, setFilterDate }: SearchBarProps) {
  const [filter, setFilter] = useState<string>();
  const [showDateModal, setShowDateModal] = useState(false);
  const [showClearDateButton, setShowClearDateButton] = useState(false);

  function handleConfirm(date: Date) {
    setFilterDate(date);
    setShowDateModal(false);
    setShowClearDateButton(true);
  }

  function clearDateFilter() {
    setFilterDate(undefined);
    setShowClearDateButton(false);
  }

  function clearTextFilter() {
    setFilter(undefined);
    search(undefined);
  }

  return (
    <>
      <InputWrapper>
        <DateSearchButton onPress={() => setShowDateModal(true)}>
          <FontAwesomeIcon icon={faCalendar} size={20} />
        </DateSearchButton>
        <TextInput
          style={{ flex: 60 }}
          onChangeText={text => setFilter(text)}
          value={filter}
          placeholder="Search a picture"
          editable
        />
        <SearchButton onPress={() => search(filter)}>
          <FontAwesomeIcon
            icon={faSearch}
            size={20}
            style={{ alignSelf: 'center', flex: 20 }}
          />
        </SearchButton>
      </InputWrapper>
      <DatePicker
        modal
        mode="date"
        date={new Date()}
        open={showDateModal}
        onConfirm={handleConfirm}
        onCancel={() => setShowDateModal(false)}
      />
      <Filters>
        {filter ? (
          <ClearFilter onPress={clearTextFilter}>
            <SmallFont>Clear text filter</SmallFont>
          </ClearFilter>
        ) : null}
        {showClearDateButton ? (
          <ClearFilter onPress={clearDateFilter}>
            <SmallFont>Clear date filter</SmallFont>
          </ClearFilter>
        ) : null}
      </Filters>
    </>
  );
}
