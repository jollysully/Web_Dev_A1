import { Grid, Card, Text, Spacer, Table, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";



export default function ListAllCourses({ data }) {

 


  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          
        <Card css={{ h: "$200", $$cardColor: '$colors$green300', w: "fit-content" }}>
        <Card.Body css={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      
        <Link href="/addCourse">
              <Button type="button" color="secondary" auto> Add Course</Button>
        </Link>
        <Spacer y={0.5} />
        <Link href="/register">
              <Button type="button" color="secondary" auto> Register Student</Button>
        </Link>

            </Card.Body>
          </Card>
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

