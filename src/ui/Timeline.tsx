"use client";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

const steps = [
    { title: 'LastNight', description: 'LastNight était notre premier projet GTA RP', image: '/lastnight.png' },
    { title: 'Changement de direction', description: 'Nous avons décidé de changer de direction pour partir dans un lore et une DA encore jamais vue', image: '/logo.png' },
    { title: 'Naissance de LibertyLife', description: 'LibertyLife est né de cette envie de créer un serveur unique, ce démarquant des autres par son identité et sa DA unique', image: '/logo.png' },
];

export default function CustomTimeline() {
    return (
        <section className="text-center py-10" id='projet'>
            <SectionTitle title="Notre histoire" subTitle="Découvrez notre parcours" />
            <Timeline position="alternate">
                {steps.map((step, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot variant='outlined' style={{backgroundColor: "white", width: 25, height: 25, borderColor: 'lightblue', borderWidth: 3 }} />
                            {index < steps.length - 1 && <TimelineConnector style={{backgroundColor: "white", width: 8}} />}
                        </TimelineSeparator>
                        <TimelineContent className="flex flex-col items-center">
                            <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg max-w-md mb-2 bg-white transition-all duration-300 hover:drop-shadow-lg">
                                <Image
                                    src={step.image}
                                    alt="Logo"
                                    width={250}
                                    height={250}
                                    className="mb-4"
                                />
                                <h2 className="text-xl font-bold mb-2 ">{step.title}</h2>
                                <p className=" mb-2">{step.description}</p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </section>
    );
}
