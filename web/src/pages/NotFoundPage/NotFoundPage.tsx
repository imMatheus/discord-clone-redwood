import { Link, routes } from '@redwoodjs/router'

export default () => (
  <div className="grid min-h-screen place-items-center bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto max-w-max">
      <main className="sm:flex">
        <p className="text-4xl font-extrabold text-red-600 sm:text-5xl">404</p>
        <div className="sm:ml-6">
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-1 text-base text-gray-500">
              Check the URL in the address bar and please try again.
            </p>
          </div>
          <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <Link
              to={routes.home()}
              className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Home
            </Link>
            <Link
              to={routes.home()}
              className="inline-flex items-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Get Help
            </Link>
          </div>
        </div>
      </main>
    </div>
  </div>
)
