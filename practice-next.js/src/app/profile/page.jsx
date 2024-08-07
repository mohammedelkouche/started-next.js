import userdata from '../../data/users.json';

export default function profile() {
    const userActive = userdata.filter((user) => user.active);
    return( 
        <div>
            <h1> this is the profile</h1>
            <div>
                {
                    userActive.map( user =>(
                            
                            // <p> {user.id}</p>
                            <p> {user.name}</p>
                    ))
                }
            </div>
        </div> 
    );
}