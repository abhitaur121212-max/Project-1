function Dashboard(onLogout){
    return (
        <div style={{padding:"20px" }}>
        <h1>Welcome user</h1>
        <p> you are log in </p>
        <botton onClick={onLogout}style={{marginTop:"20px",}}>Logout</botton>
        </div>
    )

}
export default Dashboard;