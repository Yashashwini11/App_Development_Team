import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Cog, Mail, Users, Power } from 'lucide-react'
import { Button } from '../ui/button'
const Leftbar = () => {

    const AdminLinks = [
        {
            title: 'Courses',
            link: '/admin/courses',
        }, {
            title: 'Users',
            link: '/admin/users',
        }
    ]
    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-10'>
          
            <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link}  className='p-5 border-l-4 border-blue-400 hover:bg-primary/10 font-bold mt-4 w-[15vw]'>
                            <span className='flex flex-row items-center justify-center h-full w-1/2 gap-3'>
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
                <Button className='p-5  bg-red-500/5 hover:bg-red-500/10 font-bold  w-full'>
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} /> Logout
                    </span>
                </Button>
            </div>

        </div>
    )
}

export default Leftbar