import React, { useState, useEffect } from "react";
import Axios from "axios";
import '../styles/PortfolioStyles.scss';
import '../App.scss';
import All from '../components/Repos';
import Select from 'react-select'




export default function Portfolio() {
    const data = [
        {
            value: 'Java',
            label: "Java"
        },
        {
            value: 'JavaScript',
            label: "JavaScript"
        },
        {
            value: 'HTML',
            label: "HTML"
        },
    ];

    // set value for default selection
    const [selectedValue, setSelectedValue] = useState('JavaScript');
    const [repos, setRepos] = useState([]);
    // const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        getXs();
    }, []);

    const getXs = async () => {
        await Axios.get("https://api.github.com/users/OlSavMe/repos").then(
            response => {
                setRepos(response.data);
                // setFiltered(repos.filter(repo => repo.language === `${selectedValue}`));

            }
        );
    };

    const forksout = repos.filter(repo => repo.fork == false);

    // console.log(filtered);
    console.log(`${selectedValue}`);
    const filtered = forksout.filter(repo => repo.language === `${selectedValue}`);
    console.log(filtered);



    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedValue(e.value);
    }






    return (
        <div className='portfolio'>
            <div className='container'>
                <div className='repos'>
                    <h1>GiHub</h1>
                    <Select
                        placeholder="Select Option"
                        value={data.filter(obj => obj.value === selectedValue)} // set selected value
                        options={data} // set list of the data
                        onChange={handleChange} // assign onChange function
                    />

                    <ul>
                        {filtered.map((repo) =>
                            <li key={repo.id}>
                                <a href={repo.html_url} target="_blank"> {repo.name}</a>
                                <p>{repo.description}</p>
                            </li>
                        )
                        }
                    </ul>
                </div >
            </div >
        </div>

    );
}
