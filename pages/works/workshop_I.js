import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Web3">
    <Container>
      <Title>
        Web3{' '}
        <Badge>
          <Link href="">
            zoom link
          </Link>
        </Badge>
      </Title>

      <P>
        This session focused on the dicussion about ...
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Time</Meta>
          <ListItem> MM-DD-YYYY
          </ListItem>
        </ListItem>
        <ListItem>
          <Meta>Session Leaders</Meta>
          <ListItem> Leader XXX
          </ListItem>
        </ListItem>
        <ListItem>
          <Meta>Topics</Meta>
          <span>Web 3.0, Cryptocurrency, Blockchain</span>
        </ListItem>
        <ListItem>
          <Meta>Notes</Meta>
          <ListItem>
            <span>Notes...</span>
          </ListItem>
          <ListItem>
            <span>Notes...</span>
          </ListItem>
        </ListItem>
      </List>

      <WorkImage src="/images/works/web3.png" alt="web3" />
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
