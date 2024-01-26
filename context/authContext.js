import { ironOptions } from "@/lib/ironOptions";
import { withIronSessionSsr } from "iron-session/next";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const getUserFromSession = withIronSessionSsr(async ({ req }) => {
    if (req.session.user === undefined) {
        return null;
    } else {
        const user = req.session.user;
        return user;
    }
}, ironOptions);

export function AuthProvider({ children, ssrUser, ...props }) {
    const [user, setUser] = useState(ssrUser);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [skills,setSkills] = useState('');
    const [minBudget,setMinBudget] = useState(0);
    const [maxBudget,setMaxBudget] = useState(0);
    const [experience,setExperience] = useState('');
    const [location,setLocation] = useState('');

    const auth = {
        user,
        setUser,
        title,
        setTitle,
        description,
        setDescription,
        skills,
        setSkills,
        minBudget,
        setMinBudget,
        maxBudget,
        setMaxBudget,
        experience,
        setExperience,
        location,
        setLocation,
        ...props,
    }
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}