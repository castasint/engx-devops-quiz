const devOpsQuestions = [
  {
    question: "Which of the following statements best describes DevOps?",
    options: [
      "DevOps is solely a set of tools used for automating software deployment and operations.",
      "DevOps is just an extension of Agile methodology applied to software development teams.",
      "DevOps is primarily focused on faster code deployment, regardless of the collaboration between development and operations teams.",
      "DevOps is a philosophy that emphasizes collaboration between software development and IT operations teams, integrating practices like automation and continuous delivery to improve the speed and quality of software development and deployment."
    ],
    correctAnswerIndex: 3
  },
  {
    question: "What is the key advantage of a Blue/Green deployment strategy in DevOps?",
    options: [
      "It allows simultaneous deployment of two different versions of an application.",
      "It eliminates downtime and reduces the risk of introducing a new version.",
      "It's specifically designed for hotfixes and quick patches.",
      "It enhances collaboration between development and operations teams."
    ],
    correctAnswerIndex: 1
  },
  {
    question: "In the context of DevOps, what does 'Shift Left' mean?",
    options: [
      "Moving the project deadline to an earlier date.",
      "Incorporating security and testing early in the software development life cycle.",
      "Shifting the operational responsibilities to the left in the team structure.",
      "Prioritizing left-brain analytical thinking in problem-solving."
    ],
    correctAnswerIndex: 1
  },
  {
    question: "Which is a key feature of the 'Infrastructure as Code' (IaC) methodology?",
    options: [
      "Manual setup and management of infrastructures.",
      "Using high-level programming languages to set up and manage infrastructures.",
      "Automating infrastructure management through declarative configuration files.",
      "Focusing on physical infrastructure rather than cloud-based solutions."
    ],
    correctAnswerIndex: 2
  },
  {
    question: "In DevOps, what is Canary Testing?",
    options: [
      "A testing approach where the entire application is tested at once.",
      "Releasing a new feature to a small group of users to assess its impact before wider deployment.",
      "A type of security testing to check for vulnerabilities.",
      "Automated testing that is done before code is merged into the main branch."
    ],
    correctAnswerIndex: 1
  },
  {
    question: "What does the term 'Immutable Infrastructure' refer to in a DevOps context?",
    options: [
      "Infrastructure that cannot be modified once it is deployed.",
      "The practice of regularly updating and changing the infrastructure.",
      "Infrastructure components that are resistant to change.",
      "A security practice to make infrastructure tamper-proof."
    ],
    correctAnswerIndex: 0
  }
];

export default devOpsQuestions;