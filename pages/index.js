export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="relative mb-3 datepicker form-floating xl:w-96" data-mdb-toggle-button="false">
          <input type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Select a date" data-mdb-toggle="datepicker" />
          <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
        </div>
      </div>
    </div>
  )
}
