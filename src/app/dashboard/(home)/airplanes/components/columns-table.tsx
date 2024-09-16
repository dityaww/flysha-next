"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from 'lucide-react'
import type { Airplane } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import Image from "next/image";
import { getUrlFile } from "@/lib/supabase";

export const columns: ColumnDef<Airplane>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({row}) => {
      const plane = row.original

      return (
        <Image src={getUrlFile(plane.image)} alt="Image airplane" width={60} height={60} />
      )
    }
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "action",
    cell: ({ row }) => {
      const plane = row.original;

      return (
        <div className="inline-flex gap-5 items-center">
          <Button variant="secondary" size={"sm"} asChild>
            <Link href={`/dashboard/airplanes/edit/${plane.id}`}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
            </Link>
          </Button>
        </div>
      );
    },
  },
];
