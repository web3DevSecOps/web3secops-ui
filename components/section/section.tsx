import {
  Container,
  HTMLChakraProps,
  StyleProps,
  ThemingProps,
  chakra,
  omitThemingProps,
  useStyleConfig,
} from '@chakra-ui/react'

export interface SectionProps
  extends HTMLChakraProps<'div'>,
    ThemingProps<'Section'> {
  children: React.ReactNode
  innerWidth?: StyleProps['width']
}

export const Section: React.FC<SectionProps> = (props) => {
  const { children, innerWidth = 'container.lg', className, ...rest } = props

  // Retrieve consistent styles using Chakra's theming system
  const styles = useStyleConfig('Section', rest)

  // Remove theming-related props for clean attribute handling
  const ownProps = omitThemingProps(rest)

  // Ensure consistent rendering for hydration
  return (
    <chakra.div __css={styles} {...ownProps}>
      <Container height="full" maxW={innerWidth}>
        {children}
      </Container>
    </chakra.div>
  )
}
