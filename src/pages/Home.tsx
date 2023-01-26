import React from "react";
import { sBase } from "../config/SupaClient";
import { useQuery } from "@tanstack/react-query";
import { IFriend } from "../models/Interfaces";
import { Card } from "../components/Card";

export const Home = (): JSX.Element => {
    const sQuery = async () => {
        const { error, data } = await sBase
            .from("friends")
            .select();
        if (error) throw error.message;
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
                    <Card 
                        key={friend.id} 
                        friend={friend} 
                    />
                ))}
            </section>
        </React.Fragment>
    );
};


