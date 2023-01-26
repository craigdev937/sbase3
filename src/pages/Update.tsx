import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Update = (): JSX.Element => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const updateID = id !== undefined ? String(id) : "";

    return (
        <React.Fragment>
            <h1>Update</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum id distinctio explicabo velit iure aliquam quis magnam ad, dicta perferendis perspiciatis, veritatis quo, quia laudantium alias debitis vel ipsum dolor?</p>
        </React.Fragment>
    );
};


