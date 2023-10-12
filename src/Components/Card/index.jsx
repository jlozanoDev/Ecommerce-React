import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { TagIcon } from '@heroicons/react/24/solid';
const Card = (data) =>{
    const context = useContext(ShoppingCartContext);
    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
        context.closeCheckoutSideMenu();
        
    }
    
    return(
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={()=> showProduct(data.data)}
            >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-zinc-600 font-bold text-xs p-1 mb-2 ml-2 bg-blue-50/40 '><FontAwesomeIcon icon={faLayerGroup} /> {data.data.category?.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title}></img>
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 text-xs text-yellow-600 hover:text-green-600'
                    onClick={(e)=>{
                        e.stopPropagation();
                        context.addProductsToCart(data.data);
                        }
                    } >
                    <FontAwesomeIcon icon={faCartPlus} />
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light flex'><TagIcon className="h-6 w-3 text-gray-500 mr-1"/> {data.data.title}</span>
                <span className='text-lg font-medium text-red-400 flex'>{data.data.price.toFixed(2)}€</span>
            </p>
        </div>
    );
}
export default Card;