
import { ChevronRightIcon } from '@heroicons/react/24/solid';
const OrdersCard = props =>{
    const {date, totalPrice, totalProducts} = props;
   
    return (
        
        <div className="flex justify-between rounded-lg mb-4 items-center border p-4 border-black w-80">
            <p className="flex justify-between w-full">
                <div className="flex flex-col w-full">
                    <span className="font-light">{date}</span>
                    <span className="font-light italic">{totalProducts} productos</span>
                </div>
                <div className="flex items-center">
                    <span className="font-medium text-2xl text-red-400 mt-3">{parseFloat(totalPrice).toFixed(2)}€</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer w-3 mt-4 text-right"/>
                </div>
                
                
            </p>
            <p></p>
        </div>
        
    );
}
export default OrdersCard;