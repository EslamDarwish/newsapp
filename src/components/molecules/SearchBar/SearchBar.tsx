import React from 'react';

import {debounce} from 'lodash';
import {ISearchBarProps} from './SearchBar.props';
import {Svg} from '../../atoms';
import {StyledSearchBar} from './SearchBar.styles';
import {TextInput} from 'react-native-gesture-handler';
import {SVGS} from '../../../assets/svgs';

/**
 *
 * @param onTextChange A function that is called when the text input's text changes.
 * @param debounceTime The time in milliseconds to debounce the onTextChange function.
 */
const SearchBar = ({onTextChange, debounceTime}: ISearchBarProps) => {
  return (
    <StyledSearchBar>
      <TextInput
        placeholder="Search"
        onChangeText={debounce(onTextChange, debounceTime)}
        style={{flex: 1}}
      />
      <Svg asset={SVGS.search} width={18} />
    </StyledSearchBar>
  );
};

export default SearchBar;
