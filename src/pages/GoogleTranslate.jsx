import React from 'react';
import axios from 'axios';
import './dropdown.css';
import { useState } from 'react';
import countrytData from '../countrytData.json'
import Header from './Header';

const GoogleTranslate = () => {

    const [value, setValue] = useState('');
    const [data, setData] = useState('')
    const [translated, setTranslated] = useState('')
    const [forTranslation, setForTranslation] = useState('')
    
    const EnteredValue = (e) => {
        const value = e.target.value;
        setForTranslation(value);
    }
    const handleSearch = () => {
        getData(forTranslation);
    }
    const getData = async (forTranslation) => {
        axios.get(`https://api.mymemory.translated.net/get?q=${forTranslation}&langpair=${value}|${data}`)
            .then(res => {
                setTranslated(() => res.data.responseData.translatedText);
            }).catch(err => {
                console.log('error')
            })
    }
    return (
        <div>
            <Header/>
            <div className='dropdown-style'>
                <label>
                Translator
                      <hr></hr>
                    <h1>{value}</h1>
                    <select style={{ width: '250px' }} onChange={(e)=>setValue(e.target.value)}>
                        {countrytData.map((to) => (
                            <option value={to.code}>{to.name}</option>
                        ))}
                    </select> <br></br>
                    <textarea className='text-style' rows="10" cols="30" onChange={EnteredValue}></textarea>
                    <br />
                    <button type='submit' onClick={() => handleSearch()}>Translate</button>
                    <br /><br></br>
                    <h1>{data}</h1>
                    <select style={{ width: '250px' }} onChange={(e)=>setData(e.target.value)}>
                        {countrytData.map((option) => (
                            <option value={option.code}>{option.name}</option>
                        ))}
                    </select> <br></br>
                    <textarea className='text-style' rows="10" cols="30" value= {translated} />
                </label>
            </div>
        </div>
    );
};
export default GoogleTranslate;