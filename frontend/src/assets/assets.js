import logo_1 from './Logo_1.png';
import logo_2 from './Logo_2.png';
import hero from './Hero.png';
import oops from './oops.png';
import azure_AI from './azure_AI_Fundamentals.png';
import azure from './azure_Fundamentals.png';
import amrita from './amrita.png';
import forever from './forever.png';
import ems from './ems.png';
import tomato from './tomato.png';
import best_buy from './Best Buy.jpg';
import wells_fargo from './Wells Fargo.jpg';
import progressive from './Progressive.jpg';
import t_mobile from './T Mobile.jpg';
import ceva from './Ceva Logistics.jpg';

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
        major: 'Computer Science',
        start: 'August 2010',
        end: 'May 2014',
        location: 'Coimbatore, Tamil Nadu, India',
    }
]

export const companies = [
    {
        _id: 'caaaa',
        name: 'Best Buy',
        start: 'March 2023',
        end: 'Present',
        role: 'Senior Full Stack Developer',
        responsibilities: ['Designed and implemented event-driven architectures using Java 17 and Spring Boot 3.0 to support large-scale retail inventory and order management systems processing over 10,000 concurrent transactions daily. Enabled real-time stock updates across multiple store locations while ensuring system stability during peak seasonal demand. Modernized legacy POS systems by decomposing monolithic applications into microservices using Spring Cloud, containerizing services with Docker, and orchestrating deployments using Kubernetes for high availability and optimized resource utilization.', 'Implemented robust security frameworks using Spring Security and AWS Cognito, integrating OAuth2 and JWT-based authentication with role-based access control to protect sensitive customer and payment data while maintaining PCI DSS compliance. Developed responsive dashboards using Angular 15 and TypeScript, following SOLID principles and modular design patterns to deliver intuitive store management interfaces with improved usability and performance.', 'Built and documented RESTful APIs using Spring MVC and OpenAPI specifications to integrate e-commerce platforms with in-store systems, implementing versioning, rate limiting, and comprehensive error handling. Optimized Oracle 19c databases using advanced query tuning, indexing, and stored procedures to improve transaction throughput during high-volume sales periods.', 'Established CI/CD pipelines using Jenkins and AWS CodePipeline, incorporating SonarQube quality checks and automated testing before deployments to AWS ECS and EC2 environments. Implemented monitoring and observability solutions using Prometheus, Grafana, AWS CloudWatch, and AppDynamics to track system performance, customer journeys, and business KPIs, reducing incident response times and improving system reliability.', 'Leveraged MongoDB and DynamoDB for unstructured product data, Redis for distributed caching, and AWS SQS/SNS for message-based integration between fulfillment centers. Implemented serverless components using AWS Lambda and API Gateway for promotions and loyalty programs, supporting auto-scaling during flash sales. Enhanced platform security using AWS WAF and AWS Shield, maintaining 99.9% uptime during major retail events.'],
        image: best_buy,
        location: 'Best Buy, 7601 Penn Avenue South, Richfield, MN 55423'
    },
    {
        _id: 'caaab',
        name: 'Wells Fargo',
        start: 'May 2020',
        end: 'February 2023',
        role: 'Senior Full Stack Developer',
        responsibilities: ['Designed event-driven systems for real-time transaction monitoring using Spring Boot and Apache Kafka, enabling fraud detection within milliseconds while processing over 1,000 transactions per second. Built secure, scalable microservices with OAuth2-based authorization as part of the bank’s digital transformation initiative, ensuring regulatory compliance and improving deployment frequency from monthly to weekly releases.', 'Developed responsive banking dashboards using React and TypeScript, delivering comprehensive financial views with strict type safety that significantly reduced runtime errors. Created RESTful APIs using Java and Spring Cloud for payment processing systems handling millions of daily transactions with 99.99% uptime, providing detailed Swagger documentation for improved service adoption and maintenance.', 'Engineered PostgreSQL schemas and implemented Hibernate ORM for loan and account management systems, applying partitioning and optimization strategies to improve query performance under peak loads. Containerized applications using Docker and orchestrated deployments with Kubernetes in Azure, ensuring high availability through auto-scaling and resilient infrastructure configurations.', 'Implemented CI/CD pipelines using GitHub Actions, enabling automated testing and consistent deployments across environments. Integrated ELK Stack and Splunk for centralized logging and monitoring, supporting rapid issue detection while maintaining strict SLAs for critical financial systems.', 'Maintained integrations with legacy banking platforms using SOAP web services developed with Jersey, ensuring backward compatibility and high-volume data exchange. Strengthened application security through Cypress-based end-to-end testing, enforcing secure authentication flows and validating compliance requirements. Managed Git workflows for multi-team development and contributed to Agile ceremonies supporting continuous delivery improvements.'],
        image: wells_fargo,
        location: 'Wells Fargo Bank, 333 Market Street, San Francisco, CA 94105'
    },
    {
        _id: 'caaac',
        name: 'Progressive',
        start: 'July 2017',
        end: 'April 2020',
        role: 'Full Stack Developer',
        responsibilities: ['Designed microservices architectures using Java 8 and Spring Boot 2.0 for insurance claims processing platforms handling over 100,000 daily claims. Reduced processing time by 40 percent through containerization with Docker and orchestration using Kubernetes. Developed secure RESTful APIs with JWT authentication for policy management, enabling real-time updates and ensuring data security.', 'Built responsive user interfaces using Angular 7, TypeScript, and Angular Material, delivering intuitive dashboards that reduced policy issuance time by 30 percent. Implemented event-driven workflows using Google Cloud Pub/Sub and Apache Kafka to process real-time premium calculations with sub-second response times.', 'Optimized Oracle 12c databases using indexing and partitioning strategies, integrating Hibernate ORM to maintain data integrity and improve performance. Established CI/CD pipelines using GitLab CI and Docker, automating testing with Mockito, Cucumber, and Checkstyle to reduce production incidents.', 'Developed fraud detection systems using Spring Cloud Stream and Kafka, applying circuit breaker patterns to ensure resilience during high-volume claim submissions. Implemented monitoring solutions with Prometheus, Grafana, and ELK Stack, providing real-time visibility into system health and insurance KPIs.', 'Migrated legacy applications to Google Kubernetes Engine using Terraform and infrastructure-as-code practices, reducing infrastructure costs while improving reliability. Built analytics pipelines using Google Cloud Dataflow and BigQuery to support underwriting and fraud analysis. Integrated Redis caching and Spring Integration for payment and notification systems.'],
        image: progressive,
        location: ' Progressive Insurance, 300 N Commons Blvd, Mayfield, OH 44143'
    },
    {
        _id: 'caaad',
        name: 'T-Mobile',
        start: 'December 2015',
        end: 'June 2017',
        role: 'Full Stack Developer',
        responsibilities: ['Developed customer account management and billing applications that enabled subscribers to manage service plans, view usage details, and complete transactions efficiently. Built responsive user interfaces using HTML, JSP, CSS, jQuery, and AJAX to support both desktop and mobile users.', 'Implemented MVC architecture using Apache Struts to separate business logic from presentation layers, improving maintainability and scalability. Developed server-side components using Java EE and Spring Framework to process real-time plan changes and service upgrades, integrating with MySQL databases using Hibernate ORM.', 'Optimized Apache Tomcat and WebLogic servers to handle peak traffic during promotions and device launches, implementing clustering and load balancing strategies. Designed secure authentication and authorization modules using Spring Security with role-based access control and single sign-on capabilities.', 'Built automated deployment scripts and CI workflows to reduce downtime during releases. Implemented logging strategies using Log4j for effective troubleshooting and performance analysis. Developed comprehensive JUnit test suites to validate billing and account management workflows.', 'Designed AWS infrastructure using EC2 auto-scaling groups and S3 for secure document storage, ensuring encryption and access control for sensitive customer data. Delivered stable, scalable solutions that supported high-traffic telecom operations.'],
        image: t_mobile,
        location: 'T-Mobile, 12920 SE 38th Street, Bellevue, WA 98006'
    },
    {
        _id: 'caaae',
        name: 'CEVA Logistics',
        start: 'May 2014',
        end: 'October 2015',
        role: 'JAVA Developer',
        responsibilities: ['Developed logistics and shipment tracking applications using Java, Spring MVC, JDBC, and Hibernate, improving shipment visibility and delivery accuracy by 20 percent. Built freight management features using JavaScript and jQuery to display real-time shipment status and delivery estimates.','Optimized warehouse and inventory systems by resolving performance bottlenecks and database inconsistencies using SQL and indexing strategies. Designed RESTful APIs for external partner integrations with secure authentication and rate limiting to protect logistics data.','Generated operational and shipment reports using optimized SQL queries and efficient JDBC operations. Collaborated with cross-functional teams to troubleshoot production issues and improve system stability during peak shipping periods.','Created technical documentation and participated in code reviews to support knowledge sharing and onboarding. Contributed to Agile development practices and defect resolution processes that improved overall delivery efficiency.'],
        image: ceva,
        location: ' CEVA Logistics India Private Limited, Times Square, Andheri - Kurla Rd, C-Wing, Gamdevi, Marol, Andheri East, Mumbai, Maharashtra 400059, India'
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