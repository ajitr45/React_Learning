// Reusable Button import
import Button from "./Button";

// CardList se props receive kar rahe hain
function ProfileCard({

    user,

    setSelectedUser

}) {

    // Event Handler
    function handleViewProfile() {

        // Parent State update hogi
        setSelectedUser(user);

    }

    return (

        <div className="card">

            <h2>{user.name}</h2>

            <p>{user.role}</p>

            {/* Function reference pass kar rahe hain */}
            <Button onClick={handleViewProfile}>

                View Profile

            </Button>

        </div>

    );

}

export default ProfileCard;