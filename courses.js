courses = [
    {
        title: "SWE363",
        subtitle: "Web Devolpment",
        description: "Fundamentals of web and mobile applications and how they impact people’s lives; Building responsive front-end web and mobile apps;\n Back-end programming of dynamic and data-driven websites; Development frameworks for web and mobile apps; Security issues of web applications; Practical applications to real-world problems."
    },

    {
        title: "SWE316",
        subtitle: "Software Design and Construction",
        description: "Study of design concepts and notations. Architecture, construction and design patterns. Designing for different qualities criteria. Design evolution processes and activities.",
    },

    {
        title: "ICS343",
        subtitle: "Fundamentals of Computer Networks",
        description: "Introduction to computer networks and layered architectures: Connectivity, topology, circuit and packet switching, TCP/IP and ISO models.",
    }
    
]

let courses_div = document.getElementById("Courses");

courses.forEach(course => {
    let courseElement = document.createElement("div");
    
    let titleElement = document.createElement("h2");
    titleElement.textContent = course.title;
    
    let subtitleElement = document.createElement("h3");
    subtitleElement.textContent = course.subtitle;
    
    let descriptionElement = document.createElement("p");
    descriptionElement.textContent = course.description;
    
    courseElement.appendChild(titleElement);
    courseElement.appendChild(subtitleElement);
    courseElement.appendChild(descriptionElement);
    
    courses_div.appendChild(courseElement);
  });