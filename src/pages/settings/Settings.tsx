import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteLocalStorage } from '../../services/localStorageService';
import searchHistoryEdit from '../../store/actions/searchHistoryActionCreater';
import { constantsLocalStorageKey } from '../../constants/constantsLocalStorageKey';
import "./Settings.css";

const Settings = () => {

  const dispatch = useDispatch();

  const { addSearchHistoryState } = bindActionCreators(searchHistoryEdit, dispatch)

  const handleSearchHistoryClear = () => {
    addSearchHistoryState([])
    deleteLocalStorage(constantsLocalStorageKey.SEARCH_HISTORY)
  }
  return (
    <div className='settings-container'>

      <button className='settings-delete-search-history-button' onClick={handleSearchHistoryClear}>Arama Geçmişini Temizle</button>
    </div>
  )
}

export default Settings