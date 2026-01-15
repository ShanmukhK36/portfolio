import '../index.css'
const Summary = () => {
  return (
    <div className='px-2 py-3 vollkorn-display flex flex-col text-gray-600 gap-6'>
        <p>Hi, I’m Shanmukh Katakam, a Senior Full Stack Java Developer with 10+ years of hands-on experience delivering robust, scalable, and high-performance enterprise applications across the full software development lifecycle. Strong expertise in Java (Java 8+), Spring Boot, Spring MVC, Spring Security, and Microservices architecture, with deep knowledge of object-oriented design, clean code principles, and design patterns. Extensive frontend experience with Angular and React, leveraging HTML5, CSS3, JavaScript, and TypeScript to build responsive, user-focused interfaces that deliver consistent experiences across devices. Proven ability to design and integrate RESTful APIs, implement secure authentication using OAuth2 and JWT, and develop efficient data access layers using Hibernate and JPA with both relational and NoSQL databases.</p>        
        <p>Designed and implemented microservices architectures using Spring Boot, Spring Cloud, and Java 8+ for large-scale e-commerce platforms, incorporating service discovery, centralized configuration, and circuit breaker patterns to improve fault tolerance. These solutions reduced system downtime by approximately 40 percent while enhancing response times and overall system reliability. Developed high-throughput RESTful services for financial applications processing over one million daily transactions, achieving 99.9 percent service availability through robust validation, exception handling, and security controls.</p>
        <p>Built modern, responsive user interfaces using React, Redux, and TypeScript, applying reusable component patterns, strong typing, and custom hooks to reduce runtime errors and maintain clean, maintainable codebases. Developed Angular applications with modular architecture, lazy loading, and NgRx state management to ensure efficient data flow and optimized initial load performance. Delivered mobile-friendly interfaces using semantic HTML5, CSS3, flexbox layouts, and progressive enhancement techniques to ensure accessibility and consistent rendering across screen sizes.</p>
        <p>Engineered cloud-native solutions across AWS, Azure, and GCP environments, utilizing services such as EC2, S3, Lambda, DynamoDB, Compute Engine, Cloud SQL, and Cloud Storage. Implemented auto-scaling, failover strategies, and infrastructure as code using Terraform to automate provisioning and reduce environment setup time by up to 70 percent. Containerized applications using Docker with multi-stage builds and deployed them on Kubernetes, configuring rolling updates, pod scaling, and zero-downtime deployment strategies.</p>
        <p>Established CI/CD pipelines using Jenkins and GitHub Actions to automate build, test, and deployment workflows, introducing quality gates that reduced release cycles from weeks to days. Optimized database performance across PostgreSQL, Oracle, MySQL, Cassandra, and MongoDB through indexing, partitioning, caching, materialized views, and denormalization strategies, significantly improving performance for critical workloads.</p>
        <div className='flex-row gap-2'>
            <p>Contact: +1 469-706-9077</p>
            <p>Email: shanmukh.kat@gmail.com</p>
        </div>
    </div>
  )
}

export default Summary