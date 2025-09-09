
// Page Navigation
function showPage(pageId) {
    // 1024px
    // Hide all pages
    
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId + 'Page').classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile menu if open
    document.getElementById('mobileMenu').classList.add('hidden');
}

// Resource Tabs
function showResourceTab(tabId) {
    showPage('resources');

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabId).classList.add('active');

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab === tabId) {
            btn.classList.add('border-blue-600', 'text-blue-600');
            btn.classList.remove('text-gray-600');
        } else {
            btn.classList.remove('border-blue-600', 'text-blue-600');
            btn.classList.add('text-gray-600');
        }
    });
}

// Modal Functions
function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Service Detail
function showServiceDetail(serviceId) {
    const services = {
        'primary-care': {
            title: 'Primary Care',
            image: 'https://picsum.photos/seed/primary-care/800/400.jpg',
            description: 'Comprehensive primary care services for patients of all ages.',
            details: 'Our primary care physicians provide comprehensive healthcare services including preventive care, diagnosis and treatment of acute and chronic illnesses, health screenings, immunizations, and coordination of specialty care.',
            features: ['Annual physical exams', 'Preventive care', 'Chronic disease management', 'Health screenings', 'Immunizations'],
            providers: ['Dr. James Park', 'Dr. Lisa Wong']
        },
        'cardiology': {
            title: 'Cardiology',
            image: 'https://picsum.photos/seed/cardiology/800/400.jpg',
            description: 'Advanced cardiovascular care with state-of-the-art technology.',
            details: 'Our cardiology department offers comprehensive heart care services including diagnostic testing, interventional procedures, cardiac rehabilitation, and preventive cardiology.',
            features: ['Echocardiograms', 'Stress testing', 'Cardiac catheterization', 'Heart failure management', 'Preventive cardiology'],
            providers: ['Dr. Sarah Chen']
        },
        'neurology': {
            title: 'Neurology',
            image: 'https://picsum.photos/seed/neurology/800/400.jpg',
            description: 'Expert care for neurological disorders and conditions.',
            details: 'Our neurologists specialize in diagnosing and treating disorders of the brain, spinal cord, and nervous system using advanced diagnostic techniques and treatment options.',
            features: ['EEG testing', 'MRI/CT imaging', 'Stroke care', 'Epilepsy management', 'Movement disorders'],
            providers: ['Dr. Michael Torres']
        },
        'orthopedics': {
            title: 'Orthopedics',
            image: 'https://picsum.photos/seed/orthopedics/800/400.jpg',
            description: 'Comprehensive musculoskeletal care and surgical services.',
            details: 'Our orthopedic specialists provide expert care for bones, joints, ligaments, tendons, and muscles, including both surgical and non-surgical treatments.',
            features: ['Joint replacement', 'Sports medicine', 'Arthroscopic surgery', 'Fracture care', 'Physical therapy'],
            providers: ['Dr. Emily Watson']
        },
        'dermatology': {
            title: 'Dermatology',
            image: 'https://picsum.photos/seed/dermatology/800/400.jpg',
            description: 'Complete skin care from medical to cosmetic treatments.',
            details: 'Our dermatology team offers comprehensive skin care services including medical dermatology, surgical dermatology, and cosmetic procedures.',
            features: ['Skin cancer screening', 'Acne treatment', 'Cosmetic procedures', 'Mohs surgery', 'Psoriasis care'],
            providers: ['Dr. Lisa Wong']
        },
        'fitness': {
            title: 'Fitness & Nutrition',
            image: 'https://picsum.photos/seed/fitness/800/400.jpg',
            description: 'Personalized fitness and nutrition programs.',
            details: 'Our fitness and nutrition experts create personalized plans to help you achieve your health goals through exercise, diet, and lifestyle modifications.',
            features: ['Personal training', 'Nutrition counseling', 'Group fitness classes', 'Weight management', 'Wellness coaching'],
            providers: ['Certified Fitness Trainers', 'Registered Dietitians']
        },
        'mental-health': {
            title: 'Mental Health',
            image: 'https://picsum.photos/seed/mental-health/800/400.jpg',
            description: 'Comprehensive mental health and wellness services.',
            details: 'Our mental health professionals provide compassionate care for various mental health conditions including anxiety, depression, and stress-related disorders.',
            features: ['Individual therapy', 'Group therapy', 'Medication management', 'Crisis intervention', 'Wellness programs'],
            providers: ['Psychiatrists', 'Psychologists', 'Therapists']
        },
        'stress-management': {
            title: 'Stress Management',
            image: 'https://picsum.photos/seed/stress/800/400.jpg',
            description: 'Effective strategies for managing stress and improving well-being.',
            details: 'Our stress management programs teach proven techniques to reduce stress, improve resilience, and enhance overall quality of life.',
            features: ['Mindfulness training', 'Stress reduction techniques', 'Lifestyle coaching', 'Relaxation therapy', 'Biofeedback'],
            providers: ['Stress Management Specialists', 'Wellness Coaches']
        },
        'sleep-therapy': {
            title: 'Sleep Therapy',
            image: 'https://picsum.photos/seed/sleep/800/400.jpg',
            description: 'Comprehensive sleep disorder diagnosis and treatment.',
            details: 'Our sleep specialists diagnose and treat various sleep disorders including insomnia, sleep apnea, and restless leg syndrome.',
            features: ['Sleep studies', 'CPAP therapy', 'Cognitive behavioral therapy', 'Medication management', 'Lifestyle modifications'],
            providers: ['Sleep Medicine Specialists']
        },
        'preventive-care': {
            title: 'Preventive Care',
            image: 'https://picsum.photos/seed/preventive/800/400.jpg',
            description: 'Proactive healthcare to prevent illness and promote wellness.',
            details: 'Our preventive care services focus on early detection, risk assessment, and lifestyle interventions to maintain optimal health.',
            features: ['Health screenings', 'Vaccinations', 'Risk assessments', 'Lifestyle counseling', 'Wellness exams'],
            providers: ['Primary Care Physicians', 'Preventive Medicine Specialists']
        },
        'pediatrics': {
            title: 'Pediatrics',
            image: 'https://picsum.photos/seed/pediatrics/800/400.jpg',
            description: 'Specialized healthcare for infants, children, and adolescents.',
            details: 'Our pediatricians provide comprehensive care for children from birth through adolescence, focusing on physical, mental, and social health.',
            features: ['Well-child visits', 'Immunizations', 'Developmental screenings', 'Acute care', 'Chronic disease management'],
            providers: ['Dr. David Kumar']
        },
        'geriatrics': {
            title: 'Geriatrics',
            image: 'https://picsum.photos/seed/geriatrics/800/400.jpg',
            description: 'Specialized care for older adults.',
            details: 'Our geriatric specialists focus on the unique healthcare needs of older adults, including multiple chronic conditions and age-related changes.',
            features: ['Comprehensive geriatric assessment', 'Medication management', 'Fall prevention', 'Cognitive health', 'Palliative care'],
            providers: ['Geriatric Medicine Specialists']
        },
        'womens-health': {
            title: 'Women\'s Health',
            image: 'https://picsum.photos/seed/womens-health/800/400.jpg',
            description: 'Comprehensive healthcare services for women.',
            details: 'Our women\'s health services include gynecology, obstetrics, breast health, and specialized care for women\'s unique health needs.',
            features: ['Gynecological exams', 'Prenatal care', 'Menopause management', 'Breast health', 'Reproductive health'],
            providers: ['Obstetricians/Gynecologists', 'Women\'s Health Specialists']
        },
        'mens-health': {
            title: 'Men\'s Health',
            image: 'https://picsum.photos/seed/mens-health/800/400.jpg',
            description: 'Specialized healthcare services for men.',
            details: 'Our men\'s health program addresses specific health concerns for men including prostate health, testosterone issues, and cardiovascular health.',
            features: ['Prostate health', 'Testosterone therapy', 'Cardiovascular health', 'Mental health', 'Preventive care'],
            providers: ['Urologists', 'Men\'s Health Specialists']
        },
        'emergency-care': {
            title: 'Emergency Care',
            image: 'https://picsum.photos/seed/emergency/800/400.jpg',
            description: '24/7 emergency medical services.',
            details: 'Our emergency departments are staffed 24/7 with board-certified emergency physicians and equipped to handle all types of medical emergencies.',
            features: ['24/7 emergency care', 'Trauma center', 'Cardiac emergency care', 'Stroke care', 'Pediatric emergency'],
            providers: ['Emergency Medicine Physicians', 'Trauma Surgeons']
        }
    };

    const service = services[serviceId];
    if (service) {
        const content = `
                    <img src="${service.image}" alt="${service.title}" class="w-full h-64 object-cover !rounded-t-lg mb-6">
                    <div class="subContainer">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">${service.title}</h2>
                    <p class="text-gray-600 mb-6">${service.description}</p>
                    <div class="prose max-w-none">
                        <p class="text-gray-700 mb-6">${service.details}</p>
                        <h3 class="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
                        <ul class="list-disc list-inside mb-6">
                            ${service.features.map(feature => `<li class="text-gray-700">${feature}</li>`).join('')}
                        </ul>
                        <h3 class="text-xl font-semibold text-gray-800 mb-3">Our Providers</h3>
                        <p class="text-gray-700 mb-6">${service.providers.join(', ')}</p>
                        <div class="flex gap-4">
                            <button onclick="showAppointmentModal(); closeModal('serviceModal')" class="btn-primary">Schedule Appointment</button>
                            <button onclick="closeModal('serviceModal')" class="btn-secondary">Close</button>
                        </div>
                    </div>
                    </div>
                `;
        document.getElementById('serviceModalContent').innerHTML = content;
        showModal('serviceModal');
    }
}

