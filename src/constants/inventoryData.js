
const PPE_Y = [8, 26, 44, 62];

const COLUMN_START = 8;
const COLUMN_STEP = 18;
const SLOT_SIZE = 16;

export const CATEGORY_COLORS = {
  PPE: "#AAAAAA",
  Skill: "#55FFFF",
  Tool: "#FFAA00",
  Project: "#55FF55",
  Experience: "#FFFF55",
  Essential: "#FF55FF",
  Other: "#FF55FF",
};

// equipment
const ppeItems = [
  {
    id: "hardhat",
    title: "Hard Hat",
    category: "PPE",
    description:
      "Protective headwear with reflective stickers and lights for field visits."
  },
  {
    id: "glasses",
    title: "Foam Backed Safety Glasses",
    category: "PPE",
    description:
      "Eye protection for field visits."
  },
  {
    id: "vest",
    title: "Hi-Vis Vest",
    category: "PPE",
    description:
      "High-visibility protective equipment for field visits."
  },
  {
    id: "boots",
    title: "Boots",
    category: "PPE",
    description:
      "Protective footwear for field visits. With traction aids during winter conditions."
  }
].map((item, index) => ({
  ...item,
  x: 8,
  y: PPE_Y[index],
  width: SLOT_SIZE,
  height: SLOT_SIZE
}));

// Main inventory: 3 rows x 8 columns
const mainItems = [
  // ROW 1 - skills
  {
    id: "spring",
    title: "Spring Boot",
    category: "Skill",
    description:"Java Spring Boot to build distributed backend microservices secured with Spring Security.",
    row: 0,
    column: 0
  },
    {
    id: "angular",
    title: "Angular",
    category: "Skill",
    description: "Integrate backend services with Angular frontend.",
    row: 0,
    column: 1
  },
  {  id: "sql",
    title: "MS SQL Server",
    category: "Skill",
    description: "Manage relational databases, queries and stored procedures.",
    row: 0,
    column: 2
  },
  { id: "postman",
    title: "Postman",
    category: "Skill",
    description: "Test REST API endpoints, investigate integration and authentication issues.",
    row: 0,
    column: 3
  },
  // ROW 2 - tools
  {
    id: "intellij",
    title: "IntelliJ IDEA",
    category: "Tool",
    description: "IDE for development, debugging and testing.",
    row: 1,
    column: 0
  },
  {
    id: "gitlab",
    title: "GitLab",
    category: "Tool",
    description: "Version control and collaboration.",
    row: 1,
    column: 1
  },
  {
    id: "ssms",
    title: "SSMS",
    category: "Tool",
    description: "SQL Server Management Studio to query and troubleshoot databases.",
    row: 1,
    column: 2
  },
  // ROW 3 - projects and experience
  { 
    id: "training",
    title: "Training Request Dashboard",
    category: "Project",
    description: "Automated Training Request creation and tracking, increasing efficiency by 50%.",
    row: 2,
    column: 0
  },
  {
    id: "drillblast",
    title: "Drill Pattern Design Dashboard",
    category: "Project",
    description: "Redeveloped dashboard to track drill pattern data and visualize patterns with metrics. Decreased loading time by 75% and improved UI/UX.",
    row: 2,
    column: 1
  },
    {
    id: "code-reviews",
    title: "Code Reviews",
    category: "Experience",
    description: "Participate in code reviews to maintain code quality and consistency across the team.",
    row: 2,
    column: 2
  },
    
  // {
  //   id: "security",
  //   title: "Spring Security",
  //   category: "Skill",
  //   description: "Worked with application authentication and API security."
  // },
  // {
  //   id: "procedures",
  //   title: "Stored Procedures",
  //   category: "Skill",
  //   description: "Worked with SQL Server stored procedures and database logic."
  // },
  // {
  //   id: "powershell",
  //   title: "PowerShell",
  //   category: "Skill",
  //   description: "Used PowerShell scripts in application deployment workflows."
  // },
  // {
  //   id: "legacy",
  //   title: "Legacy Systems",
  //   category: "Experience",
  //   description: "Improved and maintained existing enterprise applications and workflows."
  // },
  // {
  //   id: "request-management",
  //   title: "Request Management",
  //   category: "Project",
  //   description: "Contributed to improving development-request intake, prioritization and tracking."
  // },
  // {
  //   id: "deployment-workflow",
  //   title: "Deployment Workflow",
  //   category: "Project",
  //   description: "Worked with Maven packaging, transferring application files and PowerShell deployment scripts."
  // },
    // {
  //   id: "collaboration",
  //   title: "Collaboration",
  //   category: "Experience",
  //   description: "Worked with technical teammates and operational stakeholders."
  // },
  // {
  //   id: "debugging",
  //   title: "Debugging",
  //   category: "Skill",
  //   description: "Investigated application, API and integration issues."
  // },
  // {
  //   id: "fullstack",
  //   title: "Full-Stack Systems",
  //   category: "Other",
  //   description: "Worked across backend services, database logic and frontend integrations."
  // }
];

