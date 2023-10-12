import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = props =>{
    const {id, title, imageUrl, price, quantity, handleDelete} = props;
    
    return (
        
        <div className="flex justify-between items-center">
            <div className="flex items-center gap4">
                <div className="flex">{quantity}</div>
                <figure className="w20 h-20 m-2">
                    <img className="w-full h-full rounded-lg object-cover " src={imageUrl} alt={title}/>
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            
            <div className="flex items-center gap-3">
                <p className="text-lg font-medium text-red-400">{parseFloat(price).toFixed(2)}€</p>
                {handleDelete && <XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 text-black-500 cursor-pointer"/>}
            </div>
        </div>
        
    );
}
export default OrderCard;