export const PROFILE_DATA = {
  name: 'Satyam Kumar Sahoo',
  initials: 'SKS',
  brandName: 'Satyam.dev',
  headline: 'Computer Science & Engineering Student | Software Development | Python | Machine Learning | React.js',
  targetRole: 'Software Engineer / IT Intern',
  location: 'Koraput, Odisha, India',
  phone: '+91 6371401647',
  email: 'sahoosatyamkumar963@gmail.com',
  linkedin: 'https://www.linkedin.com/in/satyam-kumar-sahoo-09949a346',
  github: 'https://github.com/Satyamkumarsahoo6',
  githubUsername: 'Satyamkumarsahoo6',
  resumeUrl: '/Satyam_Kumar_Sahoo_Resume.pdf',
  careerGoal: 'Software Engineer',
  about: [
    'Computer Science Engineering undergraduate with hands-on experience in Python, Django, machine learning, React.js, and data analysis. Experienced in developing web applications, automation solutions, and machine-learning projects through internships and academic work.',
    'I have completed certifications in AI, Data Science, and Cloud Computing, and gained practical engineering experience during project internships at Hindustan Aeronautics Limited (HAL) and CTTC Bhubaneswar.',
    'Seeking an entry-level software/IT role where I can apply my technical and problem-solving skills while continuing to learn, innovate, and contribute to impactful products.'
  ]
};

export const SKILL_CATEGORIES = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    icon: 'code',
    skills: ['Python', 'Java', 'C', 'C++', 'SQL']
  },
  {
    id: 'web-development',
    title: 'Web & Backend Development',
    icon: 'code',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Django']
  },
  {
    id: 'data-science-ml',
    title: 'Data Science & Machine Learning',
    icon: 'brain',
    skills: ['Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter Notebook', 'Power BI']
  },
  {
    id: 'databases-tools',
    title: 'Databases & Tools',
    icon: 'users',
    skills: ['MySQL', 'SQLite', 'Git', 'GitHub', 'VS Code', 'Socket Programming']
  },
  {
    id: 'core-competencies',
    title: 'Core CS Competencies',
    icon: 'brain',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'DBMS', 'Operating Systems', 'Computer Networks']
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: 'cert-cloud',
    title: 'Cloud Computing',
    category: 'NPTEL',
    description: 'Comprehensive study of cloud architectures, distributed computing principles, and scalable infrastructure provisioning.'
  },
  {
    id: 'cert-ai',
    title: 'Introduction to Artificial Intelligence',
    category: 'Coursera',
    description: 'Foundational principles of intelligent systems, machine learning models, and modern algorithmic problem-solving.'
  },
  {
    id: 'cert-ds',
    title: 'Data Science Virtual Internship',
    category: 'Eduskill',
    description: 'Data analysis pipelines, exploratory data analysis, statistical modeling, and predictive computation.'
  }
];

export const EXPERIENCE_DATA = [
  {
    id: 'hal-intern',
    role: 'Project Intern',
    company: 'Hindustan Aeronautics Limited (HAL)',
    period: 'May 2026 – June 2026',
    description: 'Developed an automated offline file-transfer system to securely transfer files between devices without requiring an internet connection.',
    achievements: [
      'Developed an automated file-transfer system to securely transfer files between devices without requiring an internet connection.',
      'Implemented local/network-based file transfer mechanisms to automate file selection, transmission, and receiving.',
      'Used Python to develop file-transfer functionality with TCP/IP Socket Programming for device communication.',
      'Technologies: Python, TCP/IP Socket Programming, Flask/Tkinter, Local Wi-Fi/LAN'
    ]
  },
  {
    id: 'cttc-intern',
    role: 'Python Intern',
    company: 'CTTC, Bhubaneswar',
    period: 'May 2025 – June 2025',
    description: 'Built a full-stack Django CRUD web application with SQLite database and responsive user interface.',
    achievements: [
      'Django CRUD Web Application: Developed a Django-based web application implementing complete CRUD (Create, Read, Update, Delete) operations.',
      'Implemented user-friendly web interface for adding, viewing, updating, and deleting records with SQLite database.',
      'Gained practical experience in Django MVT architecture, database management, URL routing, templates, forms, and backend development.',
      'Technologies: Python, Django, HTML, CSS, SQLite, Git/GitHub'
    ]
  }
];

export const EDUCATION_DATA = [
  {
    id: 'btech-giet',
    institution: 'GIET University, Gunupur',
    degree: 'B.Tech in Computer Science Engineering',
    field: 'Computer Science & Engineering',
    period: 'Expected Graduation: 2028',
    status: 'In Progress'
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    id: 'hacknovation',
    title: 'Hacknovation – Participant',
    description: 'Participated in Hacknovation as a member of Team NEMESIS, contributing to a healthcare appointment management system.'
  },
  {
    id: 'hal-internship-achievement',
    title: 'Project Internship – Hindustan Aeronautics Limited (HAL)',
    description: 'Completed a project internship in the IT domain involving an automated offline file-transfer system.'
  }
];

export const OPPORTUNITY_STATUS = {
  statusText: 'Actively Seeking Software / IT Internships & Roles',
  role: 'Software Engineer Aspirant',
  focusAreas: ['Software Development', 'Python & Django', 'Machine Learning', 'React.js'],
  summary: 'Focused on building scalable software applications, advancing DSA problem solving, and preparing for software engineering roles.'
};
