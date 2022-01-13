import { ReactNode } from 'react';
import { BsSquare } from 'react-icons/bs'

interface IMarker {
  children: ReactNode
}

const Marker = ({ children }: IMarker) => {
  return (
    <div className="text-violet-500 relative">
      <BsSquare className='text-3xl' />
      <BsSquare className='absolute rotate-45 top-0 text-3xl' />
      <div className='absolute inset-0 flex justify-center items-center'>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Marker;
