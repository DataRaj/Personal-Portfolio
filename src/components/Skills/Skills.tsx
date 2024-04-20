import {
    Container,
    Heading,
    Stack,
    StackDivider,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react'
import { FC } from 'react'
import {
    SiAmazonaws,
    SiDocker,
    SiExpress,
    SiGit,
    SiGo,
    SiGraphql,
    SiHtml5,
    SiIntellijidea,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiReact,
    SiSass,
    SiTailwindcss,
    SiTypescript,
    SiVisualstudiocode
} from 'react-icons/si'

import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'
import Card from '../generics/Card'
import SkillItem from './SkillItem'
import SkillSection from './SkillSection'

const Skills: FC = () => {
    return (
        <Element name='skills'>
            <Container maxW={'5xl'} p={6.5} mt={20}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Skills</Heading>
                    </Fade>
                    <Stack direction={'row'}>
                        <Card>
                            <Stack
                                direction={['column', 'row']}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue(
                                            'gray.300',
                                            'gray.600'
                                        )}
                                    />
                                }
                                spacing={8}
                                align={'flex-start'}
                            >
                                <SkillSection title={'Languages'}>
                                    <SkillItem icon={SiJavascript} name='Javascript' />
                                    <SkillItem icon={SiTypescript} name='Typescript' />
                                    <SkillItem icon={SiHtml5} name='HTML/CSS' />
                                    {/* <SkillItem icon={FaJava} name='Java'/> */}
                                    <SkillItem icon={SiGo} name='Golang' />
                                </SkillSection>
                                <SkillSection title={'Frameworks'}>
                                    <SkillItem icon={SiReact} name='ReactJS' />
                                    <SkillItem icon={SiNodedotjs} name='NodeJS'/>
                                    <SkillItem icon={SiNestjs} name='NestJS'/>
                                    <SkillItem icon={SiExpress} name='Express'/>
                                    {/* <SkillItem icon={SiAngular} name='Angular'/> */}
                                    {/* <SkillItem icon={SiSpring} name='Spring'/> */}
                                    {/* <SkillItem icon={SiSpringboot} name='SpringBoot'/> */}
                                    <SkillItem icon={SiSass} name='SASS' />
                                    <SkillItem icon={SiTailwindcss} name='Tailwind CSS' />
                                </SkillSection>
                            </Stack>
                        </Card>
                        <Card>
                            <Stack
                                direction={['column', 'row']}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue(
                                            'gray.300',
                                            'gray.600'
                                        )}
                                    />
                                }
                                spacing={8}
                                align={'flex-start'}
                            >
                                <SkillSection title={'Databases'}>
                                    <SkillItem icon={SiMysql} name='MySQL' />
                                    <SkillItem icon={SiPostgresql} name='PostgreSQL' />
                                    <SkillItem icon={SiMongodb} name='MongoDB' />
                                    
                                </SkillSection>
                                <SkillSection title={'Other tools'}>
                                    <SkillItem icon={SiGraphql} name='GraphQL' />
                                    <SkillItem icon={SiPrisma} name='Prisma'/>
                                    <SkillItem icon={SiGit} name='Git' />
                                    <SkillItem icon={SiDocker} name='Docker' />
                                    <SkillItem icon={SiVisualstudiocode} name='VS Code' />
                                    <SkillItem icon={SiIntellijidea} name='Intellij Idea' />
                                    <SkillItem icon={SiAmazonaws} name='AWS' />
                                    <SkillItem icon={SiPostman} name='Postman' />
                                </SkillSection>
                            </Stack>
                        </Card>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    )
}

export default Skills
