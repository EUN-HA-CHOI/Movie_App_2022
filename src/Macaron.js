import React from 'react'

function Macaron(props) { //자식 컴포넌트
  console.log(props)  
  return (
    <div>
      <h1>Macaron No.{props.propsid}</h1>
      <h2>Macaron Name : {props.propsname}</h2>  
      <img src={props.propsimage} alt={props.propsname} />
    </div>
  )
}
export default Macaron

/*function Macaron(props) { //구조 분해 할당1
  console.log(props)  //object
  const {propsid, propsname, propsimage} = props; //각각의 키로 
  return (
    <div>
      <h1>Macaron No.{propsid}</h1>
      <h2>Macaron Name : {propsname}</h2>  
      <img src={propsimage} alt={propsname} />
    </div>
  )
}
export default Macaron
*/
/*
function Macaron({propsid, propsname, propsimage}) { //구조 분해 할당2 (주로 사용)
  return (
    <div>
      <h1>Macaron No.{propsid}</h1>
      <h2>Macaron Name : {propsname}</h2>  
      <img src={propsimage} alt={propsname} />
    </div>
  )
}
export default Macaron*/