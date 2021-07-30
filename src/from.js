import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './from.css';
class formApp extends Component {
    constructor(){
        super();
        console.log("hi")
        this.state = {
            data : [
                {
                    title: "FREE",
                    price: "$0/month",
                    feature: [
                        {
                           name:"Single User",
                           access: "true"
                        },
                        {  
                           name:"5GB Storage",
                           access: "true"
                        },  
                        {   
                            name: "Unlimited Public Projects",
                            access: "true"
                        },    
                           
                        {  
                            name: "Community Access",
                            access: "true"
                        },    
                        {  
                             name: "Unlimited Private Projects",
                             access: "false"
                        },   
                        { 
                           name: "Dedicated Phone Support",
                           access: "false"

                        },  
                        {
                           name: "Free Subdomain",
                           access: "false"
                        } ,  
                        {   name: "Monthly Status Reports",
                        access: "false"
                        }    
                        
                    ]
                },
                {
                    title: "PLUS",
                    price: "$9/month",
                    feature: [
                        {
                           name:"5 User",
                           access: "true"
                        },
                        {  
                           name:"5GB Storage",
                           access: "true"
                        },  
                        {   
                            name: "Unlimited Public Projects",
                            access: "true"
                        },    
                           
                        {  
                            name: "Community Access",
                            access: "true"
                        },    
                        {  
                             name: "Unlimited Private Projects",
                             access: "true"
                        },   
                        { 
                           name: "Dedicated Phone Support",
                           access: "true"
                        },  
                        {
                           name: "Free Subdomain",
                           access: "true"
                        } ,  
                        {   name: "Monthly Status Reports",
                            access: "false"
                        }    
                        
                    ]
                },
                {
                    title: "PRO",
                    price: "$49/month",
                    feature: [
                        {
                           name:"Unlimited User",
                           access: "true"
                        },
                        {  
                           name:"5GB Storage",
                           access: "true"
                        },  
                        {   
                            name: "Unlimited Public Projects",
                            access: "true"
                        },    
                           
                        {  
                            name: "Community Access",
                            access: "true" 
                        },    
                        {  
                             name: "Unlimited Private Projects",
                             access: "true"
                        },   
                        { 
                           name: "Dedicated Phone Support",
                           access: "true"
                        },  
                        {
                           name: "Unlimited Free Subdomain",
                           access: "true"
                        } ,  
                        {   name: "Monthly Status Reports",
                            access: "true"
                        }    
                        
                    ]
                }
            ]
        }
    }
    render () {
        return (
            <>     
            <div style={{background:"#B0E0E6"}}>
               <div class="row mute" >
                     {this.state.data.map(({title,price,feature})=> 
                       <div class="col" style={{textAlign :"center", border:"1px solid #87CEEB"}}>
                            <span style={{fontWeight:"bold"}}>{title}</span>
                            <br />
                            <span style={{fontSize:"40px"}}>{price}</span>
                        <ul class="fa-ul">     
                             {feature.filter((e)=> e.access == "true").map((e)=> <li key={e} class="inn" style={{fontWeight:"bold"}}><span class="fa-li" style={{color:"green"}}><i class="fa fa-check"></i></span>{e.name}</li>)}
                             {feature.filter((e)=> e.access != "true").map((e)=> <li key={e} class="inn"><span class="fa-li" style={{color:"red"}}><i class="fa fa-times"></i></span>{e.name}</li>)}
                          </ul>
                          <Button class="but">Button</Button>
                        </div>
                     )}
   
    </div>
    </div>
            </>
        )
    
        }
}
export default formApp;
