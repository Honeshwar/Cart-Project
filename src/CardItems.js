
function CardItems(props){// props properties of components
// all js code
const styles = {
    image:{
        height:110,
        width:70,
        borderRadius:4,
        background:"#ccccc",
        boxShadow:"0 0 7px 2px black"
    }
}
// all jsx code
return (
    <div className="cart-item" style={{ background:"pink"}}>
        <div className="left-block">
            <img src="https://th.bing.com/th?id=OPA.5fu6tODjDDH3%2fA474C474&w=166&h=220&pid=21.1" style={styles.image}/>
        </div>
        <div className="right-block">
            <p style={{fontSize:25}}>{props.title}</p>
            <p style={{color:"gray"}}>Rs {props.price}</p>
            <p style={{color:"gray"}}>Qty: {props.quantity}</p>
            <div className="cart-item-actions">
                {/* buttons */}
                <img className="action-icons" alt="" src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"/>
                <img className="action-icons" alt="" src="https://cdn-icons-png.flaticon.com/128/7080/7080604.png"/>
                <img className="action-icons" alt="" src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"/>

            </div>
        </div>
    </div>
);

}

export default CardItems;