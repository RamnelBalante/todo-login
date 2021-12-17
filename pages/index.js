import Link from 'next/link'
import styled from 'styled-components';
import {Brand} from 'components/brand'
import { Button } from 'ui/buttons';

const LinksContainer = styled.div`
 max-width: 320px;
margin: 2rem auto;
display:flex;
flex-direction: column;
justify-content: center;
button{
  margin-bottom: 1rem;
  font-size:1.125rem;
}
  
`;

const PageHeader = styled.header`
  text-align: center;
  color:#222b37;
  h1 {
      font-weight: 600;
      font-size: 4rem;
      margin-bottom: -1rem;
      color: #ed4747;
  }
  p{
    margin:0.5rem;

  }
  .brand{
    margin: 2rem auto;
    margin-bottom: 0;
     h2{
       display: none;
     }
     svg {
        width: 10rem;
     }
  }
  li{
    color:#646f79;
        font-weight: 200;
        font-size: 1.5rem;
      }

`

 

 
function index(props) {
 
  return (
    <>
  
     <PageHeader>
    <Brand className="brand" width="148" size="5rem"   display="column"  />      
        <h1>listadoodle</h1>
         <p>official task management tool for tools</p>
         <LinksContainer>
         <Link   href="/signup">
             <Button bgcolor="#0fa9ec" color="#ffffff">new user account setup</Button>
        </Link>
         <Link href="/login">
           <Button bgcolor="#0071e3" color="white">current user account login</Button>
         </Link>
        </LinksContainer>
            <ul>              
              <li>No Credit Card Required</li>
              <li>Upgrade your account at anytime</li>
            </ul>
     </PageHeader>
     
    </>
  );
}

export default index;