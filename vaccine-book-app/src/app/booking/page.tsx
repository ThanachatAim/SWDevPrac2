import LocationDateReserve from "@/components/LocationDateReserve"
export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="font-sans text-xl mt-2 font-bold">Booking</div>
            
            <div className="w-fit space-y-2 rounded border-slate-400">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="rounded ring-1 ring-inset flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="สมชาย"
                  />
                <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">
                Surname
                </label>
                <input
                    type="text"
                    name="surname"
                    id="surname"
                    autoComplete="surname"
                    className="rounded ring-1 ring-inset flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="ใจดี"
                  />
                <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">
                Citizen ID
                </label>
                <input
                    type="text"
                    name="surname"
                    id="surname"
                    autoComplete="surname"
                    className="rounded ring-1 ring-inset flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="1234567890000"
                  />
                <div className="text-md text-left text-gray-600">Select Date and Location</div>
                <LocationDateReserve/>
            </div>

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            text-white shadow-sm">
                Book Vaccine Center
            </button>
            
        </main>
    )
}