"use server"

import prisma from "../../../../../../lib/prisma"

export const getFlights = async () => {
    try {
        const flight = await prisma.flight.findMany({
            // ambil data yg berelasi dengan include
            include: {
                plane: true,
                seats: true
            }
        })

        return flight
    } catch (error) {
        console.log(error);
        
        return []
    }
}