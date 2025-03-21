

const NotFoundPage = () => {


    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-red-500">404</h1>
                    <p className="text-xl mt-4">Page Not Found</p>
                    <a href="/" className="mt-6 text-blue-500 hover:underline">
                        Go back to Home
                    </a>
                </div>
            </div>
        </div>
    )
}


export default NotFoundPage