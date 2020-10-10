import React from 'react';
import './App.css';
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from "./Components/PostList";
import PostCreate from "./Components/PostCreate";
import PostEdit from "./Components/PostEdit";

function App() {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000/')}>
            <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}/>
        </Admin>
    );
}

export default App;
