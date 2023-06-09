import {useRouter} from 'next/router'

import { NextUIProvider } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";


export default function Home({data}) {

  async function handleSubmit(event) {
    alert("The form was submitted");
       event.preventDefault();
    
       const name = document.querySelector('#username').value

       console.log("username is " + name);

       if(!name){
        alert("Please enter a username to login");
        return false;
       }

       if(name.length < 3){
        alert("Username is to short..")
        return false;
       }

       const pass = document.querySelector('#password').value

       console.log("password is " + pass);

      
       const data = {
        username: event.target.username.value,
        password: event.target.password.value,
      }
   
      const JSONdata = JSON.stringify(data)
      const endpoint = '/api/login'

      const options = {
        
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSONdata,
      }
      
      const response = await fetch(endpoint, options)

      const result = await response.json()
      
      alert(`server result: ${result}`)

      router.push('./listAllCourses')

  }
  
  const router = useRouter()

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

    <NextUIProvider>
        
        <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
      <a href="https://imgs.search.brave.com/mvGTOOFdWxgNV8NuDmUz3gdV7Iq--QBHpfwr1p3VFGE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzYw/MC8yNzUvb3JpZ2lu/YWwvdGVjaG5vbG9n/eS1sb2dvLWljb24t/dmVjdG9ycy5qcGcm">
        <img src="https://imgs.search.brave.com/mvGTOOFdWxgNV8NuDmUz3gdV7Iq--QBHpfwr1p3VFGE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzYw/MC8yNzUvb3JpZ2lu/YWwvdGVjaG5vbG9n/eS1sb2dvLWljb24t/dmVjdG9ycy5qcGc" alt="Example Image" />
      </a>
    </Grid>
      
      <Grid xs={4}>

      <Card css={{ h: "$240", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            Login
            <form onSubmit={handleSubmit}>
            <Spacer y={0.5} />

            <Input minLength ="3" maxLength={20}  id="username" clearable bordered labelPlaceholder="Username" initialValue="" />
            <Spacer y={2} />

            <Input minLength ="3" maxLength={30} id="password" clearable bordered labelPlaceholder="Password" initialValue="" />
            <Spacer y={2} />

              <Button type="submit" color="secondary" auto>
                Login
              </Button>
              <Spacer x={0.5} />

              <Button auto flat as={Link} isActive href="/register">
            Register
          </Button>

            </form>

          </Text>
        </Card.Body>
      </Card>

      </Grid>
      <Grid xs={4}>
      <a href="https://imgs.search.brave.com/mvGTOOFdWxgNV8NuDmUz3gdV7Iq--QBHpfwr1p3VFGE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzYw/MC8yNzUvb3JpZ2lu/YWwvdGVjaG5vbG9n/eS1sb2dvLWljb24t/dmVjdG9ycy5qcGcm">
        <img src="https://imgs.search.brave.com/mvGTOOFdWxgNV8NuDmUz3gdV7Iq--QBHpfwr1p3VFGE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzYw/MC8yNzUvb3JpZ2lu/YWwvdGVjaG5vbG9n/eS1sb2dvLWljb24t/dmVjdG9ycy5qcGc" alt="Example Image" />
      </a>
    </Grid>
    </Grid.Container>

    </NextUIProvider>
    
  )
}


