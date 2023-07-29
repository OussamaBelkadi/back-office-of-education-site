import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, FilmIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Outlet, NavLink, redirect, Navigate } from 'react-router-dom'
import Logo from "../assets/image/LOGOEDERASSA.png"
import { useStateContext } from '../contexts/ContextProvider'
import axiosClient from '../views/axios'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
const navigation = [
  { name: 'Dashboard', to:'/dashboard'},
  { name: 'Team', to:'/add'},
  { name: 'Projects', to: '/'},
  { name: 'Calendar', to: '/'},
  { name: 'Reports', to: '/'},
]
const userNavigation = [
  {name: 'Sign out', href: '#'},
  {name: ' out', href: '#'},
  {name: 'rt', href: '#'}
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Example() {
  const { currentUser, userToken, setCurrentUser, setUserToken } = useStateContext();
  
 if(!userToken){
  return <Navigate to="/login"/>
 }
  
  console.log(currentUser)
  function logout(ev) {
    ev.preventDefault();
    axiosClient.post('/logout').then(({data})=>{
      setCurrentUser({});
      setUserToken(null)
      
    }).catch((error)=>{
        console.log(error);
    })
}

  return (
    <>
      
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white w-full shadow-md" >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src={Logo}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={({isActive})=>classNames(
                              isActive
                                ? ' text-green-500 border-b-2 border-green-500'
                                : 'text-black hover:border-b-2 hover:border-green-500 hover:text-green-500 hover:cursor-pointer',
                              ' px-3 py-2 text-sm font-medium'
                            )}
                            
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className=" p-1 text-gray-400 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-transpatent text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <FilmIcon className="w-8 bg-transparent text-black"/>
                            {/* <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> */}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            
                              <Menu.Item >
                                {({ active }) => (
                                  <a
                                    href="#"
                                    onClick={(ev)=> logout(ev)}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Sign out
                                  </a>
                                )}
                              </Menu.Item>
                            
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center border-none p-2 text-gray-400 ">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({isActive})=>classNames(
                        isActive ? 'text-green-500 border-b-2 border-green-500' : 'text-black hover:text-green-500 hover:border-b-2 hover:border-green-500',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                     
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      {/* <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" /> */}
                      <UserIcon className='w-6 '/>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{currentUser.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{currentUser.email}</div>
                    </div>
                    
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    
                      <Disclosure.Button
                        href="#"
                        onClick={(ev)=> logout(ev)}
                        className="block bg-transparent rounded-full border-2 border-green-500  px-3 py-2 text-base text-green-500 font-medium hover:text-green-800 hover:border-green-800"
                      >
                        Sign out
                      </Disclosure.Button>
                   
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        
          <Outlet/>
        
      </div>
    </>
  )
}
