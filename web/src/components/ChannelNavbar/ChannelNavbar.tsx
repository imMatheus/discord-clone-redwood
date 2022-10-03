import { Hash } from 'react-feather'

const ChannelNavbar = () => {
  return (
    <nav className="sticky top-0 flex items-center gap-2 border-b border-b-clr-black bg-clr-bg-primary py-3 px-4 font-medium">
      <Hash strokeWidth={2.5} className="h-5 w-5 text-clr-text-grayed" />
      <h3 className="font-bold">Allmänt</h3>
    </nav>
  )
}

export default ChannelNavbar
