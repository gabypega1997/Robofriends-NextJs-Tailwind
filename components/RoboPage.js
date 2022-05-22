import 'tailwindcss/tailwind.css';


const RoboPage = (props) => {
    return(
        <div >
            <h1 className='text-center m-10 text-3xl text-blue-600 font-bold'>{props.robot.name}</h1>
            <img  
            className='
            mx-auto
            '
            src={`https://robohash.org/${props.robot.name}.png`} width="300" height={300} ></img>
            <div className='flex justify-center gap-5'>
                <div className=''>
                    <h1 className='text-xl font-bold'>About</h1>
                    <h4>Username: {props.robot.username}</h4>
                    <h5>Email: {props.robot.email}</h5>
                    <h5>Address: {props.robot.address.street} , {props.robot.address.suite} , {props.robot.address.city}</h5>
                </div>
                
                <div >
                    <h1 className='text-xl font-bold'> Contact</h1>
                    <h4>Phone: {props.robot.phone}</h4>
                    <h4>Website: {props.robot.website}</h4>
                    <h4>Company: {props.robot.company.name}</h4>
                </div>
            </div>
            
        </div>
    )

}

export default RoboPage;