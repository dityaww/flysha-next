"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { Trash } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import type { FC } from "react";
import { deleteAirplane } from '../lib/action'

interface DeleteAirplaneProps {
    id: string
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} size='sm' type='submit' variant='destructive'>  
            <Trash className='mr-2 h-4 w-4' />
            Hapus
        </Button>
    )
}

const DeleteAirplane: FC<DeleteAirplaneProps> = ({ id }) => {

    const deleteAirplaneWithId = deleteAirplane.bind(null, id)

    return (
        <form action={deleteAirplaneWithId}>
            <SubmitButton />
        </form>
    )
}

export default DeleteAirplane