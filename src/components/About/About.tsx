import { FC } from 'react'
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue,
    Flex,
    Center,
    Link,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import headshot from '../../media/headshot.jpg'

const About: FC = () => {
    return (
        <Element name='aboutme'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>About me</Heading>
                    </Fade>
                    <Stack
                        position='relative'
                        alignItems='center'
                        direction={['column', 'row']}
                        textAlign={{ base: 'left', sm: 'justify', lg: 'left' }}
                    >
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src={headshot}
                            border={`3px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                        />
                        <VStack spacing={4} p={[10, 4]} pl={[10, 50]}>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👋🏼</Center>
                                    <Text>
                                        Hi Folks, Dattaraj here and I recently completed my grads from {' '}
                                        <b> KJ Somaiya College of Engineering</b>, I am highly 
                                        passionated toward a <b>Software Developement</b>{' '}
                                        and all things the geeky things you can call me a Tech nerd  :)
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text>
                                        In BTech, I Secured{' '}
                                        <b>
                                             7.1 SGPA (3.6 GPA)
                                        </b>{' '}
                                        and, In Diploma final year <b> 77.68% (3.7 GPA) </b>,
                                        with some proefessional internship experience.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                        I'm experienced and Skilled in a full-stack web
                                        development - particularly with{' '}
                                        <b>Typescript, Angular</b> and <b>ReactJs</b>.{' '}
                                        <b>Angular and ReactJS</b> are my frontend framework
                                        of choice and I've worked in backend
                                        with{' '}
                                        <b>NodeJS, NestJS, JavaSE, Spring Core</b>{' '}
                                        and <b>Spring Boot</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🧠</Center>
                                    <Text>
                                        In addition to Software Developement, I
                                        am also interested in the Data structures and algorithms for
                                        Effecient Systems and high speed data integrity, as well as Bycylling, Cricket and etc.
                                    </Text>
                                </Flex>
                            </Fade>
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    )
}

export default About
