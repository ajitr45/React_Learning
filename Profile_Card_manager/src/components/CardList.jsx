// ProfileCard Component import kar rahe hain
import ProfileCard from "./ProfileCard";

// Parent(App) se users aur setSelectedUser receive kar rahe hain
function CardList({

    users,

    setSelectedUser

}) {

    return (

        <div className="card-list">

            {/* users array ko loop kar rahe hain */}
            {users.map((user) => (

                // Har object ke liye ek ProfileCard create hoga
                <ProfileCard

                    // React ko unique element identify karne ke liye key chahiye
                    key={user.id}

                    // User object pass kar rahe hain
                    user={user}

                    // Function prop pass kar rahe hain
                    setSelectedUser={setSelectedUser}

                />

            ))}

        </div>

    );

}

export default CardList;