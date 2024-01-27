import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, something happened</h1>
      <p className="text-accent-foreground">
        An error has occurred in the application, down below you find more
        information
      </p>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <p>
        Go back to the{' '}
        <Link to="/" className="text-sky-600 hover:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
