import logo_1 from './Logo_1.png';
import logo_2 from './Logo_2.png';
import hero from './Hero.png';
import oops from './oops.png';
import azure_AI from './azure_AI_Fundamentals.png';
import azure from './azure_Fundamentals.png';
import amrita from './amrita.png';
import uta from './uta.png';
import forever from './forever.png';
import ems from './ems.png';
import tomato from './tomato.png';
import pnc from './pnc.png';
import vivma from './vivma.png';

export const assets = {
    logo_1,
    logo_2,
    hero,
}

export const certificates = [
    {
        _id: 'aaaaa',
        name: 'Object Oriented Programming in JAVA',
        image: oops,
        issuedOn: '05/19/2020'
    },
    {
        _id: 'aaaab',
        name: 'Azure AI Fundamentals',
        image: azure_AI,
        issuedOn: '01/29/2022'
    },
    {
        _id: 'aaaac',
        name: 'Azure Fundamentals',
        image: azure,
        issuedOn: '09/25/2022'
    }
]

export const universities = [
    {
        _id: 'baaaa',
        image: amrita,
        studyLevel: 'Bachelors of Technology',
        name: 'Amrita Viswa Vidyapeetham',
        major: 'Electronics and Communication Engineering',
        start: 'August 2017',
        end: 'May 2021',
        location: 'Coimbatore, Tamil Nadu, India',
        cgpa: '7.71/10.0'
    },
    {
        _id: 'baaab',
        image: uta,
        studyLevel: 'Masters of Science',
        name: 'University of Texas at Arlington',
        major: 'Applied Statistics and Data Science',
        start: 'August 2023',
        end: 'December 2024',
        location: 'Arlington, Texas, USA',
        cgpa: '4.0/4.0'
    }
]

export const companies = [
    {
        _id: 'caaaa',
        name: 'Vivma Software Inc',
        start: 'January 2021',
        end: 'August 2023',
        role: 'JAVA Developer',
        responsibilities: ['Processed 50,000+ daily orders by building Spring Boot Order Management System with Node.js real-time notification services and Redis caching, enabling customers to receive instant order status updates and reducing peak-time latency.','Reduced inventory discrepancies by 70% by developing full-stack Inventory Management solution with Spring MVC, Node.js services for warehouse updates, MongoDB data layer, and Angular dashboard enabling warehouse staff to track stock levels in real-time.','Improved API response times by 40% by optimizing Spring Boot service architecture and database queries, using Azure DevOps CI/CD pipelines with automated performance testing, enabling the platform to handle 3x traffic growth without downtime.','Reduced customer support tickets by integrating third-party shipping APIs with Spring Framework backend and Angular tracking interfaces, enabling 10,000+ daily customers to track shipments in real-time with Swagger-documented REST APIs.','Achieved code coverage and reduced bug escape rate by 45% by establishing JUnit/Mockito testing framework with Maven automation, creating reusable test utilities adopted by development team, cutting QA cycle time.'],
        image: vivma,
        location: 'India'
    },
    {
        _id: 'caaab',
        name: 'PNC',
        start: 'August 2024',
        end: 'Present',
        role: 'JAVA Developer',
        responsibilities: ['Reduced customer service escalations by architecting high-performance Spring Boot banking APIs processing 12,000+ daily transactions, implementing comprehensive JUnit/Mockito test suites that achieved zero critical production incidents.','Improved transaction response times by migrating legacy banking systems to Spring Boot microservices with Redis caching and Hibernate ORM, while designing RESTful API contracts for React-based client applications used by 50+ internal operations staff.','Engineered scalable backend services handling 10K+ daily financial operations using Java 11 and Spring Boot REST controllers, integrating with Oracle databases and legacy systems while creating Postman API testing suites and technical documentation.','Reduced production release cycles by 40% by implementing Jenkins CI/CD pipelines on AWS with Docker containerization and GitHub automated workflows, enabling 15+ developers to deploy code changes safely with CloudFormation infrastructure-as-code.','Maintained 95% code coverage across microservices by implementing JUnit/Mockito test suites and automated integration testing with Maven, conducting rigorous code reviews and refactoring legacy code that ensured zero production-critical bugs over 6 months.'],
        image: pnc,
        location: 'Arlington, Texas, USA'
    }
]

