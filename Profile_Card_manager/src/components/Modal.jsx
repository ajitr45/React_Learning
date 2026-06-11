// Modal Parent se data receive kar raha hai
function Modal({

    // Selected user object
    selectedUser,

    // Parent ka state update function
    setSelectedUser

}) {

    // Agar selectedUser null hai to kuch render mat karo
    if (!selectedUser) {

        return null;

    }

    return (

        <div className="modal">

            <h2>{selectedUser.name}</h2>

            <p>{selectedUser.role}</p>

            <h3>Skills</h3>

            <ul>

                {/* Skills array ko loop kar rahe hain */}
                {selectedUser.skills.map((skill, index) => (

                    <li key={index}>

                        {skill}

                    </li>

                ))}

            </ul>

            {/* Close Button */}
            <button

                onClick={() => setSelectedUser(null)}

            >

                Close

            </button>

        </div>

    );

}

export default Modal;