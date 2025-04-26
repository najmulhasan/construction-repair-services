import { useEffect, useState } from "react";

const useCredential = () => {

    const id = localStorage.getItem('uId')
    const [user, setUser] = useState({});
    const [categories, setCategories] = useState([])
    const [services, setServices] = useState([])
    const [service, setService] = useState([])

    // getting userInfo from localStorage id and backend API
    const userData = () => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/user/${id}`)
                const result = await response.json()
                setUser(result)
            } catch (error) {
                fetchData();
            }
        };
        fetchData();
    }

    // persist login
    useEffect(() => {
        if (id) {
            userData()
        } else {
            setUser({})
        }
        //eslint-disable-next-line
    }, [])

    // email
    const logOut = () => {
        localStorage.removeItem('uId')
        setUser({})
    }

    // Fetch Categories
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/categories`)
                const result = await response.json()
                setCategories(result)
            } catch (error) {
                fetchData();
            }
        };
        fetchData();
    }, [])

    // Fetch Services
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/services`)
                const result = await response.json()
                setServices(result)
            } catch (error) {
                fetchData();
            }
        };
        fetchData();
    }, [])


    return {
        user,
        setUser,
        logOut,
        categories,
        setCategories,
        services, 
        setServices,
        service, 
        setService
    }
};

export default useCredential;