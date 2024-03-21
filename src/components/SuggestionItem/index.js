// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsItem,updateSearch} = props
  const {suggestion, id} = suggestionsItem
  const onArrowClick = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="suggestions-bar">
      <p className="suggestions-msg">{suggestion}</p>
      <button className="arrow-btn" onClick={onArrowClick}>
        <img
          className="arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
