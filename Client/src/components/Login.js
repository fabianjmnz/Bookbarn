import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'


function Login(props){

  const [username,setUsername] = useState('')

  const handleLoginName = (e) =>{
    setUsername(e.target.value)
  }

  if (props.authorized === false){
    return(
      <>
        <input type='text' placeholder='Name' onChange={handleLoginName}></input>
        <button onClick={()=> props.onUsername(username)}>Login</button>
      </>
    )}else{
      return(
        <div>
    <h1>Hello {props.username}</h1>
           <button onClick={()=>props.offUsername()}>Logoff </button>
        </div>
      )
    }
  }


const mapStateToProps = (state) => {
  return{
    username: state.Username,
    authorized: state.isAuthorized
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUsername:(loginUsername) => dispatch({
      type: 'USERNAME', myusername:loginUsername
    }),
    offUsername:(logoffUsername) => dispatch({
      type: 'NoUSERNAME', myusername:logoffUsername
    })
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)