import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App (){
    return (
    <div>
        <div>
            Person Digital Asistant 
        </div>
            <img src = {AlexaImage} />
            <img src = {CortanaImage} />
            <ProfileCard title = "Alexa" handle ="@alexa99"/>
            <ProfileCard title = "Bulexa" handle ="@bulexa99"/>
            <ProfileCard title = "Culexa" handle ="@Culelexa99"/>
        
    </div>
    );
}

export default App;