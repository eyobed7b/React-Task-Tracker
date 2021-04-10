import Button from "./Button"

 

 

const Header = ({title}) => {
    const onClick = ()=>{
        console.log("Hello")
   }
    return (
      <header className="header">
          <h1>{title}</h1>
          <Button onClick={onClick} text = "Add" color = "green" />
      </header>
    )
}

export default Header
