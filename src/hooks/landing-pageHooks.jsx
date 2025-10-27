import { useState } from "react";

export function landingPageHooks() {
    const [lname, setLname] = useState('')
    const [lAlert, setLAlert] = useState('Enter Your Name To Continue:')
    return {
        lname, setLname,
        lAlert, setLAlert
    }
}