import React, { useState } from 'react'
import Checkbox from '../../shared/Checkbox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

function App() {
    const [lettuce, setLettuce] = useState(true)
    const [rice, setRice] = useState(false)

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    /*const [healthy, setHealthy] = useState(20)
    useEffect(function (){
        setTimeout(() => {
            setHealthy(80)
        }, 5000)
    },[])*/

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
            left={<div>
                produtos disponiveis:

                <Checkbox 
                    value={lettuce}
                    title="Alface"
                    onClick={() => setLettuce(!lettuce)}
                />
                <Checkbox 
                    value={rice}
                    title="Arroz"
                    onClick={() => setRice(!rice)}
                />
            </div>
            }
            middle={<div>
                sua lista de compras
            </div>
            }
            right={<div>
                estatisticas
                <LineChart color={colors[0]} title="Saudável" percentage={80}/>
                <LineChart color={colors[1]}title="Não tão saudável" percentage={20}/>
                <LineChart color={colors[2]} title="Limpeza" percentage={35}/>
                <LineChart color={colors[3]} title="Outros" percentage={15}/>
            </div>
            }
            />
        </Container>
    </Wrapper>
}

export default App