// Equipped row: other
const equippedItems = [
  {
    id: "map",
    title: "Field Exposure",
    category: "Other",
    description: "Visit mine operations and see firsthand what the software supports.",
    row: 3,
    column: 0
  },
  {
    id: "tnt",
    title: "Blast Explosives",
    category: "Other",
    description: "Set off and watch blasts at the mine. Not for personal use.",
    row: 3,
    column: 1
  },
  {
    id: "cart",
    title: "Mine Equipment",
    category: "Other",
    description: "Ride-along in 793 haul truck and 992 excavator.",
    row: 3,
    column: 2
  },
  {
    id: "nametag",
    title: "Inuit Cultual Engagement Session",
    category: "Other",
    description: "Learn how to write name in Inuktitut! ᔪᐊ ᖃᒧᕐ",
    row: 3,
    column: 3
  },
  {
    id: "bannock",
    title: "Bannock",
    category: "Other",
    description: "Traditional Inuit deep fried bread. A staple during site visits.",
    row: 3,
    column: 4
  }
];

// Crafting ingredients: 2x2 grid
const craftingItems = [
  {
    id: "disk",
    title: "Fire Playlist",
    category: "Essential",
    description: "Background music to reach flowstate.",
    row: 0,
    column: 0
  },
  {
    id: "coffee",
    title: "Iced Coffee",
    category: "Essential",
    description: "Keep the energy up during 12 hour shift. In a pink Baffinland tumbler (important).",
    row: 0,
    column: 1
  },
  {
    id: "bagel",
    title: "Everything Bagel with Cream Cheese",
    category: "Essential",
    description: "Pairs well with a daily iced coffee.",
    row: 1,
    column: 1
  }
];

// Crafting result
const craftingOutput = {
  id: "mine-systems-developer",
  title: "Mine Systems Developer at Baffinland Iron Mines",
  category: "Experience",
  description: "A year of software development, problem-solving and firsthand exposure to mine operations.",
  x: 144,
  y: 36,
  width: SLOT_SIZE,
  height: SLOT_SIZE
};

// Automatically calculate coordinates for the inventory grid
const createGridSlots = (items, startX, startY, columnStep, rowStep) =>
  items.map((item) => ({
    ...item,
    x: startX + item.column * columnStep,
    y: startY + item.row * rowStep,
    width: SLOT_SIZE,
    height: SLOT_SIZE
  }));

export const inventorySlots = [
  ...ppeItems,

  // Main inventory
  ...createGridSlots(mainItems, 8, 83, 18, 18),

  // Equipped row
  ...createGridSlots(equippedItems, 8, 141, 18, 0),

  // Crafting grid
  ...createGridSlots(craftingItems, 89, 27, 18, 18),

  // Crafting output
  craftingOutput
];
