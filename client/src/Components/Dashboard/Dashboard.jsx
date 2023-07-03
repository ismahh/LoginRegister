import React from "react";

const Dashboard = () => {
    return(
        <div className='dashboard flex'>
            <div className="dashboardContainer flex">
                This is Dashboard Page
                <a href="/Log Out">To Login</a>
                {/* <Sidebar/>
                <Body/> */}
            </div>
            {/* This is Dashboard Page
            <a href="/Log Out">To Login</a> */}
        </div>
    )
}

export default Dashboard