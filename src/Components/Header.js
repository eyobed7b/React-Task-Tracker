import Button from "./Button"

 

 

const Header = ({title,onShow,showAdd}) => {
 
    return (
      <header className="header">
          <h1>{title}</h1>
          <Button onClick={onShow} text = {showAdd? "close":"Add"} color = {showAdd?"red":"green"} />
      </header>
    )
}

export default Header
