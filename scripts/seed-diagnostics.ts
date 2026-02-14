/**
 * Create the diagnostics collection in Directus with SEO fields
 * Then seed it with hospital diagnostic test data
 */
import { createDirectus, rest, authentication, staticToken, createCollection, createField, createItem, readItems } from '@directus/sdk';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const CMS_URL = process.env.NEXT_PUBLIC_API_URL!;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!;
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

if (!CMS_URL || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('Missing env vars.');
    process.exit(1);
}

// Auth client for schema creation
const authClient = createDirectus(CMS_URL)
    .with(authentication('json', { autoRefresh: true }))
    .with(rest());

// Token client for data seeding
const tokenClient = DIRECTUS_TOKEN
    ? createDirectus(CMS_URL).with(staticToken(DIRECTUS_TOKEN)).with(rest())
    : null;

// =============================================
// HELPERS
// =============================================

async function createCollectionSafe(collection: string, meta: any) {
    try {
        await authClient.request(createCollection({ collection, schema: {}, meta }));
        console.log(`  ✅ Created collection: ${collection}`);
    } catch (e: any) {
        if (e?.errors?.[0]?.code === 'RECORD_NOT_UNIQUE' || e?.message?.includes('already exists')) {
            console.log(`  ⏭️  Collection ${collection} already exists`);
        } else {
            console.error(`  ❌ Error: ${e?.errors?.[0]?.message || e?.message}`);
        }
    }
}

async function addField(collection: string, field: string, config: any) {
    try {
        await authClient.request(createField(collection, {
            field,
            type: config.type,
            meta: {
                interface: config.interface,
                display: config.display,
                options: config.options,
                special: config.special,
                required: config.required,
                note: config.note,
            },
            schema: { is_unique: config.unique, default_value: config.default_value }
        }));
        console.log(`    ✅ ${collection}.${field}`);
    } catch (e: any) {
        if (e?.errors?.[0]?.code === 'RECORD_NOT_UNIQUE' || e?.message?.includes('already exists')) {
            console.log(`    ⏭️  ${collection}.${field} (exists)`);
        } else {
            console.error(`    ❌ ${collection}.${field}: ${e?.errors?.[0]?.message || e?.message}`);
        }
    }
}

// =============================================
// SCHEMA: Create diagnostics collection + fields
// =============================================

async function createSchema() {
    console.log('═══ Creating diagnostics collection ═══');
    await createCollectionSafe('diagnostics', {
        note: 'Diagnostic Tests & Lab Services',
        singleton: false
    });

    // Core fields
    await addField('diagnostics', 'status', {
        type: 'string', interface: 'select-dropdown', display: 'labels',
        options: { choices: [{ text: 'Published', value: 'published' }, { text: 'Draft', value: 'draft' }] },
        default_value: 'published'
    });
    await addField('diagnostics', 'name', { type: 'string', interface: 'input', display: 'raw', required: true, note: 'Test name' });
    await addField('diagnostics', 'slug', { type: 'string', interface: 'input', display: 'raw', required: true, unique: true, note: 'URL slug' });
    await addField('diagnostics', 'category', {
        type: 'string', interface: 'select-dropdown', display: 'labels',
        options: {
            choices: [
                { text: 'Radiology', value: 'radiology' },
                { text: 'Pathology', value: 'pathology' },
                { text: 'Cardiology', value: 'cardiology' },
                { text: 'Other', value: 'other' },
            ]
        },
        note: 'Test category'
    });
    await addField('diagnostics', 'description', { type: 'text', interface: 'input-rich-text-html', display: 'formatted-value', note: 'Detailed test description' });
    await addField('diagnostics', 'short_description', { type: 'string', interface: 'input', display: 'raw', note: 'Card listing text' });
    await addField('diagnostics', 'price', { type: 'integer', interface: 'input', display: 'raw', note: 'Test price in INR' });
    await addField('diagnostics', 'preparation_instructions', { type: 'text', interface: 'input-rich-text-html', display: 'formatted-value', note: 'Patient prep instructions' });
    await addField('diagnostics', 'report_time', { type: 'string', interface: 'input', display: 'raw', note: 'Expected report time e.g. "24 Hours"' });
    await addField('diagnostics', 'home_collection', { type: 'boolean', interface: 'boolean', display: 'boolean', special: ['boolean'], note: 'Available for home collection', default_value: false });
    await addField('diagnostics', 'sample_type', { type: 'string', interface: 'input', display: 'raw', note: 'Blood, Urine, etc.' });
    await addField('diagnostics', 'fasting_required', { type: 'boolean', interface: 'boolean', display: 'boolean', special: ['boolean'], note: 'Fasting required?', default_value: false });
    await addField('diagnostics', 'parameters_count', { type: 'integer', interface: 'input', display: 'raw', note: 'Number of parameters tested' });
    await addField('diagnostics', 'thumbnail', { type: 'uuid', interface: 'image', display: 'image', special: ['file'], note: 'Test image' });

    // SEO fields
    await addField('diagnostics', 'seo_title', { type: 'string', interface: 'input', display: 'raw', note: 'SEO: page title' });
    await addField('diagnostics', 'seo_description', { type: 'text', interface: 'textarea', display: 'raw', note: 'SEO: meta description' });
    await addField('diagnostics', 'sort_order', { type: 'integer', interface: 'input', display: 'raw', note: 'Display order', default_value: 0 });

    // Schema.org MedicalTest fields
    await addField('diagnostics', 'body_system', { type: 'string', interface: 'input', display: 'raw', note: 'Schema: MedicalTest.affectedBy — body system tested' });
    await addField('diagnostics', 'used_to_diagnose', { type: 'json', interface: 'tags', display: 'labels', note: 'Schema: MedicalTest.usedToDiagnose — conditions diagnosed' });
    await addField('diagnostics', 'normal_range', { type: 'string', interface: 'input', display: 'raw', note: 'Normal value range' });
}

