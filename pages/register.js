import React from "react";
import { Link } from "@nextui-org/react";
import {useRouter} from 'next/router'

import { Container, Card, Row, Text, Grid, Col, Spacer, Loading, Dropdown, Navbar, Input, Button } from "@nextui-org/react";


export default function register({data}) {
  const router = useRouter()


  // Handle the submit for the form
  async function handleSubmit(event) {

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const firstname = document.querySelector('#firstname').value

       console.log("firstname is " + firstname);

       const lastname = document.querySelector('#lastname').value

       console.log("lastname is " + lastname);

       const email = document.querySelector('#email').value

       console.log("email is " + email);

       const address = document.querySelector('#address').value

       console.log("address is " + address);

       const telephone = document.querySelector('#telephone').value

       console.log("telephone is " + telephone);

       const sid = document.querySelector('#sid').value

       console.log("sid is " + sid);

       

        // Get data from the form.
        const data = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
            address: event.target.address.value,
            telephone: event.target.telephone.value,
            sid: event.target.sid.value,

        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/register'


    
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
               
                    
                    
                    <Input id="firstname" size="md" placeholder="Medium" shadow={false} clearable bordered labelPlaceholder="firstname" status="secondary" color="secondary"  initialValue="" />                              
                    <Spacer y={1.5} />
                    
                    <Input id="lastname" size="md" placeholder="Medium" shadow={false} clearable bordered labelPlaceholder="lastname" status="secondary" color="secondary"  initialValue="" />
                    <Spacer y={1.5} />
                               
                    <Input id="email" size="md" placeholder="Medium" shadow={false} clearable bordered labelPlaceholder="email" color="secondary" status="secondary"  initialValue="" />
                    <Spacer y={1.5} />
                    
                    <Input id="address" size="md" placeholder="Medium" shadow={false} clearable bordered labelPlaceholder="address" color="secondary" status="secondary"  initialValue="" />
                    <Spacer y={1.5} />
                    
                    <Input id="telephone" size="md" placeholder="Medium" shadow={false} clearable bordered labelPlaceholder="telephone" color="secondary" status="secondary"  initialValue="" />
                    <Spacer y={1.5} />
                    
                    <Input id="sid" size="md" placeholder="Medium" shadow={false} clearable bordered labelPlaceholder="Student ID" status="secondary" color="secondary"  initialValue="" />
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