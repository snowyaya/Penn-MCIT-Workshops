import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const About = () => (
  <Layout title="About us">
    <Container>
      <Title>
        About us{' '}
        <Badge>
        </Badge>
      </Title>
      <P>
        Who are we?
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>...</Meta>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default About
// export { getServerSideProps } from '../../components/chakra'
