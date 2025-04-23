import { Canvas} from '@react-three/fiber';
import Scene from './components/Scene'
import './App.css'

function App() {
    return(
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <div className="overlay-text">
                <h1>¡Juan David Guarnizo!</h1>
            </div>
            <Canvas style={{ background: '#121212', width: '100%', height: '100%' }}>
                <Scene />
            </Canvas>
        </div>
    );
}

export default App
