import React, {useState} from "react";
import {useData} from "./newsApi";
import AddNew from "./addNew";
import {connect} from "react-redux";
import {hideNewsAC, reverseAC} from "./newsReducer";




function UseData(props) {
    const [news] = useData(props.data)
    const mappedNews = news.map((news, index) => (index === 0)
        ? {...news, isOpened: true, id: index + 1}
        : {...news, isOpened: false, id: index + 1})


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)

    /*   const apiKey = '720d710a8ab94e45bb76d573235a5b88'
       useEffect(() => {
           async function fetchData() {
               setError('')

               const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`)
                   .then((res) => res.json())
                   .catch((error) => {
                       const msg = error.message
                       setError(msg)
                   })
               const news = response.articles
               const mappedNews = [...news].map((news, index) => (index === 0)
                   ? {...news, isOpened: true, id: index + 1}
                   : {...news, isOpened: false, id: index + 1})
               setData(mappedNews)
               setLoading(true)
           }

           fetchData()
       }, [])*/

    function hideShow(id, isOpened) {
/* setData([...data].map(el => el.id === id ? {...el, isOpened: !isOpened} : el))*/
        hideNewsAC(id, isOpened)
        console.log(id)
    }

    function onReverseHandler(isOpened) {
        const reversedNews = ([...data].reverse())
        reversedNews.map(el => el.isOpened !== isOpened)
        setData(reversedNews)
    }

    const onResetHandler = () => {
        setData(mappedNews)
    }

    const onShowNewsHandler = () => {
        setShow(!show)
        setData(mappedNews)
    }

    const searchNews = (event) => {
        const searchingElement = event.target.value
        const filteredNews = [...data].filter((val) => {
            return val.title.toLowerCase().includes(searchingElement.toLowerCase())
        })
        if (searchingElement === '') {
            setData([...data])
        } else {
            setData(filteredNews)
        }
    }

    return (
        <>
            {!show
                ? <button onClick={onShowNewsHandler}>Show News</button>
                : <div>
                    <AddNew addNew={(state) => setData([...data, state])}/>
                    <div className={''}>
                        <input placeholder={'Search'} type={'text'} onChange={searchNews}/>
                        <button onClick={onReverseHandler}>Reverse</button>
                    </div>
                    <div>
                        <button onClick={onResetHandler}>Reset All Settings</button>
                        {data.map(el => (
                            <ul key={el.id}>
                                <ul>{el.title}</ul>
                                <img alt={'image'} width={'200'} height={'200'} src={el.urlToImage}
                                     className={'displayed'}/>
                                {el.isOpened && <ul>{el.description}</ul>}
                                <button className={'btn2'}
                                        onClick={() => hideShow(el.id, el.isOpened)}>Hide/Show
                                </button>

                            </ul>
                        ))}
                    </div>
                </div>}

        </>
    )
}


const mapStateToProps = (state)=> ( {
    dataStore: state.newsStore
})


export default connect(
    mapStateToProps,
    {hideNewsAC, reverseAC}
)(UseData)