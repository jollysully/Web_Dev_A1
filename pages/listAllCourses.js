import { Grid, Card, Text, Spacer, Table } from "@nextui-org/react";
import Link from 'next/link';



export default function ListAllCourses({ data }) {

  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };


  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          <MockItem text="1 of 3" />
        </Grid>

      </Grid.Container>


      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>


        <Card css={{ h: "$240", $$cardColor: '$colors$green300', w: "100%" }}>
            <Card.Body>
              <Table

                aria-label="Example table with static content"
                css={{
                  height: "auto",
                  minWidth: "100%",

                }}

              >
                <Table.Header>

                  <Table.Column>ID</Table.Column>
                  <Table.Column>Title</Table.Column>
                  <Table.Column>Description </Table.Column>
                  <Table.Column>NFQ </Table.Column>
                  <Table.Column>Course ID </Table.Column>
                  <Table.Column>Option </Table.Column>
                  

                </Table.Header>
                <Table.Body >

                  <Table.Row key="1">
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    
                    

                  </Table.Row>

                  {

                    data &&
                    data.map((item, i) => (
                      // print out the table from the JSON we got
                      // from the API

                      <Table.Row key="1">

                        <Table.Cell>{item.id} </Table.Cell>
                        <Table.Cell>{item.Title} </Table.Cell>
                        <Table.Cell>{item.Description} </Table.Cell>
                        <Table.Cell>{item.nfq} </Table.Cell>
                        <Table.Cell>{item.courseid} </Table.Cell>                       
                        <Table.Cell><Link href={'/viewAll?id=' + item.id}>View</Link></Table.Cell>
                      </Table.Row>


                    ))
                  }

                </Table.Body>
              </Table>

            </Card.Body>
          </Card>

        </Grid>

      </Grid.Container>



    </>

  )
}


export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/listCourses`)
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}

