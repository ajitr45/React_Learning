import { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import Modal from "./components/Modal";

import "./App.css";

export default function App() {

    // Selected User State
    const [selectedUser, setSelectedUser] = useState(null);

    // Search State
    const [search, setSearch] = useState("");

    // Team Data
    const users = [

        {
            id: 1,
            name: "Ajit Kumar",
            role: "Frontend Developer",
            skills: ["React", "JavaScript", "CSS"]
        },

        {
            id: 2,
            name: "Rahul Kumar",
            role: "Backend Developer",
            skills: ["Node", "Express", "MongoDB"]
        },

        {
            id: 3,
            name: "Aman Kumar",
            role: "UI Designer",
            skills: ["Figma", "Photoshop"]
        }

    ];

    // Search Filter
    const filteredUsers = users.filter((user) => {

        return user.name
            .toLowerCase()
            .includes(search.toLowerCase());

    });

    return (

        <div className="container">

            <Header />

            {

                selectedUser ? (

                    <Modal

                        selectedUser={selectedUser}

                        setSelectedUser={setSelectedUser}

                    />

                ) : (

                    <>

                        <SearchBar

                            search={search}

                            setSearch={setSearch}

                        />

                        <CardList

                            users={filteredUsers}

                            setSelectedUser={setSelectedUser}

                        />

                    </>

                )

            }

        </div>

    );

}