"use client";

import React, { useState } from "react";
import { 
 Calendar, 
 Search, 
 Filter, 
 User, 
 Clock, 
 CheckCircle2, 
 XCircle, 
 MoreHorizontal,
 Download,
 Eye,
 Phone,
 Mail,
 ArrowUpDown,
 Users,
 Microscope
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Mock Appointment Data for "Elite" Demonstration
const MOCK_APPOINTMENTS = [
 {
 id: "APT-8821",
 patient: "Rajesh Kumar",
 department: "Proctology",
 doctor: "Dr. Srinivasan Karbar",
 date: "2026-03-23",
 time: "10:30 AM",
 status: "CONFIRMED",
 source: "Professional Referral",
 referralDoctor: "Dr. Arvind (Vellore Clinic)",
 priority: "High"
 },
 {
 id: "APT-8822",
 patient: "Amina Al-Farsi",
 department: "Proctology",
 doctor: "Dr. K. Arulmurugan",
 date: "2026-03-24",
 time: "11:15 AM",
 status: "PENDING",
 source: "SEO - Arabic Piles Path",
 priority: "Medical"
 },
 {
 id: "APT-8823",
 patient: "Venkadesh S",
 department: "Orthopaedics",
 doctor: "Dr. Jackson P John",
 date: "2026-03-23",
 time: "02:00 PM",
 status: "CONFIRMED",
 source: "Professional Referral",
 referralDoctor: "Dr. Rahul S (OrthoPlus)",
 priority: "Follow-up"
 },
 {
 id: "APT-8824",
 patient: "Sarah Miller",
 department: "Ophthalmology",
 doctor: "Dr. S. Sivakumar",
 date: "2026-03-25",
 time: "09:00 AM",
 status: "CANCELLED",
 source: "Google Ads",
 priority: "Consultation"
 }
];

export default function AppointmentsClient() {
 const [searchTerm, setSearchTerm] = useState("");

 const filteredAppointments = MOCK_APPOINTMENTS.filter(apt => 
 apt.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
 apt.id.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
 <div className="p-6 space-y-6 bg-black min-h-screen text-white">
 <div className="flex justify-between items-center">
 <div>
 <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
 Lead Intelligence Dashboard
 </h1>
 <p className="text-slate-400 mt-1">Real-time "Elite" appointment management and patient tracking.</p>
 </div>
 <div className="flex gap-2">
 <Button variant="outline" className="border-purple-500/20 hover:bg-purple-500/10 text-slate-300">
 <Download className="w-4 h-4 mr-2" /> Export CSV
 </Button>
 <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
 <Calendar className="w-4 h-4 mr-2" /> New Appointment
 </Button>
 </div>
 </div>

 {/* Stats Overview */}
 <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
 {[
 { label: "Total Bookings", value: "142", icon: Calendar, color: "text-blue-400" },
 { label: "B2B Referrals", value: "38", icon: Users, color: "text-indigo-400" },
 { label: "Confirmed Leads", value: "98", icon: CheckCircle2, color: "text-emerald-400" },
 { label: "Pending Opinion", value: "12", icon: Microscope, color: "text-amber-400" },
 ].map((stat, i) => (
 <Card key={i} className="bg-slate-900 dark:bg-slate-900 border-slate-800 ">
 <CardContent className="p-6 flex items-center gap-4">
 <div className={`p-3 rounded-xl bg-slate-900 ${stat.color}`}>
 <stat.icon className="w-6 h-6" />
 </div>
 <div>
 <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
 <p className="text-2xl font-bold text-white">{stat.value}</p>
 </div>
 </CardContent>
 </Card>
 ))}
 </div>

 {/* Appointment Table container */}
 <Card className="bg-slate-900 dark:bg-slate-900 border-slate-800 overflow-hidden">
 <CardHeader className="border-b border-slate-800">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
 <CardTitle className="text-lg font-semibold text-white">Active Appointments</CardTitle>
 <div className="flex items-center gap-2 w-full md:w-auto">
 <div className="relative w-full md:w-64">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
 <Input 
 placeholder="Search patients..." 
 className="pl-9 bg-slate-800/50 border-slate-700 text-white focus:border-purple-500"
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 />
 </div>
 <Button variant="outline" size="icon" className="border-slate-700 text-slate-400">
 <Filter className="w-4 h-4" />
 </Button>
 </div>
 </div>
 </CardHeader>
 <CardContent className="p-0">
 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b border-slate-800 bg-slate-900 dark:bg-slate-900">
 <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">ID</th>
 <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">Patient</th>
 <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">Department</th>
 <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">Date / Time</th>
 <th className="p-3 text-xs font-semibold text-slate-500 uppercase tracking-widest">Status</th>
 <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">Lead Source</th>
 <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">Actions</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-800/50">
 {filteredAppointments.map((apt) => (
 <tr key={apt.id} className="hover:bg-purple-500/5 transition-colors group">
 <td className="p-1 pl-4 font-mono text-purple-400 text-sm">{apt.id}</td>
 <td className="p-2">
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
 <User className="w-4 h-4" />
 </div>
 <div>
 <p className="text-sm font-semibold text-white">{apt.patient}</p>
 <p className="text-[10px] text-slate-500">{apt.priority}</p>
 </div>
 </div>
 </td>
 <td className="p-4">
 <p className="text-sm text-slate-300">{apt.department}</p>
 <p className="text-[10px] text-slate-500 italic">{apt.doctor}</p>
 </td>
 <td className="p-4">
 <p className="text-sm text-slate-300">{apt.date}</p>
 <p className="text-[10px] text-slate-500 tracking-wider font-bold uppercase">{apt.time}</p>
 </td>
 <td className="p-4">
 <Badge className={`
 ${apt.status === 'CONFIRMED' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : ''}
 ${apt.status === 'PENDING' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : ''}
 ${apt.status === 'CANCELLED' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : ''}
 `}>
 {apt.status}
 </Badge>
 </td>
 <td className="p-4">
 <Badge variant="outline" className={`text-[10px] border-slate-700 ${apt.source === 'Professional Referral' ? 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5' : 'text-slate-400'}`}>
 {apt.source}
 </Badge>
 {apt.referralDoctor && (
 <p className="text-[9px] text-slate-500 mt-1 italic font-medium">Ref: {apt.referralDoctor}</p>
 )}
 </td>
 <td className="p-4">
 <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
 <Button size="icon" variant="ghost" className="w-8 h-8 text-slate-400 hover:text-white">
 <Eye className="w-4 h-4" />
 </Button>
 <Button size="icon" variant="ghost" className="w-8 h-8 text-slate-400 hover:text-white">
 <Phone className="w-4 h-4" />
 </Button>
 <Button size="icon" variant="ghost" className="w-8 h-8 text-slate-400 hover:text-white">
 <MoreHorizontal className="w-4 h-4" />
 </Button>
 </div>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </CardContent>
 </Card>
 </div>
 );
}
