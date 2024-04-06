import { Typography, IconButton, Button, Input } from '@material-tailwind/react';
import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Header = () => {
    const navList = (
        <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            <Link to='/'>
                <Typography color='white' className='p-1 font-normal hover:text-lg'>
                    <a className='flex items-center'>Home</a>
                </Typography>
            </Link>
            <Link to='/about'>
                <Typography color='white' className='p-1 font-normal hover:text-lg'>
                    <a className='flex items-center'>About</a>
                </Typography>
            </Link>
            <Link to='/contact'>
                <Typography color='white' className='p-1 font-normal hover:text-lg'>
                    <a className='flex items-center'>Contact</a>
                </Typography>
            </Link>
            <Link to='/cart'>
                <Typography color='white' className='p-1 font-normal hover:text-lg'>
                    <a className='flex items-center'>Cart</a>
                </Typography>
            </Link>
        </ul>
    );
    return (
        <div className='bg-blue-gray-700 w-full mx-auto py-3 px-10'>
            <div className='flex flex-wrap items-center justify-between gap-y-4 text-white'>
                {/* name shop */}
                <Link to='/'>
                    <Typography
                        as='a'
                        variant='h6'
                        className='mr-4 ml-2 text-xl cursor-pointer py-1.5 hover:text-gray-400'
                    >
                        Ecommerce Shop
                    </Typography>
                </Link>

                {/* links */}
                <div className='mr-4 hidden lg:block'>{navList}</div>

                {/* search */}
                <div className='flex gap-5'>
                    <div className='relative flex w-full gap-2 md:w-max'>
                        <Input
                            type='search'
                            color='white'
                            label='Type here...'
                            className='pr-20'
                            containerProps={{
                                className: 'min-w-[288px]',
                            }}
                        />
                        <Button size='sm' color='white' className='!absolute right-1 top-1 rounded'>
                            Search
                        </Button>
                    </div>
                    <div className='ml-auto flex gap-1 md:mr-4'>
                        <IconButton variant='text' color='white'>
                            <Cog6ToothIcon className='h-5 w-5' />
                        </IconButton>
                        <IconButton variant='text' color='white'>
                            <BellIcon className='h-5 w-5' />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
