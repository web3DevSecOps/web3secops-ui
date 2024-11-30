'use client'

import {
  Box,
  ButtonGroup,
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
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
// import pricing from '#data/pricing'
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
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Book Your FREE Security Consultation
                </ButtonLink>
                {/* <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink> */}
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
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
    <Highlights>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Continuous Code Security Scanners"
      >
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Stay protected with <Em>real-time security monitoring</Em>. Our
            automated scanners continuously <Em>analyze your codebase</Em>,
            providing immediate alerts and recommendations.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                Security is a process,
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                not a product.
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
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
            security gaps, threats and internet exposure with detailed reports,{' '}
          </Em>
          highlighting vulnerabilities in your team and infrastructure before
          the audit.
        </Text>
      </HighlightsItem>
    </Highlights>
  )
}

// const FeaturesSection = () => {
//   return (
//     <Features
//       id="features"
//       title={
//         <Heading
//           lineHeight="short"
//           fontSize={['2xl', null, '4xl']}
//           textAlign="left"
//           as="p"
//         >
//           Not your standard
//           <Br /> dashboard template.
//         </Heading>
//       }
//       description={
//         <>
//           Saas UI Pro includes everything you need to build modern frontends.
//           <Br />
//           Use it as a template for your next product or foundation for your
//           design system.
//         </>
//       }
//       align="left"
//       columns={[1, 2, 3]}
//       iconSize={4}
//       features={[
//         {
//           title: '#components.',
//           icon: FiBox,
//           description:
//             'All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.',
//           variant: 'inline',
//         },
//         {
//           title: 'Starterkits.',
//           icon: FiLock,
//           description:
//             'Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.',
//           variant: 'inline',
//         },
//         {
//           title: 'Documentation.',
//           icon: FiSearch,
//           description:
//             'Extensively documented, including storybooks, best practices, use-cases and examples.',
//           variant: 'inline',
//         },
//         {
//           title: 'Onboarding.',
//           icon: FiUserPlus,
//           description:
//             'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
//           variant: 'inline',
//         },
//         {
//           title: 'Feature flags.',
//           icon: FiFlag,
//           description:
//             "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
//           variant: 'inline',
//         },
//         {
//           title: 'Upselling.',
//           icon: FiTrendingUp,
//           description:
//             '#components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
//           variant: 'inline',
//         },
//         {
//           title: 'Themes.',
//           icon: FiToggleLeft,
//           description:
//             'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
//           variant: 'inline',
//         },
//         {
//           title: 'Generators.',
//           icon: FiTerminal,
//           description:
//             'Extend your design system while maintaininig code quality and consistency with built-in generators.',
//           variant: 'inline',
//         },
//         {
//           title: 'Monorepo.',
//           icon: FiCode,
//           description: (
//             <>
//               All code is available as packages in a high-performance{' '}
//               <Link href="https://turborepo.com">Turborepo</Link>, you have full
//               control to modify and adjust it to your workflow.
//             </>
//           ),
//           variant: 'inline',
//         },
//       ]}
//     />
//   )
// }

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

// const PricingSection = () => {
//   return (
//     <Pricing {...pricing}>
//       <Text p="8" textAlign="center" color="muted">
//         VAT may be applicable depending on your location.
//       </Text>
//     </Pricing>
//   )
// }

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
