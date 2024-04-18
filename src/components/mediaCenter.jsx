// import mediacenterImge from '../assets/images/mediacenterImge.png';
import team1Img from '../assets/images/team1.png';
import team1Img2 from '../assets/images/team2.png';
import team1Img3 from '../assets/images/team3.png';
import { Button } from './button';
import { Link } from 'react-router-dom';


function  mediaCenterSection() {
    return (
        <section className="md:mt-[60px] md:p-20 sm:p-8 md:px-[100px]">
            {/* <div className="flex flex-row p-4 relative mb-[70px] border border-gray-300 rounded-lg">
                <div className='flex gap-10 flex-col md:flex-row w-full pt-19'>
                    <div className="md:w-1/4 text-center flex item-center justify-center">
                        <img 
                            src={mediacenterImge}
                            alt='AppstoreLogo'
                            className='md:h-[200px] md:w-[500px] rounded-lg'
                        />
                    </div>
                    <div className="md:w-3/4 text-left">
                        <h1 className="text-[30px] font-medium leading-[40px]">ConnectMart Group celebrates six new partnerships with Egyptian and Saudi businesses</h1>
                        <p className="text-[21px] font-normal mt-8 mb-10">Cairo, 28 November 2022 – ConnectMart, the MENAP leading business-to-business (B2B) eCommerce platform that connects SMEs with manufacturers and services providers celebrated the signing of multiple cooperation and partnership agreements with FMCG, banking and Fintech organizations from Saudi and Egypt. The agreements are in line with ConnectMart’s regional and international expansion to achieve its vision…</p>
                        <Button className='btn2 btn--outline2'> 
                            View Article
                        </Button>
                    </div>
                </div>
            </div> */}
            <div className="md:mt-[200px] flex flex-row p-4 relative mb-[70px]">
                <div className='flex gap-10 justify-between flex-col md:flex-row w-full pt-19'>
                    <div className='border border-gray-300 rounded-lg px-4'>
                        <img 
                            src={team1Img}
                            alt='team1Img'
                            className='md:h-[267px] md:w-[400px] rounded-lg'
                        />
                        <div className='mt-4'>
                            <h1 className='text-[20px] font-medium'>Former Group CFO of Namshi joins ConnectMart as a Group VP of finance</h1>
                            <p className='text-[16px] font-normal mt-4'>The former Group CFO of the giant fashion e-commerce platform Namshi joins as ConnectMart started its expansion to emerging markets through Pakistan and Egypt.  With its continued growth, ConnectMart aims to become the gateway to frictionless commerce between businesses, creating new economic opportunities for emerging markets. 23 August, 2022 Riyadh, Saudi Arabia – ConnectMart, the…</p>
                            <p className='mt-10'>
                            <Link to='/' className='text-primary'>
                                View Article
                            </Link>  
                            </p>
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-lg px-4'>
                        <img 
                            src={team1Img2}
                            alt='team1Img2'
                            className='md:h-[267px] md:w-[400px] rounded-lg'
                        />
                        <div className='mt-4'>
                            <h1 className='text-[20px] font-medium'>Former Group CFO of Namshi joins ConnectMart as a Group VP of finance</h1>
                            <p className='text-[16px] font-normal mt-4'>The former Group CFO of the giant fashion e-commerce platform Namshi joins as ConnectMart started its expansion to emerging markets through Pakistan and Egypt.  With its continued growth, ConnectMart aims to become the gateway to frictionless commerce between businesses, creating new economic opportunities for emerging markets. 23 August, 2022 Riyadh, Saudi Arabia – ConnectMart, the…</p>
                            <p className='mt-10'>
                            <Link to='/' className='text-primary'>
                                View Article
                            </Link>  
                            </p>
                        </div>
                    </div>
                    <div className='border border-gray-300 rounded-lg px-4'>
                        <img 
                            src={team1Img3}
                            alt='team1Img3'
                            className='md:h-[267px] md:w-[400px] rounded-lg'
                        />
                        <div className='mt-4'>
                            <h1 className='text-[20px] font-medium'>Former Group CFO of Namshi joins ConnectMart as a Group VP of finance</h1>
                            <p className='text-[16px] font-normal mt-4'>The former Group CFO of the giant fashion e-commerce platform Namshi joins as ConnectMart started its expansion to emerging markets through Pakistan and Egypt.  With its continued growth, ConnectMart aims to become the gateway to frictionless commerce between businesses, creating new economic opportunities for emerging markets. 23 August, 2022 Riyadh, Saudi Arabia – ConnectMart, the…</p>
                            <p className='mt-10'>
                            <Link to='/' className='text-primary'>
                                View Article
                            </Link>  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-4 relative items-center justify-center text-center">
                <Button className='btn2 btn--outline2 px-20'> 
                    <span className='font-bold text-[24px]'>Show More</span>
                </Button>
            </div>
        </section>
    );
}



export default mediaCenterSection