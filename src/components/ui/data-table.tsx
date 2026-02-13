import * as React from "react"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export function DataTable({ children, className }: React.HTMLAttributes<HTMLTableElement>) {
    return (
        <div className="w-full overflow-auto">
            <table className="w-full caption-bottom text-sm text-left">
                {children}
            </table>
        </div>
    )
}

export function Th({ children, className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
    return (
        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0" {...props}>
            {children}
        </th>
    )
}

export function Td({ children, className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
    return (
        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" {...props}>
            {children}
        </td>
    )
}
