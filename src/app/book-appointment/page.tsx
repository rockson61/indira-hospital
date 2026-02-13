"use client"

import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { format } from "date-fns"
import { CalendarIcon, User, Phone, Mail, Stethoscope } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function BookAppointmentPage() {
    const [date, setDate] = useState<Date>()

    return (
        <main className="min-h-screen bg-slate-50 py-12">
            <SectionContainer>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your Appointment</h1>
                        <p className="text-muted-foreground text-lg">
                            Schedule a consultation with our expert doctors. Priority slots available for early booking.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Booking Form */}
                        <Card className="md:col-span-2 shadow-lg">
                            <CardHeader>
                                <CardTitle>Patient Details</CardTitle>
                                <CardDescription>Please fill in your details to secure your slot.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Patient Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <Input placeholder="Enter full name" className="pl-10" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <Input placeholder="+91 98765 43210" className="pl-10" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                        <Input type="email" placeholder="john@example.com" className="pl-10" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Department / Doctor</label>
                                    <Select>
                                        <SelectTrigger className="pl-10 relative">
                                            <Stethoscope className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <SelectValue placeholder="Select Department" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="cardiology">Cardiology</SelectItem>
                                            <SelectItem value="neurology">Neurology</SelectItem>
                                            <SelectItem value="orthopedics">Orthopedics</SelectItem>
                                            <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
                                            <SelectItem value="oncology">Oncology</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Preferred Date</label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-start text-left font-normal pl-10 relative",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                                disabled={(date) => date < new Date()}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Reason for Visit (Optional)</label>
                                    <Textarea placeholder="Briefly describe your symptoms..." />
                                </div>

                                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                                    Confirm Booking
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Info Sidebar */}
                        <div className="space-y-6">
                            <Card className="bg-blue-900 text-white border-0">
                                <CardHeader>
                                    <CardTitle>Need Assistance?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-blue-100 mb-6">
                                        Our support team is available 24/7 to help you with appointment scheduling.
                                    </p>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Phone className="w-5 h-5" />
                                        <span className="font-bold text-lg">+91 0416 224 2222</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5" />
                                        <span>care@indirahospital.com</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Outstation Patients</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Traveling from outside Vellore? Contact our International Patient Desk for travel & accommodation assistance.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </main>
    )
}