export const projects = [
    {
        _id: 'daaaa',
        name: 'Food Delivery Website',
        description: 'This is a full-stack food ordering web application built using React JS, Node.js, Express, MongoDB, and Stripe, featuring a responsive user frontend, a secured backend, and a dedicated admin panel. The project includes user authentication with JWT, enabling users to register, log in, and maintain session-based cart data. Food items are fetched dynamically from MongoDB, with support for real-time search and Cloudinary-hosted images. Users can add items to their cart, view totals, and place orders using integrated Stripe Checkout for online payments. The application also includes a user order history page, while the admin panel allows for adding food items, managing orders, and updating delivery statuses. The entire project—including the frontend, backend, and admin panel—is deployed on Vercel with proper CORS configuration and API routing.',
        image: tomato,
        link: 'https://tomato-food-delivery-website-umber.vercel.app'
    },
    {
        _id: 'daaab',
        name: 'E-Commerce Website',
        description: 'Developed a Full-Stack eCommerce Website like built a responsive eCommerce platform using React JS, Node.js, Express.js, and MongoDB, enabling product browsing, filtering, sorting, and cart management with variant selection (e.g., size). Integrated Payment Gateways like Stripe and Razorpay for secure online payments, alongside a Cash on Delivery option, enhancing user flexibility for order placement. Designed Admin Dashboard like created an admin panel for managing product inventory, including adding, deleting, and viewing products, streamlining store administration. Built RESTful APIs, developed backend APIs using Node.js and Express.js to handle user authentication, product management, and order processing, with data storage in MongoDB. Implemented Cart and Order Functionality. Enabled users to add products to the cart, provide delivery addresses, and place orders, with seamless cart clearance post-purchase. Successfully deployed the full-stack application on Vercel, ensuring public accessibility and scalability of the eCommerce platform. Enhanced Security and Error Handling. Incorporated input validation and error handling in backend APIs to ensure robust and secure operations. Utilized Modern JavaScript Practices like Leveraged ES6+ features, asynchronous programming (async/await), and modular code structure to enhance code maintainability and performance.',
        image: forever,
        link: 'https://forever-frontend-nu-green.vercel.app'
    },
    {
        _id: 'daaac',
        name: 'Employees Management System',
        description: 'Designed and developed a full-featured Employee Management System using the MERN Stack. Implemented secure authentication and authorization using JWT and React Context API, with a responsive login system styled with Tailwind CSS. Built an Admin Dashboard with dynamic components including a sidebar, navbar, and responsive dashboard layout to manage various modules efficiently. Developed Department Management with complete CRUD operations, and added support for filtering, pagination, and sorting using MongoDB queries and React DataTable. Integrated Employee Management with advanced data operations, enabling admins to create, read, update, and delete employee records seamlessly. Created a Salary Management Module, allowing admins to assign and track salary details, with real-time display of structured salary history. Implemented Leave Management System where employees can request leaves, and admins can approve/reject with status tracking and audit trail. Enabled Profile Management features for employees to update personal details and view historical salary and leave records. Developed Cascade Deletion Logic, ensuring that removing a department automatically deletes all related employee, salary, and leave data, maintaining referential integrity. Enabled Real-Time Dashboard Metrics to dynamically fetch and display total employee count, departments, leaves, and salary summaries using RESTful API integration. Focused on performance and usability by using modular React components, MongoDB aggregation pipelines, and responsive Tailwind UI components.',
        image: ems,
        link: 'https://employee-ms-frontend-eta.vercel.app'
    }
]