const employees = [ 
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@email.com",
    password: "123",
    taskCount: {
      active: 2, 
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Prepare monthly sales report",
        description: "Collect and analyze sales data from all branches to prepare the monthly summary.",
        date: "2025-10-06",
        category: "Reports",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Team meeting",
        description: "Discuss upcoming product launch and assign marketing roles.",
        date: "2025-10-07",
        category: "Meetings",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Vendor payment review",
        description: "Cross-check pending vendor invoices for Q3.",
        date: "2025-10-08",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 4,
        title: "Design review",
        description: "Go through updated UI components and suggest design improvements.",
        date: "2025-10-09",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 5,
        title: "Client follow-up",
        description: "Call client to confirm requirements for the new order batch.",
        date: "2025-10-10",
        category: "Client Work",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@email.com",
    password: "123",
    taskCount: {
      active: 2, 
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Website maintenance",
        description: "Fix broken links and optimize website speed for mobile users.",
        date: "2025-10-06",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Bug testing",
        description: "Perform regression testing on latest software build.",
        date: "2025-10-08",
        category: "QA",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Database backup",
        description: "Backup all database records and upload to secure cloud storage.",
        date: "2025-10-09",
        category: "IT Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 4,
        title: "Security patch update",
        description: "Install latest patches on all company systems.",
        date: "2025-10-11",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rajesh",
    email: "employee3@email.com",
    password: "123",
    taskCount: {
      active: 3, 
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Create marketing plan",
        description: "Develop strategies for Diwali digital marketing campaign.",
        date: "2025-10-06",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Social media ads",
        description: "Design and schedule Facebook and Instagram ads.",
        date: "2025-10-07",
        category: "Social Media",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Market research",
        description: "Collect competitor data and analyze pricing trends.",
        date: "2025-10-09",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 4,
        title: "Team training",
        description: "Conduct workshop on SEO optimization.",
        date: "2025-10-10",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskNumber: 5,
        title: "Email campaign",
        description: "Plan weekly newsletter and schedule sending to subscribers.",
        date: "2025-10-11",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 6,
        title: "Brand partnership call",
        description: "Coordinate with influencers for collaboration.",
        date: "2025-10-13",
        category: "PR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Sanya",
    email: "employee4@email.com",
    password: "123",
    taskCount: {
      active: 2, 
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Prepare financial report",
        description: "Summarize expenses and profits for last quarter.",
        date: "2025-10-06",
        category: "Finance",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Client data migration",
        description: "Migrate client data to the new CRM system.",
        date: "2025-10-07",
        category: "Data Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Internal audit",
        description: "Verify all purchase and payment records.",
        date: "2025-10-08",
        category: "Audit",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskNumber: 4,
        title: "Policy review",
        description: "Review company policies for compliance updates.",
        date: "2025-10-09",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 5,
        title: "Budget planning",
        description: "Draft next month’s budget plan.",
        date: "2025-10-10",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Neel",
    email: "employee5@email.com",
    password: "123",
    taskCount: {
      active: 3, 
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Server monitoring",
        description: "Check system performance and uptime logs.",
        date: "2025-10-06",
        category: "IT Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "System maintenance",
        description: "Run routine maintenance and cleanup scripts.",
        date: "2025-10-07",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Deploy new feature",
        description: "Deploy payment gateway integration on live server.",
        date: "2025-10-08",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskNumber: 4,
        title: "Performance testing",
        description: "Test website performance under high traffic conditions.",
        date: "2025-10-09",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 5,
        title: "Backup verification",
        description: "Ensure all backups are complete and restorable.",
        date: "2025-10-10",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskNumber: 6,
        title: "API optimization",
        description: "Improve API response time by 20%.",
        date: "2025-10-11",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin=[{
    "id":1,
    "email":"admin@me.com",
    "password":"123"
}];
// setLocalStorage()
// localStorage.clear()
export const setLocalStorage = ()=>{
    localStorage.setItem('Employees',JSON.stringify(employees))
    localStorage.setItem('Admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const Employees = JSON.parse(localStorage.getItem('Employees'))
  const Admin = JSON.parse(localStorage.getItem('Admin'))

  return { Employees, Admin }
}