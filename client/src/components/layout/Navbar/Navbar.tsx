import {
    IconBell,
    IconBookmark,
    IconBrandTwitter,
    IconHash,
    IconHome2,
    IconMail,
    IconUser
} from "@tabler/icons";
import {Link, useHistory} from "react-router-dom";

const navigation = [
    {
        label: 'Home',
        icon: IconHome2,
        href: '/'
    },
    {
        label: 'Explore',
        icon: IconHash,
        href: '#'
    },
    {
        label: 'Notifications',
        icon: IconBell,
        href: '#'
    },
    {
        label: 'Messages',
        icon: IconMail,
        href: '#'
    },
    {
        label: 'Bookmarks',
        icon: IconBookmark,
        href: '#'
    },
    {
        label: 'Profile',
        icon: IconUser,
        href: '/profile'
    }
]

export const Navbar = () => {
    return (
        <aside className="h-screen flex flex-col py-2 pr-2 border-r font-bold items-end">
            <div className="flex flex-col justify-between max-w-[300px] px-2 lg:px-8 h-full w-full">
                <div>
                    <div className="text-blue-400">
                        <IconBrandTwitter fill='var(--color-blue-400)' className='h-8 w-8'/>
                    </div>
                    <NavLinks/>
                    <NewTweetButton/>
                </div>
                <User/>

            </div>
        </aside>
    )
}

const NavLinks = () => {
    const history = useHistory()
    const location = history.location.pathname;
    return (
        <nav className='flex gap-2 flex-col mt-4'>
            {navigation.map((item) => {
                const Icon = item.icon;
                const active = location === item.href;
                return (
                    <Link to={item.href}>
                        <div
                            className={`flex gap-2 px-3 py-2 transition-color duration-100 hover:bg-gray-100 rounded-md ${active ? 'text-blue-500' : ''}`}>

                            <div className="w-6 lg:w-8">
                                <Icon />
                            </div>

                            <span className='text-sm md:text-base'>{item.label}</span>
                        </div>
                    </Link>
                );
            })}
        </nav>
    )
}

const NewTweetButton = () => {
    return (
        <button className='px-3 py-2 rounded-xl bg-blue-400 text-white w-full mt-4'>
            Tweet
        </button>
    )
}

const User = () => {
    return (
        <div className='flex items-center gap-2 pb-4'>
            <img className='h-8 w-8 rounded-full bg-red-500'/>
            <div className="flex flex-col">
                <p className=''>UserName</p>
                <p className='font-normal text-xs text-gray-300'>@yey</p>
            </div>
        </div>
    )
}