// Location Detail
function showLocationDetail(locationId) {
    const locations = {
        'downtown': {
            name: 'Downtown Medical Plaza',
            address: '123 Innovation Drive, Medical District, MD 20001',
            phone: '(555) 123-4567',
            hours: 'Open 24/7',
            image: 'https://picsum.photos/seed/downtown-location/800/400.jpg',
            services: ['Cardiology', 'Emergency Care', 'Imaging', 'Laboratory', 'Primary Care'],
            features: ['24/7 Emergency Services', 'Advanced Imaging Center', 'On-site Laboratory', 'Free Parking', 'Wheelchair Accessible'],
            directions: 'Located in the heart of Medical District, easily accessible via public transportation.'
        },
        'westside': {
            name: 'Westside Wellness Center',
            address: '456 Health Avenue, Westside, WS 10002',
            phone: '(555) 234-5678',
            hours: 'Mon-Sat: 6AM-10PM, Sunday: 8AM-6PM',
            image: 'https://picsum.photos/seed/westside-location/800/400.jpg',
            services: ['Wellness Programs', 'Physical Therapy', 'Nutrition Counseling', 'Mental Health', 'Fitness Center'],
            features: ['State-of-the-art Fitness Center', 'Therapeutic Pool', 'Group Exercise Classes', 'Nutrition Kitchen', 'Meditation Rooms'],
            directions: 'Conveniently located near Westside Park with ample parking available.'
        },
        'northside': {
            name: 'Northside Specialty Clinic',
            address: '789 Care Boulevard, Northside, NS 10003',
            phone: '(555) 345-6789',
            hours: 'Mon-Fri: 8AM-6PM, Saturday: 9AM-2PM',
            image: 'https://picsum.photos/seed/northside-location/800/400.jpg',
            services: ['Orthopedics', 'Neurology', 'Dermatology', 'Pediatrics', 'Geriatrics'],
            features: ['Specialized Surgical Suites', 'Rehabilitation Center', 'Pediatric Wing', 'Geriatric Care Unit', 'Advanced Diagnostic Equipment'],
            directions: 'Situated in Northside Medical Complex with easy highway access.'
        }
    };

    const location = locations[locationId];
    if (location) {
        const content = `
                    <img src="${location.image}" alt="${location.name}" class="w-full h-64 object-cover rounded-lg mb-6">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">${location.name}</h2>
                    <div class="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
                            <p class="text-gray-700 mb-1"><i class="fas fa-map-marker-alt mr-2"></i>${location.address}</p>
                            <p class="text-gray-700 mb-1"><i class="fas fa-phone mr-2"></i>${location.phone}</p>
                            <p class="text-gray-700"><i class="fas fa-clock mr-2"></i>${location.hours}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Services Available</h3>
                            <div class="flex flex-wrap gap-2">
                                ${location.services.map(service => `<span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">${service}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Features</h3>
                        <ul class="list-disc list-inside text-gray-700">
                            ${location.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Directions</h3>
                        <p class="text-gray-700">${location.directions}</p>
                    </div>
                    <div class="flex gap-4">
                        <button onclick="showAppointmentModal(); closeModal('locationModal')" class="btn-primary">Book Appointment</button>
                        <button onclick="closeModal('locationModal')" class="btn-secondary">Close</button>
                    </div>
                `;
        document.getElementById('locationModalContent').innerHTML = content;
        showModal('locationModal');
    }
}

// Provider Detail
function showProviderDetail(providerId) {
    const providers = {
        'sarah-chen': {
            name: 'Dr. Sarah Chen',
            title: 'Chief Cardiologist',
            image: 'https://picsum.photos/seed/doctor1/300/300.jpg',
            education: 'MD, Harvard Medical School',
            experience: '15+ years',
            specialties: ['Interventional Cardiology', 'Preventive Cardiology', 'Heart Failure Management'],
            bio: 'Dr. Sarah Chen is a board-certified cardiologist with over 15 years of experience in cardiovascular medicine. She specializes in interventional cardiology and has a particular interest in preventive heart care. Dr. Chen is known for her compassionate approach and commitment to patient education.',
            achievements: ['Published 50+ research papers', 'Speaker at international conferences', 'Recipient of Excellence in Patient Care Award'],
            languages: ['English', 'Mandarin', 'Spanish'],
            locations: ['Downtown Medical Plaza']
        },
        'michael-torres': {
            name: 'Dr. Michael Torres',
            title: 'Neurosurgeon',
            image: 'https://picsum.photos/seed/doctor2/300/300.jpg',
            education: 'MD, Johns Hopkins University',
            experience: '12 years',
            specialties: ['Minimally Invasive Brain Surgery', 'Spine Surgery', 'Neuro-oncology'],
            bio: 'Dr. Michael Torres is a highly skilled neurosurgeon specializing in minimally invasive brain and spine procedures. He is at the forefront of neurosurgical innovation and has helped countless patients achieve better outcomes through advanced surgical techniques.',
            achievements: ['Pioneer in robotic neurosurgery', 'Research grant recipient', 'Teaching award winner'],
            languages: ['English', 'Spanish'],
            locations: ['Northside Specialty Clinic']
        },
        'emily-watson': {
            name: 'Dr. Emily Watson',
            title: 'Orthopedic Surgeon',
            image: 'https://picsum.photos/seed/doctor3/300/300.jpg',
            education: 'MD, Stanford University',
            experience: '10 years',
            specialties: ['Sports Medicine', 'Joint Replacement', 'Arthroscopic Surgery'],
            bio: 'Dr. Emily Watson is a fellowship-trained orthopedic surgeon with expertise in sports medicine and joint replacement. She has worked with professional athletes and weekend warriors alike, helping them return to their active lifestyles.',
            achievements: ['Team physician for local sports teams', 'Published orthopedic research', 'Community health advocate'],
            languages: ['English', 'French'],
            locations: ['Westside Wellness Center']
        },
        'james-park': {
            name: 'Dr. James Park',
            title: 'Internal Medicine',
            image: 'https://picsum.photos/seed/doctor4/300/300.jpg',
            education: 'MD, Mayo Clinic Alix School of Medicine',
            experience: '8 years',
            specialties: ['Preventive Medicine', 'Chronic Disease Management', 'Geriatric Care'],
            bio: 'Dr. James Park is dedicated to providing comprehensive primary care with a focus on prevention and wellness. He takes the time to understand each patient\'s unique needs and develops personalized care plans.',
            achievements: ['Quality improvement leader', 'Patient satisfaction award', 'Community education volunteer'],
            languages: ['English', 'Korean'],
            locations: ['Downtown Medical Plaza']
        },
        'lisa-wong': {
            name: 'Dr. Lisa Wong',
            title: 'Dermatologist',
            image: 'https://picsum.photos/seed/doctor5/300/300.jpg',
            education: 'MD, University of California, San Francisco',
            experience: '7 years',
            specialties: ['Medical Dermatology', 'Cosmetic Dermatology', 'Skin Cancer Surgery'],
            bio: 'Dr. Lisa Wong is a board-certified dermatologist offering both medical and cosmetic dermatology services. She is skilled in the latest dermatological techniques and committed to helping patients achieve healthy, beautiful skin.',
            achievements: ['Fellow of the American Academy of Dermatology', 'Clinical researcher', 'Skin cancer awareness advocate'],
            languages: ['English', 'Mandarin'],
            locations: ['Northside Specialty Clinic']
        },
        'david-kumar': {
            name: 'Dr. David Kumar',
            title: 'Pediatrician',
            image: 'https://picsum.photos/seed/doctor6/300/300.jpg',
            education: 'MD, Baylor College of Medicine',
            experience: '9 years',
            specialties: ['General Pediatrics', 'Developmental Pediatrics', 'Adolescent Medicine'],
            bio: 'Dr. David Kumar is a compassionate pediatrician who loves working with children of all ages. He believes in building strong relationships with both patients and their families to provide the best possible care.',
            achievements: ['Board certified in pediatrics', 'Child advocacy award', 'Medical mission volunteer'],
            languages: ['English', 'Hindi', 'Spanish'],
            locations: ['Westside Wellness Center']
        }
    };

    const provider = providers[providerId];
    if (provider) {
        const content = `
                    <div class="grid md:grid-cols-3 gap-6 mb-6">
                        <div class="md:col-span-1">
                            <img src="${provider.image}" alt="${provider.name}" class="w-full rounded-lg mb-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h3 class="font-semibold text-gray-800 mb-2">Contact Information</h3>
                                <p class="text-gray-700 text-sm mb-1"><i class="fas fa-map-marker-alt mr-2"></i>${provider.locations[0]}</p>
                                <p class="text-gray-700 text-sm"><i class="fas fa-phone mr-2"></i>(555) 123-4567</p>
                            </div>
                        </div>
                        <div class="md:col-span-2">
                            <h2 class="text-3xl font-bold text-gray-800 mb-2">${provider.name}</h2>
                            <p class="text-blue-600 text-lg mb-4">${provider.title}</p>
                            <div class="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <h4 class="font-semibold text-gray-800 mb-1">Education</h4>
                                    <p class="text-gray-700">${provider.education}</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 mb-1">Experience</h4>
                                    <p class="text-gray-700">${provider.experience}</p>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h4 class="font-semibold text-gray-800 mb-2">Specialties</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${provider.specialties.map(specialty => `<span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">${specialty}</span>`).join('')}
                                </div>
                            </div>
                            <div class="mb-4">
                                <h4 class="font-semibold text-gray-800 mb-2">Biography</h4>
                                <p class="text-gray-700">${provider.bio}</p>
                            </div>
                            <div class="mb-4">
                                <h4 class="font-semibold text-gray-800 mb-2">Achievements</h4>
                                <ul class="list-disc list-inside text-gray-700">
                                    ${provider.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="mb-6">
                                <h4 class="font-semibold text-gray-800 mb-2">Languages</h4>
                                <p class="text-gray-700">${provider.languages.join(', ')}</p>
                            </div>
                            <div class="flex gap-4">
                                <button onclick="showAppointmentModal(); closeModal('providerModal')" class="btn-primary">Schedule Appointment</button>
                                <button onclick="closeModal('providerModal')" class="btn-secondary">Close</button>
                            </div>
                        </div>
                    </div>
                `;
        document.getElementById('providerModalContent').innerHTML = content;
        showModal('providerModal');
    }
}

// Blog Article
function showBlogArticle(articleId) {
    const articles = {
        'future-cardiac': {
            title: 'The Future of Cardiac Care',
            author: 'Dr. Sarah Chen',
            date: 'March 15, 2024',
            image: 'https://picsum.photos/seed/blog1/800/400.jpg',
            content: `
                        <p class="mb-4">Cardiac care is undergoing a revolutionary transformation, driven by technological advancements and a deeper understanding of cardiovascular health. As we look to the future, several key innovations are poised to change how we prevent, diagnose, and treat heart disease.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">Artificial Intelligence in Cardiology</h3>
                        <p class="mb-4">AI algorithms are becoming increasingly sophisticated in analyzing cardiac imaging, ECG readings, and patient data to detect patterns that might be missed by human observation. These systems can predict heart attacks before they happen and recommend personalized treatment plans based on a patient's unique risk factors.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">Minimally Invasive Procedures</h3>
                        <p class="mb-4">The trend toward less invasive treatments continues to accelerate. New catheter-based procedures allow us to repair heart valves, clear blocked arteries, and even implant devices without the need for open-heart surgery. This means shorter recovery times, less pain, and better outcomes for patients.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">Personalized Medicine</h3>
                        <p class="mb-4">Genetic testing and biomarker analysis are enabling us to tailor treatments to individual patients. We can now identify who will respond best to certain medications and who might experience side effects, allowing for truly personalized care plans.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">Wearable Technology</h3>
                        <p class="mb-4">Smartwatches and other wearable devices are becoming sophisticated medical tools. They can detect atrial fibrillation, monitor heart rate variability, and even predict potential cardiac events. This continuous monitoring provides valuable data for both patients and physicians.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">The Road Ahead</h3>
                        <p class="mb-4">As we move forward, the integration of these technologies will create a more proactive, personalized, and effective approach to cardiac care. The future is bright, with the potential to significantly reduce the burden of heart disease worldwide.</p>
                    `
        },
        'mind-body': {
            title: 'Mind-Body Connection',
            author: 'Dr. Emily Rodriguez',
            date: 'March 12, 2024',
            image: 'https://picsum.photos/seed/blog2/800/400.jpg',
            content: `
                        <p class="mb-4">The connection between mental and physical health is profound and undeniable. For decades, Western medicine often treated these as separate domains, but we now understand that they are intricately intertwined. This holistic view is transforming how we approach healthcare.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">The Science Behind the Connection</h3>
                        <p class="mb-4">Research has shown that chronic stress, anxiety, and depression can lead to physical health problems including heart disease, digestive issues, and weakened immune function. Conversely, physical health problems can significantly impact mental well-being.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">Stress and Physical Health</h3>
                        <p class="mb-4">When we experience stress, our bodies release cortisol and other stress hormones. While this response is helpful in short-term situations, chronic stress keeps these hormone levels elevated, leading to inflammation, high blood pressure, and other health issues.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">The Gut-Brain Axis</h3>
                        <p class="mb-4">The gut and brain communicate through a complex network of nerves and chemical messengers. This connection explains why digestive issues often accompany mental health conditions and why gut health can influence mood and cognitive function.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">Integrative Approaches</h3>
                        <p class="mb-4">Modern healthcare is increasingly adopting integrative approaches that address both mental and physical health. This includes mindfulness practices, yoga, nutrition counseling, and cognitive behavioral therapy alongside traditional medical treatments.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">Taking Action</h3>
                        <p class="mb-4">Recognizing the mind-body connection empowers us to take a more active role in our health. Simple practices like regular exercise, adequate sleep, stress management, and social connection can have profound effects on both mental and physical well-being.</p>
                    `
        },
        'precision-medicine': {
            title: 'Precision Medicine',
            author: 'Dr. Michael Chen',
            date: 'March 10, 2024',
            image: 'https://picsum.photos/seed/blog3/800/400.jpg',
            content: `
                        <p class="mb-4">Precision medicine represents a paradigm shift in healthcare, moving away from the one-size-fits-all approach to treatments tailored to individual patients. This revolutionary approach considers genetics, environment, and lifestyle factors to deliver personalized care.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">The Foundation: Genomics</h3>
                        <p class="mb-4">At the heart of precision medicine is genomic sequencing. By analyzing a patient's DNA, we can identify genetic variations that influence disease risk, drug metabolism, and treatment response. This information allows us to predict which treatments will be most effective and which might cause adverse reactions.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">Beyond Genetics</h3>
                        <p class="mb-4">While genetics is crucial, precision medicine also considers other factors including epigenetics, proteomics, metabolomics, and environmental exposures. This comprehensive view provides a complete picture of a patient's health status.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">Applications in Cancer Treatment</h3>
                        <p class="mb-4">Cancer care has been transformed by precision medicine. Tumor profiling allows us to identify specific mutations driving cancer growth and target them with precision therapies. This approach has led to remarkable improvements in survival rates for many cancers.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">Chronic Disease Management</h3>
                        <p class="mb-4">For chronic conditions like diabetes, heart disease, and autoimmune disorders, precision medicine helps identify subtypes of disease and predict which patients will respond to specific interventions. This enables more effective management and better outcomes.</p>
                        
                        <h3 class="text-xl font-semibold mt-6 mb-3">The Future is Personal</h3>
                        <p class="mb-4">As technology advances and costs decrease, precision medicine will become increasingly accessible. The future of healthcare is one where treatments are tailored to each individual's unique biological makeup, leading to more effective care with fewer side effects.</p>
                    `
        }
    };

    const article = articles[articleId];
    if (article) {
        const content = `
                    <img src="${article.image}" alt="${article.title}" class="w-full h-64 object-cover rounded-lg mb-6">
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">${article.title}</h2>
                    <div class="flex items-center text-gray-600 text-sm mb-6">
                        <span class="mr-4"><i class="far fa-user mr-1"></i> ${article.author}</span>
                        <span><i class="far fa-calendar mr-1"></i> ${article.date}</span>
                    </div>
                    <div class="prose max-w-none">
                        ${article.content}
                    </div>
                    <div class="mt-8 pt-6 border-t">
                        <div class="flex gap-4">
                            <button onclick="showAppointmentModal(); closeModal('blogModal')" class="btn-primary">Schedule Consultation</button>
                            <button onclick="closeModal('blogModal')" class="btn-secondary">Close</button>
                        </div>
                    </div>
                `;
        document.getElementById('blogModalContent').innerHTML = content;
        showModal('blogModal');
    }
}

// Appointment Modal
function showAppointmentModal() {
    showModal('appointmentModal');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Form Submission
document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Log the data
    console.log("Form Data:", data);

    // Show success message
    document.getElementById('appointmentSuccess').classList.add('show');

    // Reset form
    this.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('appointmentSuccess').classList.remove('show');
        closeModal('appointmentModal');
    }, 5000);
});


// Mega Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
    const megaMenuTriggers = document.querySelectorAll('.group');

    megaMenuTriggers.forEach(trigger => {
        const megaMenu = trigger.querySelector('.mega-menu');

        trigger.addEventListener('mouseenter', () => {
            if (megaMenu) {
                megaMenu.classList.add('active');
            }
        });

        trigger.addEventListener('mouseleave', () => {
            if (megaMenu) {
                megaMenu.classList.remove('active');
            }
        });
    });
});

// Scroll Indicator
window.addEventListener('scroll', function () {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.transform = `scaleX(${scrollPercentage / 100})`;
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards, provider cards, etc.
document.querySelectorAll('.service-card, .provider-card, .testimonial-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});