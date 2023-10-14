import HospitalCatalog from "@/components/HospitalCatalog"
import { getHospitals } from "@/libs/getHospitals"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"

export default function Hospital(){
    const hospitals = getHospitals()

    return (
        <main className="text-center p-5">
            <h1 className="text-x1 font-medium">Select Vaccine Center</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
            <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>

            {/* <hr className="my-10"/>
            <h1 className="text-xl font-medium"> TRY Client-side Hospital Panel</h1>
            <CardPanel/> */}
        </main>
    )
}