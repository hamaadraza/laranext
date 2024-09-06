import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { FC, ReactNode } from 'react'

interface DropdownLinkProps {
    children: ReactNode
    href: string
    [key: string]: any
}

const DropdownLink: FC<DropdownLinkProps> = ({ children, ...props }) => (
    <Menu.Item>
        {({ active }) => (
            <Link
                {...props}
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}>
                {children}
            </Link>
        )}
    </Menu.Item>
)

interface DropdownButtonProps {
    children: ReactNode
    [key: string]: any
}

export const DropdownButton: FC<DropdownButtonProps> = ({ children, ...props }) => (
    <Menu.Item>
        {({ active }) => (
            <button
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-none transition duration-150 ease-in-out`}
                {...props}>
                {children}
            </button>
        )}
    </Menu.Item>
)

export default DropdownLink
