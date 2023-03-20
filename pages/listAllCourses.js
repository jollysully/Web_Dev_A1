import { Grid, Card, Text } from "@nextui-org/react";
import Link from 'next/link'


export default function ListAllCourses({data}) {

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
      <Grid xs={4}>
        <MockItem text="2 of 3" />
      </Grid>
      <Grid xs={4}>
        <MockItem text="3 of 3" />
      </Grid>
    </Grid.Container>

   
 <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
       

      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
              <tr> 
            <td>ID</td>
            <td>Title</td>
            <td>Description</td>
            <td>NFQ</td>
            <td>Year</td>
            
            </tr>
                        {data &&
                        data.map((item, i) => (
                        // print out the table from the JSON we got
                        // from the API
                        
                        <tr> 
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.nfq}</td>
                            <td>{item.courseyear}</td>
                            </tr>
                        
                    
                        ))   
                        }
        
   
  
       
          
              </Text>
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

