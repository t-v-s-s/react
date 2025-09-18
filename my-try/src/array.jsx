import React from "react";

function Array() {
    const userName = ["Tanvi", "Sam", "John", "Smith"];

    const userDetails = [
        {
            name: "Tanvi",
            age: 20,
            email: "Tanci@hsajbdhfb.com",
            id: 1
        },
        {
            name: "Sam",
            age: 22,
            email: "samanci@hsajehfjkb.com",
            id: 2
        },
        {
            name: "John",
            age: 21,
            email: "johni@hsetyrtidhfb.com",
            id: 3
        },
        {
            name: "Smith",
            age: 26,
            email: "smith@hsajbvbvbxnfb.com",
            id: 4
        }
    ];

    const collegeData = ["IIT", "NIT", "BITS", "IIIT"];

    return (
        <div>
            <h1>Loop in JSX with Map function</h1>

            <h2>User Table</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetails.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>College List</h2>
            <ul>
                {collegeData.map((college, index) => (
                    <li key={index}>{college}</li>
                ))}
            </ul>
        </div>
    );
}

export default Array;
