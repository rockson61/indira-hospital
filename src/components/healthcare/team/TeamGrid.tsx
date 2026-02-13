import { DataTable, Th, Td } from "@/components/ui/data-table"
import Image from "next/image"

// Use centralized data
import { doctors } from "@/lib/data/team-data"

const staff = doctors;

const statusColors = {
  Active: "text-green-500",
  "On Call": "text-amber-500",
  Leave: "text-red-500",
}

export function StaffDirectory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expert Dentist</h2>
        <DataTable>
          <thead>
            <tr>
              <Th>NAME</Th>
              <Th>ROLE</Th>
              <Th>DEPARTMENT</Th>
              <Th>SPECIALIZATION</Th>
              <Th>STATUS</Th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member, index) => (
              <tr key={index} className="border-b border-white/5 last:border-0">
                <Td>
                  <div className="flex items-center gap-3">
                    <Image
                      src={member.image || "/dental-clinic-vellore.jpg"}
                      alt={member.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium text-foreground">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.email}</div>
                    </div>
                  </div>
                </Td>
                <Td className="text-primary">{member.role}</Td>
                <Td className="text-muted-foreground">{member.department}</Td>
                <Td>{member.specialization}</Td>
                <Td>
                  <span className={statusColors[member.status as keyof typeof statusColors]}>{member.status}</span>
                </Td>
              </tr>
            ))}
          </tbody>
        </DataTable>
      </div>
    </section>
  )
}
