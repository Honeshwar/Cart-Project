
function CardItems(){
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
        <div className="right-block" style={{fontSize:"15px"}}>
            <p>Phone</p>
            <p style={{color:"gray"}}>Rs 999</p>
            <p style={{color:"gray"}}>Qty: 0</p>
            <div className="cart-item-actions">
                {/* buttons */}
            </div>
        </div>
    </div>
);

}

export default CardItems;