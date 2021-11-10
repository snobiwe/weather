import React, {memo, useCallback, useEffect, useState} from 'react';
import './page.css';
import ApiService from "../../lib/Api";
import Card from '../../components/card/card';
import plant from '../../images/plant.png';




const Page = memo(({title, subtitle, button, card}) => {
    // const api = new ApiService() // FIXME: Мы избавимся
    // const [slack, setSlack] = useState({});

    // const getSlack = useCallback(async () => {
    //     try {
    //         const {data} = await api.getSlack();
    //         setSlack(data)
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }, [])

    // console.log(slack)

    // useEffect(() => {
    //     (async () => {
    //        await getSlack()
    //     })()
    // }, [])

    const api = new ApiService()
    const [pokemon, setPokemon] = useState({});

    const getPokemon = useCallback(async() => {
        try {
            const {data} = await api.getPokemon()
            setPokemon(data)
        } catch (e) {
            console.log(e)
        }
    }, [])

    console.log(pokemon);

    useEffect(() => {
        (async() => {
            await getPokemon()
        })()
    }, [])

    return (
        <div className="page">

        <div className="fields">

            <div className="field">
            <p className="field_name">Articles</p>
            <select className="select">
                <option>For beginners</option>
            </select>
            </div>

            <div className="field">
            <p className="field_name">Read</p>
            <select className="select">
                <option>All articles</option>
            </select>
            </div>

            <div className="field">
            <p className="field_name">Complexity</p>
            <select className="select select_last">
                <option>Any</option>
            </select>
            </div>
            <div className="button">{button}</div>

        </div>

        <div className="content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>

        <ul className="container">
        <li className="card">{<Card plant={plant} text={pokemon.name}/>}</li>
        <li className="card">{<Card plant={plant} text={pokemon.name}/>}</li>
        <li className="card">{<Card plant={plant} text={pokemon.natural_gift_type.name}/>}</li>
        </ul>

        </div>

        </div>
    )
})

export default Page;

// <Page button={<Button text={"click please"} />} title={"Do you love plants"} subtitle={"We can tell you so much about plants that you will begin to love them. " +
    // "For starters, here are general articles about plants, their types, and similar information"} card={<Card plant={plant} text={"test kek lol cheburek"} />} />,