// =============================================
// DATA: Comprehensive hospital diagnostics
// =============================================

const diagnostics = [
    // RADIOLOGY
    { name: '1.5T MRI Scan', slug: 'mri-scan', category: 'radiology', price: 5500, report_time: '24 Hours', home_collection: false, sample_type: 'N/A - Imaging', fasting_required: false, parameters_count: 0, short_description: 'High-resolution 1.5 Tesla MRI for detailed soft tissue imaging.', description: '<p>Our advanced 1.5 Tesla MRI scanner provides high-resolution images of the brain, spine, joints, abdomen, and other soft tissues. Used for detecting tumors, injuries, degenerative diseases, and structural abnormalities.</p><h3>Common Uses</h3><ul><li>Brain & Spine MRI</li><li>Knee & Shoulder MRI</li><li>Abdominal & Pelvic MRI</li><li>MRI Angiography</li></ul>', preparation_instructions: '<ul><li>Remove all metallic objects, jewelry, and watches</li><li>Inform us of any metal implants, pacemakers, or cochlear implants</li><li>Wear comfortable clothing without metal zippers</li><li>For abdominal MRI: fasting for 4-6 hours may be required</li></ul>', body_system: 'Multiple', used_to_diagnose: JSON.stringify(['Tumors', 'Ligament tears', 'Disc herniation', 'Brain lesions', 'Stroke']), seo_title: 'MRI Scan in Vellore — 1.5T MRI at Indira Hospital', seo_description: 'Get a high-resolution 1.5T MRI scan at Indira Hospital Vellore. Brain, spine, knee, shoulder MRI with expert radiologist reports in 24 hours.' },

    { name: '128 Slice CT Scan', slug: 'ct-scan', category: 'radiology', price: 3500, report_time: '4-6 Hours', home_collection: false, sample_type: 'N/A - Imaging', fasting_required: false, parameters_count: 0, short_description: 'High-speed 128-slice CT for precise cross-sectional imaging.', description: '<p>Our 128-slice CT scanner delivers ultra-fast imaging with minimal radiation exposure. Ideal for trauma assessment, pulmonary scans, cardiac CT, and whole-body imaging.</p>', preparation_instructions: '<ul><li>Wear loose, comfortable clothing</li><li>Remove jewelry and metallic accessories</li><li>For contrast CT: fasting for 4 hours required</li><li>Inform us of any allergies to contrast dye</li></ul>', body_system: 'Multiple', used_to_diagnose: JSON.stringify(['Fractures', 'Internal bleeding', 'Tumors', 'Pulmonary embolism', 'Kidney stones']), seo_title: 'CT Scan in Vellore — 128 Slice CT at Indira Hospital', seo_description: 'Advanced 128-slice CT scan at Indira Hospital Vellore. Fast, accurate results for trauma, brain, chest, and abdomen scans.' },

    { name: '4D Ultrasound', slug: '4d-ultrasound', category: 'radiology', price: 2000, report_time: 'Immediate', home_collection: false, sample_type: 'N/A - Imaging', fasting_required: false, parameters_count: 0, short_description: 'Real-time 4D ultrasound for pregnancy and abdominal imaging.', description: '<p>Advanced 4D ultrasound providing real-time moving images. Especially popular for obstetric scans showing baby movements, and also used for abdominal, thyroid, and musculoskeletal assessments.</p>', preparation_instructions: '<ul><li>For abdominal scan: drink 4-5 glasses of water 1 hour before and do not urinate</li><li>For obstetric scan: no special preparation needed</li></ul>', body_system: 'Multiple', used_to_diagnose: JSON.stringify(['Fetal abnormalities', 'Gallstones', 'Thyroid nodules', 'Liver conditions']), seo_title: '4D Ultrasound in Vellore — Indira Hospital', seo_description: 'Get a 4D ultrasound at Indira Hospital Vellore for pregnancy scans, abdominal imaging, and thyroid assessment.' },

    { name: 'Digital X-Ray', slug: 'digital-xray', category: 'radiology', price: 400, report_time: '1 Hour', home_collection: false, sample_type: 'N/A - Imaging', fasting_required: false, parameters_count: 0, short_description: 'Low-dose digital X-ray with instant results.', description: '<p>State-of-the-art digital X-ray system providing high-quality images with significantly lower radiation doses compared to conventional X-rays. Results available within an hour.</p>', preparation_instructions: '<ul><li>Remove jewelry and metallic objects from the area being X-rayed</li><li>Inform the technician if you are pregnant</li></ul>', body_system: 'Musculoskeletal', used_to_diagnose: JSON.stringify(['Fractures', 'Pneumonia', 'Lung infections', 'Bone abnormalities']), seo_title: 'Digital X-Ray in Vellore — Indira Hospital', seo_description: 'Quick, low-radiation digital X-ray at Indira Hospital Vellore. Reports within 1 hour.' },

    { name: 'DEXA Bone Density Scan', slug: 'dexa-scan', category: 'radiology', price: 1500, report_time: '24 Hours', home_collection: false, sample_type: 'N/A - Imaging', fasting_required: false, parameters_count: 0, short_description: 'Bone density measurement for osteoporosis screening.', description: '<p>DEXA (Dual-energy X-ray Absorptiometry) scan measures bone mineral density. Essential for diagnosing osteoporosis and assessing fracture risk, especially for women over 50 and those on long-term steroid therapy.</p>', preparation_instructions: '<ul><li>No calcium supplements for 24 hours before the scan</li><li>Wear comfortable clothing without metal fasteners</li></ul>', body_system: 'Musculoskeletal', used_to_diagnose: JSON.stringify(['Osteoporosis', 'Osteopenia', 'Fracture risk']), seo_title: 'DEXA Bone Density Scan Vellore — Indira Hospital', seo_description: 'DEXA bone density scan at Indira Hospital Vellore. Osteoporosis screening for men and women.' },

    // PATHOLOGY
    { name: 'Complete Blood Count (CBC)', slug: 'complete-blood-count', category: 'pathology', price: 250, report_time: '3 Hours', home_collection: true, sample_type: 'Blood', fasting_required: false, parameters_count: 24, short_description: 'Comprehensive blood cell analysis with 24 parameters.', description: '<p>Complete Blood Count measures various components of blood including red blood cells, white blood cells, platelets, hemoglobin, and hematocrit. Essential for diagnosing anemia, infections, and blood disorders.</p>', preparation_instructions: '<ul><li>No special preparation needed</li><li>Fasting is not required for CBC</li></ul>', body_system: 'Blood/Hematological', used_to_diagnose: JSON.stringify(['Anemia', 'Infections', 'Leukemia', 'Platelet disorders']), normal_range: 'RBC: 4.5-5.5 M/µL, WBC: 4000-11000/µL, Hb: 12-16 g/dL', seo_title: 'CBC Test in Vellore — Complete Blood Count at Indira Hospital', seo_description: 'CBC test with 24 parameters at ₹250. Home collection available. Results in 3 hours at Indira Hospital Vellore.' },

    { name: 'Thyroid Profile (T3/T4/TSH)', slug: 'thyroid-profile', category: 'pathology', price: 500, report_time: '6 Hours', home_collection: true, sample_type: 'Blood', fasting_required: false, parameters_count: 3, short_description: 'Complete thyroid function test — T3, T4, and TSH.', description: '<p>Measures three key thyroid hormones: T3 (Triiodothyronine), T4 (Thyroxine), and TSH (Thyroid Stimulating Hormone). Essential for diagnosing hypothyroidism, hyperthyroidism, and monitoring thyroid medication.</p>', preparation_instructions: '<ul><li>No fasting required</li><li>If on thyroid medication, take it after the blood draw</li><li>Best done in the morning</li></ul>', body_system: 'Endocrine', used_to_diagnose: JSON.stringify(['Hypothyroidism', 'Hyperthyroidism', 'Thyroid disorders', 'Goiter']), normal_range: 'TSH: 0.4-4.0 mIU/L, T3: 80-200 ng/dL, T4: 5-12 µg/dL', seo_title: 'Thyroid Test in Vellore — T3 T4 TSH at Indira Hospital', seo_description: 'Thyroid profile test (T3, T4, TSH) at ₹500. Home sample collection available. Indira Hospital Vellore.' },

    { name: 'Lipid Profile', slug: 'lipid-profile', category: 'pathology', price: 350, report_time: '4 Hours', home_collection: true, sample_type: 'Blood', fasting_required: true, parameters_count: 7, short_description: 'Cholesterol and triglyceride analysis for heart health.', description: '<p>Measures total cholesterol, LDL (bad cholesterol), HDL (good cholesterol), VLDL, triglycerides, and cholesterol ratios. Critical for assessing cardiovascular risk and guiding treatment.</p>', preparation_instructions: '<ul><li><strong>Fasting for 10-12 hours is required</strong></li><li>Water is allowed during fasting</li><li>Avoid fatty meals the night before</li></ul>', body_system: 'Cardiovascular', used_to_diagnose: JSON.stringify(['High cholesterol', 'Heart disease risk', 'Metabolic syndrome']), normal_range: 'Total Cholesterol: <200 mg/dL, LDL: <100 mg/dL, HDL: >40 mg/dL', seo_title: 'Lipid Profile Test Vellore — Cholesterol Test at Indira Hospital', seo_description: 'Lipid profile test at ₹350 with 7 parameters. Fasting required. Home collection available at Indira Hospital Vellore.' },

    { name: 'HbA1c (Glycated Hemoglobin)', slug: 'hba1c', category: 'pathology', price: 450, report_time: '4 Hours', home_collection: true, sample_type: 'Blood', fasting_required: false, parameters_count: 1, short_description: '3-month average blood sugar indicator for diabetes management.', description: '<p>HbA1c measures average blood glucose levels over the past 2-3 months. The gold standard test for diabetes diagnosis and monitoring. A value above 6.5% indicates diabetes.</p>', preparation_instructions: '<ul><li>No fasting required</li><li>Can be done at any time of the day</li></ul>', body_system: 'Endocrine', used_to_diagnose: JSON.stringify(['Diabetes mellitus', 'Pre-diabetes', 'Glucose control assessment']), normal_range: 'Normal: <5.7%, Pre-diabetes: 5.7-6.4%, Diabetes: ≥6.5%', seo_title: 'HbA1c Test Vellore — Diabetes Monitoring at Indira Hospital', seo_description: 'HbA1c glycated hemoglobin test at ₹450. No fasting needed. Monitor diabetes effectively at Indira Hospital Vellore.' },

    { name: 'Liver Function Test (LFT)', slug: 'liver-function-test', category: 'pathology', price: 500, report_time: '4 Hours', home_collection: true, sample_type: 'Blood', fasting_required: true, parameters_count: 12, short_description: '12-parameter liver health panel including enzymes and proteins.', description: '<p>Comprehensive liver panel measuring SGOT, SGPT, ALP, Bilirubin (Total & Direct), Total Protein, Albumin, Globulin, and A/G ratio. Essential for detecting liver disease, hepatitis, and monitoring medication effects.</p>', preparation_instructions: '<ul><li>Fasting for 8-10 hours recommended</li><li>Avoid alcohol for 24 hours before the test</li></ul>', body_system: 'Hepatic/Liver', used_to_diagnose: JSON.stringify(['Hepatitis', 'Liver cirrhosis', 'Fatty liver', 'Bile duct obstruction']), normal_range: 'SGOT: 5-40 U/L, SGPT: 7-56 U/L, Bilirubin: 0.1-1.2 mg/dL', seo_title: 'LFT Test Vellore — Liver Function Test at Indira Hospital', seo_description: 'Liver function test with 12 parameters at ₹500. Home collection available. Indira Hospital Vellore.' },

    { name: 'Kidney Function Test (KFT/RFT)', slug: 'kidney-function-test', category: 'pathology', price: 450, report_time: '4 Hours', home_collection: true, sample_type: 'Blood', fasting_required: true, parameters_count: 8, short_description: '8-parameter kidney health assessment.', description: '<p>Also known as Renal Function Test (RFT). Measures Blood Urea, Creatinine, Uric Acid, BUN, Sodium, Potassium, Chloride, and Calcium. Essential for detecting kidney disease and monitoring dialysis patients.</p>', preparation_instructions: '<ul><li>Fasting for 8-10 hours recommended</li><li>Stay well hydrated</li></ul>', body_system: 'Renal/Kidney', used_to_diagnose: JSON.stringify(['Chronic kidney disease', 'Kidney stones', 'Renal failure', 'Dehydration']), normal_range: 'Creatinine: 0.6-1.2 mg/dL, Urea: 7-20 mg/dL', seo_title: 'KFT Test Vellore — Kidney Function Test at Indira Hospital', seo_description: 'Kidney function test (KFT/RFT) at ₹450 with 8 parameters. Home collection at Indira Hospital Vellore.' },

    { name: 'Vitamin D (25-OH)', slug: 'vitamin-d', category: 'pathology', price: 800, report_time: '24 Hours', home_collection: true, sample_type: 'Blood', fasting_required: false, parameters_count: 1, short_description: 'Vitamin D deficiency screening.', description: '<p>Measures 25-hydroxyvitamin D levels in blood. Vitamin D deficiency is extremely common in India and leads to bone weakness, fatigue, muscle pain, and immune issues.</p>', preparation_instructions: '<ul><li>No fasting required</li><li>No special preparation needed</li></ul>', body_system: 'Musculoskeletal/Endocrine', used_to_diagnose: JSON.stringify(['Vitamin D deficiency', 'Osteoporosis risk', 'Rickets', 'Muscle weakness']), normal_range: 'Normal: 30-100 ng/mL, Insufficient: 20-29 ng/mL, Deficient: <20 ng/mL', seo_title: 'Vitamin D Test Vellore — Indira Hospital', seo_description: 'Vitamin D test at ₹800. No fasting needed. Home collection available at Indira Hospital Vellore.' },

    { name: 'Urine Routine & Microscopy', slug: 'urine-routine', category: 'pathology', price: 150, report_time: '2 Hours', home_collection: true, sample_type: 'Urine', fasting_required: false, parameters_count: 15, short_description: 'Complete urine analysis with microscopic examination.', description: '<p>Comprehensive urine analysis including physical, chemical, and microscopic examination. Detects UTIs, kidney disease, diabetes, and liver problems through urinalysis.</p>', preparation_instructions: '<ul><li>Collect midstream clean-catch urine sample</li><li>Early morning sample preferred</li><li>Avoid vitamin C supplements 24 hours before</li></ul>', body_system: 'Renal/Urinary', used_to_diagnose: JSON.stringify(['Urinary tract infection', 'Kidney disease', 'Diabetes', 'Liver disease']), seo_title: 'Urine Test Vellore — Urine Routine at Indira Hospital', seo_description: 'Complete urine routine examination at ₹150. 15 parameters. Fast results at Indira Hospital Vellore.' },

    // CARDIOLOGY
    { name: 'ECG / EKG', slug: 'ecg', category: 'cardiology', price: 200, report_time: 'Immediate', home_collection: false, sample_type: 'N/A - Electrical', fasting_required: false, parameters_count: 12, short_description: '12-lead electrocardiogram for heart rhythm analysis.', description: '<p>A 12-lead ECG records the electrical activity of the heart. It is the first test done for any cardiac complaint and helps detect arrhythmias, heart attacks, and other cardiac conditions.</p>', preparation_instructions: '<ul><li>No special preparation needed</li><li>Avoid caffeine and exercise 1 hour before</li><li>Wear loose clothing that allows access to the chest</li></ul>', body_system: 'Cardiovascular', used_to_diagnose: JSON.stringify(['Arrhythmia', 'Heart attack', 'Heart block', 'Pericarditis']), seo_title: 'ECG Test Vellore — 12-Lead ECG at Indira Hospital', seo_description: 'ECG/EKG at ₹200 with immediate results. 12-lead ECG at Indira Hospital Vellore.' },

    { name: '2D Echocardiogram', slug: 'echo-cardiogram', category: 'cardiology', price: 1500, report_time: '2 Hours', home_collection: false, sample_type: 'N/A - Imaging', fasting_required: false, parameters_count: 0, short_description: 'Ultrasound of the heart showing structure and function.', description: '<p>2D Echocardiogram uses ultrasound to create real-time images of the heart. It shows heart chambers, valves, wall motion, and pumping efficiency (ejection fraction). Essential for diagnosing heart failure, valve disease, and cardiomyopathy.</p>', preparation_instructions: '<ul><li>No special preparation required</li><li>Wear a loose-fitting top</li></ul>', body_system: 'Cardiovascular', used_to_diagnose: JSON.stringify(['Heart failure', 'Valve disease', 'Cardiomyopathy', 'Pericardial effusion']), seo_title: '2D Echo Test Vellore — Echocardiogram at Indira Hospital', seo_description: '2D Echocardiogram at ₹1500. See heart structure and function. Expert cardiologist at Indira Hospital Vellore.' },

    { name: 'TMT (Treadmill Test)', slug: 'tmt-stress-test', category: 'cardiology', price: 1200, report_time: 'Immediate', home_collection: false, sample_type: 'N/A - Stress Test', fasting_required: true, parameters_count: 0, short_description: 'Exercise stress test for cardiac fitness evaluation.', description: '<p>The Treadmill Test (TMT) or Exercise Stress Test monitors heart performance under physical stress. Used to detect coronary artery disease, evaluate chest pain, and assess exercise capacity.</p>', preparation_instructions: '<ul><li><strong>Fast for 2-3 hours before the test</strong></li><li>Wear comfortable walking shoes and loose clothing</li><li>Continue regular medications unless advised otherwise by your cardiologist</li><li>Avoid smoking and caffeine on test day</li></ul>', body_system: 'Cardiovascular', used_to_diagnose: JSON.stringify(['Coronary artery disease', 'Exercise-induced arrhythmia', 'Angina']), seo_title: 'TMT Stress Test Vellore — Treadmill Test at Indira Hospital', seo_description: 'TMT treadmill stress test at ₹1200. Cardiac fitness evaluation at Indira Hospital Vellore.' },

    { name: 'Holter Monitoring (24hr)', slug: 'holter-monitoring', category: 'cardiology', price: 2500, report_time: '48 Hours', home_collection: false, sample_type: 'N/A - Monitoring', fasting_required: false, parameters_count: 0, short_description: 'Continuous 24-hour heart rhythm monitoring.', description: '<p>24-hour Holter monitoring records every heartbeat over a full day. Essential for detecting intermittent arrhythmias, palpitations, and unexplained dizzy spells that may not show up on a standard ECG.</p>', preparation_instructions: '<ul><li>Bathe before the test — you cannot shower during monitoring</li><li>Wear a button-down shirt for easy electrode placement</li><li>Keep a diary of activities and symptoms during monitoring</li></ul>', body_system: 'Cardiovascular', used_to_diagnose: JSON.stringify(['Intermittent arrhythmia', 'Palpitations', 'Syncope', 'Silent ischemia']), seo_title: 'Holter Monitor Vellore — 24hr ECG at Indira Hospital', seo_description: '24-hour Holter monitoring at ₹2500. Detect hidden heart rhythm problems at Indira Hospital Vellore.' },

    // OTHER
    { name: 'Pulmonary Function Test (PFT)', slug: 'pulmonary-function-test', category: 'other', price: 800, report_time: '1 Hour', home_collection: false, sample_type: 'N/A - Breathing', fasting_required: false, parameters_count: 0, short_description: 'Lung capacity and airflow testing.', description: '<p>Spirometry-based Pulmonary Function Test measures lung capacity, airflow, and gas exchange. Essential for diagnosing asthma, COPD, and other respiratory conditions.</p>', preparation_instructions: '<ul><li>Do not use inhaler 6 hours before (unless emergency)</li><li>Avoid smoking for 4 hours before</li><li>Avoid heavy meals 2 hours before</li><li>Wear comfortable, loose clothing</li></ul>', body_system: 'Respiratory', used_to_diagnose: JSON.stringify(['Asthma', 'COPD', 'Interstitial lung disease', 'Restrictive lung disease']), seo_title: 'PFT Test Vellore — Pulmonary Function Test at Indira Hospital', seo_description: 'Pulmonary function test (PFT) at ₹800. Diagnose asthma, COPD, and lung conditions at Indira Hospital Vellore.' },

    { name: 'Audiometry (Hearing Test)', slug: 'audiometry', category: 'other', price: 500, report_time: 'Immediate', home_collection: false, sample_type: 'N/A - Hearing', fasting_required: false, parameters_count: 0, short_description: 'Comprehensive hearing assessment.', description: '<p>Pure tone audiometry evaluates hearing sensitivity across different frequencies. Identifies the type and degree of hearing loss — conductive, sensorineural, or mixed.</p>', preparation_instructions: '<ul><li>No special preparation needed</li><li>Avoid exposure to loud noise 24 hours before the test</li></ul>', body_system: 'ENT/Auditory', used_to_diagnose: JSON.stringify(['Hearing loss', 'Tinnitus', 'Age-related hearing decline', 'Noise-induced damage']), seo_title: 'Hearing Test Vellore — Audiometry at Indira Hospital', seo_description: 'Audiometry hearing test at ₹500. Immediate results. ENT department at Indira Hospital Vellore.' },
];

