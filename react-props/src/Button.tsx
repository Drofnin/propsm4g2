type Props={
    buttonText:string;
    isRed:boolean;
}

/*probs has Button atrribute. Probs is always gonna be object*/
const Button =(props:Props)=>{ 

    const style = {
        backgroundColor:'red',
        color:'white',
        padding:'10px 20px',
        border:'none',
        borderRadius:'5px',
        curser:'pointer',
        }
        
        if(props.isRed){
            style.backgroundColor='red';
        } 
        else style.backgroundColor='blue'; 

    return (
        <>
        <button style={style}>
        {props.buttonText}
        </button> 
        </>
    )   
}
export default Button;