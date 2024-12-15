'use client'

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import { FiGrid, FiSliders, FiSmile, FiThumbsUp } from 'react-icons/fi'
import { TelegramLoginButton } from 'react-social-login-buttons'
import Link from 'next/link'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { Highlights, HighlightsItem } from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import testimonials from '#data/testimonials'

export const meta: Metadata = {
  title: 'Web3 Security Operation',
  description: 'Securing Every Layer of Web3, Beyond Just Audits',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      {/* <FeaturesSection /> */}

      <TestimonialsSection />

      {/* <PricingSection /> */}

      <FaqSection />
      <FormSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Build, Secure, Scale
                <Br /> Web3 with Confidence
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Em>Beyond Smart Contract Audits</Em>
                <Br /> Our security framework integrates with your development{' '}
                <Br /> and infrastructure to reduces costs while helping you
                ship faster.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              {/* <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack> */}

              <ButtonGroup pt="4" pb="12" spacing="8" alignItems="center">
                <ButtonLink
                  colorScheme="primary"
                  size="lg"
                  href="https://tally.so/r/wollzM"
                >
                  Book Consultation
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Phishing Campaigns',
            icon: FiSmile,
            description: 'With over 40% of funds lost to phishing attacks.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'DevSecOps',
            icon: FiThumbsUp,
            description:
              'Integrate security into development to speed up secure delivery.',
            iconPosition: 'left',
            delay: 1.1,
          },
          {
            title: 'Traditional Security Review',
            icon: FiGrid,
            description: 'Over 46% of crypto losses stem from Web2 flaws',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Access Control Review',
            icon: FiSliders,
            description:
              'Over $1.3 billion has been lost due to access control vulnerabilities.',
            iconPosition: 'left',
            delay: 0.8,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Box>
      <Heading
        id="service"
        textAlign="center" // Centers the text horizontally
        display="flex"
        justifyContent="center" // Ensures it aligns in a flex context
        fontSize={{ base: '2xl', md: '4xl' }} // Larger font size, responsive
        fontWeight="bold" // Makes the heading bold
      >
        Service
      </Heading>
      <Highlights>
        <HighlightsItem
          colSpan={[1, null, 2]}
          title="Continuous Code Security Monitoring"
        >
          <VStack alignItems="flex-start" spacing="8">
            <Text color="muted" fontSize="xl">
              Stay protected with <Em>real-time security monitoring</Em>. Our
              automated scanners continuously <Em>analyze your codebase</Em>,
              providing immediate alerts and recommendations.
            </Text>
          </VStack>
        </HighlightsItem>
        <HighlightsItem title="DevOps Pipeline Setup">
          <Text color="muted" fontSize="lg">
            We don&apos;t like to{' '}
            <Em>re-invent the wheel, neither should you.</Em> We help you build
            and maintain a robust CI/CD pipeline that prioritizes security.
          </Text>
        </HighlightsItem>
        {/* <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem> */}
        <HighlightsItem
          colSpan={[1, null, 2]}
          title="Phishing Awareness Training"
        >
          <Text color="muted" fontSize="lg">
            Protect your{' '}
            <Em>team and community from social engineering attacks.</Em> Our
            comprehensive training programs build awareness and resistance to
            common attack vectors.
          </Text>
          <Wrap mt="8">
            {[
              'Social engineering prevention',
              'Team security awareness',
              'Custom training modules',
              'Regular security updates',
              'DPRK',
              'Hiring security hygiene',
              'Hardening',
              'Operational security',
            ].map((value) => (
              <Tag
                key={value}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                {value}
              </Tag>
            ))}
          </Wrap>
        </HighlightsItem>
        <HighlightsItem title="Operational Security Reviews">
          <Text color="muted" fontSize="lg">
            We Audit your <Em>team’s devices, accounts, and security stack </Em>{' '}
            to ensure they're configured in the most secure way, strengthening
            your project's operational framework.
          </Text>
        </HighlightsItem>
        <HighlightsItem colSpan={[1, null, 2]} title="Web2 Security Reviews">
          <Text color="muted" fontSize="lg">
            Bridge the security gap between{' '}
            <Em>
              Web2 and Web3 with our comprehensive infrastructure security
              assessments.
            </Em>{' '}
            Protect your project's traditional tech stack while maintaining
            blockchain security
          </Text>
          <Wrap mt="8">
            {[
              'API security testing',
              'OSWAP TOP 10',
              'Infrastructure vulnerability scanning',
              'Cloud Security',
              'Web application pentesting',
              'Mobile application pentesting',
              'Network security optimization',
              'Senitive secret testing',
              'Black box testing',
            ].map((value) => (
              <Tag
                key={value}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
              >
                {value}
              </Tag>
            ))}
          </Wrap>
        </HighlightsItem>
        <HighlightsItem title="Pre-Audit & Exposure Assessment">
          <Text color="muted" fontSize="lg">
            Uncover{' '}
            <Em>
              security gaps, threats and internet exposure with detailed
              reports,{' '}
            </Em>
            highlighting vulnerabilities in your team and infrastructure before
            the audit.
          </Text>
        </HighlightsItem>
      </Highlights>
    </Box>
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

const FormSection = () => {
  return (
    <Container maxW="container.xl" py={16}>
      <Flex direction="column" align="center" justify="center" width="full">
        <Box>
          <TelegramLoginButton size="50px">
            <Link href="https://t.me/raiders0786">Connect on Telegram</Link>
          </TelegramLoginButton>
        </Box>
      </Flex>
    </Container>
  )
}

export default Home
