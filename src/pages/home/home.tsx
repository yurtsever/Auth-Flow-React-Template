import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home(): React.FunctionComponentElement<undefined> {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Link className="px-4 py-2 rounded-sm bg-zinc-950 text-zinc-100" to="/signin">
          Signin
        </Link>
        <Link className="px-4 py-2 rounded-sm bg-zinc-950 text-zinc-100" to="/signup">
          Signup
        </Link>
        <Link className="px-4 py-2 rounded-sm bg-zinc-950 text-zinc-100" to="/forgot">
          Forgot
        </Link>
        <Link className="px-4 py-2 rounded-sm bg-zinc-950 text-zinc-100" to="/reset">
          Reset
        </Link>
        <Link className="px-4 py-2 rounded-sm bg-zinc-950 text-zinc-100" to="/dashboard">
          Dashboard
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Home
