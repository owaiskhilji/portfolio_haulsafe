export interface Service {
  slug: string;
  title: string;
  category: 'Insurance' | 'Authority' | 'Business' | 'Tax';
  description: string;
  features: string[];
  iconName: string;
}

export const servicesData: Service[] = [
  // Insurance Services
  {
    slug: 'vehicle-insurance',
    title: 'Vehicle Insurance',
    category: 'Insurance',
    description:
      'Comprehensive physical damage coverage for your truck, trailer, and other commercial vehicles. Our vehicle insurance protects against collision, theft, vandalism, and weather-related damages, ensuring your fleet stays protected on the road.',
    features: [
      'Collision coverage for trucks and trailers',
      'Comprehensive protection against theft and vandalism',
      'Weather-related damage coverage',
      'Flexible deductibles to fit your budget',
      'Fast claims processing',
    ],
    iconName: 'Truck',
  },
  {
    slug: 'truck-general-liability',
    title: 'Truck General Liability',
    category: 'Insurance',
    description:
      'Protect your trucking business from third-party claims for bodily injury, property damage, and advertising injury. This essential coverage shields your assets from lawsuits that could arise from everyday operations.',
    features: [
      'Third-party bodily injury protection',
      'Property damage coverage',
      'Legal defense costs included',
      'Advertising injury protection',
      'Coverage for loading and unloading operations',
    ],
    iconName: 'Shield',
  },
  {
    slug: 'professional-liability',
    title: 'Professional Liability',
    category: 'Insurance',
    description:
      'Also known as errors and omissions (E&O) insurance, this coverage protects freight brokers, dispatchers, and logistics providers from claims of negligence, mistakes, or failure to perform professional duties.',
    features: [
      'Protection against negligence claims',
      'Coverage for errors in dispatch and logistics',
      'Legal defense and settlement costs',
      'Cargo delay and missed delivery protection',
      'Essential for brokers and freight agents',
    ],
    iconName: 'Briefcase',
  },
  {
    slug: 'commercial-auto',
    title: 'Commercial Auto',
    category: 'Insurance',
    description:
      'Mandatory coverage for commercial vehicles operating on public roads. Our commercial auto policies meet FMCSA minimum requirements and can be customized to provide higher limits for maximum protection.',
    features: [
      'FMCSA minimum compliance coverage',
      'Customizable liability limits',
      'Bodily injury and property damage',
      'Uninsured/underinsured motorist coverage',
      'Medical payments coverage',
    ],
    iconName: 'Car',
  },

  // Authority & Compliance Services
  {
    slug: 'usdot-number',
    title: 'USDOT Number',
    category: 'Authority',
    description:
      'Your USDOT number is required for all commercial vehicles engaged in interstate commerce. We handle the entire application process, ensuring your number is active within 48 hours of submission.',
    features: [
      'Active in 48 hours',
      'Complete application filing',
      'Interstate commerce compliance',
      'Required for all commercial vehicles',
      'FMCSA registration included',
    ],
    iconName: 'Hash',
  },
  {
    slug: 'mc-number',
    title: 'MC Number',
    category: 'Authority',
    description:
      'The Motor Carrier (MC) number authorizes you to transport goods across state lines for hire. We manage the entire application, from filing to activation, with your MC number typically active in 5-10 business days.',
    features: [
      'Active in 5-10 business days',
      'Interstate operating authority',
      'For-hire carrier authorization',
      'Complete application management',
      'Ongoing compliance support',
    ],
    iconName: 'FileText',
  },
  {
    slug: 'boc3-filing',
    title: 'BOC-3 Filing',
    category: 'Authority',
    description:
      'The BOC-3 (Blanket of Coverage) designates process agents in every state where you operate. This mandatory filing is quick and essential for activating your MC authority. We process it in 1-2 hours.',
    features: [
      'Active in 1-2 hours',
      'Process agent designation in all states',
      'Required for MC authority activation',
      'Nationwide coverage',
      'Instant confirmation',
    ],
    iconName: 'FileCheck',
  },
  {
    slug: 'ucr-registration',
    title: 'UCR Registration',
    category: 'Authority',
    description:
      'The Unified Carrier Registration (UCR) is an annual filing required for all interstate motor carriers, brokers, and freight forwarders. We handle your registration and annual renewals to keep you compliant.',
    features: [
      'Annual filing requirement',
      'Interstate carrier compliance',
      'Required for all motor carriers',
      'Fee calculation based on fleet size',
      'Renewal reminders and management',
    ],
    iconName: 'Calendar',
  },
  {
    slug: 'mc-authority-letter',
    title: 'MC Authority Letter',
    category: 'Authority',
    description:
      'Your official MC Authority Letter serves as proof of your operating authority. We obtain and deliver this critical document for your records, contracts, and carrier verification purposes.',
    features: [
      'Official proof of authority',
      'Required for broker contracts',
      'Fast delivery',
      'Digital and physical copies',
      'Verification documentation',
    ],
    iconName: 'LetterText',
  },

  // Business Formation Services
  {
    slug: 'llc-formation',
    title: 'LLC Formation',
    category: 'Business',
    description:
      'Form your Limited Liability Company in any US state. We handle name reservation, articles of organization, registered agent designation, and all state-specific requirements to legally establish your trucking business.',
    features: [
      'Available in all 50 states',
      'Name availability search',
      'Articles of organization filing',
      'Registered agent service',
      'State-specific compliance guidance',
    ],
    iconName: 'Building',
  },
  {
    slug: 'ein-tax-id',
    title: 'EIN Tax ID',
    category: 'Business',
    description:
      'An Employer Identification Number (EIN) is required to open business bank accounts, hire employees, and file taxes. We obtain your EIN from the IRS, typically on the same day as application.',
    features: [
      'Same-day processing',
      'IRS direct application',
      'Required for business banking',
      'Employee hiring prerequisite',
      'Instant digital delivery',
    ],
    iconName: 'CreditCard',
  },
  {
    slug: 'boi-report',
    title: 'BOI Report',
    category: 'Business',
    description:
      'The Beneficial Ownership Information (BOI) report is a new federal requirement under the Corporate Transparency Act. All LLCs and corporations must file this report with FinCEN to avoid significant penalties.',
    features: [
      'New federal requirement (2024)',
      'FinCEN filing included',
      'Avoid penalties up to $10,000',
      'Beneficial owner identification',
      'Compliance deadline management',
    ],
    iconName: 'FileWarning',
  },
  {
    slug: 'annual-report-filing',
    title: 'Annual Report Filing',
    category: 'Business',
    description:
      'Most states require LLCs and corporations to file annual reports to maintain good standing. We track deadlines and prepare your reports to keep your business compliant and avoid administrative dissolution.',
    features: [
      'Deadline tracking and reminders',
      'State-specific report preparation',
      'Good standing maintenance',
      'Avoid administrative dissolution',
      'Multi-state support',
    ],
    iconName: 'ClipboardList',
  },
  {
    slug: 'llc-amendment',
    title: 'LLC Amendment',
    category: 'Business',
    description:
      'Need to update your LLC information? We file amendments for changes to business name, address, members, registered agent, or business purpose with the appropriate state agencies.',
    features: [
      'Business name changes',
      'Address and registered agent updates',
      'Member/manager changes',
      'Business purpose amendments',
      'All state filings handled',
    ],
    iconName: 'FileEdit',
  },
  {
    slug: 'operating-agreement',
    title: 'Operating Agreement',
    category: 'Business',
    description:
      'An operating agreement is a critical legal document that outlines your LLC ownership structure, member responsibilities, profit distribution, and operating procedures. We draft customized agreements for your business.',
    features: [
      'Customized ownership structure',
      'Member roles and responsibilities',
      'Profit distribution terms',
      'Decision-making procedures',
      'Required by most banks',
    ],
    iconName: 'ScrollText',
  },
  {
    slug: 'dba-filing',
    title: 'DBA Filing',
    category: 'Business',
    description:
      'A Doing Business As (DBA) filing allows your LLC to operate under a different business name. We handle county and state-level DBA registrations to establish your trade name legally.',
    features: [
      'County and state-level filings',
      'Trade name registration',
      'Multiple DBA support',
      'Brand name protection',
      'Bank account setup assistance',
    ],
    iconName: 'PenTool',
  },

  // Tax Services
  {
    slug: 'tax-return',
    title: 'Tax Return',
    category: 'Tax',
    description:
      'Comprehensive tax preparation services for trucking businesses, including federal, state, and IFTA fuel tax returns. We ensure accurate filing and maximize your deductions while maintaining full compliance.',
    features: [
      'Federal tax return filing',
      'State tax return preparation',
      'IFTA quarterly fuel tax filing',
      'Trucking-specific deductions',
      'Year-round tax support',
    ],
    iconName: 'Receipt',
  },
];
