import Link from 'next/link';
import Image from 'next/image';
import {TbGridDots} from 'react-icons/tb';

const Header: React.FC = () =>{

    const url: string = "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"

    return(
        <div className="flex justify-end pr-4 pt-3 space-x-4 items-center">
          <Link href="https://mail.google.com" className="text-sm hover:underline cursor-pointer">Gmail</Link>
          <Link href="https://images.google.com" className="text-sm hover:underline cursor-pointer">Images</Link>
          <TbGridDots className='text-4xl hover:bg-gray-200 p-2 rounded-full' />
          <Image
              src={url}
              alt="dp"
              className="rounded-full object-cover"
              width={30}
              height={100}
              style={{height:30}}
          />
        </div>
    )
}
export default Header;