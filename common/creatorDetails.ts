export type Creator = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  products: string;
  followers: string;
};

export const creatorDetails: Creator[] = [
  { id: "purepearl-studio", name: "PurePearl Studio", role: "Passionate educator and lifelong learner", bio: "Explore courses designed to help you build practical skills, grow your confidence, and take the next step in your learning journey.", avatar: "/profiles/profile1.svg", products: "7 Products", followers: "12K Followers" },
  { id: "sarah-mitchell", name: "Sarah Mitchell", role: "Product designer and mentor", bio: "Sarah creates practical design lessons for learners who want to turn ideas into polished digital experiences.", avatar: "/testimonials/test1.svg", products: "12 Products", followers: "8K Followers" },
  { id: "james-lee", name: "James Lee", role: "Lifelong learner and developer", bio: "James shares approachable development workflows and project-based lessons for growing technical confidence.", avatar: "/testimonials/test2.svg", products: "9 Products", followers: "6K Followers" },
  { id: "alex-brown", name: "Alex Brown", role: "Inspired creator", bio: "Alex helps creators build sustainable habits, launch meaningful projects, and learn by doing.", avatar: "/testimonials/test3.svg", products: "8 Products", followers: "5K Followers" },
  { id: "maya-wilson", name: "Maya Wilson", role: "Marketing strategist", bio: "Maya teaches clear, creative marketing strategies for independent creators and growing businesses.", avatar: "/buyers/buyer6.jpg", products: "10 Products", followers: "9K Followers" },
  { id: "daniel-kim", name: "Daniel Kim", role: "Data and technology educator", bio: "Daniel makes complex technology topics easier to understand through concise explanations and useful examples.", avatar: "/buyers/buyer5.jpg", products: "6 Products", followers: "4K Followers" },
];
