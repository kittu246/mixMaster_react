import React from 'react';
import { Form, useNavigation } from 'react-router-dom';

const SearchForm = ({searchTerm}) => {

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className='searchForm' style={{gap:0}}>
        <input type='search' style={{flex:.8}} name='search' defaultValue={searchTerm} />
        <button style={{flex:.2,borderRadius:'0%'}} type='submit' disabled={isSubmitting} >{isSubmitting?'searching':'search'}</button>

    </Form>
  )
}

export default SearchForm