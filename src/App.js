import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID="89b575f8-5ba3-4389-ab66-6db814d9a228"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;