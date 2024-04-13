import { useState, useEffect } from 'react';
import "./Experiencia.css";

export default function Experiencia() {
    type Node = {
        date: string;
        title: string;
        title_rank: string;
        content: string[];
        extra: string;
    };
    const [selectedNode, setSelectedNode] = useState<{ node: Node | null, index: number | null }>({ node: null, index: null });
    const nodes = [
        {
            date:'06/2020 - 09/2020', 
            title: 'Viewnext', 
            title_rank: 'Software Developer', 
            content: [
                'As a Full Stack Developer and Chatbot specialist using IBM Watson, my responsibilities range from managing and interpreting data in relational databases, such as MySQL and Oracle SQL, to analysis and planning before the commencement and the development of the apps. I specialize in:',
                '• Creating processes for database use & management.',
                '• Developing back-end for various business management applications, mainly using Java, and occasionally Python, C# and node.js, with a focus on application scalability and security.',
                '• Implementing front-end solutions with JavaScript and frameworks like Angular and React, ensuring a good user experience.',
                '• Designing and developing chatbots with IBM Watson, integrating natural language understanding tools and connecting them with the back-end for a more intelligent, secure, and personalized final user interaction.',
                'This combination of skills allows me to contribute comprehensively to the software development cycle, from conception to final implementation, with a particular focus on creating intelligent chatbot solutions.'
            ], 
            extra: 'Extra info for Node 1'
        },
        {
            date:'06/2020 - 09/2020', 
            title: 'Minsait', 
            title_rank: 'Software Developer', 
            content: [
                'As a Full Stack Developer and Chatbot specialist using IBM Watson, my responsibilities range from managing and interpreting data in relational databases, such as MySQL and Oracle SQL, to analysis and planning before the commencement and the development of the apps. I specialize in:',
                '• Creating processes for database use & management.',
                '• Developing back-end for various business management applications, mainly using Java, and occasionally Python, C# and node.js, with a focus on application scalability and security.',
                '• Implementing front-end solutions with JavaScript and frameworks like Angular and React, ensuring a good user experience.',
                '• Designing and developing chatbots with IBM Watson, integrating natural language understanding tools and connecting them with the back-end for a more intelligent, secure, and personalized final user interaction.',
                'This combination of skills allows me to contribute comprehensively to the software development cycle, from conception to final implementation, with a particular focus on creating intelligent chatbot solutions.'
            ], 
            extra: 'Extra info for Node 1'
        },
        {
            date:'06/2020 - 09/2020', 
            title: 'Minsait', 
            title_rank: 'Software Developer', 
            content: [
                'As a Full Stack Developer and Chatbot specialist using IBM Watson, my responsibilities range from managing and interpreting data in relational databases, such as MySQL and Oracle SQL, to analysis and planning before the commencement and the development of the apps. I specialize in:',
                '• Creating processes for database use & management.',
                '• Developing back-end for various business management applications, mainly using Java, and occasionally Python, C# and node.js, with a focus on application scalability and security.',
                '• Implementing front-end solutions with JavaScript and frameworks like Angular and React, ensuring a good user experience.',
                '• Designing and developing chatbots with IBM Watson, integrating natural language understanding tools and connecting them with the back-end for a more intelligent, secure, and personalized final user interaction.',
                'This combination of skills allows me to contribute comprehensively to the software development cycle, from conception to final implementation, with a particular focus on creating intelligent chatbot solutions.'
            ],  
            extra: 'Extra info for Node 1'
        },
        {
            date:'06/2020 - Actualidad', 
            title: 'Minsait', 
            title_rank: 'FullStack & Chatbot Developer', 
            content: [
                'As a Full Stack Developer and Chatbot specialist using IBM Watson, my responsibilities range from managing and interpreting data in relational databases, such as MySQL and Oracle SQL, to analysis and planning before the commencement and the development of the apps. I specialize in:',
                '• Creating processes for database use & management.',
                '• Developing back-end for various business management applications, mainly using Java, and occasionally Python, C# and node.js, with a focus on application scalability and security.',
                '• Implementing front-end solutions with JavaScript and frameworks like Angular and React, ensuring a good user experience.',
                '• Designing and developing chatbots with IBM Watson, integrating natural language understanding tools and connecting them with the back-end for a more intelligent, secure, and personalized final user interaction.',
                'This combination of skills allows me to contribute comprehensively to the software development cycle, from conception to final implementation, with a particular focus on creating intelligent chatbot solutions.'
            ], 
            extra: 'Extra info for Node 1'
        },
    ];

    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        setIsFading(true);
        const timer = setTimeout(() => setIsFading(false), 500);
        return () => clearTimeout(timer);
    }, [selectedNode]);

    return(
        <div id='experiencia'>
            <h1>Experiencia</h1>
            <div className='timeline'>
                <ol>
                    {nodes.map((node, index) => (
                        <li key={index} className={selectedNode.index === index ? 'active' : ''} onClick={() => setSelectedNode({ node, index })}>
                            <div className='node'>
                                <span>{node.date}</span>
                                <div className='node-content'>
                                    <p>{node.title}</p>
                                    <p>{node.title_rank}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
            <div className={`timelineContent ${isFading ? 'fade' : ''}`}>
                {selectedNode.node ? (
                    <div>
                        <h2>{selectedNode.node.title}</h2>
                        <div className='workContent'>
                            {selectedNode.node.content.map((task, index) => (
                                <p key={index}>{task}</p>
                            ))}
                        </div>
                        <p>{selectedNode.node.extra}</p>
                    </div>
                ) : (
                    <div>
                        <h2>Selecciona un nodo</h2>
                    </div>
                )}
            </div>
        </div>  
    )
}