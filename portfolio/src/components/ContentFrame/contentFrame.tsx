// import Lottie from "lottie-web";
'use client';

import LottieAnimation, { LottieAnimationProps } from "../lottieAnmationPlayer/lottieAnimation";

import ArticleModal from "../modalPopUp/articlePage";
import Carousel from "../carousel";
import EducationTile from "../educaitonTile/educationTile";
import Image from "next/image";
import Tile from "../customCard/customeCard";
import asaan from './assets/Asaan.svg';
import cn from "classnames";
import dbc from './assets/dbc.jpg';
import dj from './assets/DJ.png';
import gaditek from './assets/gaditek.svg';
import iba from './assets/iba.jpg';
import image from '../sidebar/assets/FullLogo_Transparent.png';
import { json } from "stream/consumers";
import kps from './assets/kps.jpg';
import membersArea from './assets/membersArea.jpg';
import mindstorm from './assets/mindstorm_studios.jpg';
import pureversity from './assets/pureversity.jpg';
import purevpn from './assets/purevpn.jpeg';
import sadiq from './assets/sadiq.jpg';
import styles from './style.module.sass';
import upwork from './assets/upwork.png';
import { useState } from "react";
import valider from './assets/valider.jpg';

export interface ContentFrameProps {
    tabActive: string;
}

interface TileData {
    id?: number;
    title: string;
    subtitle: string;
    imageUrl: string;
    jsonUrl: string;
    points: string[];
    demoChild?: React.ReactNode;
}


