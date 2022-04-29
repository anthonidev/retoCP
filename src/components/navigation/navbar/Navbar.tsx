import React, { FunctionComponent } from 'react'
import { NavbarItensMain } from '../../../helpers/data'
import NavItem from './NavItem';
import NavBarItenIcom from './NavBarItenIcom';

const navbar: FunctionComponent<{openUser: () => void }> = ({ openUser }) => {
  return (
    <div className="sticky   m-auto top-0 z-10 flex-shrink-0 flex h-12  ">
      


      <div className=" flex-1 flex  items-center justify-around space-x-2 z-40 bg-pri ">
        <div className='flex  text-base text-let'>
          {
            NavbarItensMain.map((iten, index) => (<NavItem key={index} iten={iten} type={"top"} />))
          }
        </div>
        <div className='flex'>
          <h1 className='text-rou text-2xl font-bold hidden lg:block tracking-widest'>CINEPLANNET</h1>
        </div>
        <div className='flex text-plo'>
          <NavBarItenIcom openUser={openUser}/>
        </div>



      </div>
    </div>
  )
}

export default navbar