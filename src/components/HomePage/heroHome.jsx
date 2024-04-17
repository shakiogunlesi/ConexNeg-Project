import React from 'react';
import '../../index.css';


function Herohome() {
    return (
        <div className="md:px-[200px] px-8">
            <h1 className='md:text-[54px] text-[40px] font-medium text-textC500 mt-[50px]'>ConexNeg: Connecting Your World, Freshly Delivered</h1>
            <div className='flex gap-4 flex-col md:flex-row w-full pt-19'>
                <div className='md:w-1/2 md:pr-8'>
                    <p className='text-[28px] leading-[35px]'>ConexNeg is your gateway to a vibrant network, seamlessly connecting people and products across the supply chain. We empower businesses and individuals with innovative solutions that prioritize convenience and efficiency. Whether you're a farmer seeking wider reach for your fresh produce, a retailer looking to streamline your inventory management, or a consumer seeking high-quality goods delivered straight to your doorstep, ConexNeg is here to bridge the gap. Our user-friendly platform fosters connections and simplifies processes, ensuring a smooth and satisfying experience for everyone involved.</p>
                </div>
                <div className='md:w-1/2 md:pl-4'>
                    <p className='text-[24px] leading-[35px]'>Our suite of services fosters a connected ecosystem: FarmConnect: This user-friendly platform streamlines the farm-to-consumer journey. Farmers can showcase their produce and manage sales effortlessly, while consumers enjoy the convenience of ordering fresh goods directly from the source and having them delivered right to their doorsteps. 
                        ConnectMart:  Our B2B platform empowers retailers by connecting them with a vast network of wholesalers. This streamlined process ensures a steady supply of goods and simplifies the purchasing experience for businesses of all sizes. 
                        Swift Logistics: No matter where your products need to go, Swift Logistics ensures swift and reliable delivery. Our robust logistics network guarantees the safe and timely movement of goods, fostering a seamless experience for everyone involved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Herohome
