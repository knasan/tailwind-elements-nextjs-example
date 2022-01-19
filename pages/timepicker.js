export default function TimepickerPage() {
    return (
        <div>
            <div className="flex justify-center">
                <div className="timepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                    <input type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Select a date" />
                    <label htmlFor="floatingInput" className="text-gray-700" data-mdb-toggle="timepicker" >Select a time</label>
                </div>
            </div>
        </div>
    )
}
