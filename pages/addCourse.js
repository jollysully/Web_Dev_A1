import React from "react";
import { Link } from "@nextui-org/react";
import {useRouter} from 'next/router'

import { Container, Card, Row, Text, Grid, Col, Spacer, Loading, Dropdown, Navbar, Input, Button } from "@nextui-org/react";


export default function addCourse({data}) {
  const router = useRouter()


  // Handle the submit for the form
  async function handleSubmit(event) {

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const Title = document.querySelector('#Title').value

       console.log("Title is " + Title);

       const Description = document.querySelector('#Description').value

       console.log("Description is " + Description);

       const nfq = document.querySelector('#nfq').value

       console.log("nfq is " + nfq);

       const courseyear = document.querySelector('#courseyear').value

       console.log("courseyear is " + courseyear);

       

        // Get data from the form.
        const data = {
            Title: event.target.Title.value,
            Description: event.target.Description.value,
            nfq: event.target.nfq.value,
            courseyear: event.target.courseyear.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/addCourse'


    
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
        alert(`server result: ${result}`)


    }

    return(
      <Card css={{ $$cardColor: '$colors$green300' }}>
            <Card.Body>
              <Text h6 size={15} color="black" css={{ m: 0 }}>
                Please Register here!
              </Text>
                
                <Spacer y={2.0} />
                
                
                <Grid>

                    <form onSubmit={handleSubmit}>
               
   
                    <Input id="Title" size="md" placeholder="Medium" shadow={false} clearable bordered labelPlaceholder="Title" status="secondary" color="secondary"  initialValue="" />                              
                    <Spacer y={1.5} />
                    
                    <Input id="Description" size="md" placeholder="Medium" shadow={false} clearable bordered labelPlaceholder="Description" status="secondary" color="secondary"  initialValue="" />
                    <Spacer y={1.5} />
                               
                    <Input id="nfq" size="md" placeholder="Medium" shadow={false} clearable bordered labelPlaceholder="nfq" color="secondary" status="secondary"  initialValue="" />
                    <Spacer y={1.5} />
                    
                    <Input id="courseyear" size="md" placeholder="Medium" shadow={false} clearable bordered labelPlaceholder="courseyear" color="secondary" status="secondary"  initialValue="" />
                    <Spacer y={1.5} />
  
                    <Button type="submit"  color="gradient" auto ghost > Submit </Button>
                    
                    <Spacer y={1.5}/>

                    

                    </form>
                    <Link href="http://localhost:3000/addCourse"color="success">
                      <Button type="submit" color="secondary" auto>Add Course </Button>
                    </Link>

                  </Grid>
                    
            </Card.Body>
          </Card>
    )
}