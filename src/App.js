
const usersData = [
  {
      name:"Chuki",
      city:"Chennai",
      description:"Front-End Developer",
      skills:["Front-End Development","HTML","CSS","JS","React.Js","Node.Js"],
      online:true,
      profile:"Images/UserProfile-1.jpg"
  },
  {
      name:"Bheem",
      city:"Erode",
      description:"Back-End Developer",
      skills:["Back-End Development","HTML","CSS","Node.Js","MongoDB","Java","Python"],
      online:true,
      profile:"Images/UserProfile-2.jpg"
  },
  {
      name:"Raju",
      city:"Coimbatore",
      description:"Full-Stack Developer",
      skills:["Full-Stack Development","HTML","CSS","JS","React.Js","Node.Js","MongoDB","Python"],
      online:false,
      profile:"Images/UserProfile-3.jpg"
  },
]

function User(props){
  return(
    <div className='card-container'>
      <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
      <img className="img" src={props.profile} alt="User1" />
      <div className="line"></div>
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.discription}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
         <ul>
          {props.skills.map((skill,index)=>(
              <li key={index}>{skill}</li>
          ))}
        </ul> 
      </div>
    </div>
  )
}

const App = () => {

return (
    <>
    {
      usersData.map((user,index)=>(
          <User key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
          />
      ))
    }
    </>
)
}



export default App