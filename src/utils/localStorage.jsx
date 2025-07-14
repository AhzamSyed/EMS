const employees = [
    {
      "id": 1,
      "email": "employee1@mail.com",
      "password": "123"
    },
    {
      "id": 2,
      "email": "employee2@mail.com",
      "password": "123"
    },
    {
      "id": 3,
      "email": "employee3@mail.com",
      "password": "123"
    },
    {
      "id": 4,
      "email": "employee4@mail.com",
      "password": "123"
    },
    {
      "id": 5,
      "email": "employee5@mail.com",
      "password": "123"
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
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

   return{employees,admin}
} 