import type { Metadata } from 'next'
import React, { type FC } from 'react'
import FormFlight from '../components/form-flight'

// interface CreateFlightPageProps {

// }

export const metadata: Metadata = {
    title: "Dashboard | Create Flights"
}

const CreateFlightPage: FC = ({ }) => {
    return (
        <div className="">
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Add Data Flight</div>
            </div>

            <FormFlight />
        </div>
    )
}

export default CreateFlightPage