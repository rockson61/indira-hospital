export function generateUniqueContent(topic, cluster) {
    // Basic hash to pseudo-randomize deterministically based on topic string
    const hash = [...topic].reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const getRand = (arr) => arr[hash % arr.length];
    const getRand2 = (arr) => arr[(hash * 2) % arr.length];
    const getRand3 = (arr) => arr[(hash * 3) % arr.length];

    // Core dictionaries
    const adjectives = ['advanced', 'specialized', 'cutting-edge', 'comprehensive', 'expert', 'state-of-the-art', 'minimally invasive', 'world-class'];
    const outcomes = ['rapid recovery', 'lasting relief', 'improved function', 'enhanced quality of life', 'optimal health outcomes', 'pain-free living'];
    const technology = ['precision diagnostics', 'digital imaging', 'robotic assistance', 'laser precision', 'modern operative suites', 'advanced monitoring'];

    // Specific Procedure Pricing (Overrides cluster defaults for common topics)
    const specificPrices = {
        'tmt test': { price: [1500, 2500, 3500], time: '30-45 mins' },
        'ecg test': { price: [500, 800, 1200], time: '15 mins' },
        'echo test': { price: [2500, 3500, 5000], time: '30 mins' },
        'consultation': { price: [500, 1000, 1500], time: '20-30 mins' },
        'laser piles': { price: [65000, 85000, 110000], time: '45 mins' },
        'knee replacement': { price: [185000, 250000, 340000], time: '2-3 hours' }
    };

    const topicLower = topic.toLowerCase();
    let specificMatch = null;
    for (const key in specificPrices) {
        if (topicLower.includes(key)) {
            specificMatch = specificPrices[key];
            break;
        }
    }

    // Cluster specific dictionaries
    const domainData = {
        'proctology': {
            symptoms: ['painful bowel movements', 'persistent itching', 'rectal bleeding', 'swollen lumps', 'chronic discomfort'],
            price: [65000, 90000, 120000], time: ['30-45 mins', '1 hour', '1.5 hours'],
            recovery: ['2-3 days', '1 week', 'Same day'], success: [99, 98, 97]
        },
        'dental-implants': {
            symptoms: ['missing teeth', 'difficulty chewing', 'jaw bone loss', 'loose dentures', 'speech issues'],
            price: [35000, 45000, 55000], time: ['1-2 hours', '3 hours', 'Multiple sessions'],
            recovery: ['1 week', '3-5 days', 'Immediate'], success: [98, 97, 99]
        },
        'orthodontics': {
            symptoms: ['crooked teeth', 'overbite', 'underbite', 'gaps between teeth', 'jaw pain'],
            price: [45000, 60000, 85000], time: ['1 hour', '30 minutes', '45 minutes'],
            recovery: ['Minor soreness for 2 days', '1 day', 'None'], success: [99, 98, 100]
        },
        'gastroenterology': {
            symptoms: ['chronic abdominal pain', 'persistent heartburn', 'unexplained weight loss', 'severe bloating', 'change in bowel habits'],
            price: [15000, 25000, 45000], time: ['30 mins', '1 hour', '45 mins'],
            recovery: ['Same day', '1 day', '2-3 days'], success: [95, 96, 98]
        },
        'general-surgery': {
            symptoms: ['painful swelling', 'hernia bulge', 'bleeding', 'chronic inflammation', 'recurring blockages'],
            price: [55000, 75000, 95000], time: ['1-2 hours', '2-3 hours', '1 hour'],
            recovery: ['3-5 days', '1 week', '2 weeks'], success: [99, 98, 97]
        },
        'urology': {
            symptoms: ['frequent urination', 'painful urination', 'kidney pain', 'urinary retention', 'blood in urine'],
            price: [35000, 55000, 85000], time: ['1 hour', '2 hours', '1.5 hours'],
            recovery: ['1-3 days', '1 week', '3-5 days'], success: [96, 98, 97]
        },
        'obstetrics-gynaecology': {
            symptoms: ['irregular periods', 'pelvic pain', 'heavy bleeding', 'infertility concerns', 'pregnancy complications'],
            price: [35000, 65000, 95000], time: ['30 mins', '1-2 hours', '2-3 hours'],
            recovery: ['1-2 days', '1 week', '2-3 weeks'], success: [98, 97, 99]
        },
        'orthopaedics': {
            symptoms: ['joint stiffness', 'severe bone pain', 'restricted mobility', 'sports injuries', 'chronic back pain'],
            price: [185000, 250000, 340000], time: ['2-3 hours', '1-2 hours', '4 hours'],
            recovery: ['3-4 weeks', '2-3 months', '1-2 weeks'], success: [95, 96, 98]
        },
        'cardiology': {
            symptoms: ['chest pain', 'shortness of breath', 'irregular heartbeat', 'dizziness', 'high blood pressure'],
            price: [250000, 350000, 480000], time: ['1-2 hours', '3-4 hours', '30 mins'],
            recovery: ['1 week', '2-4 weeks', '1-3 days'], success: [98, 97, 96]
        },
        'neurology': {
            symptoms: ['chronic migraines', 'numbness', 'memory issues', 'seizures', 'balance problems'],
            price: [25000, 55000, 95000], time: ['1 hour', '2-3 hours', 'Diagnostic varies'],
            recovery: ['Varies', '1-2 weeks', 'Ongoing'], success: [90, 92, 95]
        },
        'oncology': {
            symptoms: ['unexplained lumps', 'chronic fatigue', 'sudden weight loss', 'persistent pain', 'abnormal scans'],
            price: [75000, 150000, 250000], time: ['Varies greatly', '1-2 hours per session', '3 hours'],
            recovery: ['Ongoing', 'Varies by stage', '1-3 weeks post-treatment'], success: [85, 90, 88]
        },
        'nephrology': {
            symptoms: ['fluid retention', 'kidney stones', 'high creatinine', 'chronic fatigue', 'foamy urine'],
            price: [15000, 45000, 95000], time: ['4 hours', '1-2 hours', '30 mins'],
            recovery: ['Same day', '1-2 days', '1 week'], success: [95, 97, 96]
        }
    };

    const domain = domainData[cluster] || {
        symptoms: ['chronic pain', 'discomfort', 'restricted activity', 'undiagnosed symptoms', 'inflammation'],
        price: [10000, 20000, 30000], time: ['1 hour', '2 hours', 'Varies'],
        recovery: ['1 week', '2-3 days', 'Varies'], success: [95, 96, 98]
    };

    const adj = getRand(adjectives);
    const out = getRand2(outcomes);
    const tech = getRand3(technology);

    const sym1 = getRand(domain.symptoms);
    const sym2 = getRand2(domain.symptoms);

    const price = specificMatch ? getRand(specificMatch.price) : getRand(domain.price);
    const procTime = specificMatch ? specificMatch.time : getRand2(domain.time);
    const recTime = getRand3(domain.recovery);
    const succRate = getRand(domain.success);

    // Generate Intro Paragraphs
    const paras = [
        `<p>${topic} is a ${adj} medical procedure designed to address ${sym1} and ${sym2}. At Indira Hospital, our distinguished specialists utilize ${tech} to ensure maximum safety and ${out}. By choosing our dedicated department, patients benefit from world-class healthcare tailored to their precise clinical needs.</p>`,
        `<p>Patients suffering from ${sym1} or ${sym2} often find lasting relief through ${topic}. This ${adj} intervention is conducted using ${tech}, paving the way for ${out}. The expert team at Indira Super Speciality Hospital is highly trained in performing this procedure with exceptional precision and care.</p>`,
        `<p>Through the integration of ${tech} and deep clinical expertise, ${topic} at Indira Hospital provides patients with a reliable solution for ${sym2}. Our ${adj} approach has been specifically developed to mitigate risks while promoting ${out}, ensuring you return to your normal life as swiftly as possible.</p>`
    ];

    const indications = [
        `<p>If you are experiencing warning signs such as ${sym1}, conservative therapies may not be sufficient. ${topic} is recommended when lifestyle modifications fail to provide relief, and diagnostic imaging confirms the necessity of a ${adj} intervention. Early consultation can prevent complications and lead to ${out}.</p>`,
        `<p>Clinical indications for ${topic} include persistent ${sym2} and recurrent ${sym1}. A thorough evaluation by our specialists using ${tech} will determine your eligibility. This proactive pathway is crucial for achieving ${out} and preventing long-term tissue or functional damage.</p>`,
        `<p>${topic} is primarily indicated for patients whose daily routine is severely disrupted by ${sym1}. After a comprehensive physical and diagnostic review, our surgeons may advise this ${adj} approach to securely stabilize your condition and deliver ${out}.</p>`
    ];

    const procedureDetails = [
        `<p>The ${topic} pathway begins with comprehensive pre-operative diagnostics to map out the anatomy. In the operating suite, our team leverages ${tech} for exact execution. The minimally invasive nature of modern techniques means the procedure generally concludes within ${procTime}, drastically reducing trauma.</p>`,
        `<p>During ${topic}, patients are comfortably stabilized while our senior surgeons apply ${adj} methodologies. The integration of ${tech} allows for continuous real-time monitoring. Following the approximately ${procTime} procedure, patients are seamlessly transitioned to a dedicated observation ward.</p>`,
        `<p>Our protocol for ${topic} involves a highly calibrated sequence of actions prioritizing patient safety. Executed utilizing ${tech}, the procedure inherently minimizes blood loss and tissue disturbance. Most ${topic} cases are completed in ${procTime}, enabling a faster and smoother transition into the healing phase.</p>`
    ];

    const mainContent = `
        <h2>Understanding ${topic}</h2>
        ${getRand(paras)}
        
        <h2>Who Needs This Treatment?</h2>
        ${getRand2(indications)}
        
        <h2>The Procedure at Indira Hospital</h2>
        ${getRand3(procedureDetails)}
        
        <h3>Why Choose Us?</h3>
        <ul>
            <li><strong>Expert Specialists:</strong> Decades of combined experience in complex surgeries.</li>
            <li><strong>Advanced Infrastructure:</strong> Fully equipped ICUs and ${tech}.</li>
            <li><strong>Dedicated Care:</strong> 24/7 post-operative support to ensure ${out}.</li>
        </ul>
    `;

    return {
        price,
        procTime,
        recTime,
        succRate,
        mainContent
    };
}
