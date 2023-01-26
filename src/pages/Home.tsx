import React from "react";
import { sBase } from "../config/SupaClient";
import { useQuery } from "@tanstack/react-query";
import { IFriend } from "../models/Interfaces";

export const Home = (): JSX.Element => {
    const [orderBy, setOrderBy] = React.useState("created_at");

    const sQuery = async () => {
        const { error, data } = await sBase
            .from("friends")
            .select()
            .order(orderBy, { ascending: true });
        if (error) throw error;
        return data;
    };

    const { isLoading, error, data } = 
        useQuery<IFriend[]>(["fetchFriends"], sQuery);

    if (isLoading) <h1>Loading...</h1>;
    if (error instanceof Error) <h1>{error.message}</h1>
    
    return (
        <React.Fragment>
            <section className="page home">
                {data?.map((friend) => (
                    <aside key={friend.id}>
                        <p>{friend.first} {friend.last}</p>
                        <p>Age: {friend.age}</p>
                        <p>Info: {friend.info}</p>
                    </aside>
                ))}
            </section>
        </React.Fragment>
    );
};


