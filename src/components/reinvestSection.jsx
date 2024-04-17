import AdvertImg from '../assets/images/advert.png';

function  reinvestSection() {
    return (
        <section className="md:p-16">
            <div className="mt-6 pt-8 text-center px-6">
                <h1 className="text-[35px] font-bold">Reinventing Wholesale</h1>
                <p className="text-[25px] font-normal mt-4">Greater wholesale options. Less hassel</p>
            </div>

            <div className='flex gap-4 flex-col md:flex-row w-full pt-19'>
                <div className='text-left px-6 md:pt-20'> 
                    <div className="border-l-4 border-blue-700 md:pl-16 pl-8">
                        <h2 className="text-[27px] font-medium">One Stop Shop</h2>
                        <p className="text-[20px]">Access 30,000+ SKUs from top brands & wholesalers <br />with best prices and real-time promotions via your mobile</p>
                    </div>
                    <div className="border-l-4 border-primary-300 md:pl-16 pl-8 mt-14">
                        <h2 className="text-[27px] font-medium">Get the supply you need on-demand</h2>
                        <p className="text-[20px]">Replenish your stock in less than 24hrs. It's time to <br />repurpose the storage for a retailing space and get more sales per sqm</p>
                    </div>
                    <div className="border-l-4 border-primary-300 md:pl-16 pl-8 mt-14">
                        <h2 className="text-[27px] font-medium">Pay for the supply in flexible methods</h2>
                        <p className="text-[20px]">We offer cash-on-delivery, online payment by Mada <br />card, or e-bill through Sadad to be settled in a paperless transactions</p>
                    </div>
                </div>
                <div className='px-6 md:pt-20'>
                    <img 
                    src={AdvertImg}
                    alt='AppstoreLogo'
                    className='h-[500px]'
                    />
                </div>
            </div>
        </section>
    );

}

export default reinvestSection