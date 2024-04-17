import TheBackerImg from '../assets/images/backer1.png';
import TheBackerImg2 from '../assets/images/backer2.png';
import TheBackerImg3 from '../assets/images/backer3.png';
import TheBackerImg4 from '../assets/images/backer4.png';
import TheBackerImg5 from '../assets/images/backer5.png';
import TheBackerImg6 from '../assets/images/backer6.png';

function  theBackersSection() {
    return (
        <section className="pt-16 md:px-[250px] px-6">
            <div className="mt-12 pt-8 text-center">
                <h1 className="text-[35px] font-bold">Our Backers</h1>
                <p className="text-[25px] font-normal mt-4">We are humbled by the trust and support of leading investors in the world to leapforg the region</p>
            </div>
            <div className='flex gap-4 justify-between flex-col md:flex-row w-full pt-19 md:py-[60px]'>
              <div className="mt-12 pt-8 text-center flex item-center justify-center">
                  <img 
                      src={TheBackerImg}
                      alt='AppstoreLogo'
                      className='h-[60px]'
                  />
              </div>
              <div className="mt-12 pt-8 text-center flex item-center justify-center">
                  <img 
                      src={TheBackerImg2}
                      alt='AppstoreLogo'
                      className='h-[60px]'
                  />
              </div>
              <div className="mt-12 pt-8 text-center flex item-center justify-center">
                  <img 
                      src={TheBackerImg3}
                      alt='AppstoreLogo'
                      className='h-[60px]'
                  />
              </div>
            </div>
            <div className='flex gap-4 justify-between flex-col md:flex-row w-full pt-19 md:py-[60px]'>
              <div className="mt-12 pt-8 text-center flex item-center justify-center">
                  <img 
                      src={TheBackerImg4}
                      alt='AppstoreLogo'
                      className='h-[60px]'
                  />
              </div>
              <div className="mt-12 pt-8 text-center flex item-center justify-center">
                  <img 
                      src={TheBackerImg5}
                      alt='AppstoreLogo'
                      className='h-[60px]'
                  />
              </div>
              <div className="mt-12 pt-8 text-center flex item-center justify-center">
                  <img 
                      src={TheBackerImg6}
                      alt='AppstoreLogo'
                      className='h-[60px]'
                  />
              </div>
            </div>
            <div className='flex gap-4 justify-between flex-col md:flex-row w-full pt-19 md:py-[60px]'>
              <div className="mt-12 pt-8 text-center flex item-center justify-center">
                  <img 
                      src={TheBackerImg}
                      alt='AppstoreLogo'
                      className='h-[60px]'
                  />
              </div>
              <div className="mt-12 pt-8 text-center flex item-center justify-center">
                  <img 
                      src={TheBackerImg2}
                      alt='AppstoreLogo'
                      className='h-[60px]'
                  />
              </div>
              <div className="mt-12 pt-8 text-center flex item-center justify-center">
                  <img 
                      src={TheBackerImg3}
                      alt='AppstoreLogo'
                      className='h-[60px]'
                  />
              </div>
            </div>
        </section>
    );
}



export default theBackersSection