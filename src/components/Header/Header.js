import React,{useEffect,useState} from 'react';
import {apiAction, searchApiAction} from '../../redux/actions/apiActions';
import './Header.css';
import { useDispatch,useSelector } from 'react-redux';
import Body from '../Body/Body';


const Header = () => {
    const info=useSelector(state=>state.mainAPI.data)
    const [search,setSearch] = useState("")
    console.log(info)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(apiAction())
    },[])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(searchApiAction(search))
    }
    return(
        <div>
        <div className='header'>
            <div className='header-content maxwidth'>
                <h1 className='logo'><i className="fa-solid fa-clapperboard"></i>MovieSearch</h1>
                <div className='searchInput'>
                    <form onSubmit={submitHandler}>
                       <input type="text" placeholder='Search Movie Here' onChange={(e)=>setSearch(e.target.value)}/>
                       <button type='submit'><i className="fa-solid fa-magnifying-glass"></i>Search</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='movieContainer'>
        {
            info.length>0 && info.map((item)=>
            <Body key={item.id} {...item}/>)
        }
        </div>
        </div>
    )
}

export default Header