import React from 'react';

import { TextInput } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';

import { InputWrapper, SearchButton } from './styles';

export default function SearchBar() {
  return (
    <InputWrapper>
      <FontAwesomeIcon
        icon={faCalendar}
        size={20}
        style={{ alignSelf: 'center', flex: 20, marginRight: 10 }}
      />
      <TextInput style={{ flex: 60 }} placeholder="Search a picture" editable />
      <SearchButton>
        <FontAwesomeIcon
          icon={faSearch}
          size={20}
          style={{ alignSelf: 'center', flex: 20 }}
        />
      </SearchButton>
    </InputWrapper>
  );
}
