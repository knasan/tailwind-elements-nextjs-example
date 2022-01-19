
import "tw-elements/dist/css/index.min.css"

// tw-elements css sometimes conflicts with tailwind css. If tw-elements is loaded globally in _app.js, e.g. B. the buttons page is no longer correct. That's why you have to be really careful what you import, how and where. I would suggest swapping out everything as a component and importing it there. But not tested yet.
// datetime requires css from tw-elements. Without these, datetime doesn't work.

import Layout from '../components/Layout'

export default function DateTimePage() {
    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div className="relative mb-3 datepicker form-floating xl:w-96" data-mdb-toggle-button="false">
                    <input type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date" data-mdb-toggle="datepicker" />
                    <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
                </div>
            </div>
            <p className="text-center">If clicking in input field does not open anything, please reload the page. It seems that NextJS is not loading the CSS properly.</p>
        </Layout>
    )
}
