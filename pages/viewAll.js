import Link from 'next/link'
import { Grid, Card, Text, Spacer, Table, Input, Button } from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/react";

import { useRouter } from 'next/router'

export default function viewAll({data, courseid}) {

    const router = useRouter()

    const {cid} = router.query

    return (
      <NextUIProvider>
          View all page
          Current ID is: {courseid}
        
        <Table

                aria-label="Example table with static content"
                css={{
                  height: "auto",
                  minWidth: "100%",

                }}

              >
                <Table.Header>

                  <Table.Column>ID</Table.Column>
                  <Table.Column>Grade</Table.Column>
                  <Table.Column>Firstname</Table.Column>
                  <Table.Column>Lastname </Table.Column>
                  <Table.Column>Email </Table.Column>
                  <Table.Column>Address </Table.Column>
                  <Table.Column>Telephone </Table.Column>
                  <Table.Column>Course ID </Table.Column>
                  

                </Table.Header>
                <Table.Body >

                  <Table.Row key="1">
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
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
                        <Table.Cell>
                        <Input id={`grade_`+item.id}   labelPlaceholder={`grade_`+item.id}/>


                        <Button type="button" onClick={(save) => saveData(item.id, courseid)}  size="xs">Save</Button>
         
                      </Table.Cell>
                        <Table.Cell>{item.firstname} </Table.Cell>
                        <Table.Cell>{item.lastname} </Table.Cell>
                        <Table.Cell>{item.email} </Table.Cell>
                        <Table.Cell>{item.address} </Table.Cell>
                        <Table.Cell>{item.telephone} </Table.Cell> 
                        <Table.Cell>{item.cid} </Table.Cell>                        
                        
                      </Table.Row>


                    ))
                  }

                </Table.Body>
              </Table>
              </NextUIProvider>
              
    )

    async function saveData(id, courseid) {

      let gradeValue = document.getElementById('grade_'+id).value;
      alert(id + " " + gradeValue +" "+courseid);
     
  
       
      

      const {cid} = router.query


  
    // Get data from the form.
    const data = {
      sid: id,
      grade: gradeValue,
      cid: courseid 
  
    }
  
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
  
    // API endpoint where we send form data.
    const endpoint = '/api/saveGrade'
  
  
  
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
  
   
  
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
  
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
  

      alert('Saved!');
    }
  
  
}



export async function getServerSideProps(context) {
    let id = context.query.id;
    let sid = context.query.id;

    console.log("current id" + id);

    const res = await fetch(`http://localhost:3000/api/getEnrolledStudents?id=`+sid);
    const data = await res.json()
  
  
    return {
      props: { data, sid }, // will be passed to the page component as props
    }
  }