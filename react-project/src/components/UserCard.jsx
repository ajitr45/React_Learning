import './UserCard.css'

const UserCard = (props) => {
  
  return (
    <div className="user-container">
      <p id="user-name">{props.name}</p>
      <img src={props.image}  id="user-image"/>
      <p id="user-description">{props.description}</p>
    </div>
  )
}

export default UserCard
