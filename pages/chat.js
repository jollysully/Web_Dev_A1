import { Grid, Card, Text, Spacer, Textarea, Input, Button } from "@nextui-org/react";
import Link from 'next/link';
import { NextUIProvider } from '@nextui-org/react';


export default function chat({ data }) {

async function handleSubmit(event) {
    
event.preventDefault();

const data = {
    username: event.target.username.value,
    passwcommentord: event.target.comment.value,
  }

   // Send the data to the server in JSON format.
   const JSONdata = JSON.stringify(data)

   alert(JSONdata);
  
   // API endpoint where we send form data.
   const endpoint = '/api/saveChat'



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
   
   alert("response from server" + result)

   


    }

  

  return (

    <NextUIProvider>
    

        <Card css={{ width: '100%', h: "$24", $$cardColor: '$colors$primary' }}>
            <Card.Body>
            <Text h6 size={15} color="white" css={{ mt: 0 }}>
                Top
            </Text>
            </Card.Body>
        </Card>

        <Spacer y={1.5} />


        <Card css={{ h: "$100", $$cardColor: '$colors$green300' }}>
        <Card.Body>

            <Textarea
            label="Chat Log"
            placeholder=""
            />

            <Spacer y={1.5} />

            <form onSubmit={handleSubmit}>
            <Spacer y={0.5} />

            <Input  id="username" placeholder="" labelPlaceholder="" width="300px" initialValue="" />
            <Spacer y={1.5} />
            Please enter your message...

            <Input id="comment"  placeholder="" labelPlaceholder="" width="300px" initialValue="" />
            <Spacer y={1.5} />
              <Button type="submit" size="xs" width="300px" >Send</Button>

            </form>



        </Card.Body>




        </Card>



        </NextUIProvider>


        

      



    

    )
 }



export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/listCourses`)
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}