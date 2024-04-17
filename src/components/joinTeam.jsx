import JoinTeamImg from '../assets/images/team.png';
import { Button } from './button';


function  joinTeamSection() {
    return (
        <section className="md:p-20">
            <div className="flex flex-row pt-8 relative mb-[70px]">
                <div className='flex gap-10  flex-col md:flex-row w-full pt-19 px-6'>
                    <div className="mt-12 pt-8 text-center flex item-center justify-center">
                        <img 
                            src={JoinTeamImg}
                            alt='AppstoreLogo'
                            className='md:h-[600px] w-[750px]'
                        />
                    </div>
                    <div className="mt-12 pt-[60px] text-left">
                        <h1 className="text-[64px] font-bold leading-[70px] pt-16">Join the ConnectMart <br />Movement</h1>
                        <p className="text-[25px] font-normal mt-10 mb-20">As pionners, we don’t cut corners and continue to <br />push the envolpe for rooted ineffecienies in the supply <br />chain. Empowerment to our customers and partners <br />comes from within the organization</p>
                        <Button className='btn2 btn--outline2'> 
                            <span className='font-bold text-[24px]'>Become A Member</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default joinTeamSection