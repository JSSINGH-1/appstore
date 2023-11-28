import './index.css'

const AppListItem = props => {
  const {eachData} = props
  const {appName, imageUrl} = eachData
  return (
    <li className="listTypes">
      <img src={imageUrl} alt={appName} className="imageItem" />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppListItem
