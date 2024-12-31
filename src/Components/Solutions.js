import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import img from "../Assets/bg2.jpg";
import { color } from "framer-motion";

const Solutions = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = [
    { name: "ERP Implementation and Support Services", path: "/solutions/erp" },
    {
      name: "D365BC Functional and Technical Training Program",
      path: "/solutions/d365bc",
    },
    { name: "Website Development", path: "/solutions/web-development" },
    {
      name: "Custom App Development (Web and Mobile)",
      path: "/solutions/custom-app-development",
    },
    {
      name: "Project Management Services",
      path: "/solutions/project-management",
    },
    {
      name: "Cloud Hosting with Dedicated Support",
      path: "/solutions/cloud-hosting",
    },
  ];

  const solutionsData = {
    erp: {
      name: "ERP Implementation and Support Services",
      description:
        "Our comprehensive ERP solutions are designed to streamline your business processes, enhance operational efficiency, and provide continuous support. By integrating cutting-edge technology with industry best practices, we help you transform your business operations, allowing for greater visibility, control, and adaptability in an ever-changing market.",
      img: "https://via.placeholder.com/150",
      color: "#fff",
      path: "/solutions/erp",
      content: [
        {
          title: "Comprehensive ERP Implementation",
          img: "https://via.placeholder.com/150",
          description:
            "We specialize in providing a comprehensive ERP implementation service tailored specifically to your unique business needs. Our process begins with a detailed analysis of your current workflows, followed by the development of a customized implementation plan that ensures a seamless integration of the ERP system into your existing operations. We take great care to minimize disruption during the transition, providing dedicated resources and clear communication throughout the entire process. Our goal is to equip you with an ERP system that enhances productivity and aligns with your business objectives, setting a solid foundation for future growth.",
        },
        {
          title: "Customizable ERP Solutions",
          img: "https://via.placeholder.com/150",
          description:
            "Recognizing that no two businesses are the same, we offer highly customizable ERP solutions that can be tailored to meet your specific requirements. Our approach includes selecting from a range of modules and features that best fit your operational needs. This ensures that as your business evolves, your ERP system can easily adapt, grow, and scale with you. By implementing a flexible and modular system, you can avoid unnecessary features and costs while maximizing the return on your investment.",
        },
        {
          title: "Post-Implementation Support",
          img: "https://via.placeholder.com/150",
          description:
            "Our commitment to your success extends well beyond the initial implementation phase. We provide extensive post-implementation support that includes a dedicated helpdesk, troubleshooting, and ongoing system optimization. Our support team is available around the clock to assist with any issues that may arise, ensuring that your ERP system remains fully operational. We also conduct regular reviews and performance assessments to identify areas for improvement, guaranteeing that your system continues to meet the evolving needs of your business.",
        },
        {
          title: "Training and Onboarding",
          img: "https://via.placeholder.com/150",
          description:
            "Effective training and onboarding are critical for the successful adoption of any new system. Our comprehensive training programs are designed to empower your team by providing in-depth knowledge of the ERP system. We tailor training sessions to suit different user roles within your organization, ensuring that everyone from end-users to administrators understands how to navigate the system and utilize its features effectively. Additionally, we provide ongoing training sessions and resources to reinforce learning and assist with new feature rollouts, ultimately fostering a culture of continuous improvement within your organization.",
        },
        {
          title: "System Upgrades and Maintenance",
          img: "https://via.placeholder.com/150",
          description:
            "In today’s fast-paced technological landscape, regular system upgrades and maintenance are essential for maximizing the functionality of your ERP system. Our dedicated team monitors your system to ensure it remains up-to-date with the latest features, security patches, and best practices. We provide proactive maintenance services to prevent potential issues before they affect your operations. By keeping your system current, we help you leverage new capabilities that can drive efficiencies and improve your overall business performance.",
        },
      ],
    },
    d365bc: {
      name: "D365BC Functional and Technical Training Program",
      description:
        "Our D365BC training program offers a comprehensive approach to both functional and technical aspects of Microsoft Dynamics 365 Business Central. Designed for users at all levels, this program equips your team with the skills and knowledge necessary to leverage the full potential of D365BC, enabling them to manage key business processes effectively and efficiently.",
      img: "https://via.placeholder.com/150",
      color: "#fff",
      path: "/solutions/d365bc",
      content: [
        {
          title: "Functional Training",
          img: "https://via.placeholder.com/150",
          description:
            "Our D365BC functional training program is meticulously designed to cover all critical business processes and modules required to manage your organization. Participants will learn about key functionalities such as financial management, sales, inventory, and project management. Our trainers employ a hands-on approach, utilizing real-world scenarios and practical exercises to ensure participants can apply their learning effectively. This training not only enhances user competency but also helps organizations to improve overall productivity by utilizing D365BC's capabilities to their fullest.",
        },
        {
          title: "Technical Training",
          img: "https://via.placeholder.com/150",
          description:
            "Our technical training program dives deep into the customization and extensibility options within D365BC. Participants will learn how to tailor the platform to meet specific business needs through configuration, development, and integration with other systems. Training includes hands-on workshops that cover advanced topics like building extensions, developing custom reports, and creating automated workflows. This training empowers technical staff to effectively support and enhance the D365BC platform, ensuring it continues to meet the evolving demands of your organization.",
        },
      ],
    },
    "web-development": {
      name: "Website Development",
      description:
        "Our full-stack website development services are tailored to meet modern web standards and business requirements. We understand that a strong online presence is critical for success in today's digital landscape. Our team combines creativity with technical expertise to deliver websites that are not only visually appealing but also highly functional and user-friendly.",
      img: "https://via.placeholder.com/150",
      color: "#fff",
      path: "/solutions/web-development",
      content: [
        {
          title: "Custom Website Design",
          img: "https://via.placeholder.com/150",
          description:
            "We specialize in creating custom, responsive websites that reflect your brand identity and engage your target audience. Our design process involves a thorough consultation to understand your business goals, target market, and unique selling propositions. We then create wireframes and prototypes that align with your vision, incorporating user experience best practices to ensure seamless navigation and engagement. With a focus on aesthetics, usability, and conversion optimization, our websites are crafted to enhance your online presence and drive results.",
        },
        {
          title: "E-commerce Solutions",
          img: "https://via.placeholder.com/150",
          description:
            "Our e-commerce development solutions are designed to help you create a robust online store that meets your business objectives. We provide a comprehensive suite of services, including platform selection, payment gateway integration, and inventory management systems. Our focus on user experience ensures that your online store is not only visually appealing but also functional and easy to navigate. Additionally, we implement security best practices to protect customer data, build trust, and foster customer loyalty, ultimately driving sales and revenue growth.",
        },
      ],
    },
    "custom-app-development": {
      name: "Custom App Development (Web and Mobile)",
      description:
        "We offer tailored app development solutions for both web and mobile platforms, designed to scale with your business and improve customer engagement. Our development process focuses on understanding your business challenges and goals to deliver applications that provide real value to your users.",
      img: "https://via.placeholder.com/150",
      color: "#fff",
      path: "/solutions/custom-app-development",
      content: [
        {
          title: "Web Application Development",
          img: "https://via.placeholder.com/150",
          description:
            "Our team develops custom web applications tailored to solve your specific business problems. We prioritize creating intuitive user interfaces and efficient back-end systems to ensure seamless user experiences. Our web applications are built on modern frameworks and technologies, allowing for scalability and maintainability as your business grows. We emphasize security and performance, implementing best practices to ensure your application is robust and capable of handling varying levels of user activity.",
        },
        {
          title: "Mobile Application Development",
          img: "https://via.placeholder.com/150",
          description:
            "We create high-performance mobile applications designed for both Android and iOS platforms. Our mobile apps focus on delivering exceptional user experiences while integrating with your existing systems. Our development process involves rigorous testing and quality assurance to ensure that the final product meets the highest standards of performance and reliability. We also offer post-launch support to ensure the app continues to meet user needs and remains updated with the latest features and enhancements.",
        },
      ],
    },
    "project-management": {
      name: "Project Management Services",
      description:
        "Our end-to-end project management services are designed to ensure timely and cost-effective project delivery, leveraging industry best practices and methodologies. Our experienced project managers bring a wealth of knowledge and expertise to every project, ensuring that your initiatives are executed smoothly and effectively.",
      img: "https://via.placeholder.com/150",
      color: "#fff",
      path: "/solutions/project-management",
      content: [
        {
          title: "Agile Project Management",
          img: "https://via.placeholder.com/150",
          description:
            "Our agile project management services are built around flexibility and iterative progress, allowing your project to adapt to changing requirements and market conditions. We utilize scrum methodologies to facilitate collaboration between teams and stakeholders, ensuring everyone is aligned with project goals. Our agile approach allows for frequent reassessment and adaptation, which enhances project delivery speed and quality, ultimately leading to more successful outcomes.",
        },
        {
          title: "Project Planning and Execution",
          img: "https://via.placeholder.com/150",
          description:
            "We provide comprehensive project planning services that cover every aspect from the initial concept to final execution. Our approach includes thorough resource allocation, timeline management, and risk assessment to mitigate potential issues before they arise. We employ proven project management tools and techniques to ensure efficient communication and documentation throughout the project lifecycle, keeping all stakeholders informed and engaged. Our commitment to excellence ensures that projects are delivered on time and within budget while meeting or exceeding quality standards.",
        },
      ],
    },
    "cloud-hosting": {
      name: "Cloud Hosting with Dedicated Support",
      description:
        "Our secure cloud hosting services come with round-the-clock support for your critical business applications, ensuring high availability and performance. We understand that reliable hosting is essential for your business operations, and our solutions are designed to provide the scalability and security your organization needs to thrive in the digital era.",
      img: "https://via.placeholder.com/150",
      color: "#fff",
      path: "/solutions/cloud-hosting",
      content: [
        {
          title: "Secure Cloud Hosting",
          img: "https://via.placeholder.com/150",
          description:
            "Our cloud hosting solutions are built on secure, scalable infrastructure designed to support your business applications. We implement robust security measures to protect your data from unauthorized access and threats, ensuring that your sensitive information remains safe. Our hosting environment is optimized for performance, providing fast load times and minimal downtime. With our cloud hosting, you can scale your resources up or down based on your needs, allowing for flexibility as your business grows or fluctuates.",
        },
        {
          title: "24/7 Support",
          img: "https://via.placeholder.com/150",
          description:
            "Our dedicated support team is available 24/7 to assist with any issues or questions you may have regarding your cloud infrastructure. We focus on proactive monitoring and rapid response to ensure your systems remain operational and secure at all times. Our support includes regular system checks, troubleshooting, and maintenance, allowing you to focus on your core business operations without worrying about your hosting environment. Our goal is to provide you with peace of mind, knowing that expert support is always just a call away.",
        },
      ],
    },
  };

  return (
    <Box>
      {/* Top Box with 100% width and center-aligned text */}
      <Box mt={12} p={2}>
        <Box
          sx={{
            width: "100%",
            backgroundImage: `url(${solutionsData[id].img})`,
            padding: 2,
            textAlign: "center",
            padding: 2,
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 4,
          }}
        >
          <Typography
            sx={{ fontWeight: 600 }}
            color={solutionsData[id].color}
            variant="h4"
          >
            {solutionsData[id].name}
          </Typography>
        </Box>
      </Box>

      {/* Main Content with Sidebar */}
      <Box padding={5}>
        <Grid container spacing={2}>
          {/* Content and Image Section */}
          <Grid item xs={12} md={10}>
            <Grid container spacing={2}>
              {solutionsData[id].content.map((solution, index) => (
                <React.Fragment key={index}>
                  {/* If index is even, content on left and image on right */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Content Section on the left */}
                      <Grid item xs={12} md={8}>
                        <Box
                          sx={{ padding: 2, border: "none", boxShadow: "none" }}
                        >
                          <Typography variant="h5" gutterBottom>
                            {solution.title}
                          </Typography>
                          <Typography variant="body1">
                            {solution.description}
                          </Typography>
                        </Box>
                      </Grid>

                      {/* Image Section on the right */}
                      <Grid item xs={12} md={4}>
                        <Box
                          sx={{ padding: 0, border: "none", boxShadow: "none" }}
                        >
                          <img
                            src={solution.img}
                            alt={solution.title}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </Box>
                      </Grid>
                    </>
                  ) : (
                    <>
                      {/* Image Section on the left */}
                      <Grid item xs={12} md={4}>
                        <Box
                          sx={{ padding: 0, border: "none", boxShadow: "none" }}
                        >
                          <img
                            src={solution.img}
                            alt={solution.title}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </Box>
                      </Grid>

                      {/* Content Section on the right */}
                      <Grid item xs={12} md={8}>
                        <Box
                          sx={{ padding: 2, border: "none", boxShadow: "none" }}
                        >
                          <Typography variant="h5" gutterBottom>
                            {solution.title}
                          </Typography>
                          <Typography variant="body1">
                            {solution.description}
                          </Typography>
                        </Box>
                      </Grid>
                    </>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </Grid>

          {/* Sidebar Section */}
          <Grid item xs={12} md={2}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">
                Related{" "}
                <span style={{ color: "darkred", fontWeight: "900" }}>
                  Links
                </span>
              </Typography>
              <Divider />
              <List>
                {services.map((service) => (
                  <ListItem
                    button
                    key={service.name}
                    onClick={() => navigate(service.path)}
                  >
                    <ListItemText primary={service.name} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Solutions;