// =============================================
// SEED
// =============================================

async function seedDiagnostics() {
    const client = tokenClient || authClient;
    console.log('\n═══ Seeding diagnostics ═══');
    let created = 0, skipped = 0, failed = 0;

    for (const test of diagnostics) {
        try {
            const existing = await client.request(readItems('diagnostics' as any, {
                filter: { slug: { _eq: test.slug } } as any,
                limit: 1,
            }));

            if ((existing as any[]).length > 0) {
                console.log(`  ⏭️  ${test.name} (exists)`);
                skipped++;
            } else {
                await client.request(createItem('diagnostics' as any, {
                    status: 'published',
                    ...test,
                } as any));
                console.log(`  ✅ ${test.name} — ₹${test.price || 'N/A'} (${test.category})`);
                created++;
            }
        } catch (err: any) {
            console.error(`  ❌ ${test.name}: ${err?.errors?.[0]?.message || err?.message}`);
            failed++;
        }
    }
    console.log(`  Summary: ${created} created, ${skipped} skipped, ${failed} failed`);
}

// =============================================
// MAIN
// =============================================

async function main() {
    console.log(`🔬 Diagnostics Setup at ${CMS_URL}\n`);

    // 1. Login for schema operations
    await authClient.login({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD });
    console.log('✅ Authenticated\n');

    // 2. Create schema
    await createSchema();

    // 3. Seed data
    await seedDiagnostics();

    console.log('\n✨ Diagnostics setup complete!');
}

main().catch(err => { console.error('Failed:', err); process.exit(1); });
