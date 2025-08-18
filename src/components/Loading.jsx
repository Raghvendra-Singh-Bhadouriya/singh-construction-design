

const Loading = () => {
    return(
        <>
        {/* ✅ Loading Skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="shadow rounded-lg p-2 animate-pulse bg-gray-200 h-[180px]"
                ></div>
              ))}
            </div>
        </>
    )
}

export default Loading;