import React from 'react'
import achievementsIcon from '../assets/medal.png'

const Achievements = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center gap-3">
                <h1 className='text-black font-bold text-3xl'>ACHIEVEMENTS</h1>
                <img className='w-10' src={achievementsIcon} alt="Icon" />
            </div>

            <div className='pb-24 mx-10'>
                <p className='mt-6 mb-2 text-orange-500 text-2xl'>Secured 1<sup>st</sup> position in following events/competitions</p>
                <table className='border-[1px] border-slate-300/40'>
                    <thead>
                        <tr className='text-black text-lg'>
                            <th className='py-2 bg-slate-300/40'>Event name</th>
                            <th className='py-2 bg-slate-300/40'>Location of event</th>
                            <th className='py-2 bg-slate-300/40'>Event description</th>
                            <th className='py-2 bg-slate-300/40'>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b-[1px] border-slate-200/40'>
                            <td className='py-2 px-4 bg-slate-200/10'>iARC</td>
                            <td className='py-2 px-4 bg-slate-200/10'>IIT Guwahati</td>
                            <td className='py-2 px-4 bg-slate-200/10'>An autonomous robot competition with a line follower robot, and a pole climber robot</td>
                            <td className='py-2 px-4 bg-slate-200/10'>1<sup>st</sup></td>
                        </tr>
                        <tr className='border-b-[1px] border-slate-200/40'>
                            <td className='py-2 px-4 bg-slate-200/10'>iARC</td>
                            <td className='py-2 px-4 bg-slate-200/10'>IIT Kharagpur</td>
                            <td className='py-2 px-4 bg-slate-200/10'>An autonomous Grid solving robot competition with a line follower, and shortest path finder robot</td>
                            <td className='py-2 px-4 bg-slate-200/10'>1<sup>st</sup></td>
                        </tr>
                        <tr>
                            <td className='py-2 px-4 bg-slate-200/10'>Autonomous Line Following</td>
                            <td className='py-2 px-4 bg-slate-200/10'>At 12 various engineering colleges</td>
                            <td className='py-2 px-4 bg-slate-200/10'>An autonomous robot competition with a line follower robot</td>
                            <td className='py-2 px-4 bg-slate-200/10'>1<sup>st</sup></td>
                        </tr>
                    </tbody>

                </table>

                <p className='mt-10 mb-2 text-orange-500 text-2xl'>Secured 2<sup>nd</sup> position in following events/competitions</p>
                <table className='border-[1px] border-slate-300/40'>
                    <thead>
                        <tr className='text-black text-lg'>
                            <th className='py-2 bg-slate-300/40'>Event name</th>
                            <th className='py-2 bg-slate-300/40'>Location of event</th>
                            <th className='py-2 bg-slate-300/40'>Event description</th>
                            <th className='py-2 bg-slate-300/40'>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b-[1px] border-slate-200/40'>
                            <td className='py-2 px-4 bg-slate-200/10'>iARC</td>
                            <td className='py-2 px-4 bg-slate-200/10'>IIT Guwahati</td>
                            <td className='py-2 px-4 bg-slate-200/10'>An autonomous robot competition with a line follower robot, and a pole climber robot</td>
                            <td className='py-2 px-4 bg-slate-200/10'>2<sup>nd</sup></td>
                        </tr>
                        <tr className='border-b-[1px] border-slate-200/40'>
                            <td className='py-2 px-4 bg-slate-200/10'>iARC</td>
                            <td className='py-2 px-4 bg-slate-200/10'>IIT Kharagpur</td>
                            <td className='py-2 px-4 bg-slate-200/10'>An autonomous Grid solving robot competition with a line follower, and shortest path finder robot</td>
                            <td className='py-2 px-4 bg-slate-200/10'>2<sup>nd</sup></td>
                        </tr>
                        <tr>
                            <td className='py-2 px-4 bg-slate-200/10'>Autonomous Line Following</td>
                            <td className='py-2 px-4 bg-slate-200/10'>At 12 various engineering colleges</td>
                            <td className='py-2 px-4 bg-slate-200/10'>An autonomous robot competition with a line follower robot</td>
                            <td className='py-2 px-4 bg-slate-200/10'>2<sup>nd</sup></td>
                        </tr>
                    </tbody>

                </table>
            </div>


            <div className='mb-16 w-8/12 mx-auto'>
                <hr />
            </div>
        </>
    )
}

export default Achievements