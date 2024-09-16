"use server"

import prisma from "../../../../../../lib/prisma"

export async function getAirplanes() {
    try {
        const planes = prisma.airplane.findMany({})

        return planes        
    } catch (error) {
        console.log("Database Error", error)
        return []
    }
}