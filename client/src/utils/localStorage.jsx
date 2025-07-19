const employees = [
  {
    id: 1,
    email: "employee1@mail.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve login form validation issue.",
        date: "2025-07-14",
        category: "Bug",
        active: true
      },
      {
        title: "Update profile page",
        description: "Add user photo upload feature.",
        date: "2025-07-15",
        category: "Feature",
        active: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@mail.com",
    password: "123",
    tasks: [
      {
        title: "Create dashboard layout",
        description: "Design responsive admin dashboard layout.",
        date: "2025-07-14",
        category: "Design",
        active: true
      }
    ]
  },
  {
    id: 3,
    email: "employee3@mail.com",
    password: "123",
    tasks: [
      {
        title: "Fix responsiveness",
        description: "Fix layout issues on mobile view.",
        date: "2025-07-13",
        category: "Bug",
        active: true
      }
    ]
  },
  {
    id: 4,
    email: "employee4@mail.com",
    password: "123",
    tasks: [
      {
        title: "Implement login validation",
        description: "Prevent empty fields from being submitted.",
        date: "2025-07-12",
        category: "Validation",
        active: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@mail.com",
    password: "123",
    tasks: [
      {
        title: "Write documentation",
        description: "Document the project setup and usage.",
        date: "2025-07-14",
        category: "Docs",
        active: true
      }
    ]
  }
];
 
const admin=[
    {
        "id" : 1,
        "email": "admin@mail.com",
        "password": "123"
        
    }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];

  return { employees, admin };
};
