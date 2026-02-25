import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { clinicTimings } from "@/lib/data/clinic-config"

const timings = clinicTimings;

export function ClinicTimings() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Clinic Timings</h2>
        <div className="max-w-3xl mx-auto border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>DAY</TableHead>
                <TableHead>HOURS</TableHead>
                <TableHead>CONSULTATION</TableHead>
                <TableHead>EMERGENCY</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {timings.map((timing, index) => (
                <TableRow key={index} className="border-b border-white/5 last:border-0 hover:bg-muted/50">
                  <TableCell className="font-medium">{timing.day}</TableCell>
                  <TableCell className="text-primary">{timing.hours}</TableCell>
                  <TableCell>
                    <span
                      className={timing.consultation === "Free Consultation" ? "text-accent" : "text-muted-foreground"}
                    >
                      {timing.consultation}
                    </span>
                  </TableCell>
                  <TableCell className="text-secondary">{timing.emergency}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
