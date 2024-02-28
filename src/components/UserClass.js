import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy",
                company: "Dummy",                
            },
        };     
    };

    async componentDidMount() {        
        const data = await fetch("https://api.github.com/users/sswapnasprl");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        this.timer = setInterval(() => {
            console.log('Component Did Update Set Interval');
        }, 1000);
        //console.log('component did update');
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        //console.log('component will unmount');
    }
    
    render() {
        const {name, location, company, avatar_url} = this.state.userInfo; 

        return(
            <div className = "user-card">
                <figure><img src={avatar_url}/></figure>
                <address>
                    <strong>👨‍🎓 Name: {name} </strong> 
                    <strong>🎯 Location:  {location} </strong>
                    <strong>💼 Company: {company} </strong>  
                </address>
            </div>
        )
    }
}

export default UserClass;