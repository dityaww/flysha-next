"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FormFlight() {
    return (
        <form>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="planeId">Pilih Pesawat</Label>
                    <Input 
                        placeholder="Pilih pesawat.." 
                        name="planeId" 
                        id="planeId" 
                        required 
                        // defaultValue={defaultValues?.code}
                    />
                </div>
            </div>
        </form>
    )
} 