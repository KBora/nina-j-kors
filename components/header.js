import { Fragment } from 'react'
import { Transition, Popover } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import MenuItems from './menu-items'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover as="nav" className="">
      {({ open }) => (
        <>
          <div>
            <div className="lg:container mx-auto px-5 sm:px-0 py-2 sm:py-4">
              <div className="flex md:flex-grow items-center justify-between h-16">
                <div className="flex md:flex-grow items-center justify-between">
                  <div className="flex-shrink-0">
                    <Link href="/" passHref>
                      <div className="sm:flex cursor-pointer text-4xl uppercase font-bold">
                        Nina J Kors
                      </div>
                    </Link>
                  </div>
                  <div className="relative hidden sm:block sm:ml-4">
                    
                    <div className="flex items-center space-x-6">
                      <MenuItems />
                    </div>
                  </div>
                </div>
                <div className="flex-grow sm:hidden">

                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className={classNames(
                    'focus:ring-black/50',
                    'inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-inset '
                  )}
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-7 w-8" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-7 w-8" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
              </div>
            </div>
          </div>

          <Transition.Root as={Fragment}>
            <div className="lg:hidden">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {/* bg-gradient-to-b from-transparent  via-black/40 to-transparent */}
                <Popover.Overlay
                  className={classNames(
                    'bg-white',
                    'z-30 fixed top-20 inset-0 bg-opacity-75 backdrop-blur-sm'
                  )}
                />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel
                  className={classNames(
                    'bg-gradient-to-b from-white to-transparent',
                    'z-30 w-full absolute origin-top rounded-b-lg sm:hidden'
                  )}
                >
                  <div className="px-5 pt-2 pb-3 space-y-8">
                    <MenuItems />                    
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}
