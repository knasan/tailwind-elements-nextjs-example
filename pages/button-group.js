import Layout from "../components/Layout"

export default function ButtonGroupPage() {
    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                    <button type="button" className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Left</button>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Middle</button>
                    <button type="button" className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Right</button>
                </div>
            </div>
        </Layout>
    )
}
