// AboutSection.tsx
import React from 'react';
import { 
  FiCode, FiZap, FiUsers, FiGlobe, FiShield, FiClock,
  FiHeart, FiTarget, FiTrendingUp, FiAward, FiStar,
  FiGithub, FiLinkedin, FiTwitter, FiMail
} from 'react-icons/fi';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiPython } from 'react-icons/si';
import styles from './About.module.scss';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface AboutSectionProps {
  className?: string;
}

const About: React.FC<AboutSectionProps> = ({ className = '' }) => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      avatar: "/api/placeholder/120/120",
      bio: "Full-stack developer with 8+ years of experience building developer tools.",
      social: {
        github: "#github-sarah",
        linkedin: "#linkedin-sarah",
        twitter: "#twitter-sarah",
        email: "#email-sarah"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Lead Developer",
      avatar: "/api/placeholder/120/120",
      bio: "Expert in web technologies and real-time collaboration systems.",
      social: {
        github: "#github-marcus",
        linkedin: "#linkedin-marcus",
        email: "#email-marcus"
      }
    },
    {
      name: "Priya Patel",
      role: "Lead Designer",
      avatar: "/api/placeholder/120/120",
      bio: "UX/UI specialist focused on creating intuitive developer experiences.",
      social: {
        linkedin: "#linkedin-priya",
        twitter: "#twitter-priya",
        email: "#email-priya"
      }
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      avatar: "/api/placeholder/120/120",
      bio: "Infrastructure expert ensuring 99.9% uptime and lightning-fast performance.",
      social: {
        github: "#github-david",
        linkedin: "#linkedin-david",
        email: "#email-david"
      }
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "The Idea",
      description: "Started as a side project to solve the frustration of setting up development environments."
    },
    {
      year: "2021",
      title: "First Launch",
      description: "Released beta version with basic HTML, CSS, and JavaScript support."
    },
    {
      year: "2022",
      title: "Growing Community",
      description: "Reached 100K users and added collaborative features and code sharing."
    },
    {
      year: "2023",
      title: "Feature Expansion",
      description: "Added support for frameworks, libraries, and real-time collaboration."
    },
    {
      year: "2024",
      title: "Global Scale",
      description: "Serving 500K+ developers worldwide with 99.9% uptime."
    }
  ];

  const values = [
    {
      icon: <FiZap />,
      title: "Instant Accessibility",
      description: "Coding should be accessible to everyone, anywhere, without barriers or complex setups."
    },
    {
      icon: <FiUsers />,
      title: "Community First",
      description: "We believe in the power of community and collaborative learning in development."
    },
    {
      icon: <FiShield />,
      title: "Privacy & Security",
      description: "Your code is yours. We prioritize security and privacy in everything we build."
    },
    {
      icon: <FiHeart />,
      title: "Developer Love",
      description: "Built by developers, for developers. We understand your needs and challenges."
    }
  ];

  return (
    <section className={`${styles.about} ${className}`}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.codeGrid}></div>
        <div className={styles.floatingBrackets}>{"{ }"}</div>
        <div className={styles.binaryStream}>10110100101</div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <FiCode className={styles.badgeIcon} />
            About CodeEditor
          </div>
          <h2 className={styles.title}>
            Empowering Developers
            <span className={styles.highlight}> Worldwide</span>
          </h2>
          <p className={styles.subtitle}>
            We're on a mission to make coding accessible to everyone by removing the barriers 
            between ideas and implementation. No downloads, no setup, just pure coding freedom.
          </p>
        </div>

        {/* Story Section */}
        <div className={styles.storySection}>
          <div className={styles.storyContent}>
            <h3 className={styles.sectionTitle}>
              <FiTarget className={styles.titleIcon} />
              Our Story
            </h3>
            <div className={styles.storyText}>
              <p>
                CodeEditor was born from a simple frustration: why should learning to code or 
                prototyping ideas require complex development environment setups? Our founders, 
                experienced developers themselves, recognized that the biggest barrier to coding 
                wasn't the complexity of programming languages, but the friction of getting started.
              </p>
              <p>
                In 2020, we set out to build something different - a platform where anyone could 
                write, test, and share code instantly. What started as a weekend project has grown 
                into a platform serving over half a million developers worldwide.
              </p>
              <p>
                Today, CodeEditor is used by students learning their first lines of code, 
                seasoned developers prototyping new ideas, teachers conducting programming lessons, 
                and companies conducting technical interviews. Our mission remains the same: 
                make coding accessible to everyone.
              </p>
            </div>
          </div>
          <div className={styles.storyVisual}>
            <div className={styles.codeWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
                <span className={styles.windowTitle}>our-story.js</span>
              </div>
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span>
                  <span className={styles.variable}> mission</span>
                  <span className={styles.operator}> = </span>
                  <span className={styles.string}>'Make coding accessible'</span>
                  <span className={styles.punctuation}>;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span>
                  <span className={styles.variable}> users</span>
                  <span className={styles.operator}> = </span>
                  <span className={styles.number}>500000</span>
                  <span className={styles.punctuation}>;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span>
                  <span className={styles.variable}> uptime</span>
                  <span className={styles.operator}> = </span>
                  <span className={styles.string}>'99.9%'</span>
                  <span className={styles.punctuation}>;</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.comment}>// Empowering developers since 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={styles.valuesSection}>
          <h3 className={styles.sectionTitle}>
            <FiHeart className={styles.titleIcon} />
            Our Values
          </h3>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  {value.icon}
                </div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <FiUsers />
            </div>
            <div className={styles.statNumber}>500K+</div>
            <div className={styles.statLabel}>Active Developers</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <FiCode />
            </div>
            <div className={styles.statNumber}>1M+</div>
            <div className={styles.statLabel}>Code Snippets</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <FiGlobe />
            </div>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Countries</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statIcon}>
              <FiClock />
            </div>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>Uptime</div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className={styles.timelineSection}>
          <h3 className={styles.sectionTitle}>
            <FiTrendingUp className={styles.titleIcon} />
            Our Journey
          </h3>
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{milestone.year}</div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineTitle}>{milestone.title}</h4>
                  <p className={styles.timelineDescription}>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={styles.teamSection}>
          <h3 className={styles.sectionTitle}>
            <FiAward className={styles.titleIcon} />
            Meet Our Team
          </h3>
          <p className={styles.teamDescription}>
            We're a passionate team of developers, designers, and dreamers working to make coding 
            accessible to everyone. Each team member brings unique expertise and shares our vision 
            of democratizing software development.
          </p>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.memberAvatar}>
                  <img src={member.avatar} alt={member.name} />
                  <div className={styles.avatarOverlay}>
                    <div className={styles.socialLinks}>
                      {member.social.github && (
                        <a href={member.social.github} className={styles.socialLink}>
                          <FiGithub />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className={styles.socialLink}>
                          <FiLinkedin />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className={styles.socialLink}>
                          <FiTwitter />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={member.social.email} className={styles.socialLink}>
                          <FiMail />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className={styles.techSection}>
          <h3 className={styles.sectionTitle}>
            <FiZap className={styles.titleIcon} />
            Built with Modern Technology
          </h3>
          <p className={styles.techDescription}>
            Our platform is built using cutting-edge technologies to ensure the best performance, 
            reliability, and user experience.
          </p>
          <div className={styles.techGrid}>
            <div className={styles.techItem}>
              <SiReact className={`${styles.techIcon} ${styles.react}`} />
              <span className={styles.techName}>React</span>
            </div>
            <div className={styles.techItem}>
              <SiNodedotjs className={`${styles.techIcon} ${styles.node}`} />
              <span className={styles.techName}>Node.js</span>
            </div>
            <div className={styles.techItem}>
              <SiHtml5 className={`${styles.techIcon} ${styles.html}`} />
              <span className={styles.techName}>HTML5</span>
            </div>
            <div className={styles.techItem}>
              <SiCss3 className={`${styles.techIcon} ${styles.css}`} />
              <span className={styles.techName}>CSS3</span>
            </div>
            <div className={styles.techItem}>
              <SiJavascript className={`${styles.techIcon} ${styles.js}`} />
              <span className={styles.techName}>JavaScript</span>
            </div>
            <div className={styles.techItem}>
              <SiPython className={`${styles.techIcon} ${styles.python}`} />
              <span className={styles.techName}>Python</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Start Coding?</h3>
            <p className={styles.ctaDescription}>
              Join our community of developers and start building amazing things today.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <FiZap className={styles.buttonIcon} />
                Start Coding Now
              </button>
              <button className={styles.secondaryButton}>
                <FiUsers className={styles.buttonIcon} />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;