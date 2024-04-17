import AdvertBgImg from '../assets/images/advertbg.png';

function  brandSection() {
    return (
        <section className="md:p-16">
            <div className="mt-12 pt-8 text-center px-6">
                <h1 className="text-[35px] font-bold">Trusted by leading brands</h1>
                <p className="text-[25px] font-normal mt-4">choose from 30,000+ unique SKUs</p>
            </div>

            <div className="mt-12 pt-8 text-center flex item-center justify-center px-6">
                <img 
                    src={AdvertBgImg}
                    alt='AppstoreLogo'
                    className='md:h-[600px]'
                />
            </div>
        </section>
    );
}



export default brandSection