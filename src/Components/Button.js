 import PropTypes from 'prop-types';

const Button = ({text,color ,onClick}) => {
  
    return (
    <button onClick={onClick}  className="btn" style={{backgroundColor:color}}>
   {text}
    </button>
    )
}

Button.defualt ={
    color : "blue",
}
Button.propTypes ={
    text: PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button