const ContentFrame: React.FC<ContentFrameProps> = ({ tabActive = 'tab1' }) => {
    const imageArray = [pureversity.src, gaditek.src, upwork.src, dbc.src, asaan.src, valider.src]
    const data: TileData[] = [{
        id: 1,
        title: 'Delta Blue Carbon',
        subtitle: 'Associate Application Developer',
        imageUrl: dbc.src,
        jsonUrl: '/lottieAnimation/assets/exp_mobile.json',
        points: [
            "Pioneered 'Survey Kollect' Development: Led the development of 'Survey Kollect', a cutting-edge mobile application tailored to enhance data collection for environmental projects focusing on mangrove and forestation in Pakistan.",
            "Utilized Flutter Framework: Employed Flutter to build a responsive and intuitive user interface, leveraging the framework’s full capabilities to enhance application functionality and user experience.",
            "Implemented BLoC Architecture: Integrated the Business Logic Component (BLoC) for state management to ensure scalable and predictable data handling within the application, enhancing performance and maintainability.",
            "Offline Functionality with Cloud Syncing: Engineered the application to operate seamlessly offline with advanced data syncing capabilities via AWS Elastic Beanstalk and RDS, ensuring data integrity and availability.",
            "Enhanced Data Security: Prioritized application and database security by implementing robust data encryption and secure transfer protocols, protecting sensitive environmental data.",
            "Led Full Lifecycle Development: Managed the project from concept through deployment, including coding, troubleshooting, and iterative testing, which culminated in a reliable and secure mobile application.",
            "Continuous Improvement and Maintenance: Kept pace with the latest developments in Flutter technology to continually enhance the application’s features and performance.",
            "Designed for User Experience: Focused on delivering a seamless UI/UX, which significantly improved the efficiency of data collection processes for field workers."
        ],
        demoChild:

            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7184445655245799426" height="800" width="504" title="Embedded post"></iframe>


    },
    {
        id: 2,
        title: 'Institute of Business Administration',
        subtitle: 'Database Teaching Assistant',
        imageUrl: iba.src,
        jsonUrl: '/lottieAnimation/assets/DatabaseAnimation.json',
        points: [
            "Spearheaded comprehensive instructional sessions on Node.js, enhancing backend API development skills among students at IBA.",
            "Led hands-on training in Oracle Database integration with Node.js, covering SQL queries, schema design, and database management practices.",
            "Conducted advanced training sessions in React.js, focusing on component-based architecture, state management, and dynamic UI creation.",
            "Created and distributed a foundational code template for student projects, standardizing the start point for backend and frontend development.",
            "Managed database labs focusing on OracleDB and MongoDB, ensuring operational excellence and adherence to best database practices.",
            "Developed a curriculum that incorporates the latest trends and technologies in Node.js, OracleDB, MongoDB, and React.js.",
            "Provided critical support and guidance in database labs, helping students grasp complex database concepts and practical implementations.",
            "Played a pivotal role in updating course materials to reflect the most current and relevant industry standards and practices.",
            "Emphasized responsive and dynamic web application development through practical React.js training."
        ]
    },
    {
        id: 3,
        title: 'Sadiq.Ai',
        subtitle: 'Web Developement Intern',
        imageUrl: sadiq.src,
        jsonUrl: '/lottieAnimation/assets/WebExpAnimation.json',
        points: [
            "Leveraged Next.js and TypeScript to develop a responsive and interactive interface for the PureVersity Member's Area, enhancing user experience and application performance.",
            "Employed Material-UI to create an aesthetically pleasing and accessible user interface, catering to a diverse user base and ensuring high usability standards.",
            "Collaborated effectively with backend developers to ensure seamless integration and consistency across frontend and backend systems.",
            "Utilized advanced state management techniques in Next.js to maintain a smooth and reactive user flow, improving overall site responsiveness.",
            "Focused on continuous learning and application of the latest frontend technologies, bringing innovative solutions to the development process.",
            "Played a key role in the frontend development of the PureVersity Member’s Area, a project contracted by PureVPN and affiliated with Digital Ocean, demonstrating the ability to work under prominent tech affiliations.",
            "Dedicated to enhancing code reliability and maintainability using TypeScript, ensuring robust and error-free functionality throughout the project."
        ],
        demoChild: <Image src={membersArea} alt="PureVersity" width={300} height={300} />
    },
    {
        id: 4,
        title: 'Valider',
        subtitle: 'Junior Software Engineer',
        imageUrl: valider.src,
        jsonUrl: '/lottieAnimation/assets/python_exp.json',
        points: [
            "Implemented the GPT-3 API with 175 billion parameters for automated job description generation, significantly enhancing the recruitment process by delivering personalized and engaging content.",
            "Led the development of LinkedIn scraping functionality for the Valider Chrome extension, enabling recruiters to effortlessly rank applicants through a seamless and efficient solution.",
            "Played a pivotal role in driving technological innovation at Valider, demonstrating a strong ability to harness advanced technologies to solve complex problems and improve business operations.",
            "Contributed to two major projects that leveraged my expertise in machine learning and web scraping, showcasing my technical prowess and problem-solving capabilities in a dynamic startup environment.",
            "Enhanced candidate experience and attracted top talent by automating and personalizing job description creation, utilizing a persona-based tone with the GPT-3 language model.",
            "Improved recruitment workflows by developing a tool that streamlined the ranking and evaluation of candidates directly from LinkedIn, demonstrating significant value to recruitment strategies.",
            "My commitment to integrating advanced technologies and dedication to quality were instrumental in the successful implementation of impactful solutions at Valider."
        ]
    },
    {
        id: 5,
        title: 'Mindstorm Studios',
        subtitle: 'Game Developer',
        imageUrl: mindstorm.src,
        jsonUrl: '/lottieAnimation/assets/gameExpAnimation.json',
        points: [
            "Pioneered the development of 'Stomper Jumper', an engaging puzzle game, utilizing C# to bring the game concept to life.",
            "Implemented advanced game mechanics such as collision detection, intuitive swiping controls, and dynamic level management to enhance gameplay.",
            "Designed a comprehensive and user-friendly interface, ensuring smooth navigation and effective game controls.",
            "Enhanced player engagement through features like a star-based ranking system, instructional tutorial videos, and celebratory win screens.",
            "Contributed actively in the Rookie Game Jam, enhancing my teamwork and creative problem-solving skills, and sparking a continuing passion for innovative game development."
        ],
        demoChild: <iframe width="1241" height="698" src="https://www.youtube.com/embed/m9jX2dL9KWk" title="Stumper_Jumper!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    },
    {
        id: 6,
        title: 'Valider',
        subtitle: 'Intern',
        imageUrl: valider.src,
        jsonUrl: '/lottieAnimation/assets/python_exp.json',
        points: [
            'Developed a Chrome extension for LinkedIn scraping, enabling recruiters to rank applicants based on specific criteria and streamline the hiring process.',

        ]
    }
    ]


    const dataProjects: TileData[] = [{
        id: 1,
        title: 'Delta Blue Carbon',
        subtitle: 'Flutter Application',
        imageUrl: dbc.src,
        jsonUrl: '/lottieAnimation/assets/exp_mobile.json',
        points: [
            "Pioneered 'Survey Kollect' Development: Led the development of 'Survey Kollect', a cutting-edge mobile application tailored to enhance data collection for environmental projects focusing on mangrove and forestation in Pakistan.",
            "Utilized Flutter Framework: Employed Flutter to build a responsive and intuitive user interface, leveraging the framework’s full capabilities to enhance application functionality and user experience.",
            "Implemented BLoC Architecture: Integrated the Business Logic Component (BLoC) for state management to ensure scalable and predictable data handling within the application, enhancing performance and maintainability.",
            "Offline Functionality with Cloud Syncing: Engineered the application to operate seamlessly offline with advanced data syncing capabilities via AWS Elastic Beanstalk and RDS, ensuring data integrity and availability.",
            "Enhanced Data Security: Prioritized application and database security by implementing robust data encryption and secure transfer protocols, protecting sensitive environmental data.",
            "Led Full Lifecycle Development: Managed the project from concept through deployment, including coding, troubleshooting, and iterative testing, which culminated in a reliable and secure mobile application.",
            "Continuous Improvement and Maintenance: Kept pace with the latest developments in Flutter technology to continually enhance the application’s features and performance.",
            "Designed for User Experience: Focused on delivering a seamless UI/UX, which significantly improved the efficiency of data collection processes for field workers."
        ],
        demoChild:

            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7184445655245799426" height="800" width="504" title="Embedded post"></iframe>


    },
    {
        id: 2,
        title: 'Nahj-Ul-Balagha',
        subtitle: 'Flutter Application',
        imageUrl: iba.src,
        jsonUrl: '/lottieAnimation/assets/NajhAnimation.json',
        points: [
            "Developed the Naj-ul-Balagha mobile app using Flutter, integrating cutting-edge features for a secure and personalized user experience.",
            "Integrated Firebase Firestore for efficient real-time data storage and management, enabling users to save and access personal notes and bookmarks within the app.",
            "Implemented Firebase Auth to ensure robust user authentication, providing a secure environment for users to engage with their personalized content.",
            "Employed the BLoC architecture for state management, enhancing the app's maintainability, testability, and scalability.",
            "Conducted thorough testing to ensure app reliability, performance, and seamless data synchronization with Firestore, ensuring a consistent user experience across all devices.",
            "Focused on creating a user-friendly interface that supports secure login procedures, personalized note-taking, and bookmarking functionalities.",
            "Leveraged Flutter and Firebase technologies to create a mobile application that serves as a valuable educational tool for individuals studying the Naj-ul-Balagha teachings."
        ],
        demoChild: <iframe width="1280" height="689" src="https://www.youtube.com/embed/SKYey-OjAtQ" title="najh ul baagha" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    },
    {
        id: 3,
        title: 'PureVersity Member’s Area',
        subtitle: 'Website',
        imageUrl: pureversity.src,
        jsonUrl: '/lottieAnimation/assets/pureversityAnimation.json',
        points: [
            "Led the development of the PureVersity Member’s Area, an online learning platform, enhancing user engagement through an intuitive and visually appealing interface.",
            "Utilized Next.js and TypeScript to build a robust and scalable frontend architecture, ensuring seamless integration with backend services for a cohesive user experience.",
            "Designed the user interface using Material-UI, adhering to modern design trends and usability standards to create a responsive and accessible web environment.",
            "Contributed to a collaborative project under the auspices of PureVPN and Gaditek, with an affiliation to Digital Ocean, focusing on elevating the functionality and aesthetic of the PureVersity platform.",
            "Emphasized continuous professional development by staying updated with the latest technologies in frontend development, significantly impacting the project’s success.",
            "Ensured that the frontend design was fully responsive, facilitating a seamless user experience across various devices and platforms."
        ],
        demoChild: 
        <>
        <Image src={membersArea} alt="PureVersity" width={300} height={300}/>
        </>
    },
    {
        id: 4,
        title: 'Asaan Retail',
        subtitle: 'Website',
        imageUrl: asaan.src,
        jsonUrl: '/lottieAnimation/assets/AsaanAnimation.json',
        points: [
            "Developed the frontend of 'Asaan Retail', a dynamic retail platform integrating services from over 15 partners, using Next.js, HTML, SaSS, and JavaScript.",
            "Prioritized custom design implementations, significantly minimizing the use of AntDesign Components to ensure a unique and sleek user experience.",
            "Received high praise from clients for delivering a sophisticated user interface that notably enhanced the visual appeal and usability of the 'Asaan Retail' website.",
            "Demonstrated high proficiency in modern web technologies including Next.js and React.js, successfully deploying a responsive and performant frontend infrastructure.",
            "Crafted bespoke designs that enhanced user interaction and overall appeal, setting the platform apart from conventional retail interfaces.",
            "Achieved greater design flexibility and a tailored user experience through a focused reduction in dependency on pre-built UI components.",
            "Contributed to the platform’s success by meeting and exceeding client expectations in design quality and functional efficiency, as reflected in client feedback."
        ]
    },
    {
        id: 5,
        title: 'Stomper Jumper',
        subtitle: 'Game Development',
        imageUrl: mindstorm.src,
        jsonUrl: '/lottieAnimation/assets/gameExpAnimation.json',
        points: [
            "Pioneered the development of 'Stomper Jumper', an engaging puzzle game, utilizing C# to bring the game concept to life.",
            "Implemented advanced game mechanics such as collision detection, intuitive swiping controls, and dynamic level management to enhance gameplay.",
            "Designed a comprehensive and user-friendly interface, ensuring smooth navigation and effective game controls.",
            "Enhanced player engagement through features like a star-based ranking system, instructional tutorial videos, and celebratory win screens.",
            "Contributed actively in the Rookie Game Jam, enhancing my teamwork and creative problem-solving skills, and sparking a continuing passion for innovative game development."
        ],
        demoChild: <iframe width="1241" height="698" src="https://www.youtube.com/embed/m9jX2dL9KWk" title="Stumper_Jumper!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    },
    ]


    var configIntro: LottieAnimationProps = {
        width: 300,
        height: 300,
        path: '/lottieAnimation/assets/introAnimation.json'
    }


    const IntroductionComponent: React.FC = () => {
        return (
            <>
                {/* <div className={styles.Animation}> */}
                <div>
                    <span className={styles.contentHeading}>Introduction</span>
                </div>
                <div className={styles.gradientDivider} />
                <div className={cn(styles.panes)}>
                    <div className={cn(styles.leftPane)}>
                        <span className={cn(styles.contentText)}>
                            Welcome to the digital playground of a passionate technologist. From a young age, I've been mesmerized by the potential of technology to turn dreams into reality, a passion that has only grown as I pursued my Computer Science degree at the <b>Institute of Business Administration</b>, maintaining a CGPA of <b>3.74</b>. My journey through the tech landscape is driven by a relentless quest for knowledge and a dedication to solving complex challenges. Here, you'll discover a portfolio enriched by diverse projects across <b>JavaScript, Java, React, Next.js, Flutter, Node.js and python </b>—each a testament to my commitment to not just mastering code but creating meaningful, resonant experiences. Join me in pushing the boundaries of what's possible, as we innovate and inspire together to build the future.
                        </span>
                    </div>
                    <div className={cn(styles.rightPane)}>
                        <LottieAnimation {...configIntro} />
                    </div>

                </div>
                {/* </div> */}
            </>
        )
    };



    const ExperenceComponent: React.FC = () => {
        const configExp: LottieAnimationProps = {
            width: 200,
            height: 200,
            path: '/lottieAnimation/assets/animationExperience.json'
        }

        const pairs: TileData[][] = data.reduce<TileData[][]>((result, value, index, array) => {
            if (index % 2 === 0) {
                result.push(array.slice(index, index + 2));
            }
            return result;

        }, []);

        const [isOpen, setIsOpen] = useState(-1);

        const openModal = (num: number) => setIsOpen(num);
        const closeModal = () => setIsOpen(-1);


        return (
            <>
                <div>
                    <span className={styles.contentHeading}>Experience</span>
                </div>
                <div className={styles.gradientDivider} />
                <div className={cn(styles.panesv1)}>
                    <div className={cn(styles.convertToRow)}>
                        <div>
                            <span className={cn(styles.contentText)}>
                                Welcome to my Professional Experience section! Here, you'll explore key projects and roles that have honed my skills and shaped my career in technology. I invite you to see how my journey aligns with your goals as we look towards future collaborations and achievements.
                            </span>
                        </div>
                        <div>
                            <LottieAnimation {...configExp} />
                        </div>

                    </div>

                    {pairs.map((pair, index) => (
                        <div className={cn(styles.convertToRow)} key={index}>
                            <div>
                                <Tile imageUrl={pair[0].imageUrl} title={pair[0].title} subtitle={pair[0].subtitle} onClick={() => { openModal(pair[0].id ?? -1) }} />
                            </div>
                            {pair[1] && (
                                <div>
                                    <Tile imageUrl={pair[1].imageUrl} title={pair[1].title} subtitle={pair[1].subtitle} onClick={() => { openModal(pair[1].id ?? -1) }} />
                                </div>
                            )}
                        </div>
                    ))}

                    {
                        data.map((tile, index) => {
                            return (
                                <ArticleModal imageUrl={tile.imageUrl} title={tile.title} description={tile.subtitle} isOpen={isOpen === tile.id} onClose={closeModal} jsonUrl={tile.jsonUrl} points={tile.points} demoChild={tile.demoChild ?? null} />

                            )
                        })
                    }

                </div>



            </>
        )
    }

    const ProjectsComponent: React.FC = () => {
        const configExp: LottieAnimationProps = {
            width: 200,
            height: 200,
            path: '/lottieAnimation/assets/projectsAnimation.json'
        }

        const pairs: TileData[][] = dataProjects.reduce<TileData[][]>((result, value, index, array) => {
            if (index % 2 === 0) {
                result.push(array.slice(index, index + 2));
            }
            return result;

        }, []);

        const [isOpen, setIsOpen] = useState(-1);

        const openModal = (num: number) => setIsOpen(num);
        const closeModal = () => setIsOpen(-1);


        return (
            <>
                <div>
                    <span className={styles.contentHeading}>Projects</span>
                </div>
                <div className={styles.gradientDivider} />
                <div className={cn(styles.panesv1)}>
                    <div className={cn(styles.convertToRow)}>
                        <div>
                            <span className={cn(styles.contentText)}>
                                Greetings! Explore this section to discover the projects that exemplify my skills and my journey as a developer. Each project reflects my commitment to excellence and innovation.
                            </span>
                        </div>
                        <div>
                            <LottieAnimation {...configExp} />
                        </div>

                    </div>



                    {pairs.map((pair, index) => (
                        <div className={cn(styles.convertToRow)} key={index}>
                            <div>
                                <Tile imageUrl={pair[0].imageUrl} title={pair[0].title} subtitle={pair[0].subtitle} onClick={() => { openModal(pair[0].id ?? -1) }} />
                            </div>
                            {pair[1] && (
                                <div>
                                    <Tile imageUrl={pair[1].imageUrl} title={pair[1].title} subtitle={pair[1].subtitle} onClick={() => { openModal(pair[1].id ?? -1) }} />
                                </div>
                            )}
                        </div>
                    ))}

                    <span className={cn(styles.contentText, styles.paddingTop)}>
                        My Clients:
                    </span>
                    <Carousel imagesarray={imageArray} />

                    {
                        dataProjects.map((tile, index) => {
                            return (
                                // <div key={index}>
                                <ArticleModal imageUrl={tile.imageUrl} title={tile.title} description={tile.subtitle} isOpen={isOpen === tile.id} onClose={closeModal} jsonUrl={tile.jsonUrl} points={tile.points} demoChild={tile.demoChild ?? null} />
                                // </div>
                            )
                        })
                    }

                </div>





            </>
        )

    }

    const EducationComponent: React.FC = () => {
        const configEdu: LottieAnimationProps = {
            width: 200,
            height: 200,
            path: '/lottieAnimation/assets/EducationAnimation.json'
        }
        return (
            <>
                <div>
                    <span className={styles.contentHeading}>Education</span>
                </div>
                <div className={styles.gradientDivider} />
                <div className={cn(styles.panesv1)}>
                <div className={cn(styles.convertToRow)}>
                    <div>
                        <span className={cn(styles.contentText)}>
                            Welcome to the Education section of my portfolio! Here, you’ll discover the academic journey that has shaped my expertise and fueled my passion for technology. From rigorous coursework to hands-on projects, each educational experience has contributed to my professional growth. Dive in to see how my academic achievements and the knowledge I've gained form the foundation of my technical skills and professional capabilities.
                        </span>
                    </div>
                    <div>
                        <LottieAnimation {...configEdu} />
                    </div>

                </div>

                <span className={cn(styles.contentText, styles.paddingTop)}>
                        My Education: 
                    </span>

                    <div className = {cn(styles.convertToColumn)}>
                    <EducationTile 
                        imageUrl={iba.src}
                        schoolName="Institute Of Business Administration, Karachi"
                        graduationYear="2024"
                        cgpa="3.74"
                    />
                    <EducationTile 
                        imageUrl={dj.src}
                        schoolName="DJ Govt. Science College, Karachi"
                        graduationYear="2020"
                        cgpa="3.12"
                    />
                    <EducationTile 
                        imageUrl={kps.src}
                        schoolName="Karachi public School"
                        graduationYear="2018"
                        cgpa="3.44"
                    />
                    </div>
                
            </div>
            </>
        )
    }

    return (
        <div className={styles.contentFrame}>
            <div className={styles.content}>
                {
                    tabActive === 'tab1' ? <IntroductionComponent /> : <></>
                }
                {
                    tabActive === 'tab2' ? <ExperenceComponent /> : <></>
                }
                {
                    tabActive === 'tab3' ? <ProjectsComponent /> : <></>
                }
                {
                    tabActive === 'tab4' ? <EducationComponent /> : <></>
                }


            </div>

        </div>
    );
}

export default ContentFrame;