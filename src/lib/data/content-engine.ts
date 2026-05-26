export interface ContentResult {
 price: number;
 procTime: string;
 recTime: string;
 succRate: number;
 mainContent: string;
}

interface DomainInfo {
 symptoms: { [key: string]: string[] };
 price: number[];
 time: string[] | string;
 recovery: { [key: string]: string };
 success: number[];
}

export function generateUniqueContent(topic: string, cluster: string, lang: "en" | "ta" | "ar" = "en"): ContentResult {
 // Basic hash to pseudo-randomize deterministically based on topic string
 const hash = [...topic].reduce((acc, char) => acc + char.charCodeAt(0), 0);

 const getRand = <T>(arr: T[]): T => arr[hash % arr.length];
 const getRand2 = (val: any): any => {
 if (!Array.isArray(val)) return val;
 return val[(hash * 2) % val.length];
 };
 const getRand3 = <T>(arr: T[]): T => arr[(hash * 3) % arr.length];

 // Multi-lingual Core Dictionaries
 const dicts = {
 en: {
 adjectives: ['advanced', 'specialized', 'cutting-edge', 'comprehensive', 'expert', 'state-of-the-art', 'minimally invasive', 'world-class'],
 outcomes: ['rapid recovery', 'lasting relief', 'improved function', 'enhanced quality of life', 'optimal health outcomes', 'pain-free living'],
 technology: ['precision diagnostics', 'digital imaging', 'robotic assistance', 'laser precision', 'modern operative suites', 'advanced monitoring'],
 whyUs: {
 title: "Why Choose Us?",
 experts: "Expert Specialists: Decades of combined experience in complex surgeries.",
 infra: "Advanced Infrastructure: Fully equipped ICUs and ${tech}.",
 care: "Dedicated Care: 24/7 post-operative support to ensure ${out}."
 }
 },
 ta: {
 adjectives: ['அதிநவீன', 'சிறப்பு', 'மேம்பட்ட', 'துல்லியமான', 'நிபுணத்துவ', 'உலகத்தரம் வாய்ந்த'],
 outcomes: ['விரைவான குணமடைதல்', 'நிரந்தர நிவாரணம்', 'மேம்பட்ட செயல்பாடு', 'வலி இல்லாத வாழ்க்கை'],
 technology: ['ரோபோடிக் உதவி', 'லேசர் துல்லியம்', 'டிஜிட்டல் இமேஜிங்', 'நவீன அறுவை சிகிச்சை'],
 whyUs: {
 title: "எங்களை ஏன் தேர்ந்தெடுக்க வேண்டும்?",
 experts: "நிபுணத்துவ மருத்துவர்கள்: பல தசாப்த கால அனுபவம்.",
 infra: "அதிநவீன உள்கட்டமைப்பு: முழுமையாக பொருத்தப்பட்ட ICU.",
 care: "அர்ப்பணிக்கப்பட்ட பராமரிப்பு: 24/7 சிறந்த ஆதரவு."
 }
 },
 ar: {
 adjectives: ['متقدم', 'متخصص', 'عالمي', 'دقيق', 'حديث'],
 outcomes: ['تعافي سريع', 'راحة دائمة', 'تحسين الوظائف', 'حياة خالية من الألم'],
 technology: ['المساعدة الروبوتية', 'دقة الليزر', 'التصوير الرقمي', 'غرف العمليات الحديثة'],
 whyUs: {
 title: "لماذا تختارنا؟",
 experts: "أخصائيون خبراء: عقود من الخبرة في العمليات المعقدة.",
 infra: "بنية تحتية متقدمة: وحدات عناية مركزة مجهزة بالكامل.",
 care: "رعاية مخصصة: دعم ما بعد الجراحة على مدار الساعة."
 }
 }
 };

 const activeDict = (dicts[lang] || dicts.en) as any;
 const adj = getRand(activeDict.adjectives);
 const out = getRand2(activeDict.outcomes);
 const tech = getRand3(activeDict.technology);

 // Specific Procedure Pricing
 const specificPrices: Record<string, { price: number[]; time: string }> = {
 'tmt test': { price: [1500, 2500, 3500], time: '30-45 mins' },
 'ecg test': { price: [500, 800, 1200], time: '15 mins' },
 'echo test': { price: [2500, 3500, 5000], time: '30 mins' },
 'consultation': { price: [500, 1000, 1500], time: '20-30 mins' },
 'laser piles': { price: [65000, 95000, 120000], time: '45 mins' },
 'knee replacement': { price: [185000, 280000, 340000], time: '2-3 hours' }
 };

 const topicLower = topic.toLowerCase();
 let specificMatch: { price: number[]; time: string } | null = null;
 for (const key in specificPrices) {
 if (topicLower.includes(key)) {
 specificMatch = specificPrices[key];
 break;
 }
 }

 // Cluster specific dictionaries
 const domainData: Record<string, DomainInfo> = {
 'proctology': {
 symptoms: {
 en: ['painful bowel movements', 'persistent itching', 'rectal bleeding', 'swollen lumps', 'chronic discomfort'],
 ta: ['மலச்சிக்கல் வலி', 'அரிப்பு', 'இரத்தப்போக்கு', 'வீக்கம்', 'நிரந்தர அசௌகரியம்'],
 ar: ['حركات الأمعاء المؤلمة', 'حكة مستمرة', 'نزيف مستقيمي', 'كتل متورمة', 'عدم ارتياح مزمن']
 },
 price: [65000, 90000, 120000],
 time: ['30-45 mins', '1 hour', '1.5 hours'],
 recovery: { en: '2-3 days', ta: '2-3 நாட்கள்', ar: '2-3 أيام' },
 success: [99, 98, 97]
 },
 'orthopaedics': {
 symptoms: {
 en: ['joint stiffness', 'severe bone pain', 'restricted mobility', 'sports injuries', 'chronic back pain'],
 ta: ['மூட்டு இறுக்கம்', 'எலும்பு வலி', 'நடக்க சிரமம்', 'விளையாட்டு காயங்கள்'],
 ar: ['تصلب المفاصل', 'آلام العظام الشديدة', 'حركة محدودة', 'إصابات رياضية']
 },
 price: [185000, 250000, 340000],
 time: ['2-3 hours', '1-2 hours', '4 hours'],
 recovery: { en: '3-4 weeks', ta: '3-4 வாரங்கள்', ar: '3-4 أسابيع' },
 success: [95, 96, 98]
 },
 'cardiology': {
 symptoms: {
 en: ['chest pain', 'shortness of breath', 'irregular heartbeat', 'dizziness', 'high blood pressure'],
 ta: ['நெஞ்சு வலி', 'மூச்சுத் திணறல்', 'மயக்கம்', 'இரத்த அழுத்தம்'],
 ar: ['ألم في الصدر', 'ضيق في التنفس', 'ضربات قلب غير منتظمة', 'دوخة']
 },
 price: [250000, 380000, 480000],
 time: ['1-2 hours', '3-4 hours', '30 mins'],
 recovery: { en: '1 week', ta: '1 வாரம்', ar: 'أسبوع واحد' },
 success: [98, 97, 96]
 }
 };

 const domain = domainData[cluster] || {
 symptoms: { en: ['chronic pain'], ta: ['வலி'], ar: ['ألم'] },
 price: [10000, 20000, 30000], time: ['1 hour'],
 recovery: { en: '1 week', ta: '1 வாரம்', ar: 'أسبوع' }, success: [95]
 };

 const sym1 = getRand(domain.symptoms[lang] || domain.symptoms.en);
 const sym2 = getRand2(domain.symptoms[lang] || domain.symptoms.en);

 const price = specificMatch ? getRand(specificMatch.price) : getRand(domain.price);
 const procTime = specificMatch ? specificMatch.time : getRand2(domain.time);
 const recTime = domain.recovery[lang] || domain.recovery.en;
 const succRate = getRand(domain.success);

 // Template-based content generation
 let contentHtml = "";
 if (lang === "en") {
 contentHtml = `
 <h2>Understanding ${topic}</h2>
 <p>${topic} is an ${adj} medical procedure designed to address ${sym1} and ${sym2}. At Indira Hospital, our distinguished specialists utilize ${tech} to ensure maximum safety and ${out}.</p>
 
 <h2>Who Needs This Treatment?</h2>
 <p>If you are experiencing warning signs such as ${sym1}, conservative therapies may not be sufficient. ${topic} is recommended when lifestyle modifications fail to provide relief.</p>
 
 <h2>The Procedure at Indira Hospital</h2>
 <p>The ${topic} pathway begins with comprehensive diagnostics using ${tech}. The minimally invasive nature of modern techniques means the procedure generally concludes within ${procTime}.</p>
 `;
 } else if (lang === "ta") {
 contentHtml = `
 <h2>${topic} பற்றி புரிந்துகொள்ளுதல்</h2>
 <p>${topic} என்பது ${sym1} மற்றும் ${sym2} ஆகியவற்றை சரிசெய்ய வடிவமைக்கப்பட்ட ஒரு ${adj} மருத்துவ முறையாகும். இந்திரா மருத்துவமனையில், எங்களது நிபுணர்கள் ${tech} பயன்படுத்தி அதிகபட்ச பாதுகாப்பு மற்றும் ${out} உறுதி செய்கிறார்கள்.</p>
 
 <h2>இந்த சிகிச்சை யாருக்கு தேவை?</h2>
 <p>உங்களுக்கு ${sym1} போன்ற அறிகுறிகள் இருந்தால், சாதாரண சிகிச்சைகள் போதுமானதாக இருக்காது. வாழ்க்கைமுறை மாற்றங்கள் பலன் அளிக்காதபோது ${topic} பரிந்துரைக்கப்படுகிறது.</p>
 
 <h2>இந்திரா மருத்துவமனையில் செயல்முறை</h2>
 <p>${topic} செயல்முறை ${tech} பயன்படுத்தி தொடங்கும். நவீன நுட்பங்கள் மூலம் இந்த சிகிச்சை சுமார் ${procTime} நேரத்தில் முடிவடையும்.</p>
 `;
 } else if (lang === "ar") {
 contentHtml = `
 <div dir="rtl">
 <h2>فهم ${topic}</h2>
 <p>${topic} هو إجراء طبي ${adj} مصمم لمعالجة ${sym1} و ${sym2}. في مستشفى إنديرا، يستخدم متخصصونا المتميزون ${tech} لضمان أقصى قدر من السلامة و ${out}.</p>
 
 <h2>من يحتاج إلى هذا العلاج؟</h2>
 <p>إذا كنت تعاني من علامات مثل ${sym1}، فقد لا تكون العلاجات التقليدية كافية. يوصى بـ ${topic} عندما تفشل تغييرات نمط الحياة في توفير الراحة.</p>
 
 <h2>الإجراء في مستشفى إنديرا</h2>
 <p>تبدأ رحلة ${topic} بتشخيص شامل باستخدام ${tech}. تعني الطبيعة طفيفة التوغل للتقنيات الحديثة أن الإجراء ينتهي عادةً في غضون ${procTime}.</p>
 </div>
 `;
 }

 const applyLSI = (text: string) => {
 const keywords = [
 'Indira Hospital', 'Vellore', 'Senior Specialist', 'Clinical Mastery',
 'Robotic-Assisted', 'Laser Precision', 'Minimally Invasive', 'NABH Accredited',
 'Surgical Excellence', 'Elite', 'Vellore Hospital', 'இந்திரா மருத்துவமனை', 'مستشفى إنديرا', 'فيلور'
 ];
 let processed = text;
 keywords.forEach(kw => {
 const regex = new RegExp(`(?<!<b>)${kw}(?!<\\/b>)`, 'gi');
 processed = processed.replace(regex, `<b>$&</b>`);
 });
 return processed;
 };

 const mainContent = applyLSI(contentHtml + `
 <h3>${activeDict.whyUs.title}</h3>
 <ul>
 <li><strong>${activeDict.whyUs.experts}</strong></li>
 <li><strong>${activeDict.whyUs.infra.replace('${tech}', tech)}</strong></li>
 <li><strong>${activeDict.whyUs.care.replace('${out}', out)}</strong></li>
 </ul>
 `);

 return {
 price,
 procTime,
 recTime,
 succRate,
 mainContent
 };
}
