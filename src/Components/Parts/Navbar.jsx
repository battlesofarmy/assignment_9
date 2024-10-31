import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AuthContext } from '../AuthoProvider';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Update Profile', href: '/updateprofile', current: true },
  { name: 'Login', href: '/login', current: false },
  { name: 'Register', href: '/register', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [current, setCurrent] = useState(navigation.find(item => item.current)?.name);
  const {user, logOut} = useContext(AuthContext);

  function handleClick(name) {
    setCurrent(name);
  }


    
  const handleLogOut =()=>{
    logOut()
    .then(()=>console.log("Your Logged out"))
    .catch((err)=>console.log(err.message))
  }



  return (
<>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                  <h2 className='text-3xl text-gray-200'><b>Luxery</b>Haven</h2>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => handleClick(item.name)}
                        className={classNames(
                          current === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={current === item.name ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}

                    {/* user prifile  */}{
                      user &&
                      <div data-tip={user.displayName} className='tooltip tooltip-bottom'> 
                         <img style={{height: '50px', width: '50px'}} src={user.photoURL} />
                      </div>
                    }

                    <div onClick={handleLogOut} className='text-white'>Logout</div>
                    
                    {/* <NavLink key="fasd" to='/' className='userimg text-white hover:bg-gray-700 hover:text-white rounded-lg'>
                      <img style={{height: '50px', width: '50px'}} src="https://lh3.googleusercontent.com/a/ACg8ocJNpEWJ_dNWW7o4qILpFBQUPXNgg02YM_o9bPeof0dNHhBWOd9v=s96-c" alt="phonto img" />
                    </NavLink> */}

                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    current === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={current === item.name ? 'page' : undefined}
                  onClick={() => handleClick(item.name)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

</>
  );
}