import { useAuth } from '@redwoodjs/auth'

const UserDisplay = () => {
  const { currentUser } = useAuth()

  return (
    <div className="flex items-center gap-2 bg-clr-bg-panel py-3 px-4">
      <div className="relative h-8 w-8 overflow-hidden rounded-full bg-clr-text">
        <img src={currentUser.avatar_url} alt={`${currentUser.username}`} />
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-sm font-semibold leading-none">
          {currentUser.username}
        </h3>
        <p className="text-xs leading-none text-clr-text-grayed">
          #{currentUser.id}
        </p>
      </div>
    </div>
  )
}

export default UserDisplay
