export interface Testimonial {
    name: string;
    age?: number;
    location: string;
    image: string;
    rating: number;
    treatment: string;
    text: string;
    date: string;
    verified?: boolean;
}

export const testimonials: Testimonial[] = [
    {
        name: 'Lakshmi Narayanan',
        age: 58,
        location: 'Gandhi Nagar, Vellore',
        treatment: 'Cardiac Care',
        rating: 5,
        date: '2 weeks ago',
        image: '',
        text: 'The cardiology team at Indira Hospital saved my life. Dr. P. Shankar personally oversaw my treatment and the 24/7 ICU care was exceptional. Truly world-class facility in Vellore.',
        verified: true,
    },
    {
        name: 'Rajesh Kumar',
        age: 45,
        location: 'Katpadi, Vellore',
        treatment: 'Laparoscopic Surgery',
        rating: 5,
        date: '1 month ago',
        image: '',
        text: 'Had my gallbladder surgery done laparoscopically. The procedure was minimally invasive and I recovered within days. The surgical team was highly professional and caring.',
        verified: true,
    },
    {
        name: 'Meera Devi',
        age: 34,
        location: 'Arcot, Ranipet',
        treatment: 'Gastroenterology',
        rating: 5,
        date: '3 weeks ago',
        image: '',
        text: 'Dr. Raman Kumar treated my chronic gastritis issue effectively. His diagnostic approach was thorough and the treatment plan worked brilliantly. Highly recommend the gastro department.',
        verified: true,
    },
    {
        name: 'Vikram Singh',
        age: 29,
        location: 'Ranipet',
        treatment: 'Orthopaedic Surgery',
        rating: 5,
        date: '2 months ago',
        image: '',
        text: 'After my accident, the orthopaedic team at Indira Hospital reconstructed my fractured leg. The trauma care response was incredibly fast and the follow-up rehabilitation was thorough.',
        verified: true,
    },
    {
        name: 'Sunita Reddy',
        age: 52,
        location: 'Ambur',
        treatment: 'General Medicine',
        rating: 5,
        date: '1 week ago',
        image: '',
        text: 'The general medicine department is outstanding. Regular health checkups here have been thorough and affordable. The staff is always courteous and the facilities are very clean.',
        verified: true,
    },
    {
        name: 'Anand Patel',
        location: 'Chennai',
        treatment: 'Urology',
        rating: 5,
        date: '3 weeks ago',
        image: '',
        text: 'I traveled from Chennai for my urological procedure. The quality of care at Indira Hospital rivals any major city hospital, but at a fraction of the cost. Excellent experience.',
        verified: true,
    },
    {
        name: "Priya Krishnan",
        age: 38,
        location: "Sathuvachari, Vellore",
        image: '',
        rating: 5,
        treatment: "Obstetrics & Gynecology",
        text: "Had my delivery at Indira Hospital. The OB-GYN team was wonderful and the NICU facility gave us great peace of mind. My baby received the best neonatal care possible.",
        date: "1 month ago",
        verified: true
    },
    {
        name: "Arjun Murugan",
        age: 42,
        location: "Arakkonam",
        image: '',
        rating: 5,
        treatment: "ENT Surgery",
        text: "Dr. Karan Shankar performed my sinus surgery with precision. The ENT department has state-of-the-art equipment and the post-operative recovery was smooth. Very satisfied with the results.",
        date: "2 weeks ago",
        verified: true
    },
    {
        name: "Kamala Devi",
        age: 65,
        location: "Walajapet, Ranipet",
        image: '',
        rating: 5,
        treatment: "Dialysis",
        text: "The dialysis unit at Indira Hospital is modern and well-maintained. The staff treats patients with dignity and compassion. I feel safe and cared for during every session.",
        date: "1 week ago",
        verified: true
    }
];
