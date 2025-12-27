import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isArabic: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.reviews': 'Reviews',
    
    // Hero Section
    'hero.title': 'Professional Cleaning & Facility Management Services in Qatar',
    'hero.subtitle': 'Reliable, hygienic, and high-quality services for homes, offices, hospitals, and hotels.',
    'hero.cta': 'Book This Service',
    'hero.learnMore': 'Learn More',
    
    // Trust Indicators
    'trust.experience': '10+ Years Experience',
    'trust.clients': '500+ Happy Clients',
    'trust.staff': 'Trained & Verified Staff',
    'trust.reliable': 'Reliable & On-Time Service',
    
    // Who We Are
    'about.title': 'Who We Are',
    'about.description': 'Excitel Trading & Services W.L.L. is a premier facility management and professional cleaning company based in Doha, Qatar. Our mission is to deliver top-tier cleaning, housekeeping, and hospitality solutions that consistently exceed client expectations.',
    'about.description2': 'Whether you need a one-time deep cleaning, regular housekeeping, or trained office and hospitality support staff, our experienced professionals are ready to serve you with excellence, integrity, and reliability.',
    'about.whyUs': 'Why Choose Us:',
    'about.reason1': 'Trusted & Verified Professionals',
    'about.reason2': 'Quality Guaranteed Services',
    'about.reason3': 'Flexible Scheduling',
    'about.reason4': '24/7 Customer Support',
    'about.learnMore': 'Learn More About Us',
    
    // Our Story
    'story.title': 'Our Story',
    'story.content': 'Excitel Trading & Services W.L.L was established to meet Qatar\'s growing demand for reliable and professional cleaning and facility management services. We focus on consistency, safety, and customer satisfaction across residential, commercial, healthcare, and hospitality sectors.',
    
    // Mission
    'mission.title': 'Our Mission',
    'mission.content': 'To deliver dependable, professional, and cost-effective cleaning and facility management services while maintaining the highest standards of hygiene, safety, and customer satisfaction.',
    
    // Vision
    'vision.title': 'Our Vision',
    'vision.content': 'To be recognized as one of Qatar\'s most trusted and respected cleaning and facility management companies.',
    
    // Values
    'values.title': 'Our Core Values',
    'values.excellence': 'Excellence',
    'values.excellenceDesc': 'Delivering high-quality services with attention to detail.',
    'values.integrity': 'Integrity',
    'values.integrityDesc': 'Operating with honesty and transparency in all we do.',
    'values.reliability': 'Reliability',
    'values.reliabilityDesc': 'On-time, dependable service you can trust.',
    'values.professionalism': 'Professionalism',
    'values.professionalismDesc': 'Trained staff with high service standards.',
    'values.satisfaction': 'Customer Satisfaction',
    'values.satisfactionDesc': 'Your happiness is our top priority.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive cleaning and facility management solutions tailored to your needs',
    'services.bookNow': 'Book This Service',
    
    // Individual Services
    'service.roomAttendant.title': 'Room Attendant Services',
    'service.roomAttendant.desc': 'Professional room attendants ensuring rooms are spotless and guest-ready.',
    'service.roomAttendant.details': 'Daily cleaning • Bed & linen arrangement • Bathroom sanitization • Final inspection',
    
    'service.housekeeping.title': 'Housekeeping Services',
    'service.housekeeping.desc': 'Complete housekeeping for villas, apartments, and properties.',
    'service.housekeeping.details': 'Scheduled cleaning • Dusting & vacuuming • Kitchen & bathroom cleaning • Waste disposal',
    
    'service.officeCleaning.title': 'Office & Hospital Facility Cleaning',
    'service.officeCleaning.desc': 'High-standard hygiene for offices and hospitals.',
    'service.officeCleaning.details': 'Desk cleaning • Floor maintenance • Restroom hygiene • Waste management',
    
    'service.houseMaid.title': 'House Maid Services',
    'service.houseMaid.desc': 'Reliable daily household assistance.',
    'service.houseMaid.details': 'Home cleaning • Organizing • Laundry support',
    
    'service.cooking.title': 'Cooking Services',
    'service.cooking.desc': 'Hygienic and customized meal preparation.',
    'service.cooking.details': 'Daily meals • Special diet cooking • Kitchen assistance',
    
    'service.sofaCleaning.title': 'Sofa Cleaning & Shampoo',
    'service.sofaCleaning.desc': 'Deep upholstery cleaning and stain removal.',
    'service.sofaCleaning.details': 'Fabric & leather • Shampoo treatment • Odor removal',
    
    'service.carpetCleaning.title': 'Carpet Cleaning',
    'service.carpetCleaning.desc': 'Advanced carpet care for healthier spaces.',
    'service.carpetCleaning.details': 'Steam cleaning • Stain removal • Allergen elimination',
    
    'service.generalCleaning.title': 'General Cleaning',
    'service.generalCleaning.desc': 'Flexible cleaning for all needs.',
    'service.generalCleaning.details': 'Routine • One-time • Post-event cleaning',
    
    'service.marbleStain.title': 'Marble Hard Stain Removing',
    'service.marbleStain.desc': 'Professional marble restoration services.',
    'service.marbleStain.details': 'Hard stain removal • Polishing • Surface restoration',
    
    'service.roomDecoration.title': 'Room Decoration',
    'service.roomDecoration.desc': 'Elegant event room decoration.',
    'service.roomDecoration.details': 'Event setup • Decorations • Finishing',
    
    'service.hotelService.title': 'Room & Hotel Service (F&B)',
    'service.hotelService.desc': 'Trained hospitality staff.',
    'service.hotelService.details': 'Food service • Beverage service • Guest support',
    
    'service.kitchenHelper.title': 'Kitchen Helper',
    'service.kitchenHelper.desc': 'Skilled kitchen operational support.',
    'service.kitchenHelper.details': 'Food prep • Kitchen cleaning • Daily assistance',
    
    // Reviews
    'reviews.title': 'Customer Reviews',
    'reviews.subtitle': 'What our clients say about us',
    'review.1': 'Excellent service and very professional staff',
    'review.2': 'Reliable team with outstanding cleaning quality',
    'review.3': 'Very good housekeeping services',
    'review.4': 'Sofa and carpet cleaning was perfect',
    'review.5': 'Professional facility management at fair pricing',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.address': 'Office Address',
    'contact.addressLine': 'Office No: 3, Building No: 17, Street No: 910, Zone No: 7, Doha – Qatar',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.getDirections': 'Get Directions',
    'contact.sendMessage': 'Send Message',
    'contact.name': 'Your Name',
    'contact.phone': 'Phone / WhatsApp',
    'contact.emailField': 'Email Address',
    'contact.service': 'Select Service',
    'contact.message': 'Your Message',
    'contact.submit': 'Submit Request',
    
    // Footer
    'footer.companyName': 'EXCITEL TRADING & SERVICES W.L.L',
    'footer.crNo': 'C.R. No: 101445',
    'footer.rights': 'All Rights Reserved',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Information',
    
    // CTA
    'cta.whatsappMessage': 'Hello, I am interested in your professional cleaning and facility management services. Please share more details.',
    
    // Hero Badge
    'hero.badge': 'Cleaning Service in Qatar',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about our services',
    'faq.q1': 'What areas in Qatar do you serve?',
    'faq.a1': 'We provide our professional cleaning and facility management services across all areas in Doha and throughout Qatar, including residential, commercial, and industrial zones.',
    'faq.q2': 'How can I book a cleaning service?',
    'faq.a2': 'You can easily book our services by calling our WhatsApp numbers (+974 30773176 or +974 30773060), sending us an email, or filling out the contact form on our website.',
    'faq.q3': 'Do you provide one-time and regular cleaning services?',
    'faq.a3': 'Yes, we offer both one-time deep cleaning services and regular scheduled cleaning plans (daily, weekly, or monthly) based on your specific requirements.',
    'faq.q4': 'Are your cleaning staff trained and verified?',
    'faq.a4': 'Absolutely. All our staff members undergo thorough background checks and professional training to ensure the highest standards of service and trustworthiness.',
    'faq.q5': 'What types of properties do you clean?',
    'faq.a5': 'We clean all types of properties including villas, apartments, offices, hospitals, hotels, and commercial establishments.',
    'faq.q6': 'Do you provide cleaning equipment and supplies?',
    'faq.a6': 'Yes, we bring all necessary professional-grade cleaning equipment and eco-friendly supplies. You don\'t need to provide anything.',
    
    // Additional Services
    'service.housekeepingRoom.title': 'Housekeeping & Room Attendant',
    'service.housekeepingRoom.desc': 'Professional housekeeping services for hotels, residences, and guest houses. Our room attendants ensure every space is spotless, organized, and welcoming.',
    'service.housekeepingRoom.details': 'Daily cleaning • Bed making • Bathroom sanitization • Dusting & Vacuuming',
    'service.facilityManagement.title': 'Facility Management',
    'service.facilityManagement.desc': 'Comprehensive facility management services for commercial and residential properties.',
    'service.facilityManagement.details': 'Building maintenance • Security coordination • Vendor management • Operations support',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.contact': 'اتصل بنا',
    'nav.reviews': 'آراء العملاء',
    
    // Hero Section
    'hero.title': 'خدمات التنظيف وإدارة المرافق الاحترافية في قطر',
    'hero.subtitle': 'خدمات موثوقة وصحية وعالية الجودة للمنازل والمكاتب والمستشفيات والفنادق.',
    'hero.cta': 'احجز هذه الخدمة',
    'hero.learnMore': 'اعرف المزيد',
    
    // Trust Indicators
    'trust.experience': '+10 سنوات خبرة',
    'trust.clients': '+500 عميل سعيد',
    'trust.staff': 'كوادر مدربة ومعتمدة',
    'trust.reliable': 'خدمة موثوقة ودقيقة المواعيد',
    
    // Who We Are
    'about.title': 'من نحن',
    'about.description': 'شركة إكسيتل للتجارة والخدمات ذ.م.م هي شركة رائدة في إدارة المرافق وخدمات التنظيف الاحترافية مقرها الدوحة – قطر. نلتزم بتقديم حلول تنظيف وضيافة عالية الجودة تتجاوز توقعات عملائنا.',
    'about.description2': 'سواء كنت بحاجة إلى تنظيف عميق لمرة واحدة، أو خدمات تدبير منزلي منتظمة، أو كوادر دعم للمكاتب والفنادق، فإن فريقنا المدرب جاهز لخدمتك بكل احترافية ومصداقية.',
    'about.whyUs': 'لماذا نحن:',
    'about.reason1': 'كوادر موثوقة ومدرّبة',
    'about.reason2': 'جودة مضمونة',
    'about.reason3': 'مواعيد مرنة',
    'about.reason4': 'دعم 24/7',
    'about.learnMore': 'تعرّف علينا أكثر',
    
    // Our Story
    'story.title': 'قصتنا',
    'story.content': 'تأسست شركة إكسيتل للتجارة والخدمات ذ.م.م لتلبية الطلب المتزايد في قطر على خدمات تنظيف وإدارة مرافق احترافية وموثوقة مع التركيز على الجودة والسلامة ورضا العملاء.',
    
    // Mission
    'mission.title': 'مهمتنا',
    'mission.content': 'تقديم خدمات تنظيف وإدارة مرافق احترافية وموثوقة وبأسعار مناسبة مع الالتزام بأعلى معايير النظافة والسلامة ورضا العملاء.',
    
    // Vision
    'vision.title': 'رؤيتنا',
    'vision.content': 'أن نكون من أكثر شركات التنظيف وإدارة المرافق ثقةً واحترامًا في قطر.',
    
    // Values
    'values.title': 'قيمنا',
    'values.excellence': 'التميز',
    'values.excellenceDesc': 'تقديم خدمات عالية الجودة مع الاهتمام بالتفاصيل.',
    'values.integrity': 'النزاهة',
    'values.integrityDesc': 'العمل بصدق وشفافية في كل ما نقوم به.',
    'values.reliability': 'الموثوقية',
    'values.reliabilityDesc': 'خدمة موثوقة ودقيقة المواعيد يمكنك الاعتماد عليها.',
    'values.professionalism': 'الاحترافية',
    'values.professionalismDesc': 'كوادر مدربة بمعايير خدمة عالية.',
    'values.satisfaction': 'رضا العملاء',
    'values.satisfactionDesc': 'سعادتكم هي أولويتنا القصوى.',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول شاملة للتنظيف وإدارة المرافق مصممة لتلبية احتياجاتكم',
    'services.bookNow': 'احجز هذه الخدمة',
    
    // Individual Services
    'service.roomAttendant.title': 'خدمات مشرفي الغرف',
    'service.roomAttendant.desc': 'مشرفو غرف محترفون يضمنون نظافة الغرف وجاهزيتها للضيوف.',
    'service.roomAttendant.details': 'تنظيف يومي • ترتيب الأسرّة والبياضات • تعقيم الحمامات • التفتيش النهائي',
    
    'service.housekeeping.title': 'خدمات التدبير المنزلي',
    'service.housekeeping.desc': 'تدبير منزلي متكامل للفلل والشقق والعقارات.',
    'service.housekeeping.details': 'تنظيف مجدول • إزالة الغبار والتنظيف بالمكنسة • تنظيف المطبخ والحمام • التخلص من النفايات',
    
    'service.officeCleaning.title': 'تنظيف المكاتب والمستشفيات',
    'service.officeCleaning.desc': 'معايير عالية للنظافة في المكاتب والمستشفيات.',
    'service.officeCleaning.details': 'تنظيف المكاتب • صيانة الأرضيات • نظافة دورات المياه • إدارة النفايات',
    
    'service.houseMaid.title': 'خدمات الخادمات',
    'service.houseMaid.desc': 'مساعدة منزلية يومية موثوقة.',
    'service.houseMaid.details': 'تنظيف المنزل • التنظيم • دعم الغسيل',
    
    'service.cooking.title': 'خدمات الطبخ',
    'service.cooking.desc': 'إعداد وجبات صحية ومخصصة.',
    'service.cooking.details': 'وجبات يومية • طبخ حسب الحمية • مساعدة في المطبخ',
    
    'service.sofaCleaning.title': 'تنظيف الكنب',
    'service.sofaCleaning.desc': 'تنظيف عميق للمفروشات وإزالة البقع.',
    'service.sofaCleaning.details': 'القماش والجلد • معالجة بالشامبو • إزالة الروائح',
    
    'service.carpetCleaning.title': 'تنظيف السجاد',
    'service.carpetCleaning.desc': 'عناية متقدمة بالسجاد لبيئات أكثر صحة.',
    'service.carpetCleaning.details': 'التنظيف بالبخار • إزالة البقع • القضاء على المواد المسببة للحساسية',
    
    'service.generalCleaning.title': 'خدمات التنظيف العام',
    'service.generalCleaning.desc': 'تنظيف مرن لجميع الاحتياجات.',
    'service.generalCleaning.details': 'روتيني • لمرة واحدة • تنظيف ما بعد الفعاليات',
    
    'service.marbleStain.title': 'إزالة بقع الرخام',
    'service.marbleStain.desc': 'خدمات ترميم الرخام الاحترافية.',
    'service.marbleStain.details': 'إزالة البقع الصعبة • التلميع • استعادة الأسطح',
    
    'service.roomDecoration.title': 'تزيين الغرف',
    'service.roomDecoration.desc': 'تزيين أنيق لغرف المناسبات.',
    'service.roomDecoration.details': 'إعداد المناسبات • الديكورات • اللمسات الأخيرة',
    
    'service.hotelService.title': 'خدمات الأغذية والمشروبات',
    'service.hotelService.desc': 'طاقم ضيافة مدرب.',
    'service.hotelService.details': 'خدمة الطعام • خدمة المشروبات • دعم الضيوف',
    
    'service.kitchenHelper.title': 'مساعد مطبخ',
    'service.kitchenHelper.desc': 'دعم تشغيلي ماهر للمطبخ.',
    'service.kitchenHelper.details': 'تحضير الطعام • تنظيف المطبخ • المساعدة اليومية',
    
    // Reviews
    'reviews.title': 'آراء العملاء',
    'reviews.subtitle': 'ماذا يقول عملاؤنا عنا',
    'review.1': 'خدمة ممتازة وطاقم محترف جداً',
    'review.2': 'فريق موثوق بجودة تنظيف متميزة',
    'review.3': 'خدمات تدبير منزلي جيدة جداً',
    'review.4': 'تنظيف الكنب والسجاد كان مثالياً',
    'review.5': 'إدارة مرافق احترافية بأسعار عادلة',
    
    // Contact Section
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريقنا',
    'contact.address': 'عنوان المكتب',
    'contact.addressLine': 'مكتب رقم: 3، مبنى رقم: 17، شارع رقم: 910، منطقة رقم: 7، الدوحة – قطر',
    'contact.whatsapp': 'واتساب',
    'contact.email': 'البريد الإلكتروني',
    'contact.getDirections': 'احصل على الاتجاهات',
    'contact.sendMessage': 'أرسل رسالة',
    'contact.name': 'اسمك',
    'contact.phone': 'الهاتف / واتساب',
    'contact.emailField': 'البريد الإلكتروني',
    'contact.service': 'اختر الخدمة',
    'contact.message': 'رسالتك',
    'contact.submit': 'إرسال الطلب',
    
    // Footer
    'footer.companyName': 'إكسيتل للتجارة والخدمات ذ.م.م',
    'footer.crNo': 'رقم السجل التجاري: 101445',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactInfo': 'معلومات الاتصال',
    
    // CTA
    'cta.whatsappMessage': 'مرحباً، أنا مهتم بخدمات التنظيف وإدارة المرافق الاحترافية. يرجى مشاركة المزيد من التفاصيل.',
    
    // Hero Badge
    'hero.badge': 'خدمات التنظيف في قطر',
    
    // FAQ Section
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا',
    'faq.q1': 'ما هي المناطق التي تخدمونها في قطر؟',
    'faq.a1': 'نقدم خدمات التنظيف وإدارة المرافق الاحترافية في جميع مناطق الدوحة وقطر، بما في ذلك المناطق السكنية والتجارية والصناعية.',
    'faq.q2': 'كيف يمكنني حجز خدمة التنظيف؟',
    'faq.a2': 'يمكنك حجز خدماتنا بسهولة عبر الاتصال بأرقام الواتساب (+974 30773176 أو +974 30773060) أو إرسال بريد إلكتروني أو ملء نموذج الاتصال.',
    'faq.q3': 'هل تقدمون خدمات تنظيف لمرة واحدة ومنتظمة؟',
    'faq.a3': 'نعم، نقدم خدمات التنظيف العميق لمرة واحدة وخطط التنظيف المنتظمة (يومياً أو أسبوعياً أو شهرياً) حسب متطلباتك.',
    'faq.q4': 'هل طاقم التنظيف مدرب ومعتمد؟',
    'faq.a4': 'بالتأكيد. يخضع جميع موظفينا لفحوصات خلفية شاملة وتدريب احترافي لضمان أعلى معايير الخدمة والموثوقية.',
    'faq.q5': 'ما هي أنواع العقارات التي تنظفونها؟',
    'faq.a5': 'ننظف جميع أنواع العقارات بما في ذلك الفلل والشقق والمكاتب والمستشفيات والفنادق والمنشآت التجارية.',
    'faq.q6': 'هل توفرون معدات ومستلزمات التنظيف؟',
    'faq.a6': 'نعم، نحضر جميع معدات التنظيف الاحترافية والمستلزمات الصديقة للبيئة. لا تحتاج لتوفير أي شيء.',
    
    // Additional Services
    'service.housekeepingRoom.title': 'التدبير المنزلي ومشرفي الغرف',
    'service.housekeepingRoom.desc': 'خدمات تدبير منزلي احترافية للفنادق والمساكن وبيوت الضيافة. يضمن مشرفو الغرف أن كل مكان نظيف ومنظم ومرحب.',
    'service.housekeepingRoom.details': 'تنظيف يومي • ترتيب الأسرّة • تعقيم الحمامات • إزالة الغبار والتنظيف بالمكنسة',
    'service.facilityManagement.title': 'إدارة المرافق',
    'service.facilityManagement.desc': 'خدمات إدارة مرافق شاملة للعقارات التجارية والسكنية.',
    'service.facilityManagement.details': 'صيانة المباني • تنسيق الأمن • إدارة الموردين • دعم العمليات',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isArabic = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isArabic }}>
      <div lang={language} className={isArabic ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
