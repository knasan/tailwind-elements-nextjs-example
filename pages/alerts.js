import Layout from "../components/Layout"
export default function AlertsPage() {
    return (
        <Layout>
            <div className="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700" role="alert">
                A simple primary alert - check it out!
            </div>
            <div className="bg-purple-100 rounded-lg py-5 px-6 mb-4 text-base text-purple-700" role="alert">
                A simple secondary alert - check it out!
            </div>
            <div className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700" role="alert">
                A simple success alert - check it out!
            </div>
            <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700" role="alert">
                A simple danger alert - check it out!
            </div>
            <div className="bg-yellow-100 rounded-lg py-5 px-6 mb-4 text-base text-yellow-700" role="alert">
                A simple warning alert - check it out!
            </div>
            <div className="bg-indigo-100 rounded-lg py-5 px-6 mb-4 text-base text-indigo-700" role="alert">
                A simple indigo alert - check it out!
            </div>
            <div className="bg-gray-50 rounded-lg py-5 px-6 mb-4 text-base text-gray-500" role="alert">
                A simple light alert - check it out!
            </div>
            <div className="bg-gray-300 rounded-lg py-5 px-6 mb-4 text-base text-gray-800" role="alert">
                A simple dark alert - check it out!
            </div>
        </Layout>
    )
}
