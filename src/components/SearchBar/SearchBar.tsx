import React, { useState } from 'react';

import { TextInput, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';

import { InputWrapper, SearchButton } from './styles';

interface SearchBarProps {
  search: (filter: string) => void;
}

export default function SearchBar({ search }: SearchBarProps) {
  const [filter, setFilter] = useState('');
  return (
    <InputWrapper>
      <TouchableOpacity
        style={{ alignSelf: 'center', flex: 20, marginRight: 10 }}>
        <FontAwesomeIcon icon={faCalendar} size={20} />
      </TouchableOpacity>
      <TextInput
        style={{ flex: 60 }}
        onChangeText={text => setFilter(text)}
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
  );
}
