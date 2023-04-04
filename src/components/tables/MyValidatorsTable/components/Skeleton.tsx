interface SkeletonProps {
  title: string
}

export function Skeleton({ title }: SkeletonProps) {
  return (
    <div className="h-[548px] w-full overflow-hidden rounded-lg bg-white px-6">
      <h3 className="p-6 text-2xl font-bold leading-8 text-DAppDeep">
        {title}
      </h3>
      {[...Array(5)].map(() => (
        <div
          key={crypto.randomUUID()}
          className="mb-9 flex w-full items-center justify-between">
          <div>
            <div className="h-5 w-[500px] animate-pulse rounded-sm bg-DAppLight" />
            <div className="mt-3 h-4 w-[300px] animate-pulse rounded-sm bg-DAppLight" />
          </div>
          <div>
            <div className="h-5 w-[110px] animate-pulse rounded-sm bg-DAppLight" />
            <div className="mt-3 mr-0 ml-auto h-4 w-[60px] animate-pulse rounded-sm bg-DAppLight" />
          </div>
        </div>
      ))}
    </div>
  )
}
