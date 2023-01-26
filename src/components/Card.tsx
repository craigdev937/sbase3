import React from "react";
import { IFriend } from "../models/Interfaces";

type FRI = {
    friend: IFriend
};

export const Card = ({friend}: FRI): JSX.Element => {
    return (
        <React.Fragment>
            <main className="card">
                <aside key={friend.id}>
                    <p>{friend.first} {friend.last}</p>
                    <p>Age: {friend.age}</p>
                    <p>Info: {friend.info}</p>
                </aside>
            </main>
        </React.Fragment>
    );
};


