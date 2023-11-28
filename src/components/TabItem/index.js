import './index.css'

const TabList = props => {
  const {eachItem, ButtonEl} = props
  const {displayText} = eachItem

  const onclickButton = () => {
    ButtonEl(eachItem.tabId)
  }
  return (
    <li className="listType">
      <button type="button" className="buttonIteam" onClick={onclickButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabList
