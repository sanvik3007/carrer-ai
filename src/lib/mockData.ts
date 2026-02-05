 // Mock data for the Career Intelligence Platform
 
 export interface UserProfile {
   id: string;
   name: string;
   email: string;
   phone: string;
   department: string;
   institution: string;
   year: string;
   skills: string[];
   interests: string[];
 }
 
 export interface JobRole {
   id: string;
   title: string;
   company: string;
   location: string;
   salary: string;
   match: number;
   skills: string[];
   description: string;
 }
 
 export interface Course {
   id: string;
   title: string;
   platform: string;
   duration: string;
   level: string;
   rating: number;
   category: string;
   url: string;
 }
 
 export interface Mentor {
   id: string;
   name: string;
   title: string;
   company: string;
   expertise: string[];
   experience: string;
   avatar: string;
   linkedin: string;
 }
 
 export interface ProjectIdea {
   id: string;
   title: string;
   description: string;
   difficulty: string;
   components: string[];
   category: string;
 }
 
 export interface Opportunity {
   id: string;
   title: string;
   type: 'internship' | 'hackathon' | 'workshop';
   organization: string;
   deadline: string;
   location: string;
   stipend?: string;
   url: string;
 }
 
 export const departments = [
   'Computer Science',
   'Electronics & Communication',
   'Electrical Engineering',
   'Mechanical Engineering',
   'Civil Engineering',
   'Information Technology',
   'Artificial Intelligence & ML',
   'Data Science',
 ];
 
 export const institutions = [
   'IIT Bombay',
   'IIT Delhi',
   'IIT Madras',
   'NIT Trichy',
   'BITS Pilani',
   'VIT Vellore',
   'SRM University',
   'Anna University',
   'Other',
 ];
 
 export const skillOptions = [
   'Python', 'JavaScript', 'C/C++', 'Java', 'React', 'Node.js',
   'Machine Learning', 'Data Analysis', 'IoT', 'Embedded Systems',
   'Web Development', 'Mobile Development', 'Cloud Computing', 'DevOps',
   'Arduino', 'ESP32', 'Raspberry Pi', 'PCB Design', 'VLSI',
 ];
 
 export const mockJobRoles: JobRole[] = [
   {
     id: '1',
     title: 'Software Development Engineer',
     company: 'Amazon',
     location: 'Bangalore',
     salary: '₹15-25 LPA',
     match: 92,
     skills: ['Python', 'AWS', 'System Design'],
     description: 'Build scalable systems for millions of customers',
   },
   {
     id: '2',
     title: 'Embedded Systems Engineer',
     company: 'Qualcomm',
     location: 'Hyderabad',
     salary: '₹12-20 LPA',
     match: 88,
     skills: ['C/C++', 'RTOS', 'ARM'],
     description: 'Design firmware for next-gen mobile processors',
   },
   {
     id: '3',
     title: 'ML Engineer',
     company: 'Google',
     location: 'Bangalore',
     salary: '₹20-35 LPA',
     match: 85,
     skills: ['TensorFlow', 'Python', 'Deep Learning'],
     description: 'Build AI models that impact billions',
   },
   {
     id: '4',
     title: 'IoT Solutions Architect',
     company: 'Bosch',
     location: 'Pune',
     salary: '₹18-28 LPA',
     match: 82,
     skills: ['IoT', 'Cloud', 'Embedded'],
     description: 'Design connected systems for smart manufacturing',
   },
 ];
 
 export const mockCourses: Course[] = [
   {
     id: '1',
     title: 'Programming in Python',
     platform: 'NPTEL',
     duration: '12 weeks',
     level: 'Beginner',
     rating: 4.8,
     category: 'Programming',
     url: 'https://nptel.ac.in',
   },
   {
     id: '2',
     title: 'Deep Learning Specialization',
     platform: 'Coursera',
     duration: '5 months',
     level: 'Intermediate',
     rating: 4.9,
     category: 'AI/ML',
     url: 'https://coursera.org',
   },
   {
     id: '3',
     title: 'Embedded Systems Design',
     platform: 'NPTEL',
     duration: '8 weeks',
     level: 'Intermediate',
     rating: 4.7,
     category: 'Embedded',
     url: 'https://nptel.ac.in',
   },
   {
     id: '4',
     title: 'Internet of Things',
     platform: 'Udemy',
     duration: '40 hours',
     level: 'Beginner',
     rating: 4.6,
     category: 'IoT',
     url: 'https://udemy.com',
   },
   {
     id: '5',
     title: 'Full Stack Web Development',
     platform: 'Coursera',
     duration: '6 months',
     level: 'Intermediate',
     rating: 4.8,
     category: 'Web Dev',
     url: 'https://coursera.org',
   },
 ];
 
 export const mockMentors: Mentor[] = [
   {
     id: '1',
     name: 'Dr. Priya Sharma',
     title: 'Principal Engineer',
     company: 'Intel',
     expertise: ['VLSI', 'Embedded Systems', 'IoT'],
     experience: '15+ years',
     avatar: 'PS',
     linkedin: '#',
   },
   {
     id: '2',
     name: 'Rahul Verma',
     title: 'Staff SDE',
     company: 'Microsoft',
     expertise: ['Cloud', 'System Design', 'Python'],
     experience: '12+ years',
     avatar: 'RV',
     linkedin: '#',
   },
   {
     id: '3',
     name: 'Ananya Krishnan',
     title: 'ML Lead',
     company: 'NVIDIA',
     expertise: ['Deep Learning', 'Computer Vision', 'CUDA'],
     experience: '10+ years',
     avatar: 'AK',
     linkedin: '#',
   },
   {
     id: '4',
     name: 'Vikram Patel',
     title: 'CTO',
     company: 'TechStartup',
     expertise: ['Startups', 'Product', 'Leadership'],
     experience: '18+ years',
     avatar: 'VP',
     linkedin: '#',
   },
 ];
 
 export const mockProjectIdeas: ProjectIdea[] = [
   {
     id: '1',
     title: 'Smart Home Automation System',
     description: 'IoT-based home automation with voice control and mobile app',
     difficulty: 'Intermediate',
     components: ['ESP32', 'Relay Module', 'DHT11', 'IR Sensor'],
     category: 'IoT',
   },
   {
     id: '2',
     title: 'Line Following Robot',
     description: 'Autonomous robot that follows a black line using IR sensors',
     difficulty: 'Beginner',
     components: ['Arduino Uno', 'Motor Driver L298N', 'IR Sensors', 'DC Motors'],
     category: 'Robotics',
   },
   {
     id: '3',
     title: 'Weather Monitoring Station',
     description: 'Real-time weather data collection and cloud dashboard',
     difficulty: 'Intermediate',
     components: ['ESP8266', 'BME280', 'Rain Sensor', 'OLED Display'],
     category: 'IoT',
   },
 ];
 
 export const mockOpportunities: Opportunity[] = [
   {
     id: '1',
     title: 'Software Engineering Intern',
     type: 'internship',
     organization: 'Google',
     deadline: '2025-03-15',
     location: 'Bangalore',
     stipend: '₹80,000/month',
     url: '#',
   },
   {
     id: '2',
     title: 'Smart India Hackathon 2025',
     type: 'hackathon',
     organization: 'AICTE',
     deadline: '2025-02-28',
     location: 'Pan India',
     url: '#',
   },
   {
     id: '3',
     title: 'IoT Development Workshop',
     type: 'workshop',
     organization: 'IEEE',
     deadline: '2025-02-20',
     location: 'Online',
     url: '#',
   },
   {
     id: '4',
     title: 'ML Research Intern',
     type: 'internship',
     organization: 'Microsoft Research',
     deadline: '2025-03-01',
     location: 'Bangalore',
     stipend: '₹1,00,000/month',
     url: '#',
   },
 ];