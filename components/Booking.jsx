
export default function Booking() {
  return (
    <section 
      id='booking'
      className="mx-auto max-w-[1140px] px-10 py-16">

      <h4 className="text-4xl font-bold pb-5 text-[var(--primary-dark)]">Check our best deals and promos!</h4>
        
      <form className="flex flex-col gap-6">
        <div className="flex flex-col w-full sm:w-3/4">
          <label
            htmlFor="destination"
            className="text-lg text-gray-700 py-2">
              Destination</label>
          <select
            id="destination"
            className="text-center bg-black/10 py-2 rounded-md text-gray-700">
            <option>-- Select --</option>
            <option>Cancun, Quintana Roo, Mexico</option>
            <option>Playa del Carmen, Quintana Roo, Mexico</option>
            <option>Salvador da Bahia, Brazil</option>
            <option>Rio de Janeiro, Brazil</option>
            <option>Los Angeles, California, United States</option>
            <option>Miami, Florida, United States</option>
          </select>
        </div>

        <div className="flex w-full sm:w-3/4 gap-10">

          <div className="flex flex-col w-1/2">
            <label htmlFor="checkin"
              className="text-lg text-gray-700 py-2">
                Check-In</label>
            <input
              type="date"
              id="checkin"
              className="text-center text-gray-700 py-1 border-2 rounded-md" />
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="checkout"
              className="text-lg text-gray-700 py-2">
                Check-Out</label>
            <input
              type="date"
              id="checkout"
              className="text-center text-gray-700 py-1 border-2 rounded-md" />
          </div>
        </div>

        <div>
          <label
            className="text-lg text-gray-700 py-2 block">
              Search</label>
          <button
            className="sm:w-3/4 w-full py-2">
              Rates & Availabilities
          </button>
        </div>
        

      </form>
    </section>
  )
}
