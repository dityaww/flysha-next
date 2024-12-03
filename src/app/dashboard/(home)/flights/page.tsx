import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import React, { type FC } from 'react'
import { Plus } from 'lucide-react'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './components/columns-flights'
import { getFlights } from './lib/data'

interface FlightProps {

}

export const metadata: Metadata = {
    title: "Dashboard | Flights"
}

const Flight: FC = async () => {

    const data = await getFlights()

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">
                    Flights
                </div>
                <Button asChild>
                    <Link href={'/dashboard/flights/create'}>
                        <Plus className='mr-2 h-4 w-4' />
                        Tambah Data
                    </Link>
                </Button>
            </div>

            <DataTable columns={columns} data={data} />
        </>
    )
}
export default Flight